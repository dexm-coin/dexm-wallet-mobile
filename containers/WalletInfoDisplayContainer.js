import * as React from "react";
import { connect } from "react-redux";

import WalletInfoDisplay from "../components/WalletInfoDisplay";

class WalletInfoDisplayContainer extends React.PureComponent {
  render() {
    const { wallets, walletId } = this.props;
    const wallet =
      wallets.wallets && wallets.wallets.find(wallet => walletId === wallet.id);
    console.log(wallet);

    return wallet ? (
      <WalletInfoDisplay
        name={wallet.name}
        balance={wallet.balance}
        revenues={wallet.revenues}
        expenses={wallet.expenses}
      />
    ) : null;
  }
}

const mapStateToProps = state => ({
  wallets: state.wallets
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletInfoDisplayContainer);
