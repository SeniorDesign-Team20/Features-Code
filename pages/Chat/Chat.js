import {Helmet} from "react-helmet";
import React, { useState, useEffect } from 'react';
import { View, Text, } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Button from './components/Button';
import Channel from './components/Channel';
import { auth, db } from '../firebase';
import {include_googleLogin} from './../../selectedFeatures'
import {company_name} from './../../files_to_modify/company_info'
import {app_id} from "./../../layout/app_identifier"
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

require('firebase/auth');

function Chat(){
    const [user, setUser] = useState(() => auth.currentUser);
    const [initializing, setInitializing] = useState(true);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                setUser(null);
            }
            if (initializing) {
                setInitializing(false);
            }
        });
        return unsubscribe;
    }, []);

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.useDeviceLanguage();
        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.error(error);
        }
    };

    const signOut = async () => {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSend = async () => {
        const { uid, photoURL } = auth.currentUser;
        await db.collection(`${company_name}-${app_id}`).add({
            text: newMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        });
        setNewMessage('');
    };

    const renderMessage = ({ item }) => {
        return (
            <View style={{ padding: 8 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.user}</Text>
                <Text>{item.text}</Text>
            </View>
        );
    };

    useEffect(() => {
        const unsubscribe = db
            .collection(`${company_name}-${app_id}`)
            .orderBy('createdAt', 'asc')//prints the messages in ascending order
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data };
                });
                setMessages(messages);
            });
        return unsubscribe;
    }, []);

    if (initializing) return <View><Text>Loading ...</Text></View>;

    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Chat</title>
            </Helmet>
            <div className="card">
                <div className="card-header">
                    Chat With Others Online!
                </div>
                <div className="card-body">
                    {user && <Channel user={user} db={db} />}
                    {user ? (!include_googleLogin && <Button onPress={signOut}>Sign out</Button>) : (<Button onPress={signInWithGoogle}>Sign in!</Button>)}
                </div>
            </div>
        </div>
    );
}

export default Chat;