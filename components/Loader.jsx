import { View, ActivityIndicator } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#6151C3" />
    </View>
  );
};

export default Loader;
