import {
  NavigationProvider
} from '@exponent/ex-navigation';

import React from 'react';
import {
  StatusBar
} from 'react-native';
import Router from './navigation/Router';
import RootRouter from './navigation/RootRouter';

class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar barStyle="light-content" />
        <RootRouter />
      </NavigationProvider>
    );
  }
}

export default App;
