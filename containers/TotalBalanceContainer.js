import * as React from "react";
import { connect } from "react-redux";

import TotalBalanceDisplay from "../components/TotalBalanceDisplay";

class WalletsListContainer extends React.PureComponent {
  render() {
    const { wallets } = this.props;
    const totalBalance = wallets.wallets
      ? wallets.wallets.reduce((sum, wallet) => sum + wallet.balance, 0)
      : 0;

    return <TotalBalanceDisplay balance={totalBalance} />;
  }
}

const mapStateToProps = state => ({
  wallets: state.wallets
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletsListContainer);
