import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './routes/Navigation';
import { StatusBar } from 'react-native';
import { useAuthStore } from './store/useAuthStore';

export default function App() {

  const getAuth = useAuthStore((state) => state.getAuth);

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <Navigation />
    </NavigationContainer>
  );
};
