import React from "react";
import { 
    View, 
    StyleSheet,
    Text,
    Dimensions,  
} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import color from "../utils/color";
import { DocumentSection } from "./Common/DocumentSection";
import { InputBox } from "./Common/InputBox";
import { ButtonCustomized } from "./Common/ButtonCustomized";
import RouteName from "../Routes/RouteName";

export default class extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 
                <Text style={{ textAlign: 'center', color: color.m_black_text, fontSize: 20, fontWeight: 'bold' }}>
                    Xác minh thông tin
                </Text>
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            inputId: "",
            documentType: "",
            errorMessage: "",
        }
    }

    componentDidMount() {
        this.setState({ documentType : this.props.navigation.getParam("documentType") });
    }

    validInput = () => {
        return this.state.inputId.length > 3;
    }

    navigateToTutorial = () => {
        if (this.validInput()) {
            this.setState({ errorMessage: '' })
            this.props.navigation.navigate(RouteName.Tutorial, {
                documentType: this.state.documentType
            });
        } else this.setState({ errorMessage: "Vui lòng điền lại !" })
    }

    render() {
        return(
            <View style={styles.container}>
                    <View style={styles.topWrapper}>
                        <Text style={styles.title}>Xác minh thông tin</Text>
                        <Text style={styles.desc}>
                            {"Bạn vui lòng nhập số " + this.state.documentType +" để xác nhận thông tin."}
                        </Text>
                    </View>
                    <TextInput
                        keyboardType='number-pad'
                        placeholder={"Số " + this.state.documentType}
                        style={styles.inputIdText}
                        onChangeText={num => {
                            this.setState({ inputId: num } );
                        }}
                    />
                    { this.state.errorMessage != '' && <Text style={styles.errorMessage}>{this.state.errorMessage}</Text> }
                    <ButtonCustomized 
                        onPress={() => this.navigateToTutorial(this.state.documentType)}
                        labelText={"Tiếp theo"}
                    />
            </View>
        );
    }
        
}

const fullWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.m_gray_bg,
    },
    topWrapper: {
        alignContent: 'space-between',
        justifyContent: 'flex-start',
    },  
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 25,
    },
    desc: {
        fontSize: 15,
        marginBottom: 20,
    },
    inputIdText: {
        fontSize: 20,
        letterSpacing: 1,
        width: fullWidth - 70,
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
      errorMessage: {
        marginTop: 5,
        color: color.defaultRed,
        fontSize: 20,
        textAlign: 'center'
    }
});