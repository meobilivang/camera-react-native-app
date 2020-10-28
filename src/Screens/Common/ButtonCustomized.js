import color from "../../utils/color";
import React from 'react';
import { 
  TouchableOpacity,
  Text
} from "react-native";

const ButtonCustomized = ({ onPress, labelText, redButton }) => {
    return (
            <TouchableOpacity
                style={redButton ? styles.buttonRedStyle : styles.buttonStyle}
                onPress={onPress}>
                <Text style={styles.buttonText}>{labelText}</Text>
            </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        backgroundColor: color.m_button_bg,
        color: color.mainColor,
        width: 165,
        height: 60,
        borderRadius: 30,
        marginTop: 40,
        justifyContent: 'center',
        shadowColor: 'rgba(2, 72, 109, 0.2)',
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 10,
      },
      buttonRedStyle: {
        backgroundColor: color.buttonRed,
        color: color.mainColor,
        width: 165,
        height: 60,
        borderRadius: 30,
        marginTop: 40,
        justifyContent: 'center',
        shadowColor: 'rgba(2, 72, 109, 0.2)',
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 10,
      },
      buttonText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
        color: '#fff',
      }
};

export { ButtonCustomized };