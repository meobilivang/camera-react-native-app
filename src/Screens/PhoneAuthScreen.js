import React from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  LogBox,
} from 'react-native';

import images from "../utils/images";
import RouteName from "../Routes/RouteName";
import { TextInput } from 'react-native-gesture-handler';
import appConst from "../utils/const";
//import AuthService from '../../services/AuthService';
import color from "../utils/color";
import { ButtonCustomized } from "../Screens/Common/ButtonCustomized";

export default class Screen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  constructor(props) {
    super(props);
    LogBox.ignoreLogs(['currentlyFocusedField']);
    this.state = {
        phoneNumber: '', 
    };
  }

  onPressCheckPhoneNumber = async () => {
      if (String(this.state.phoneNumber) === appConst.testPhoneNum["testNum"] ) {
        this.props.navigation.navigate(RouteName.SignUp, {
            phoneNumber: this.state.phoneNumber,
        });
      }
      if (String(this.state.phoneNumber) === appConst.testPhoneNum["testNum2"] ) {
        this.props.navigation.navigate(RouteName.SignIn, {
            phoneNumber: this.state.phoneNumber,
        });
      }
    // let phone = this.state.phoneNumber;
    // try {
    //   let response = await AuthService.fn_is_first_time(phone);
    //   let firstTimeLogin = response.data.isFirstTime;
    //   if (firstTimeLogin == true) {
    //     try {
    //       let response = await AuthService.fn_request_otp(phone);

    //       if (response) {
    //         if (response.error != null) {
    //           Alert.alert('Thông báo', 'Có lỗi xảy ra khi đăng nhập');
    //         } else {
    //           this.props.navigation.navigate(RouteName.SignUp, {
    //             phoneNumber: this.state.phoneNumber,
    //             onGoBack: async () => {},
    //           });
    //         }
    //       } else Alert.alert('Thông báo', 'Không thể kết nối tới server');

    //     } catch (error) {
    //       Alert.alert('Thông báo', 'Có lỗi xảy ra khi đăng nhập');
    //     }
    //   } else {
    //     this.props.navigation.navigate(RouteName.SignIn, {
    //       phoneNumber: this.state.phoneNumber,
    //     });
    //   }
    // } catch (error) {
    //   Alert.alert('Thông báo', 'Có lỗi xảy ra khi đăng nhập');
    // }
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.wrapper}>
          <Image
            style={styles.logo}
            source={images.main_icon}
          />
          <View style={styles.loginPanel}>
            <Text style={styles.inputMobileLabel}>
              Nhập số điện thoại di động
            </Text>
            <TextInput
              autoCapitalize="none"
              autoFocus={false}
              letterSpacing={5}
              style={styles.inputMobileText}
              keyboardType="numeric"
              returnKeyType={'done'}
              value={this.state.phoneNumber}
              onChangeText={inputNums => {
                this.setState({ phoneNumber: inputNums });
              }}
            />
          </View>
          <ButtonCustomized 
            onPress={() => this.onPressCheckPhoneNumber()}
            labelText={"Tiếp theo"}
          />
          <Text style={styles.version}>{'Ver 1.0.0'}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const fullWidth = Dimensions.get('window').width;
let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: color.m_gray_bg,
  },
  logo: {
    width: 234,
    height: 234,
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
  loginPanel: {
    marginTop: 30,
    height: 120,
    backgroundColor: 'white',
    width: fullWidth - 44,
    marginRight: 22,
    marginLeft: 22,
  },
  version: {
    width: 200,
    height: 20,
    position: 'absolute',
    bottom: 25,
    textAlign: 'center',
    fontSize: 12,
    color: color.m_black_text,
    textAlign: 'center',
  },
});
