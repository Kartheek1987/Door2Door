import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to Door 2 Door !!</Text>
      <Pressable style={styles.buttonStyle}>
      <Text style={styles.buttonText}>Search by Vendor</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle}>
      <Text style={styles.buttonText}>Vendors Near Me</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle}>
      <Text style={styles.buttonText}>Search by Location</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  titleText: {
    fontSize:25,
    fontFamily:'roboto',
    fontWeight:'bold',
    color:'white',
  },
   buttonStyle: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 6,
    elevation:3,
    fontSize:20,
    fontWeight:'bold',
    backgroundColor:'white',
  },
  buttonText: {
    fontSize:20,
    fontFamily:'Sans-Serif',
    fontWeight:'bold',
    color:'black',
  },
});
