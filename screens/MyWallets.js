import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";

import Colors from "../constants/Colors";
import ContentTitle from "../components/ContentTitle";
import Layout from "../constants/Layout";
import PlusIcon from "../icons/PlusIcon";
import TotalBalanceDisplay from "../components/TotalBalanceDisplay";
import WalletListItem from "../components/WalletListItem";

import { getWallets, getTotalBalance } from "../apis/WalletInfo";

export default class MyWallets extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    wallets: [],
    totalBalance: 0
  };

  componentDidMount() {
    const wallets = getWallets();
    const totalBalance = getTotalBalance();

    this.setState({ wallets, totalBalance });
  }

  render() {
    const { navigation } = this.props;
    const { wallets, totalBalance } = this.state;

    return (
      <ScrollView style={styles.scroller}>
        <View style={styles.container}>
          <TotalBalanceDisplay balance={totalBalance} />

          <View style={styles.content}>
            <ContentTitle titleId="my-wallets.title">
              <TouchableOpacity
                onPress={() =>
                  navigation.push("AddWallet", {
                    stage: "InsertName"
                  })
                }
              >
                <PlusIcon color={Colors.textColor} />
              </TouchableOpacity>
            </ContentTitle>
            {wallets.map((item, i) => (
              <WalletListItem
                first={i === 0}
                key={item.name}
                name={item.name}
                balance={item.balance}
                onOpen={() =>
                  navigation.push("WalletView", {
                    walletId: item.id
                  })
                }
              />
            ))}
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
  content: {
    margin: Layout.sideMargin
  }
});
