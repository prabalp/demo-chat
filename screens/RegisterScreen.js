import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Input } from "react-native-elements/dist/input/Input";
import { auth, db } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "HAHA Login",
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL: imageUrl || "link to a demo image",
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text>Create Account</Text>
      <View>
        <Input
          placeholder="Full Name"
          autoFocus
          type="Text"
          value={name}
          onChangeText={(text) => setname(text)}
        />
        <Input
          placeholder="Eamil"
          type="Email"
          value={email}
          onChangeText={(text) => setemail(text)}
        />
        <Input
          placeholder="Password"
          type="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setpassword(text)}
        />
        <Input
          placeholder="Profile Pic URL"
          type="Text"
          value={imageUrl}
          onChangeText={(text) => setimageUrl(text)}
          onSubmitEditing={register}
        />

        <Button
          style={styles.button}
          raised
          onPress={register}
          title="Register"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
  button: {},
});
