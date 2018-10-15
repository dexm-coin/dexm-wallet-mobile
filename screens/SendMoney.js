import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { FormattedMessage } from "react-intl";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Fonts from "../constants/Fonts";
import AccentContainer from "../components/AccentContainer";
import Button from "../components/Button";
import SendIcon from "../icons/SendIcon";
import BackButton from "../components/BackButton";
import TextInput from "../components/TextInput";
import DescriptionIcon from "../icons/DescriptionIcon";
import PersonIcon from "../icons/PersonIcon";

import { getWallet, getRecentRecipients } from "../apis/WalletInfo";

export default class SendMoney extends React.Component {
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
    },
    formState: {
      description: "",
      amount: 0,
      recipientDescription: "",
      recipientId: ""
    },
    recents: []
  };

  componentDidMount() {
    const walletId = this.props.navigation.getParam("walletId", null);
    const wallet = getWallet(walletId);
    const recents = getRecentRecipients();

    this.setState({ wallet, recents });
  }

  render() {
    const { navigation } = this.props;
    const { wallet, formState } = this.state;

    return (
      <ScrollView style={styles.scroller}>
        <View style={styles.container}>
          <AccentContainer height={28 * Layout.spacing} waveHeight={23}>
            <BackButton
              style={styles.backButton}
              labelId="send-money.back"
              onClick={() => navigation.pop()}
            />
            <View style={styles.accentContainer}>
              <View style={styles.titleLine}>
                <FormattedMessage id="send-money.title">
                  {msg => <Text style={styles.title}>{msg}</Text>}
                </FormattedMessage>
                <SendIcon size={Layout.spacing * 7} color={Colors.lightColor} />
              </View>
              <Text style={styles.walletName}>{wallet.name}</Text>
            </View>
          </AccentContainer>

          <View style={styles.content}>
            <TextInput
              style={styles.formField}
              labelId="send-money.description"
              value={String(formState.description)}
              onChange={this.handleChangeForm("description")}
              icon={<DescriptionIcon color={Colors.textColor} />}
            />
            <TextInput
              numeric
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.formField}
              labelId="send-money.amount"
              value={String(formState.amount)}
              onChange={this.handleChangeForm("amount")}
              icon={<Text style={styles.iconD}>ⅅ</Text>}
            />
            <TextInput
              style={styles.formField}
              labelId="send-money.recipient-description"
              value={String(formState.recipientDescription)}
              onChange={this.handleChangeForm("recipientDescription")}
              icon={<PersonIcon color={Colors.textColor} />}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.formField}
              labelId="send-money.recipient-id"
              value={String(formState.recipientId)}
              onChange={this.handleChangeForm("recipientId")}
              icon={<PersonIcon color={Colors.textColor} />}
            />
            <View style={styles.actionButtonsContainer}>
              <Button
                style={styles.actionButton}
                labelId="send-money.contracts"
                variant="outlined"
                onClick={() => 0}
              />
              <Button
                style={styles.actionButton}
                labelId="send-money.send"
                variant="filled"
                onClick={() => 0}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }

  handleChangeForm = id => value => {
    this.setState(({ formState }) => ({
      formState: {
        ...formState,
        [id]: value
      }
    }));
  };
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
    margin: Layout.sideMargin
  },
  formField: {
    marginBottom: Layout.spacing * 1.5
  },
  iconD: {
    ...Fonts.default,
    fontWeight: "500",
    fontSize: 21
  },
  actionButtonsContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: Layout.spacing * 2
  },
  actionButton: {
    marginLeft: Layout.spacing * 2
  }
});
