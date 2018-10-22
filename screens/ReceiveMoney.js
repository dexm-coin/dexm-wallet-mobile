import React from "react";
import { StyleSheet, View, ScrollView, Text, Share } from "react-native";
import { FormattedMessage } from "react-intl";
import QRCode from "react-native-qrcode";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";
import AccentContainer from "../components/AccentContainer";
import Button from "../components/Button";
import ReceiveIcon from "../icons/ReceiveIcon";
import BackButton from "../components/BackButton";

import { getWallet } from "../apis/walletInfo";

export default class ReceiveMoney extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    wallet: {
      name: "",
      balance: 0,
      revenues: 0,
      expenses: 0,
      activity: []
    }
  };

  componentDidMount() {
    const walletId = this.props.navigation.getParam("walletId", null);
    const wallet = getWallet(walletId);

    this.setState({ wallet });
  }

  render() {
    const { navigation } = this.props;
    const { wallet } = this.state;

    return (
      <ScrollView style={styles.scroller}>
        <View style={styles.container}>
          <AccentContainer height={28 * Layout.spacing} waveHeight={23}>
            <BackButton
              style={styles.backButton}
              labelId="receive-money.back"
              onClick={() => navigation.pop()}
            />
            <View style={styles.accentContainer}>
              <View style={styles.titleLine}>
                <FormattedMessage id="receive-money.title">
                  {msg => <Text style={styles.title}>{msg}</Text>}
                </FormattedMessage>
                <ReceiveIcon
                  size={Layout.spacing * 7}
                  color={Colors.lightColor}
                />
              </View>
              <Text style={styles.walletName}>{wallet.name}</Text>
            </View>
          </AccentContainer>

          <View style={styles.content}>
            <View style={styles.qr}>
              <QRCode
                value={wallet.id}
                size={Layout.spacing * 30}
                bgColor={Colors.lightColor}
                fgColor={Colors.accentColor}
              />
            </View>
            <Text style={styles.walletId}>{wallet.id}</Text>
            <Button
              style={styles.actionButton}
              labelId="receive-money.share"
              variant="filled"
              onClick={() =>
                Share.share({
                  title: wallet.description,
                  message: wallet.id,
                  url: wallet.id
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
    backgroundColor: Colors.lightColor
  },
  container: {
    flex: 1,
    backgroundColor: Colors.lightColor,
    marginBottom: Layout.endMargin
  },
  accentContainer: {
    flex: 1,
    marginLeft: Layout.sideMargin,
    marginRight: Layout.sideMargin,
    justifyContent: "center"
  },
  titleLine: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: Layout.spacing * 2
  },
  backButton: {
    marginTop: Layout.spacing * 2
    // marginBottom: Layout.spacing * 2.5
  },
  title: {
    ...Fonts.defaultAccent,
    fontWeight: "600",
    fontSize: 38
  },
  walletName: {
    ...Fonts.defaultAccent,
    fontWeight: "600",
    fontSize: 22
  },
  content: {
    marginLeft: Layout.sideMargin,
    marginRight: Layout.sideMargin,
    alignItems: "center"
  },
  qr: {
    margin: Layout.spacing * 4
  },
  walletId: {
    ...Fonts.default,
    fontWeight: "500",
    fontSize: 21,
    fontStyle: "italic",
    marginBottom: Layout.spacing * 2
  },
  actionButton: {}
});
