import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {fonts} from '../helpers/themeHelper';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: fonts.inHaleFont,
  },
});
