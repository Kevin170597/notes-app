import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './routes/Navigation';
import { StatusBar } from 'react-native';
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
      <StatusBar barStyle='light-content' />
      <Navigation />
    </NavigationContainer>
  );
};
