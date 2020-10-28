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

const INFO = 
{
    "id": "8273729288",
    "name": "Nguyen Tuan Quang",
    "curr_address": "8 Dinh Tien Hoang",
    "birthday": "06/09/1982",
    "origin": "Hai Phong",
};

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
        this.documentType = "";
    }

    UNSAFE_componentWillMount() {
        this.loadData();
    }

    componentDidMount() {
    }

    loadData = () => {
        this.setState({ data : INFO });
        this.documentType = this.props.navigation.getParam("documentType");
    };

    navigateToFaceCamera = () => {
        // this.props.navigation.navigate(RouteName.DocumentPicture, {
        // });
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.topWrapper}>
                    <Text style={styles.title}>{"Thông tin trên " + this.documentType}</Text>
                </View> 
                <View style={styles.midWrapper}>
                    <Text style={styles.desc}>{"- Số "+ this.documentType + " : " + this.state.data.id + "."}</Text>
                    <Text style={styles.desc}>{"- Tên khách hàng: " + this.state.data.name + "."}</Text>
                    <Text style={styles.desc}>{"-  Ngày tháng năm sinh: " + this.state.data.birthday + "."}</Text>
                    <Text style={styles.desc}>{"-  Địa chỉ thường trú: " + this.state.data.curr_address + "."}</Text>
                    <Text style={styles.desc}>{"-  Quê quán: " + this.state.data.origin + "."}</Text>
                </View>
                <ButtonCustomized 
                    onPress={() => this.navigateToFaceCamera()}
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