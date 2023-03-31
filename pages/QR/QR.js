import {Helmet} from "react-helmet";
import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, Linking } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import "./QR.css"

function QR(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [link, setLink] = useState('');

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <Text>Requesting camera permission...</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setLink(data);
    };

    const resetScanner = () => {
        setScanned(false);
        setLink('');
    };
    
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>QR Code Scanner</title>
            </Helmet>
            
            <div class="card text-center">
                <div class="card-body">
                    <Camera
                        className='camera'
                        type={Camera.Constants.Type.back}
                        barCodeScannerSettings={{
                        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                        }}
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    >
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Camera>    
                </div>
            </div>

            <div class="card">
                <div class="card-body col-sm-4">
                <View className='overlay'>
                    {scanned &&(
                        <TouchableOpacity className='button' onPress={resetScanner}>
                        <button className='buttonText' onPress={resetScanner}>Scan Again</button>
                        </TouchableOpacity>
                    )}
                </View>
                </div>
            </div>
            
            <div class="card">
                <div class="card-body">       
                {link ? (
                    <View className='linkContainer'>
                    <Text className='linkText'>Scanned Link:</Text>
                    <Text className='link' onPress={() => Linking.openURL(link)}>
                        {link}
                    </Text>
                    </View>
                ) : null}
                </div>
            </div>
            
            
{/*
            <View className='container'>
                <Camera
                    className='camera'
                    type={Camera.Constants.Type.back}
                    barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                    }}
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                >
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </Camera>
                
                <View className='overlay'>
                    {scanned &&(
                        <TouchableOpacity className='button' onPress={resetScanner}>
                        <Text className='buttonText'>Scan Again</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {link ? (
                    <View className='linkContainer'>
                    <Text className='linkText'>Scanned Link:</Text>
                    <Text className='link' onPress={() => Linking.openURL(link)}>
                        {link}
                    </Text>
                    </View>
                ) : null}
                </View>*/}
        </div>
    );
}

export default QR;