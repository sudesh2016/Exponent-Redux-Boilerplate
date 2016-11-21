import React, {Component} from 'react';
import {StackNavigation, DrawerNavigation, DrawerNavigationItem}
from '@exponent/ex-navigation';
import {Text, View} from 'react-native';
import Login from '../components/Login';
import Router from '../navigation/Router';

export default class RootRouter extends Component {

  renderHeader = () => (
    <View>
      <Text> Header goes here </Text>
    </View>
  )

  renderTitle = text => (
    <Text>
      {text}
    </Text>
  );

  render() {
    const {actions} = this.props;

    return (
      <DrawerNavigation
        drawerPosition="left"
        renderHeader={this.renderHeader}
        drawerWidth={300}
        initialItem="home">
        <DrawerNavigationItem
          id="home"
          renderTitle={isSelected => this.renderTitle('Home', isSelected)}>
          <StackNavigation
            id="root"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#0084FF',
                tintColor: '#fff'
              }
            }}
            initialRoute={Router.getRoute('home')} />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="logout"
          renderTitle={isSelected => this.renderTitle('Logout', isSelected)}
          title="Logout">
          <Login actions={actions} logout />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}
