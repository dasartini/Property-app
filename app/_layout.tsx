import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // Prevent auto-hiding of the splash screen
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null; // Alternatively, add a loading indicator here

  return <Stack screenOptions={{headerShown: false}} />;
}
