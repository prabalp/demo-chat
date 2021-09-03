import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";

const AddChat = ({ navigation }) => {
  const [input, setinput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, []);
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setinput(text)}
      />
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({
  container: {},
});
