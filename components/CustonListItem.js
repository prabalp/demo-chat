import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { ListItem } from "react-native-elements/dist/list/ListItem";

const CustonListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          Youtube Chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test Subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustonListItem;

const styles = StyleSheet.create({});
