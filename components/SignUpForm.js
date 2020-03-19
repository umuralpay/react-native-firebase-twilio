import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";

const ROOT_URL = "https://us-central1-test-56718780.cloudfunctions.net";
class SignUpForm extends Component {
  state = { phone: "" };

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, {
        phone: this.state.phone
      });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
        phone: this.state.phone
      });
    } catch (err) {
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
            placeholder="Enter data"
            onChangeText={phone => this.setState({ phone })}
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
      marginBottom: 40
  }
});

export default SignUpForm;
