import React from "react";
import { Appbar } from "react-native-paper";

const Header = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "#6200ea" }}>
      <Appbar.Content title="Find A Buddy" titleStyle={{ color: "white" }} />
    </Appbar.Header>
  );
};

export default Header;
