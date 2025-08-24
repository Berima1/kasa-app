import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MessagesScreen(){
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.note}>Private messaging coming soon 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center:{flex:1,alignItems:'center',justifyContent:'center'},
  title:{fontSize:18,fontWeight:'bold'},
  note:{marginTop:8,color:'#666'}
});
