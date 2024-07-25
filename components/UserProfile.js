import React from "react";
import { View, Text } from "react-native";

const UserProfile = ({ user }) => {
  return (
    <View style={{ padding: 16 }}>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
};

export default UserProfile;
