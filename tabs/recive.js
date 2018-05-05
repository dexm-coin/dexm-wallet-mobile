import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class ReciveTab extends React.Component {
  static navigatorButtons = {
    rightButtons: [
      {
        icon: require('../img/navicon_add.png'),
        id: 'add',
      }
    ]
  };


  render() {
    return (
      <ScrollView>
        <WalletCard name="Savings" balance='1337.00'/>
        <WalletCard name="Dapps" balance='10.00'/>
        <WalletCard name="Donations" balance='0.00'/>
      </ScrollView>
    );
  }
}

class WalletCard extends React.Component {
  render() {
    return(
      <View style={{
        marginLeft: 12,
        marginRight: 12,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1,
      }}>
        <Text style={{
          paddingTop: 12,
          fontWeight: 'bold',
          fontSize: 18,
        }}>{this.props.name}</Text>

        <Text style={{
          textAlign: 'right',
          paddingBottom:2,
      }}>{this.props.balance + ' ⅅ'}</Text>

      </View>
    )
  }
}

export default ReciveTab;
