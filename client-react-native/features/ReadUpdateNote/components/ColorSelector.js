import { useState } from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
// Assets
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ColorSelector = ({ color, setColor, note }) => {
    const [colorSelector, setColorSelector] = useState(false);

    const handleSelectColor = (color) => {
        setColor(color);
        setColorSelector(false);
    }

    return (
        <View>
            <TouchableOpacity onPress={() => setColorSelector(!colorSelector)} style={styles.colorSelector} >
                <View style={[styles.color, { backgroundColor: color }]}></View>
                <Icon name='expand-more' size={24} color='#fff' />
            </TouchableOpacity>
            {colorSelector &&
                <View style={styles.colorSelectorModal}>
                    {['#ff9e9e', '#7fd57d', '#fff599', '#9effff', '#b69cff'].map((e) =>
                        <TouchableOpacity
                            key={e}
                            style={[{ backgroundColor: e }, styles.colorOption]}
                            onPress={() => handleSelectColor(e)}
                            >
                        </TouchableOpacity>
                    )}
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    colorSelector: {
        backgroundColor: '#353535',
        height: 35,
        borderRadius: 8,
        padding: 5,
        flexDirection: 'row',
        marginRight: 40,
        marginLeft: 10
    },
    color: {
        height: 25,
        aspectRatio: 1,
        borderRadius: 6,
        marginRight: 10
    },
    colorSelectorModal: {
        backgroundColor: '#353535',
        padding: 10,
        borderRadius: 8,
        width: Dimensions.get('window').width / 2.2,
        position: 'absolute',
        left: 0,
        top: 50,
        alignItems: 'flex-start'
    },
    colorOption: {
        width: '100%',
        height: 40,
        borderRadius: 8,
        marginBottom: 10
    }
});