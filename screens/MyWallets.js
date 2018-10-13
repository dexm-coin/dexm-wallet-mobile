import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Text
} from "react-native";

import Colors from "../constants/Colors";
import TotalBalanceDisplay from "../components/TotalBalanceDisplay";
import ContentTitle from "../components/ContentTitle";
import Layout from "../constants/Layout";
import PlusIcon from "../icons/PlusIcon";
import WalletListItem from "../components/WalletListItem";
import Divider from "../components/Divider";

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
      <View style={styles.container}>
        <TotalBalanceDisplay balance={totalBalance} />

        <View style={styles.content}>
          <ContentTitle titleId="my-wallets.title">
            <TouchableOpacity onPress={() => {}}>
              <PlusIcon color={Colors.textColor} />
            </TouchableOpacity>
          </ContentTitle>
          <FlatList
            ItemSeparatorComponent={({ highlighted }) => <Divider />}
            data={wallets}
            keyExtractor={item => item.name}
            renderItem={({ item, ...rest }) => (
              <WalletListItem
                key={item.name}
                name={item.name}
                balance={item.balance}
                onOpen={() =>
                  navigation.push("WalletView", {
                    walletId: item.id
                  })
                }
                {...rest}
              />
            )}
          />
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
  content: {
    margin: Layout.sideMargin
  }
});
