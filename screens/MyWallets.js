import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";

import Colors from "../constants/Colors";
import ContentTitle from "../components/ContentTitle";
import Layout from "../constants/Layout";
import PlusIcon from "../icons/PlusIcon";
import TotalBalanceContainer from "../containers/TotalBalanceContainer";
import WalletsListContainer from "../containers/WalletsListContainer";
import { fetchWallets } from "../actions/walletsActions";

class MyWallets extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.doFetch();
  }

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.scroller}>
        <View style={styles.container}>
          <TotalBalanceContainer />
          <View style={styles.content}>
            <ContentTitle titleId="my-wallets.title">
              <TouchableOpacity onPress={() => navigation.push("AddWallet")}>
                <PlusIcon color={Colors.textColor} />
              </TouchableOpacity>
            </ContentTitle>
            <WalletsListContainer
              onSelectWallet={id =>
                navigation.push("WalletView", {
                  walletId: id
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
  content: {
    margin: Layout.sideMargin
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  doFetch: () => dispatch(fetchWallets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWallets);
