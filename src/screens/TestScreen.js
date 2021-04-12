import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {color} from '../helpers/themeHelper';

export const TestScreen = (props) => {
  console.log(props.route.params.patient);
  return (
    <View style={styles.container}>
      <Text> Test Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
  },
});
