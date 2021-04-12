import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {color, wp, hp, fonts} from '../helpers/themeHelper';
import {useSelector} from 'react-redux';

export const SplashScreen = (props) => {
  const authToken = useSelector((state) => state);
  setTimeout(() => {
    if (authToken.authToken !== null) {
      return props.navigation.navigate('Home');
    } else {
      return props.navigation.navigate('GetStarted');
    }
  }, 5000);
  return (
    <View style={styles.container}>
      <View style={styles.profileImage}>
        <Image
          source={require('./../assets/splash.gif')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.profileText}>
        <Image
          source={require('./../assets/animated_logo.gif')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
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
  profileImage: {
    width: 400,
    height: 400,
  },
  profileText: {
    width: 400,
    height: 200,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});
