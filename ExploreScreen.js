import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const data = [
  { id:'a', img: require('../../assets/ex1.jpg') },
  { id:'b', img: require('../../assets/ex2.jpg') },
  { id:'c', img: require('../../assets/ex3.jpg') }
];

export default function ExploreScreen(){
  return (
    <FlatList 
      data={data}
      numColumns={2}
      keyExtractor={i=>i.id}
      renderItem={({item}) => (
        <Image source={item.img} style={styles.img} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  img: { width:'48%', margin:'1%', height:150, borderRadius:8 }
});
