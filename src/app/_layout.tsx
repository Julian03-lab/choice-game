import {
  useFonts,
  Rowdies_400Regular,
  Rowdies_700Bold,
} from '@expo-google-fonts/rowdies';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    Rowdies_400Regular,
    Rowdies_700Bold,
  });

  console.log(fontError);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Slot />;
};
export default RootLayout;
