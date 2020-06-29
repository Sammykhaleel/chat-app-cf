import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import KeyboardSpacer from "react-native-keyboard-spacer";

export default class Chat extends Component {
  constructor() {
    super();
    this.state = { text: "" };
  }
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 2,
          text: "This is a system message",
          createdAt: new Date(),
          system: true,
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "blue",
          },
        }}
      />
    );
  }

  render() {
    let name = this.props.route.params.name;

    this.props.navigation.setOptions({ title: name });
    return (
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="More options"
        accessibilityHint="Let’s you choose to send an image or your geolocation."
        onPress={this._onPress}
      >
        <View style={{ flex: 1 }}>
          <GiftedChat
            renderBubble={this.renderBubble.bind(this)}
            messages={this.state.messages}
            onSend={(messages) => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
          {Platform.OS === "android" ? <KeyboardSpacer /> : null}
          {/* <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View> */}

          {/* <Text>You wrote: {this.state.text}</Text>
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
          title="Go to Start"
          onPress={() => this.props.navigation.navigate("Start")}
        /> */}
        </View>
      </TouchableOpacity>
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
