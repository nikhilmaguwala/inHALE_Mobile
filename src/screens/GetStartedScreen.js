import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {color, wp, hp, fonts} from '../helpers/themeHelper';

export const GetStartedScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>Welcome to inHALE...</Text>
        <Text style={styles.headerSubText}>
          Lorem ipsum dolor amet, consectetur adipiscing inet deli
        </Text>
        <View style={styles.btnMainContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require('./../assets/getstartedAsset.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.white,
  },
  topContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  headerText: {
    color: '#1E1C61',
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: wp(10),
    alignSelf: 'flex-start',
    fontFamily: fonts.inHaleFont,
  },
  headerSubText: {
    color: '#1E1C61',
    fontSize: 18,
    marginTop: 20,
    marginHorizontal: wp(10),
    alignSelf: 'flex-start',
    fontFamily: fonts.inHaleFont,
  },
  image: {
    flex: 0.6,
    width: wp(100),
    height: hp(55),
  },
  btnText: {
    color: color.white,
    fontSize: 18,
    fontFamily: fonts.inHaleFont,
    fontWeight: 'bold',
  },
  btnContainer: {
    width: wp(39),
    height: hp(5),
    backgroundColor: '#EF716B',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnMainContainer: {
    marginTop: 20,
    marginHorizontal: wp(10),
    alignSelf: 'flex-start',
  },
});
