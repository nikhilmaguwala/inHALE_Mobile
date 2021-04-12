import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {color, fonts, hp, wp} from '../helpers/themeHelper';
import {useSelector} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';

export const TestScreen = (props) => {
  const patient = props.route.params.patient;
  const userDetail = useSelector((state) => state?.user?.userDetail);
  const profileUrl =
    patient?.gender === 'Male'
      ? require('./../assets/maleProfile.png')
      : require('./../assets/femaleProfile.png');

  const onPick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const onSubmit = () => {
    props.navigation.navigate('TestResult', {
      patient,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello, {userDetail?.firstName}</Text>
      </View>
      <View
        style={{
          width: wp(93),
          paddingVertical: 20,
          paddingLeft: 10,
          marginTop: 20,
          backgroundColor: patient?.gender === 'Male' ? '#EDF1FA' : '#FAF2EA',
          borderRadius: 10,
          flexDirection: 'row',
          shadowColor: '#000000',
          shadowOffset: {width: 3, height: 0},
          shadowOpacity: 0.5,
          shadowRadius: 3,
          elevation: 3,
        }}>
        <View
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={styles.profileImage}>
            <Image
              source={profileUrl}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={{flex: 1, marginLeft: 20, justifyContent: 'center'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  fontFamily: fonts.inHaleFont,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1E1C61',
                }}>
                Patient Name: {patient?.name}
              </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  fontFamily: fonts.inHaleFont,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1E1C61',
                }}>
                Gender: {patient?.gender}
              </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  fontFamily: fonts.inHaleFont,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1E1C61',
                }}>
                Phone No.: {patient?.phoneNumber}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={onPick}>
            <View
              style={{
                height: hp(10),
                width: wp(40),
                marginHorizontal: 5,
                backgroundColor: '#EDF1FA',
                shadowColor: '#000000',
                shadowOffset: {width: 3, height: 3},
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#1E1C61',
                  fontSize: 16,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                (TC)
              </Text>
              <Text
                style={{
                  color: '#1E1C61',
                  fontSize: 16,
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                Trachea
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: hp(10),
                width: wp(40),
                marginHorizontal: 5,
                backgroundColor: '#FAF2EA',
                shadowColor: '#000000',
                shadowOffset: {width: 3, height: 3},
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#1E1C61',
                  fontSize: 16,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                (AL)
              </Text>
              <Text
                style={{
                  color: '#1E1C61',
                  fontSize: 16,
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                Anterior Left
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: hp(10),
                width: wp(40),
                marginHorizontal: 5,
                backgroundColor: '#FAF2EA',
                shadowColor: '#000000',
                shadowOffset: {width: 3, height: 3},
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#1E1C61',
                  fontSize: 16,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                (AR)
              </Text>
              <Text
                style={{
                  color: '#1E1C61',
                  fontSize: 16,
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                Anterior Right
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: hp(10),
                width: wp(40),
                marginHorizontal: 5,
                backgroundColor: '#EDF1FA',
                shadowColor: '#000000',
                shadowOffset: {width: 3, height: 3},
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#1E1C61',
                  fontSize: 16,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                (PL)
              </Text>
              <Text
                style={{
                  color: '#1E1C61',
                  fontSize: 16,
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                Posterior Left
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: hp(10),
                width: wp(40),
                marginHorizontal: 5,
                backgroundColor: '#EDF1FA',
                shadowColor: '#000000',
                shadowOffset: {width: 3, height: 3},
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#1E1C61',
                  fontSize: 16,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                (PR)
              </Text>
              <Text
                style={{
                  color: '#1E1C61',
                  fontSize: 16,
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                Posterior Right
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: hp(10),
                width: wp(40),
                marginHorizontal: 5,
                backgroundColor: '#FAF2EA',
                shadowColor: '#000000',
                shadowOffset: {width: 3, height: 3},
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#1E1C61',
                  fontSize: 16,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                (LL)
              </Text>
              <Text
                style={{
                  color: '#1E1C61',
                  fontSize: 16,
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                Lateral Left
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  height: hp(10),
                  width: wp(40),
                  marginHorizontal: 5,
                  backgroundColor: '#FAF2EA',
                  shadowColor: '#000000',
                  shadowOffset: {width: 3, height: 3},
                  shadowOpacity: 0.5,
                  shadowRadius: 3,
                  elevation: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#1E1C61',
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: fonts.inHaleFont,
                  }}>
                  (LR)
                </Text>
                <Text
                  style={{
                    color: '#1E1C61',
                    fontSize: 16,
                    marginTop: 5,
                    fontWeight: 'bold',
                    fontFamily: fonts.inHaleFont,
                  }}>
                  Lateral Right
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onSubmit}>
            <View
              style={{
                backgroundColor: '#EF716B',
                marginTop: hp(8),
                width: wp(50),
                height: hp(5),
                borderRadius: 20,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                shadowColor: '#000000',
                shadowOffset: {width: 3, height: 3},
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 3,
              }}>
              <Text
                style={{
                  color: color.white,
                  fontSize: 16,
                  fontWeight: 'bold',
                  fontFamily: fonts.inHaleFont,
                }}>
                Get Result
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.white,
  },
  headerContainer: {
    marginTop: hp(8),
    marginBottom: hp(2),
    width: wp(85),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#1E1C61',
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: wp(10),
    alignSelf: 'center',
    fontFamily: fonts.inHaleFont,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});
