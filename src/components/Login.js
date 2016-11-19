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

const Login = () => (
  <TouchableOpacity style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <Text style={styles.description}>My description</Text>
  </TouchableOpacity>
);

export { Login as default };
