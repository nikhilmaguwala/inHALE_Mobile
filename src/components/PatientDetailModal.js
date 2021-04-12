import React, {useEffect, useState} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from 'react-native';
import {color, fonts, hp, wp} from '../helpers/themeHelper';
import Icon from 'react-native-vector-icons/Feather';
import {capitalize} from '../helpers/helperFuntions';
import {useDispatch} from 'react-redux';
import {getCaseHistory} from '../Redux/Actions/PatientActions';
import moment from 'moment';

export const PatientDetail = ({visible, closeModal, patient, onStart}) => {
  const dispatch = useDispatch();
  const [cases, setCases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCases();
  }, [patient]);
  const getCases = () => {
    if (patient) {
      dispatch(getCaseHistory(patient?.id.toString()))
        .then((res) => {
          setCases(res);
          setIsLoading(false);
        })
        .catch((e) => {
          setCases([]);
          setIsLoading(false);
        });
    }
  };
  const getDate = (dateStr) => moment(dateStr).format('D');
  const getMonth = (dateStr) => moment(dateStr).format('MMM').toUpperCase();
  const renderCase = ({item}) => {
    return (
      <View
        style={{
          width: wp(75),
          marginTop: 10,
          alignSelf: 'center',
          paddingVertical: 15,
          marginVertical: 5,
          paddingHorizontal: 10,
          backgroundColor: '#EDF1FA',
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: wp(15),
            width: wp(15),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D8E3FF',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: '#4B7FFB',
              fontSize: 24,
              fontWeight: 'bold',
              fontFamily: fonts.inHaleFont,
            }}>
            {getDate(item?.createdAt)}
          </Text>
          <Text
            style={{
              color: '#4B7FFB',
              fontSize: 17,
              fontFamily: fonts.inHaleFont,
            }}>
            {getMonth(item?.createdAt)}
          </Text>
        </View>
        <View style={{marginLeft: 20, justifyContent: 'center'}}>
          <Text
            style={{
              color: '#1E1C61',
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: fonts.inHaleFont,
            }}>
            {capitalize(item?.diagnosis)}
          </Text>
        </View>
      </View>
    );
  };
  const getCaseList = () => {
    if (cases.length === 0) {
      return (
        <View
          style={{
            marginVertical: 20,
            alignSelf: 'center',
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#F32013',
              fontFamily: fonts.inHaleFont,
              fontSize: 20,
              opacity: 0.5,
            }}>
            No Case History
          </Text>
        </View>
      );
    }
    return (
      <FlatList
        data={cases}
        style={{marginTop: 10}}
        renderItem={renderCase}
        keyExtractor={(item) => item._id}
      />
    );
  };
  const onClose = () => {
    setCases([]);
    closeModal();
  };
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
            <TouchableOpacity onPress={onClose}>
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
                {patient && patient?.phoneNumber.toString()}
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
          {isLoading ? (
            <View style={styles.profileImage}>
              <Image
                source={require('./../assets/appLoading.gif')}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          ) : (
            getCaseList()
          )}
          <TouchableOpacity
            onPress={() => {
              onStart(patient);
            }}>
            <View
              style={{
                backgroundColor: '#EF716B',
                marginVertical: 20,
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
    alignSelf: 'center',
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
