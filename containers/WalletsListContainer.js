import * as React from "react";
import { connect } from "react-redux";

import WalletListItem from "../components/WalletListItem";

class WalletsListContainer extends React.PureComponent {
  render() {
    const { wallets, onSelectWallet } = this.props;

    return (
      <React.Fragment>
        {wallets.wallets &&
          wallets.wallets.map((item, i) => (
            <WalletListItem
              first={i === 0}
              key={item.name}
              name={item.name}
              balance={item.balance}
              onOpen={() => onSelectWallet(item.id)}
            />
          ))}
      </React.Fragment>
    );
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
