import React from "react";
import { 
    View, 
    StyleSheet,
    Text,
    Dimensions,
    FlatList  
} from 'react-native';
import color from "../utils/color";
import { ButtonCustomized } from "./Common/ButtonCustomized";
import RouteName from "../Routes/RouteName";

const REQUIREMENTS = 
[
    "Giấy tờ còn hạn sử dụng. Là hình gốc, không scan và photocopy",
    "Chụp trong môi trường đủ sáng",
    "Đảm bảo ảnh rõ nét, không bị mờ loà"
];

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documentType: "",
        }
        this.requirements = [];
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        this.setState({ documentType : this.props.navigation.getParam("documentType") });
        this.requirements =  REQUIREMENTS;
    };

    navigateToDocCamera = () => {
        this.props.navigation.navigate(RouteName.DocumentPicture, {
            documentType: this.state.documentType
        });
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.topWrapper}>
                    <Text style={styles.title}>Hướng dẫn</Text>
                    <Text style={styles.title}>{"Chụp ảnh " + this.state.documentType}</Text>
                </View> 
                <View style={styles.midWrapper}>
                    <Text style={styles.desc}>- {REQUIREMENTS[0]}.</Text>
                    <Text style={styles.desc}>- {REQUIREMENTS[1]}.</Text>
                    <Text style={styles.desc}>- {REQUIREMENTS[2]}.</Text>
                </View>
                <ButtonCustomized 
                    onPress={() => this.navigateToDocCamera()}
                    labelText={"Đã hiểu"}
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
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },  
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    desc: {
        fontSize: 20,
        marginBottom: 10,
    },
    midWrapper: {
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },  
});