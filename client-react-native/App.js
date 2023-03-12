import { useEffect } from 'react';
import { StatusBar } from 'react-native';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './routes/Navigation';
// Constants
import colors from './constants/colors';
// Global stores
import { useAuthStore } from './store/useAuthStore';
import { useLoggedUserStore } from './store/useLoggedUserStore';

export default function App() {

  const getAuth = useAuthStore((state) => state.getAuth);
  const getLoggedUser = useLoggedUserStore((state) => state.getLoggedUser);

  useEffect(() => {
    getAuth();
    getLoggedUser();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' backgroundColor={colors.background} />
      <Navigation />
    </NavigationContainer>
  );
};
