import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const posts = [
  { id: 1, title: 'KASA is live!', image: require('../../assets/post1.jpg'), text: 'Connect. Share. Grow.' },
  { id: 2, title: 'Celebrating Africa', image: require('../../assets/post2.jpg'), text: 'Celebrating Africa\'s diversity 🌍✨' },
  { id: 3, title: 'Taste of Ghana', image: require('../../assets/post3.jpg'), text: 'Taste of Ghana 🍲🔥' }
];

export default function HomeScreen(){
  return (
    <ScrollView style={styles.container}>
      {posts.map(p => (
        <View key={p.id} style={styles.card}>
          <Image source={p.image} style={styles.image} />
          <Text style={styles.title}>{p.title}</Text>
          <Text style={styles.text}>{p.text}</Text>
          <View style={styles.actions}>
            <TouchableOpacity><Text style={styles.action}>❤️ Like</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.action}>💬 Comment</Text></TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#fff' },
  card: { margin:12, backgroundColor:'#fff', borderRadius:10, padding:10, elevation:2 },
  image: { width:'100%', height:180, borderRadius:8 },
  title: { fontSize:16, fontWeight:'bold', marginTop:8 },
  text: { marginTop:6 }
});
