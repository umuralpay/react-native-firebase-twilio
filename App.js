/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { SafeAreaView, StatusBar, View, StyleSheet } from "react-native";
import SignUpForm from "./components/SignUpForm";
import dotenv from "dotenv";
import SignInForm from "./components/SignInForm";
import firebase from "firebase";

dotenv.config();

const App: () => React$Node = () => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styleSheet.container}>
        <View style={styleSheet.main}>
          <SignUpForm></SignUpForm>
          <SignInForm></SignInForm>
        </View>
      </SafeAreaView>
    </>
  );
};

const styleSheet = StyleSheet.create({
  main: {
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  }
});
export default App;
