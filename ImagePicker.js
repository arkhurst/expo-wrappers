import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerComponent = () => {

    const [selectedImage, setSelectedImage] = useState(null)

    let openImagePicker = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if(permissionResult.granted === false){
            alert('Pls allow access to camera roll');
        };

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);

        if(pickerResult.cancelled === true){
            return;
        }

        setSelectedImage({ localUri : pickerResult.uri})
    };

    if(selectedImage !== null){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image style={{width:400, height:400, resizeMode:'contain'}} source={{ uri : selectedImage.localUri}}/>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <Text style={styles.instruction}> To share an image, click the button </Text>
            <Button title="add a photo" onPress={openImagePicker} />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    instruction:{
        fontSize:16
    }
})
export default ImagePickerComponent;