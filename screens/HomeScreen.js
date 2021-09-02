import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import CustonListItem from "../components/CustonListItem";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Demo",
    });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <CustonListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
