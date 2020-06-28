import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
} from "react-native";

export default class Start extends Component {
  constructor() {
    super();
    this.state = { name: "" };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/BackgroundImage.png")}
          style={styles.backgroundImage}
        >
          {/* <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View> */}

          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
            }}
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
            placeholder="Type here ..."
          />
          <Button
            title="Go to Chat"
            onPress={() =>
              this.props.navigation.navigate("Chat", { name: this.state.name })
            }
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
