import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";
import firebase from "firebase";

const ROOT_URL = "https://us-central1-test-56718780.cloudfunctions.net";
class SignInForm extends Component {
  state = { phone: "", code: "" };

  handleSubmit = async () => {
    const { phone, code } = this.state;
    try{
        let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
          phone,
          code
        });
        firebase.auth().signInWithCustomToken(data.token).catch((err) => {
            console.log(err);
        })
    }catch(err) {
        console.log(err);
    }
  };

  render() {
    return (
      <View style={styleSheet.main}>
        <View style={{ marginBottom: 10 }}>
          <Input
            value={this.state.phone}
            label="Enter Phone Number"
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Input
            value={this.state.code}
            label="Enter Code"
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <View>
          <Button onPress={() => this.handleSubmit()} title="Submit" />
        </View>
      </View>
    );
  }
}

const styleSheet = StyleSheet.create({
  main: {
  }
});

export default SignInForm;
