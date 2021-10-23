import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Convertidor } from './src/components/Convertidor';

// <Text>Hello Dir</Text>

export default function App() {
  return (
    <View style={styles.container}>
     
      <Convertidor/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
