import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';


const CameraComponent = () => {

    const [hasPermssion, setHasPermission] = useState();
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        _getCamera();
    },[])

    const _getCamera =  async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission( status === 'granted');
    }

    const handleCameraFlip = () => {
        setType(
            type === Camera.Constants.Type.back 
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        )
    }

    if(hasPermssion === null){
        return <View/>
    }
    if(hasPermssion === false){
        return <Text>No access to camera</Text>
    }

    return(
        <View style={styles.container}>
            <Camera style={{flex:1}} type={type}>
                <View style={styles.cameraStyle}>
                    <TouchableOpacity onPress={handleCameraFlip} style={styles.flipCamera}>
                        <Text style={styles.flipText}>Flip</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    cameraStyle:{
        flex:1,
        backgroundColor:'transparent',
        flexDirection:'row'
    },
    flipCamera:{
        flex:0.1,
        alignItems:'center',
        alignSelf:'flex-end'
    },
    flipText:{
        fontSize:18,
        marginBottom:30,
        color:'white'
    }
});

export default CameraComponent