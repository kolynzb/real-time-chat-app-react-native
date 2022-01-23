import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "react-native-elements";
import { auth } from "../firebase";
import { TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth";
const HomeScreen = ({ navigation }) => {
  const signOutUser = () => {
    signOut.then(() => {
      navigation.replace("Login");
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTintColor: "black",
      headerTitleStyle: { color: "black" },
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
            <Avatar
              rounded
              source={{
                uri:
                  auth?.currentUser?.photoURL ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pcSbcsiQ-fF4z-gw_0kAIG0uhEKavZv7fKmMm8RH890YyvH3Z2g0T9QJwgEIG8qMT9Q&usqp=CAU",
              }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
