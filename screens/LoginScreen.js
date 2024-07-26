import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { auth, db } from "../firebase"; // Import Firebase auth and Firestore instance
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, query, where, collection } from "firebase/firestore";
import { showMessage } from "react-native-flash-message";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Get user details from Firestore based on username
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error("No user found with the provided username.");
      }

      let userEmail = "";
      querySnapshot.forEach((doc) => {
        userEmail = doc.data().email;
      });

      // Authenticate user with Firebase Authentication using email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userEmail,
        password
      );
      const user = userCredential.user;

      showMessage({
        message: "Login Success",
        description: "User has been logged in successfully!",
        type: "success",
      });

      navigation.navigate("Home"); // Navigate to Home screen after successful login
    } catch (e) {
      showMessage({
        message: "Login Error",
        description: e.message,
        type: "danger",
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Find A Buddy</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#666"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Login
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.link}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#6200ea",
  },
  form: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    color: "#333",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#6200ea",
    borderRadius: 10,
  },
  link: {
    marginTop: 20,
    color: "#6200ea",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
