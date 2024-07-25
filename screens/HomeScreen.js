import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Appbar, Card, Title, Paragraph, Button } from "react-native-paper";
import Header from "../components/Header";
import logo from "../assets/logo.png";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.heroSection}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.welcomeText}>Welcome to Find A Buddy</Text>
        <Text style={styles.subText}>
          Connect with like-minded individuals and explore new friendships.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.featuresContainer}>
        <Card style={styles.featureCard}>
          <Card.Content>
            <Title style={styles.cardTitle}>Find Your Buddy</Title>
            <Paragraph style={styles.cardText}>
              Search and connect with people who share your interests.
            </Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.featureCard}>
          <Card.Content>
            <Title style={styles.cardTitle}>Chat and Connect</Title>
            <Paragraph style={styles.cardText}>
              Engage in meaningful conversations with your new friends.
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.testimonialsContainer}>
        <Text style={styles.sectionTitle}>What Our Users Say</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Card style={styles.testimonialCard}>
            <Card.Content>
              <Paragraph style={styles.testimonialText}>
                “Find A Buddy has completely transformed how I meet new people.
                It’s amazing!” - User A
              </Paragraph>
            </Card.Content>
          </Card>
          <Card style={styles.testimonialCard}>
            <Card.Content>
              <Paragraph style={styles.testimonialText}>
                “A great platform to connect with like-minded individuals.
                Highly recommended!” - User B
              </Paragraph>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6200ea",
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    elevation: 5,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "white",
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: "#6200ea",
    fontSize: 16,
    fontWeight: "bold",
  },
  featuresContainer: {
    padding: 20,
  },
  featureCard: {
    marginBottom: 20,
    borderRadius: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 14,
    color: "#333",
  },
  testimonialsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  testimonialCard: {
    marginRight: 10,
    borderRadius: 15,
    elevation: 3,
  },
  testimonialText: {
    fontSize: 14,
    color: "#555",
    padding: 10,
  },
});

export default HomeScreen;
