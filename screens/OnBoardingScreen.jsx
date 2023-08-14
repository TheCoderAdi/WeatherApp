import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height, width } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../assets/backgroud.png")}
        resizeMode="center"
        style={{ position: "absolute" }}
      />
      <View style={styles.mainChild}>
        <View style={styles.circle} />
        <View style={styles.innerContainer}>
          <View style={styles.childOne}>
            <Text style={styles.textOne} numberOfLines={2}>
              Expore global map of wind, weather, and ocean conditions
            </Text>
            <Text style={styles.textTwo} numberOfLines={3}>
              Planing your trip become more easier with ideate weather app. you
              can instantly see the whole word weather within few second
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                navigation.navigate("Main");
                await AsyncStorage.setItem("visited", "yes");
              }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
                Get started
              </Text>
            </TouchableOpacity>
            <Text style={styles.lastText}>Happy Browsing</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flex: 1,
    backgroundColor: "#6151C3",
  },
  mainChild: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#FFFFFF",
    height: height / 2.1,
    width: width - 40,
    bottom: 11,
    borderRadius: 32,
    overflow: "hidden",
    padding: 10,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: "#6151C3",
    alignItems: "center",
    marginBottom: 20,
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
  },
  childOne: {
    flex: 2,
    gap: 12,
  },
  textOne: {
    fontSize: 20,
    lineHeight: 25,
    textAlign: "center",
    fontWeight: "700",
  },
  textTwo: {
    fontSize: 15,
    lineHeight: 16,
    textAlign: "center",
    fontWeight: "300",
  },
  button: {
    paddingHorizontal: 90,
    paddingVertical: 15,
    backgroundColor: "#6151C3",
    borderRadius: 70,
  },
  lastText: {
    textAlign: "center",
    paddingTop: 12,
    fontSize: 15,
  },
});
