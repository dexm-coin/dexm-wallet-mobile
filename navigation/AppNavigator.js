import React from "react";
import { createStackNavigator } from "react-navigation";

import MyWallets from "../screens/MyWallets";
import WalletView from "../screens/WalletView";

export default createStackNavigator({
  MyWallets: { screen: MyWallets },
  WalletView: { screen: WalletView }
});
