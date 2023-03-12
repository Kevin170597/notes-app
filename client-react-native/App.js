import { useEffect } from 'react';
import { StatusBar } from 'react-native';
// Navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Navigation } from './routes/Navigation';
// Constants
import colors from './constants/colors';

export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background
    }
  }

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor={colors.background} />
      <Navigation />
    </NavigationContainer>
  );
};
