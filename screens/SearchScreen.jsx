import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Loader from "../components/Loader";

const { height, width } = Dimensions.get("window");

export default SearchScreen = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showVal, setShowVal] = useState(false);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);

  const handlePress = async () => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=1fe55f27829afc97ea60a0f3b1978686`
      );
      const result = await response.json();
      console.log({ response: response.ok });
      if (result.cod === "404") {
        Alert.alert("Not Found", result.message);
        setShowVal(false);
      } else {
        setWeatherIcon(result?.weather[0]?.icon);
        setTemp(result?.main?.temp);
        setDescription(result?.weather[0].description);
        setShowVal(true);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  return (
    <View style={{ paddingTop: 60, flex: 1, paddingHorizontal: 15 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 5,
        }}
      >
        {show ? (
          <TextInput
            placeholder="Enter your city...."
            style={{
              flex: 1,
              fontSize: 16,
              height: 52,
              backgroundColor: "#F6F7FC",
              paddingHorizontal: 10,
              borderRadius: 9,
            }}
            onChangeText={(val) => {
              setText(val);
              setShowVal(false);
            }}
            value={text}
          />
        ) : null}
        <View
          style={{
            flex: show ? 0 : 1,
            position: "absolute",
            right: 0,
            top: show ? null : 8,
          }}
        >
          {text.length > 0 ? (
            <Ionicons
              size={35}
              name="arrow-forward-outline"
              onPress={handlePress}
            />
          ) : (
            <Ionicons
              size={35}
              name={`${!show ? "search-sharp" : "close"}`}
              onPress={() => setShow(!show)}
            />
          )}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {showVal ? (
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
            <Text style={styles.text1}>{text}</Text>
            <Text style={styles.text2}>{`${temp && temp}°`}</Text>
            <Text style={styles.text3}>{description}</Text>
          </View>
        ) : (
          <Text style={{ fontSize: 20, letterSpacing: 3 }}>
            Search Something....
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#6151C3",
    height: height / 2,
    width: width - 90,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 12,
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
});
