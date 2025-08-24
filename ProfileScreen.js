import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen(){
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.avatar} />
      <Text style={styles.name}>KasaUser01</Text>
      <Text style={styles.bio}>Proudly African ✊🏾</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,alignItems:'center',paddingTop:40},
  avatar:{width:120,height:120,borderRadius:20},
  name:{fontSize:20,fontWeight:'bold',marginTop:12},
  bio:{color:'#666',marginTop:6}
});
