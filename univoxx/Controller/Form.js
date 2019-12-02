import React from 'react';
import { Button, TextInput, View, SafeAreaView,Linking } from 'react-native';
import styles from "./styles";
import { Alerts } from "univoxx/Controller/helper/Alerts.js"
import { Constant } from "univoxx/Controller/helper/Constant.js"

export default class Form extends React.Component {
  static navigationOptions = {
    title: "Form",
  };
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "" };
  }
  receivedValue = () => {
    this.setState({ firstName: "", lastName: "" });
  }

  handleEvent = (text, tag) => {
    switch (tag) {
      case '1': this.setState({ firstName: text }); break
      case '2': this.setState({ lastName: text }); break
      default:
        return '0';
    }
  };

  onSubmitClicked = () => {

    if (this.state.firstName == "") {
      Alerts.showAlert(Constant.messageFirstname)
    } else if (this.state.lastName == "") {
      Alerts.showAlert(Constant.messageLastName)
    } else {
      let userName = this.state.firstName + " " + this.state.lastName;
      Linking.openURL('https://google.com/search?q=' + userName)
    }
  };
  render() {
    return (
      <SafeAreaView>
        <View>
          <View style={styles.viewContain}>
            <TextInput
              style={styles.textStyle}
              placeholder={Constant.firstnamePlaceholder}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.handleEvent(text, "1")}
              value={this.state.firstName}
              keyboardType='default'
            />
          </View>
          <View style={styles.viewContain}>
            <TextInput
              style={styles.textStyle}
              placeholder={Constant.lastnamePlaceholder}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.handleEvent(text, "2")}
              value={this.state.lastName}
              keyboardType='default'
            />
          </View>
          <View style={styles.viewContainButton}>
            <Button style={styles.buttonStyle}
              onPress={this.onSubmitClicked}
              title={Constant.submit}
              color="#fff"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

