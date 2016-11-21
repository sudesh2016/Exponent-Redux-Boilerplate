import {NavigationProvider} from '@exponent/ex-navigation';
import {bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';
import React from 'react';
import {StatusBar} from 'react-native';
import configureStore from './configure-store';
import Login from './components/Login';
import Router from './navigation/Router';
import RootRouter from './navigation/RootRouter';
import {fetchData} from './actions';

const store = configureStore();

const Navigation = ({actions}) => (
  <NavigationProvider router={Router}>
    <StatusBar barStyle="light-content" />
    <RootRouter actions={actions} />
  </NavigationProvider>
);

const ValidateAuth = ({user, actions}) => {
  if (user) {
    return <Navigation actions={actions} />;
  }

  return <Login actions={actions} logout={false} />;
};

const mapStateToProps = (state) => {
  const {isFetching, user} = state.data;
  return {
    isFetching,
    user
  };
};

const mapDispatchToProps = dispatch => (
  {
    actions: {
      fetchData: bindActionCreators(fetchData, dispatch)
    }
  }
);

const ConnectedValidateAuth = connect(mapStateToProps, mapDispatchToProps)(ValidateAuth);

const App = () => (
  <Provider store={store}>
    <ConnectedValidateAuth />
  </Provider>
);

export default App;
