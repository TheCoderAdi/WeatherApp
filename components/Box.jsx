import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import RingProgress from "./RingProgress";
import { WeatherType } from "../context/weather";

const Box = ({ text }) => {
  const { wind, deg, gust } = useContext(WeatherType);
  let type;
  switch (text) {
    case "Wind":
      type = wind * 10;
      break;
    case "Deg":
      type = deg / 10;
      break;
    case "Gust":
      type = gust * 10;
      break;
  }
  return (
    <View
      style={{
        height: 240,
        width: 240,
        alignContent: "center",
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        borderRadius: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "#F6F7FC",
          width: 50,
          height: 30,
          position: "absolute",
          top: 10,
          left: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "400", textAlign: "center" }}>
          {text}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <RingProgress type={type} text={text} />
      </View>
    </View>
  );
};

export default Box;
