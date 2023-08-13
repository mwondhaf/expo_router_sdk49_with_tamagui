import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { H4, YStack } from "tamagui";

export default function ModalScreen() {
  return (
    <YStack f={1} bg="$background" ai={"center"} jc={"center"}>
      <H4>Modal</H4>
    </YStack>
  );
}

{
  /* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */
}
