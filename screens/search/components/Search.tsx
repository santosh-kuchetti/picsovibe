import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from '../../../styles/Global';
import Header from '../../../components/Header';

const Search = () => {
  return (
    <View>
      <View style={styles.headerview}>
        <Header name="Discover the world"/>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
    </View>
  );
}

export default Search