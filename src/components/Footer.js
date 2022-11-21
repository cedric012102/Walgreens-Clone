import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomNavigator}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwesome5 name={'home'} size={25} style={{marginRight: 50}} />
      </TouchableOpacity>
      <FontAwesome5
        name={'prescription-bottle'}
        size={25}
        style={{marginRight: 50}}
      />
      <Ionicons name={'person'} size={25} style={{marginRight: 50}} />
      <FontAwesome5 name={'shopping-bag'} size={25} style={{marginRight: 50}} />
      <FontAwesome name={'photo'} size={25} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigator: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 44,
    paddingRight: 44,
    borderRadius: 35,
    backgroundColor: '#FCFFF7',
    shadowColor: 'rgba(0,0,0,0.25)',
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    width: 407,
    height: 70,
    alignSelf: 'center',
  },
});

export default Footer;
