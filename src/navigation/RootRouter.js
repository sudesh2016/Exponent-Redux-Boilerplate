import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from '@exponent/ex-navigation';
import { Ionicons } from '@exponent/vector-icons';
import Router from '../navigation/Router';

console.log(Router, 'here in router');
const styles = StyleSheet.create({
  header: {
    padding: 10,
  },
  buttonTitleText: {
    color: '#222',
    fontWeight: 'bold',
    marginLeft: 18
  },
  icon: {
    color: '#999'
  },
  selectedText: {
    color: '#0084FF'
  },
  selectedItemStyle: {
    backgroundColor: '#fff'
  }
});

export default class DrawerNavigationExample extends Component {

  renderHeader = () => (
    <View>
      <Text> Header goes here </Text>
    </View>
  )

  renderTitle = (text: string, isSelected: bool) => (
    <Text style={[styles.buttonTitleText, isSelected ? styles.selectedText : null]}>
      Title Is Here
    </Text>
  );

  renderIcon = (name: string, isSelected: bool) => {
    let extraStyle = {marginTop: 2};
    if (name === 'md-alert') {
      extraStyle = {...extraStyle, marginLeft: -3};
    }
    return (
      <Ionicons
        style={[styles.icon, isSelected ? styles.selectedText : null, extraStyle]}
        name={name}
        size={24}
      />
    );
  };

  render() {
    return (
      <DrawerNavigation
        drawerPosition="left"
        renderHeader={this.renderHeader}
        drawerWidth={300}
        initialItem="home">
        <DrawerNavigationItem
          id="home"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this.renderTitle('Examples', isSelected)}
          renderIcon={isSelected => this.renderIcon('md-apps', isSelected)}>
          <StackNavigation
            id="root"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#0084FF',
                tintColor: '#fff'
              }
            }}
            initialRoute={Router.getRoute('home')}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}
