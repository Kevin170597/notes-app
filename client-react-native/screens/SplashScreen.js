import { View, Text, Image, StyleSheet } from 'react-native';
// Constants
import colors from '../constants/colors';
// Assets
import Logo from '../assets/logo.png';

export const SplashScreen = () => {

    return (
        <View style={styles.splashContainer}>
            <Image source={Logo} style={{ width: 80, height: 80}} />
        </View>
    )
};

const styles = StyleSheet.create({
    splashContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    }
});