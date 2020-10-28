import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    ImageBackground
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import RouteName from '../Routes/RouteName';
import color from '../utils/color';
import images from "../utils/images";
import { ButtonCustomized } from './Common/ButtonCustomized';

export default class TakePicture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: null,
        };
        this.picturesCollection = [];
        this.documentType = "";
    }

    UNSAFE_componentWillMount() {
        this.loadData();
    }

    loadData() {
        this.documentType = this.props.navigation.getParam("documentType");
    }

    useCamera = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);

            if (data.uri) {
                this.setState({ picture: data });
            }
        }
    };

    reCapturePhoto = () => {
        this.setState({ picture: null });
    };

    saveCapturedPhoto = () => {
        this.picturesCollection.push(this.state.picture);
        console.log(this.picturesCollection.length);
        //Calling API
        if (this.picturesCollection.length === 2) {
            console.log("NAV");
            this.props.navigation.navigate(RouteName.DocumentDetail, {
                documentType: this.documentType
            });
        }
        this.setState({ picture: null });
    }

    renderWaitingScreen() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'lightgreen',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <Text style={{ fontSize: 20 }}>Vui lòng đợi trong giây lát...</Text>
            </View>
        );
    }

    renderCamera() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.documentTypeWrapper}>
                    <Text style={styles.documentTypeText}>{this.documentType}</Text>
                    { this.picturesCollection.length === 0 ? <Text style={styles.documentTypeText}>{ "Mặt trước"}</Text> 
                        : <Text style={styles.documentTypeText}>{ "Mặt sau"}</Text> }
                </View>
                <View style={styles.cameraWrapper}>
                    <RNCamera
                        ref={cam => { this.camera = cam }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        captureAudio={false}
                        notAuthorizedView={this.notAuthorizedView()}
                    >
                        <View style={styles.cameraFrame}></View>
                    </RNCamera>
                </View>
                <View style={styles.noticeWrapper}>
                    <Text style={styles.noticeText}>
                        Vui lòng chụp theo khung ảnh và chụp nơi có đủ ảnh sáng để đảm bảo chất lượng.
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginTop: 40 }}>
                    <TouchableOpacity
                        style={styles.capturePhoto}
                        onPress={this.useCamera.bind(this)}
                    >
                        <Image
                            source={images.camera_button}
                            style={styles.capturePhotoIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    renderImage() {
        return (
            <View style={styles.wrapper}>
                <ImageBackground
                    source={{ uri: this.state.picture.uri }}
                    style={styles.previewAfterTakePicture}
                >
                </ImageBackground>
                <View style={styles.documentTypeWrapper}>
                    <Text style={styles.documentTypeText}>{this.documentType}</Text>
                    { this.picturesCollection.length === 0 ? <Text style={styles.documentTypeText}>{ "Mặt trước"}</Text> 
                        : <Text style={styles.documentTypeText}>{"Mặt sau"}</Text> }
                </View>
                <ButtonCustomized 
                    onPress={() => this.saveCapturedPhoto()}
                    labelText={"Tiếp theo"}
                />
                <ButtonCustomized 
                    onPress={() => this.reCapturePhoto()}
                    labelText={"Chụp lại"}
                    redButton={true}
                />
            </View>
        );
    }

    notAuthorizedView() {
        return (
            <View>
                <Text style={styles.message}>
                    Vui lòng trao quyền sử dụng Camera trong Cài đặt.
                </Text>
                {/* <TouchableOpacity
                    style={styles.exitCamera}
                    onPress={() => this.doNothing()}
                >
                    <Text style={styles.exitCameraText}>Quay lại</Text>
                </TouchableOpacity> */}
            </View>
        );
    }

    render() {
        return (
            <View style={styles.wrapper}>
                { (RNCamera.Constants.CameraStatus === 'NOT_AUTHORIZED') && this.notAuthorizedCamera() }
                {this.state.picture ? this.renderImage() : this.renderCamera()}
            </View>
        );
    }
}

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black",
    },
    preview: {
        justifyContent: 'center',
        alignItems: 'center',
        height: fullHeight / 2 ,
        width: fullWidth,
    },
    previewAfterTakePicture: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 300,
        width: fullWidth - 20,
    },
    documentTypeText: {
        color: "white",
        fontSize: 18,
        textAlign: 'center',
    },
    documentTypeWrapper: {
        marginTop: 40,
    },
    cameraWrapper: {
        height: fullHeight - (fullHeight / 3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    capturePhoto: {
        width: 70,
        height: 70,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 30,
        marginBottom: 20,
        bottom: 30,
    },
    savePhotoButton: {
        marginTop: 30,
        marginBottom: 30,
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#fff',
        borderColor: '#fff',
        shadowRadius: 10,
        shadowColor: "rgba(2, 72, 109, 0.2)",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 10 },
        height: 50,
        width: fullWidth / 3,
        borderWidth: 2,
    },
    savePhotoText: {
        fontWeight: "400",
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
    },
    capturePhotoIcon: {
        height: 40,
        width: 40,
        alignSelf: 'center',
    },
    message: {
        fontSize: 15,
        textAlign: 'center',
    },
    exitCamera: {
        marginTop: 10,
        marginBottom: 30,
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: color.m_button_bg,
        borderColor: '#fff',
        shadowRadius: 10,
        shadowColor: "rgba(2, 72, 109, 0.2)",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 10 },
        height: 50,
        width: fullWidth / 3,
        borderWidth: 2,
        alignSelf: 'center'
    },
    exitCameraText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500'
    },
    noticeWrapper: {
        marginVertical: 20,
    },
    noticeText: {
        textAlign: 'center',
        marginHorizontal: 5,
        color: "white",
    },
    cameraFrame: {
        width: fullWidth - 20,
        height: 250,
        borderRadius: 0,
        borderWidth: 3,
        borderColor: color.m_border,
    },
})