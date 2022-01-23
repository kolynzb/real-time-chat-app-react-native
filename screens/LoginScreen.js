import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, Input } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https:blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          autoFocus
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button title="Login" containerStyle={styles.button} onPress={signIn} />
      <Button
        title="Register"
        containerStyle={styles.button}
        type="outline"
        onPress={() => navigation.navigate("Register")}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
