import React, { createContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WeatherType = createContext();

const WeatherContext = ({ children }) => {
  const [stateName, setStateName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [wind, setWind] = useState(null);
  const [deg, setDeg] = useState(null);
  const [gust, setGust] = useState(null);
  const [animate, setAnimate] = useState(true);
  const getStateName = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log({ status });
    if (status !== "granted") {
      setStateName("india");
      return;
    } else {
      setLoading(true);
      try {
        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        if (location) {
          let response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          const newStateName = data.address.state;
          if (newStateName !== stateName) {
            setStateName(newStateName);
            await AsyncStorage.setItem("stateName", newStateName);
          }
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        return;
      }
    }
  };

  useEffect(() => {
    const getStoredStateName = async () => {
      const storedStateName = await AsyncStorage.getItem("stateName");
      if (storedStateName) {
        setStateName(storedStateName);
      }
    };
    getStoredStateName();
    getStateName();
    getWeather();
  }, [stateName]);

  const getWeather = async () => {
    try {
      if (stateName) {
        setLoading(true);
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${stateName}&units=metric&appid=1fe55f27829afc97ea60a0f3b1978686`
        );
        let result = await response.json();
        console.log({ res: response.ok, state: stateName });
        if (response.ok) {
          setWeatherIcon(result?.weather[0]?.icon);
          setTemp(result?.main?.temp);
          setDescription(result?.weather[0].description);
          setWind(result?.wind?.speed);
          setDeg(result?.wind?.deg);
          setGust(result?.wind?.gust);
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      return;
    }
  };
  return (
    <WeatherType.Provider
      value={{
        weatherIcon,
        temp,
        description,
        wind,
        stateName,
        loading,
        deg,
        gust,
        animate,
        setAnimate,
      }}
    >
      {children}
    </WeatherType.Provider>
  );
};

export { WeatherType, WeatherContext };
