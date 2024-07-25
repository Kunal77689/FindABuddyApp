import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button, Card, Title, Paragraph, Avatar } from "react-native-paper";
import profilePic from "../assets/profile-pic.png"; // Example profile picture

const friends = [
  { name: "Alice", avatar: require("../assets/alice.png") },
  { name: "Bob", avatar: require("../assets/bob.png") },
  { name: "Charlie", avatar: require("../assets/charlie.png") },
];

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={profilePic} style={styles.profilePic} />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>johndoe@example.com</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            /* Navigate to edit profile */
          }}
        >
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoSection}>
        <Card style={styles.infoCard}>
          <Card.Content>
            <Title>About Me</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              efficitur euismod nulla, nec bibendum erat.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.infoCard}>
          <Card.Content>
            <Title>Interests</Title>
            <Paragraph>Music, Travel, Sports</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.infoCard}>
          <Card.Content>
            <Title>Recent Activities</Title>
            <Paragraph>
              - Joined "Music Lovers" group. - Attended "Travel Enthusiasts"
              meetup. - Shared a post about "Sports Events".
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.infoCard}>
          <Card.Content>
            <Title>Friends</Title>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {friends.map((friend, index) => (
                <View key={index} style={styles.friendContainer}>
                  <Avatar.Image size={60} source={friend.avatar} />
                  <Text style={styles.friendName}>{friend.name}</Text>
                </View>
              ))}
            </ScrollView>
          </Card.Content>
        </Card>
      </View>
      <Button
        mode="contained"
        onPress={() => {
          /* Handle logout */
        }}
        style={styles.logoutButton}
      >
        Logout
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#6200ea",
    marginBottom: 10,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
  },
  editButton: {
    backgroundColor: "#6200ea",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
  },
  infoSection: {
    paddingHorizontal: 20,
  },
  infoCard: {
    marginBottom: 20,
    borderRadius: 10,
  },
  friendContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  friendName: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
  },
  logoutButton: {
    margin: 20,
  },
});

export default ProfileScreen;
