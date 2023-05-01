import React, {useState} from "react";
//import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity} from 'react-native'
import {Helmet} from "react-helmet";
//import axios from "axios";

//import { Configuration, OpenAIApi } from "openai";

function Chatbot(){
    //const { Configuration, OpenAIApi } = require("openai");
    // const configuration = new Configuration({
    //     apiKey: process.env.OPENAI_API_KEY,
    // });
    // const openai = new OpenAIApi(configuration);

    // const apiKey = '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'
    // const apiURL = "https://api.openai.com/v1/completions"

    // const [data, setData] = useState([]);
    // const [textInput, setTextInput] = useState('');

    // const handleSend = async () => {
    //     const prompt = textInput
    //     const response = await openai.createCompletion({
    //         model: "text-davinci-003",
    //         prompt: prompt,
    //         max_tokens: 1024,
    //         temperature: 0.5,
    //     })
    //     const text = response.data.choices[0].text;
    //     setData([...data, {type:'user', 'text': textInput}, {type: 'bot', 'text': text}])
    //     setTextInput('')
    // }

    // const handleSend = async () => {
    //     const prompt = textInput
    //     const response = await axios.post(apiURL, {
    //         prompt: prompt,
    //         max_tokens: 1024,
    //         temperature: 0.5,
    //     }, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${apiKey}`
    //         }    
    //     });
    //     const text = response.data.choices[0].text;
    //     setData([...data, {type:'user', 'text': textInput}, {type: 'bot', 'text': text}])
    //     setTextInput('')
    // }

    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Chatbot</title>
            </Helmet>

            {/* <View style={styles.container}>
                <Text style={styles.title}>Chatbot</Text>
                <FlatList 
                    data={data}
                    keyExtractor={(item,index) => index.toString()}
                    style={styles.body}
                    renderItem={({item}) => (
                        <View style={{flexDirection:'row', padding:10}}>
                            <Text style={{fontweight:'bold', color: item.type === 'user' ? 'green' : 'red'}}>{item.type === 'user' ? 'You:' : 'Chatbot:'}</Text>
                            <Text style={styles.bot}>{item.text}</Text>
                        </View>
                    )}
                />
                <TextInput
                    style={styles.input}
                    value={textInput}
                    onChangeText = {text => setTextInput(text)}
                    placeholder="Ask Me Anything!"
                />
                <TouchableOpacity
                style={styles.button}
                onPress={handleSend}
                >
                    <Text style={styles.buttonText}>Let's Go</Text>
                </TouchableOpacity>
            </View> */}
            <div>This is the Chatbot</div>
        </div>
    );
}

export default Chatbot;

// const styles= StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fffcc9',
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         marginTop: 70
//     },
//     body: {
//         backgroundColor: '#fffcc9',
//         width: '102%',
//         margin: 10
//     },
//     bot:{
//         fontSize: 16
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: 'black',
//         width: '90%',
//         height: 60,
//         marginBottom: 10,
//         borderRadius: 10
//     },
//     button: {
//         backgroundColor: 'yellow',
//         width: '90%',
//         height: 60,
//         borderRadius: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 10
//     },
//     buttonText: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         color: 'blue'
//     }    

// });