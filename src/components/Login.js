import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0, 0, 0, .1)',
    paddingVertical: 10,
    paddingHorizontal: 14
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    margin: 2
  },

  description: {
    fontSize: 12,
    color: '#888',
    margin: 2
  }
});

class Login extends React.Component {

  componentDidMount() {
    const {logout, actions} = this.props;

    if (logout) {
      actions.fetchData(null);
    }
  }

  render() {
    const {actions} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => actions.fetchData({user: 'john doe'})}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.description}>My description</Text>
      </TouchableOpacity>
    );
  }
}

export default Login;
