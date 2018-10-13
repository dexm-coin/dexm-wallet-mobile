import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Colors from "../constants/Colors";
import ContentTitle from "../components/ContentTitle";
import Layout from "../constants/Layout";
import WalletInfoDisplay from "../components/WalletInfoDisplay";
import AccentContainer from "../components/AccentContainer";
import Divider from "../components/Divider";
import Button from "../components/Button";
import SendIcon from "../icons/SendIcon";
import ReceiveIcon from "../icons/ReceiveIcon";
import BackButton from "../components/BackButton";
import ActivityElement from "../components/ActivityElement";

import { getWallet } from "../apis/WalletInfo";

export default class WalletView extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    wallet: {
      id: "",
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
                  inverted
                  icon={<ReceiveIcon receive color={Colors.lightColor} />}
                  onClick={() =>
                    navigation.push("ReceiveMoney", {
                      walletId: wallet.id
                    })
                  }
                />
                <Button
                  style={styles.actionButton}
                  labelId="wallet-view.send"
                  variant="filled"
                  inverted
                  icon={<SendIcon color={Colors.lightColor} />}
                  onClick={() =>
                    navigation.push("SendMoney", {
                      walletId: wallet.id
                    })
                  }
                />
              </View>
            </View>
          </AccentContainer>

          <View style={styles.content}>
            <ContentTitle titleId="wallet-view.title" />
            <View style={styles.list}>
              {wallet.activity.map((item, i) => (
                <ActivityElement
                  first={i === 0}
                  last={i === wallet.activity.length - 1}
                  key={item.description + item.recipientid + item.timestamp}
                  description={item.description}
                  amount={item.amount}
                  recipient={item.recipientDescription}
                  date={item.timestamp}
                />
              ))}
            </View>
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
  },
  list: {
    marginLeft: Layout.spacing,
    marginRight: Layout.spacing
  }
});
