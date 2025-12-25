import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import Navigation from "./src/components/website/navigation/navBarTop";

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#091121", "#112e36"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Navigation/>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
