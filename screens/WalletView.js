import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import ContentTitle from "../components/ContentTitle";
import Layout from "../constants/Layout";
import PlusIcon from "../icons/PlusIcon";
import WalletInfoDisplay from "../components/WalletInfoDisplay";
import AccentContainer from "../components/AccentContainer";
import Divider from "../components/Divider";
import Button from "../components/Button";
import SendIcon from "../icons/SendIcon";
import ReceiveIcon from "../icons/ReceiveIcon";

import { getWallet } from "../apis/WalletInfo";
import BackButton from "../components/BackButton";

export default class WalletView extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    wallet: {
      name: "",
      balance: 0
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
      <View style={styles.container}>
        <AccentContainer height={55 * Layout.spacing} waveHeight={23}>
          <BackButton
            style={styles.backButton}
            labelId="my-wallets.title"
            onClick={() => navigation.pop()}
          />
          <View style={styles.accentContainer}>
            <WalletInfoDisplay
              name={wallet.name}
              balance={wallet.balance}
              revenues={wallet.revenues}
              expenses={wallet.expenses}
            />
            <Divider accent />
            <View style={styles.actionButtonsContainer}>
              <Button
                style={styles.actionButton}
                labelId="wallet-view.receive"
                variant="outlined"
                icon={<ReceiveIcon receive color={Colors.lightColor} />}
              />
              <Button
                style={styles.actionButton}
                labelId="wallet-view.send"
                variant="filled"
                icon={<SendIcon color={Colors.lightColor} />}
              />
            </View>
          </View>
        </AccentContainer>

        <View style={styles.content}>
          <ContentTitle titleId="wallet-view.title">
            <TouchableOpacity onPress={() => {}}>
              <PlusIcon color={Colors.textColor} />
            </TouchableOpacity>
          </ContentTitle>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightColor
  },
  accentContainer: {
    flex: 1,
    marginLeft: Layout.sideMargin,
    marginRight: Layout.sideMargin,
    justifyContent: "center"
  },
  backButton: {
    marginTop: Layout.spacing * 2
    // marginBottom: Layout.spacing * 2.5
  },
  actionButtonsContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: Layout.spacing * 2
  },
  actionButton: {
    marginLeft: Layout.spacing * 2
  },
  content: {
    margin: Layout.sideMargin
  }
});
