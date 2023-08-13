import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackContainer from "./Navigator";
import AllowPermission from "./components/AllowPermission";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { WeatherContext } from "./context/weather";

export default function App() {
  const [data, setData] = useState(null);
  const onBoardingVisited = async () => {
    const data = await AsyncStorage.getItem("visited");
    const asked = await AsyncStorage.getItem("asked");
    if (data == "yes" && asked !== "granted") {
      setData(true);
    } else setData(false);
  };
  useEffect(() => {
    onBoardingVisited();
  }, []);
  return (
    <>
      <WeatherContext>
        <StatusBar style="dark" />
        {data ? <AllowPermission /> : <StackContainer />}
      </WeatherContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
