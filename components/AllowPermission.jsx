import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Location from "expo-location";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height, width } = Dimensions.get("window");

const AllowPermission = () => {
  const statusCheck = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log({ status });
    if (status !== "denied") await AsyncStorage.setItem("asked", "granted");
    else await AsyncStorage.setItem("asked", "notgranted");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainChild}>
        <View style={styles.innerContainerOne}>
          <View style={styles.circle}>
            <View>
              <Image
                source={require("../assets/suncloud.png")}
                resizeMode="contain"
                style={{ flex: 0.9 }}
              />
            </View>
          </View>
          <Text style={styles.text1}>Location permission needed</Text>
          <Text numberOfLines={2} style={styles.text2}>
            Please enable location permission to get more accurate weather
            information
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => statusCheck()}>
            <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
              Allow location
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AllowPermission;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#B5B4B8",
    justifyContent: "center",
    alignItems: "center",
  },
  mainChild: {
    backgroundColor: "#FFFFFF",
    height: height / 1.9,
    width: width - 40,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "space-around",
  },
  innerContainerOne: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "#6151C3",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 70,
    paddingVertical: 15,
    backgroundColor: "#6151C3",
    borderRadius: 70,
  },
  text1: {
    fontSize: 20,
    lineHeight: 25,
    textAlign: "center",
    fontWeight: "700",
  },
  text2: {
    fontSize: 15,
    lineHeight: 16,
    textAlign: "center",
    fontWeight: "300",
  },
});
