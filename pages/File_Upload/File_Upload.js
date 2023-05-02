import {Helmet} from "react-helmet";
import React, { useState , useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {ref, uploadBytes, getDownloadURL, listAll,} from "firebase/storage"
import { auth, storage } from "./../firebase";
import firebase from 'firebase/compat/app';
import { v4 } from "uuid";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {include_googleLogin} from './../../selectedFeatures'
import {company_name} from './../../files_to_modify/company_info'
import {app_id} from "./../../layout/app_identifier"

function File_Upload(){
    const [user, setUser] = useState(() => auth.currentUser);
    const [initializing, setInitializing] = useState(true);

    const Button = ({ onPress = null, children = null }) => (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );

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
        setImageUrls([])
    };

    const[image, setImage]= useState("");
    const [message, setMessage] = useState("");
    const [imageUrls, setImageUrls] = useState([]);
    //const [imagesListRef, setImagesListRef] = user ? useState(ref(storage, `images/${user.email}/`)) : useState(ref(storage, `images/`));
    const [imagesListRef, setImagesListRef] = useState(ref(storage, `${company_name}-${app_id}/`));

    useEffect(() => {
        if (user) {
          const imagesRef = ref(storage, `${company_name}-${app_id}/${user.email}/`);
          setImagesListRef(imagesRef);
        }
        console.log('a')
      }, [user]);

    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                console.log(imageUrls)
                });
            });
        });
        console.log('b')
    }, [imagesListRef]);
    //const imagesListRef = ref(storage, `images/${user.email}/`);
    const submitData = () =>{
        if (image == "") return;

        const storageRef = ref(storage, `${company_name}-${app_id}/${user.email}/${image.name}`);
        uploadBytes(storageRef, image).then((snapshot)=>{
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            });
            console.log('uploaded a blob or file!');
            console.log(imagesListRef)
            setMessage("Congrats, you have uploaded an image to firebase!");
        }). catch((error)=>{
            console.log(error.message);
        });
    }

    const handleChange = (e)=> {
        if(e.target.files[0]){
        setImage(e.target.files[0]);
        }
    };

    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Upload File</title>
            </Helmet>

            <section className="section bg-c-light border-bottom">
                <div className='container'>
                    <h3 className="main-heading">File Upload</h3>
                    <div className="underline mx-auto"></div>
                    <div className="card">
                        <p className="card-text text-white bg-warning">You can upload files here. If you are signed into the app, the files you uploaded will display below (images only).</p>
                        {user ? (!include_googleLogin && <div><Button onPress={signOut}>Sign out</Button><p>User: {user.email}</p></div>) : (<Button onPress={signInWithGoogle}>Sign in!</Button>)}
                    </div>
                    {user && <div className="card">
                    <View style={styles.container}>

                        <input type = "file" onChange={handleChange} style = {styles.input}/>

                        <TouchableOpacity style={styles.button} onPress={submitData}>
                            <Text style={styles.buttonText}>Upload</Text>
                        </TouchableOpacity>

                        <Text style={styles.message}>{message}</Text>
                    </View>
                    </div>}
                    {user && <div className="card">
                        <p className="card-text">Your photos: (files you uploaded which are not image will not render properly)</p>
                        {imageUrls.map((url) => {
                            return <img src={url} style={styles.images} />;
                        })}
                    </div>}
                </div>
            </section>
        </div>
    );
}

export default File_Upload;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    button: {
      backgroundColor: '#0077c2',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    images: {
        margin: 10,
        minHeight: 300,
        minWidth: 300,
        maxHeight: 500,
        maxWidth: 500,
        alignItems: "center",
        justifyContent: "center"
    },
  });
  
