import React from "react";
import {
  Text,
  ScrollView,
  View,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./main.styles";
import Todos from "../../todos/todos";

const Main = () => {
  const phoneWidth = Dimensions.get("window").width;

  return (
    <LinearGradient
      colors={[
        "#422435",
        "#3d2238",
        "#37213b",
        "#2e213e",
        "#242140",
        "#1b2544",
        "#102946",
        "#002c47",
        "#003348",
        "#003a47",
        "#124045",
        "#224543",
      ]}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView>
            <View style={[styles.content, { width: phoneWidth - 40 }]}>
              <Text style={styles.mainHeading}>Hello, glad to see you!</Text>
              <Text style={styles.subtitle}>Write down your tasks</Text>
              <Todos />
              <Todos />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Main;
