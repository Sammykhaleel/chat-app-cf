import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";

export default class Chat extends Component {
  constructor() {
    super();
    this.state = { text: "" };
  }
  render() {
    let name = this.props.route.params.name;

    this.props.navigation.setOptions({ title: name });
    return (
      <View style={styles.container}>
        {/* <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View> */}

        <Text>You wrote: {this.state.text}</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder="Type here ..."
        />
        <Button
          title="Start"
          onPress={() => this.props.navigation.navigate("Start")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
