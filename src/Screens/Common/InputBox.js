import React from 'react';
import { View, 
    TextInput,
    Text
} from 'react-native';
import color from "../../utils/color";

const InputBox = ({ placeholder, label, inputValue, onChangeText, secureTextEntry }) => {
    return (
       <View style = {styles.containerStyle}>
           <Text>{label}</Text>
           <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                autoCapitalize={false}
                style={styles.inputStyle}
                value={inputValue}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
           />
       </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContents: 'center',
    }, 
    inputStyle: {
        color: color.textBlack,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
    }, 
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flex: 1,
    }
};

export { InputBox };