import RouteName from "./RouteName";
import { 
    createAppContainer, 
    createStackNavigator 
} from "react-navigation";
import PhoneAuthScreen from "../Screens/PhoneAuthScreen";
import SignInScreen from "../Screens/SignInScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import DocumentSelectScreen from "../Screens/DocumentSelectScreen";
import DocumentIdInputScreen from "../Screens/DocumentIdInputScreen";
import TutorialScreen from "../Screens/TutorialScreen";
import DocumentPictureScreen from "../Screens/DocumentPictureScreen";
import DocumentDetailScreen from "../Screens/DocumentDetailScreen";

const AuthNavigation = createStackNavigator(
{
    [RouteName.PhoneAuth]: {
        screen: PhoneAuthScreen,
    },
    [RouteName.SignIn]: {
        screen: SignInScreen,
    },
    [RouteName.SignUp]: {
        screen: SignUpScreen,
    },
    [RouteName.DocumentSelect]: {
        screen: DocumentSelectScreen,
        navigationOptions: {
            header: null
        }
    },
    [RouteName.DocumentIdInput]: {
        screen: DocumentIdInputScreen
    },
    [RouteName.Tutorial]: {
        screen: TutorialScreen,
        navigationOptions: {
            header: null
        }
    },
    [RouteName.DocumentPicture]: {
        screen: DocumentPictureScreen,
        navigationOptions: {
            header: null
        }
    },
    [RouteName.DocumentDetail]: {
        screen: DocumentDetailScreen,
        navigationOptions: {
            header: null
        }
    },
},
    { initialRouteName: RouteName.PhoneAuth },
);

AuthNavigation.navigationOptions = ({ navigation }) => {
    let header = null;
    if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
            if (route.routeName === RouteName.SignIn 
                || route.routeName === RouteName.SignUp) { 
                    header = true
            } else header = false 
        })
    }
    return {
        header
    };
};

export default {
    mainNavigationFlow: createAppContainer(AuthNavigation)
};