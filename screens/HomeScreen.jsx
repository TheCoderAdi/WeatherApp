import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Box from "../components/Box";
import { WeatherType } from "../context/weather";
import { useContext } from "react";
import Loader from "../components/Loader";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  const {
    weatherIcon,
    wind,
    stateName,
    temp,
    description,
    loading,
    setAnimate,
    animate,
  } = useContext(WeatherType);
  if (loading) return <Loader />;
  return (
    <>
      <StatusBar style="dark" />
      <View style={{ paddingTop: 60, flex: 1 }}>
        <View style={styles.innerContainer}>
          <View style={styles.box}>
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`,
              }}
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
                tintColor: "#fff",
              }}
            />
            <Text style={styles.text1}>{stateName}</Text>
            <Text style={styles.text2}>{`${temp}°`}</Text>
            <Text style={styles.text3}>{description}</Text>
          </View>
          <View style={styles.circle} />
          <View
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 20,
              backgroundColor: "#F7F6FC",
              padding: 12,
              gap: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  ...styles.text1,
                  color: "#000000",
                }}
              >
                Weather Now
              </Text>
              <MaterialIcons
                name="animation"
                size={35}
                color="#121212"
                onPress={() => setAnimate(!animate)}
              />
            </View>
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                gap: 15,
              }}
            >
              <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 7,
                  justifyContent: "center",
                }}
              >
                <Box text={"Wind"} />
                <Box text={"Gust"} />
                <Box text={"Deg"} />
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 10,
  },
  innerContainer: {
    alignItems: "center",
    flex: 1,
    paddingTop: 10,
  },
  box: {
    backgroundColor: "#6151C3",
    height: height / 2.4,
    width: width - 90,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text1: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  text2: {
    fontSize: 70,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  text3: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 100,
    backgroundColor: "#6151C3",
    marginVertical: 7,
  },
});
