import React, {useState} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {color, fonts, hp, wp} from '../helpers/themeHelper';
import Icon from 'react-native-vector-icons/Feather';
import {capitalize} from '../helpers/helperFuntions';

export const PatientDetail = ({visible, closeModal, patient}) => {
  const profileUrl =
    patient?.gender === 'Male'
      ? require('./../assets/maleProfile.png')
      : require('./../assets/femaleProfile.png');
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        <View
          style={{
            marginVertical: hp(10),
            marginHorizontal: wp(7),
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            flex: 1,
          }}>
          <View style={styles.floatingMenuButtonStyle}>
            <TouchableOpacity onPress={closeModal}>
              <View style={styles.addButtonContainer}>
                <Icon name={'x'} color="#FFFFFF" size={12} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{alignSelf: 'center', margin: 30}}>
            <View style={styles.profileImage}>
              <Image
                source={profileUrl}
                style={styles.image}
                resizeMode="center"
              />
            </View>
            {/*<View style={styles.active} />*/}
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.text, {fontWeight: '200', fontSize: 36}]}>
              {patient && capitalize(patient?.name)}
            </Text>
          </View>
          <View style={styles.statsContainer}>
            <View
              style={[
                styles.statsBox,
                {
                  borderColor: '#DFD8C8',
                  borderRightWidth: 1,
                },
              ]}>
              <Text style={[styles.text, {fontSize: 24}]}>
                {patient?.phoneNumber.toString()}
              </Text>
              <Text style={[styles.text, styles.subText]}>Phone No.</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={[styles.text, {fontSize: 24}]}>
                {patient?.gender}
              </Text>
              <Text style={[styles.text, styles.subText]}>Gender</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => console.log('123')}>
            <View
              style={{
                backgroundColor: '#EF716B',
                marginVertical: 30,
                width: wp(50),
                height: hp(5),
                borderRadius: 20,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: color.white,
                  fontSize: 16,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                Start Test
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addButtonContainer: {
    marginLeft: 10,
    height: wp(7),
    width: wp(7),
    backgroundColor: '#4B7FFB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingMenuButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 999,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  active: {
    backgroundColor: '#34FFB9',
    position: 'absolute',
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    fontFamily: fonts.inHaleFont,
    color: '#52575D',
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
});
