import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import ReciveTab from './tabs/recive'

Navigation.registerComponent('dexm.recive', () => ReciveTab)

Navigation.startTabBasedApp({
  tabs : [
    {
      label: 'Wallets',
      screen: 'dexm.recive',
      title: 'Wallets',
      icon: require('./img/wallets.png'),
    },

    {
      label: 'Messages',
      screen: 'dexm.recive',
      title: 'Contacts',
      icon: require('./img/contacts.png'),
    },
  ],

  appStyle: {
    largeTitle: true,
  }
})
