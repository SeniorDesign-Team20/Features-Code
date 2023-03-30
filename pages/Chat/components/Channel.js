import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Button } from 'react-native';
import firebase from 'firebase/compat/app';
import Message from './Message';

const Channel = ({ user = null, db = null }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const { uid, displayName, photoURL } = user;

    useEffect(() => {
        if (db) {
            const unsubscribe = db
                .collection('messages')
                .orderBy('createdAt')
                .limit(100)
                .onSnapshot((querySnapshot) => {
                    //get all the documents from collections with IDs
                    const data = querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }));
                    //update state
                    setMessages(data);
                });

            //Detach listener
            return unsubscribe;
        }
    }, [db]);

    const handleOnChange = (text) => {
        setNewMessage(text);
    };

    const handleOnSubmit = () => {
        if (db && newMessage) {
            db.collection('messages').add({
                text: newMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL,
            });
            setNewMessage('');
        }
    };

    const renderMessage = ({ item }) => {
        return <Message {...item} />;
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id}
                
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                    style={{ flex: 1, height: 40, marginRight: 10, borderWidth: 1 }}
                    value={newMessage}
                    onChangeText={handleOnChange}
                    placeholder="Type your message here ..."
                />
                <Button title="Send" onPress={handleOnSubmit} disabled={!newMessage} />
            </View>
        </View>
    );
};

export default Channel;

