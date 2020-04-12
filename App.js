import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function App() {
  return (
      <View style={styles.container}>
        <Text style={{fontSize:19}}> {"Expo wrappers \n 1. Camera \n 2. Camera Roll \n 3. Notification"}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

