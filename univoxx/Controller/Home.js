import React from 'react';
import { NativeModules, Button, TextInput, View, SafeAreaView, ScrollView } from 'react-native';
import styles from "./styles";
import { Constant } from "univoxx/Controller/helper/Constant.js"


export default class Home extends React.Component {
    static navigationOptions = {
        title: "Univoxx",
    };
    constructor(props) {
        super(props);
        var currentDate = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
        this.launchedApp(Math.floor(Date.now()), currentDate)

    }

    onGoogleClicked = () => {
        NativeModules.UnixBridge.onInitView();
    };

    onCnnClicked = () => {
        NativeModules.UnixBridge.onInitCnnView();
    };

    onReactClicked = () => {
        const { navigate } = this.props.navigation;
        navigate("FormScreen");
    };

    launchedApp = (currentTimestamp, currentDate) => {
        fetch(`${'http://192.168.0.9:3000'}`, {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
            body: JSON.stringify({ timestamp: currentTimestamp, date: currentDate })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console(responseJson)
            })
            .catch((error) => {
                console(error)
            });
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <View style={styles.viewContainButton}>
                        <Button style={styles.buttonStyle}
                            onPress={this.onGoogleClicked}
                            title={Constant.googleTitle}
                            color="#fff"
                        />
                    </View>
                    <View style={styles.viewContainButton}>
                        <Button style={styles.buttonStyle}
                            onPress={this.onCnnClicked}
                            title={Constant.cnnTitle}
                            color="#fff"
                        />
                    </View>
                    <View style={styles.viewContainButton}>
                        <Button style={styles.buttonStyle}
                            onPress={this.onReactClicked}
                            title={Constant.reactNativeTitle}
                            color="#fff"
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

