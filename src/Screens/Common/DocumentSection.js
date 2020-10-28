import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import color from '../../utils/color';

const DocumentSection = ({ onPress, documentName }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity   
                style={styles.detailCard}
                onPress={onPress}
            >
                <Text style={styles.cardText}>{documentName}</Text>
            </TouchableOpacity>
        </View>
    );
};

const fullWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        backgroundColor: color.m_gray_bg,

    },
    detailCard: {
        backgroundColor: color.m_button_bg,
        justifyContent: 'center',
        height: 80,
        width: fullWidth - 70,
        marginTop: 15,
        marginBottom: 15,
        borderColor: color.mainGrey,
        borderRadius: 1,
        shadowColor: color.lightGrey,
        shadowOpacity: 1,
        shadowRadius: 30,
        shadowOffset: { width: 0, height: 20 },
        borderRadius: 20,
    },
    cardText: {
        textAlign: 'center',
        fontSize: 20,
        color: "white"
    }
});

export { DocumentSection };