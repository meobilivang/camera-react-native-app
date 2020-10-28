import React from "react";
import { 
    View, 
    StyleSheet,
    Text,  
} from 'react-native';
import RouteName from "../Routes/RouteName";
import color from "../utils/color";
import { DocumentSection } from "./Common/DocumentSection";

const DOCUMENTS = ["CMT/CCD", "Hộ chiếu"];

export default class extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 
                <Text style={{ textAlign: 'center', color: color.m_black_text, fontSize: 20, fontWeight: 'bold' }}>
                    Loại giấy tờ
                </Text>
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            documents: []
        }
    }
    
    componentDidMount() {
        this.setState({ documents: DOCUMENTS });
    }

    navigateToDocument = (document) => {
        this.props.navigation.navigate(RouteName.DocumentIdInput, {
            documentType: document
        })
    }

    render() {
        return(
            <View style={styles.container}>
                    <Text style={styles.title}>Vui lòng chọn loại hồ sơ: </Text>
                    <DocumentSection
                        documentName={DOCUMENTS[0]} 
                        onPress={() =>this.navigateToDocument(DOCUMENTS[0])}
                    />
                    <DocumentSection
                        documentName={DOCUMENTS[1]} 
                        onPress={() => this.navigateToDocument(DOCUMENTS[1])}
                    />
            </View>
        );
    }
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.m_gray_bg,
    },
    title: {
        fontSize: 30,
        flexDirection: 'row',
    },
});