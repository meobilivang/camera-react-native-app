import React from "react";
import { 
    View, 
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Keyboard,  
    TextInput,
    LogBox,
    Dimensions,
} from 'react-native';

import { ButtonCustomized } from "../Screens/Common/ButtonCustomized";
import color from "../utils/color";
import { Spinner } from "../Screens/Common/LoadingSpinner";
import { LoadingSpinner } from "../Screens/Common/LoadingSpinner";
import appConst from "../utils/const";
import RouteName from "../Routes/RouteName";

export default class extends React.Component {
    constructor(props) {
        super(props);
        LogBox.ignoreLogs(['currentlyFocusedField']);
        this.state = {
            password: "",
            confirmPassword: "",
            errorText: "",
            isLoading: false,
            userPhoneNum: "",
        }
    }

    componentDidMount() {
        this.setState({ userPhoneNum: this.props.navigation.getParam("phoneNumber") }) 
    }

    onPressSignUp = async() => {
        if ( this.state.password === appConst.testPassword["SIGN_UP"] && this.state.confirmPassword === appConst.testPassword["SIGN_UP"]) {
            this.setState({ errorText: "" })
            this.props.navigation.navigate(RouteName.DocumentSelect);
        } else this.setState({ errorText: "Mật khẩu không hợp lệ" })
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress= {() => Keyboard.dismiss()}
            >
                <View style={styles.container}>
                    <Text style={styles.signInTitle}>Đăng ký</Text>
                    <View style={styles.loginPanel}>
                        <Text style={styles.inputMobileLabel}>Nhập mật khẩu</Text>
                        <TextInput
                            autoCorrect={false}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            value={this.state.password}
                            placeholder="Mật khẩu"
                            style={styles.inputMobileText}
                            onChangeText={text => {
                                this.setState({password: text});
                            }}
                        />
                    </View>
                    <View style={styles.loginPanel}>
                        <Text style={styles.inputMobileLabel}>Xác nhận mật khẩu</Text>
                        <TextInput
                            autoCorrect={false}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            value={this.state.confirmPassword}
                            placeholder="Nhập lại"
                            style={styles.inputMobileText}
                            onChangeText={text => {
                                this.setState({confirmPassword: text});
                            }}
                        />
                    </View>
                    { this.state.errorText != '' && <Text style={styles.errorText}>{this.state.errorText}</Text> }
                    <ButtonCustomized 
                        onPress={() => this.onPressSignUp()}
                        labelText={"Tạo tài khoản"}
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
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: color.m_bg_color
    },
    Title: {
        textAlign: 'center',
        fontSize: 24,
        color: color.mainColor
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