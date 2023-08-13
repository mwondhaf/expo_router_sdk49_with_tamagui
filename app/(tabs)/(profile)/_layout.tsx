import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Main Profile",
        }}
      />
      <Stack.Screen name="edit" options={{ title: "Edit Profile" }} />
    </Stack>
  );
};

export default ProfileLayout;
