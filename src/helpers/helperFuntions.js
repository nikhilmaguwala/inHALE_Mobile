import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {fonts, wp} from './themeHelper';

export const getShortName = (glue) => {
  let initials = glue.replace(/[^a-zA-Z- ]/g, '').match(/\b\w/g);
  return initials.join('');
};

export const capitalize = (input) => {
  let words = input.split(' ');
  let CapitalizedWords = [];
  words.forEach((element) => {
    CapitalizedWords.push(
      element[0].toUpperCase() + element.slice(1, element.length),
    );
  });
  return CapitalizedWords.join(' ');
};

export const ShortNameImage = (props) => {
  return (
    <View
      style={{
        height: wp(15),
        width: wp(15),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.gender === 'Male' ? '#D8E3FF' : '#FFEAD6',
        borderRadius: 10,
      }}>
      <Text
        style={{
          color: props.gender === 'Male' ? '#4B7FFB' : '#FFB167',
          fontSize: 24,
          fontWeight: 'bold',
          fontFamily: fonts.inHaleFont,
        }}>
        {getShortName(props.fullName).toUpperCase()}
      </Text>
    </View>
  );
};

export const getDoctorId = (state) => state?.user?.userDetail?._id.toString();
