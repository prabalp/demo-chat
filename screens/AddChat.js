import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { auth, db } from "../firebase";

const AddChat = ({ navigation }) => {
  const [input, setinput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        console.log("in");
        navigation.goBack("Home");
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setinput(text)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
        onSubmitEditing={createChat}
      />
      <Button onPress={createChat} title="Create new Chat" />
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({
  container: {},
});
