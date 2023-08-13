import React from "react";
import { useRouter } from "expo-router";
import { Button, YStack } from "tamagui";

const Profile = () => {
  const router = useRouter();
  return (
    <YStack f={1} bg={"$background"} jc={"center"} ai={"center"}>
      <Button
        themeInverse
        onPress={() => router.push("/(tabs)/(profile)/edit")}
      >
        Edit Profile
      </Button>
    </YStack>
  );
};

export default Profile;
