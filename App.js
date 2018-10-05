import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";

import AppNavigator from "./navigation/AppNavigator";
import Colors from "./constants/Colors";
import DynamicIntlProvider from "./containers/DynamicIntlProvider";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <DynamicIntlProvider locale={"en"}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}
            <AppNavigator />
          </View>
        </DynamicIntlProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([
      //   require('./assets/images/robot-dev.png'),
      //   require('./assets/images/robot-prod.png'),
      // ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        Lato: require("./assets/fonts/Lato-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightColor
  }
});
