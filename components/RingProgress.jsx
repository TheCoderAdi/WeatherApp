import { StyleSheet, Text, View } from "react-native";
import SVG, { Circle } from "react-native-svg";
import React, { useContext, useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import { WeatherType } from "../context/weather";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const RingProgress = ({ type, text }) => {
  const { animate } = useContext(WeatherType);
  const radius = 100;
  const strokeWidth = 30;
  const progress = (type / 100)?.toFixed(1);
  const color = "#6151C3";
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;
  const fill = useSharedValue(0);
  useEffect(() => {
    fill.value = animate
      ? withTiming(progress, { duration: 1500 })
      : withTiming(progress / 100, { duration: 1000 });
  }, [progress, animate]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference],
  }));
  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <SVG style={{ flex: 1 }}>
        <Circle
          r={innerRadius}
          cx={radius}
          cy={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          opacity={0.2}
        />
        <AnimatedCircle
          animatedProps={animatedProps}
          r={innerRadius}
          cx={radius}
          cy={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={[circumference * progress, circumference]}
          strokeLinecap="round"
          rotation="-90"
          originX={radius}
          originY={radius}
        />
      </SVG>
      <View
        style={{
          position: "absolute",
          alignSelf: "center",
          top: strokeWidth * 2,
          backgroundColor: color,
          height: 80,
          width: 80,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 18 }}>
          {type.toFixed(1)}
        </Text>
        <Text style={{ color: "#FFFFFF", fontSize: 18 }}>
          {text == "Wind" || text == "Gust" ? "mph" : "deg"}
        </Text>
      </View>
      <AntDesign
        name="arrowright"
        size={strokeWidth * 0.8}
        color="white"
        style={{
          position: "absolute",
          alignSelf: "center",
          top: strokeWidth * 0.1,
        }}
      />
    </View>
  );
};

export default RingProgress;

const styles = StyleSheet.create({});
