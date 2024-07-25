import React from "react";
import { View, Text, Button } from "react-native";

const BuddyList = ({ buddies, onBuddySelect }) => {
  return (
    <View style={{ padding: 16 }}>
      {buddies.map((buddy, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text>{buddy.name}</Text>
          <Button title="View Profile" onPress={() => onBuddySelect(buddy)} />
        </View>
      ))}
    </View>
  );
};

export default BuddyList;
