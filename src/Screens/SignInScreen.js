import React from "react";
import { 
    View, 
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Keyboard,  
    Dimensions,
    LogBox,
    TextInput
} from 'react-native';
import RouteName from "../Routes/RouteName";
import { InputBox } from "../Screens/Common/InputBox";
import { ButtonCustomized } from "../Screens/Common/ButtonCustomized";
import { Spinner } from "../Screens/Common/LoadingSpinner";
import color from "../utils/color";
import appConst from "../utils/const";

export default class extends React.Component {

    constructor(props) {
        super(props);
        LogBox.ignoreLogs(['currentlyFocusedField']);
        this.state = {
            password: "",
            errorText: "",
            isLoading: false,
            userPhoneNum: "",
        }
    }

    componentDidMount() {
        this.setState({ userPhoneNum: this.props.navigation.getParam("phoneNumber") }) 
    }

    onPressLogin = async() => {
        if (this.state.password === appConst.testPassword["SIGN_IN"]) {
            this.setState({ errorText: "" })
            this.props.navigation.navigate(RouteName.DocumentSelect);
        } else this.setState({ errorText: "Đăng nhập không thành công !" })
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress= {() => Keyboard.dismiss()}
            >
                <View style={styles.container}>
                    <Text style={styles.signInTitle}>Đăng nhập</Text>
                    <View style={styles.loginPanel}>
                        <Text style={styles.inputMobileLabel}>Nhập mật khẩu</Text>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Mật khẩu"
                            style={styles.inputMobileText}
                            onChangeText={text => {
                                this.setState({password: text});
                            }}
                        />
                    </View>
                    { this.state.errorText != '' && <Text style={styles.errorText}>{this.state.errorText}</Text> }
                    <ButtonCustomized 
                        onPress={() => this.onPressLogin()}
                        labelText={"Đăng nhập"}
                    />
                    { this.state.isLoading && <LoadingSpinner /> }
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

const fullWidth = Dimensions.get('window').width;

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.m_gray_bg,
    },
    signInTitle: {
        textAlign: 'center',
        fontSize: 40,
        color: color.defaultBlue
    },
    inputMobileLabel: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 17,
        color: color.m_black_text,
      },
      inputMobileText: {
        fontSize: 25,
        letterSpacing: 5,
        width: fullWidth - 88,
        height: 50,
        marginLeft: 20,
        lineHeight: 25,
        padding: 12,
        paddingLeft: 60,
        backgroundColor: '#fff',
        fontWeight: '300',
        color: color.m_black_text,
        borderBottomWidth: 0.5,
        borderBottomColor: color.defaultGrey,
        marginTop: 10,
        paddingVertical: 0,
      },
      errorText: {
          marginTop: 5,
          color: color.defaultRed,
          fontSize: 20,
          textAlign: 'center'
      }
});