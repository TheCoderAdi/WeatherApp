import { StatusBar } from "expo-status-bar";
import StackContainer from "./Navigator";
import { WeatherContext } from "./context/weather";

export default function App() {
  return (
    <>
      <WeatherContext>
        <StatusBar style="dark" />
        <StackContainer />
      </WeatherContext>
    </>
  );
}
