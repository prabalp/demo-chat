import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = () => {
    //signin logic
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          url: "#",
        }}
        style={{ width: 200, height: 200 }}
      />

      <View style={styles.imputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setemail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setpassword(text)}
        />
      </View>

      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button containerStyle={styles.button} type="outline" title="Regiser" />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
  imputContainer: {},
  button: {},
});
