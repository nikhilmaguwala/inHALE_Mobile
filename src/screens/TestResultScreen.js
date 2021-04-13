import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {color, fonts, hp, wp} from '../helpers/themeHelper';
import {useDispatch, useSelector} from 'react-redux';
import {addCase, predictResult} from '../Redux/Actions/CaseAction';
import {ResultAccordian} from '../components/ResultAccordian';

export const TestResultScreen = (props) => {
  const patient = props.route.params.patient;
  const dispatch = useDispatch();
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const userDetail = useSelector((state) => state?.user?.userDetail);
  const profileUrl =
    patient?.gender === 'Male'
      ? require('./../assets/maleProfile.png')
      : require('./../assets/femaleProfile.png');

  useEffect(() => {
    dispatch(predictResult('0'))
      .then((res) => {
        setResult(res);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getResult = (obj) => {
    return Object.keys(obj)[0];
  };

  const onConfirm = (diagnosis) => {
    dispatch(addCase(diagnosis, patient?.id))
      .then((res) => {
        props.navigation.navigate('Home');
      })
      .catch((e) => {
        Alert.alert('Unable to Confirm');
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
      {isLoading ? (
        <View style={styles.loadingImage}>
          <Image
            source={require('./../assets/appLoading.gif')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      ) : (
        <>
          <ScrollView
            style={{paddingHorizontal: 10}}
            showsVerticalScrollIndicator={false}>
            <ResultAccordian data={result.TC} title="Trachea" color="#FAF2EA" />
            <ResultAccordian
              data={result.AL}
              title="Anterior Left"
              color="#EDF1FA"
            />
            <ResultAccordian
              data={result.AR}
              title="Anterior Right"
              color="#FAF2EA"
            />
            <ResultAccordian
              data={result.PL}
              title="Posterior Left"
              color="#EDF1FA"
            />
            <ResultAccordian
              data={result.PR}
              title="Posterior Right"
              color="#FAF2EA"
            />
            <ResultAccordian
              data={result.LL}
              title="Lateral Left"
              color="#EDF1FA"
            />
            <ResultAccordian
              data={result.LR}
              title="Lateral Right"
              color="#FAF2EA"
            />
          </ScrollView>
          <View
            style={{
              height: hp(20),
              width: wp(90),
              marginBottom: 10,
              padding: 10,
            }}>
            <View
              style={{
                borderColor:
                  getResult(result.classification) === 'Healthy'
                    ? '#009944'
                    : '#cf000f',
                borderWidth: 5,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: fonts.inHaleFont,
                  fontSize: 25,
                  fontWeight: 'bold',
                  color:
                    getResult(result.classification) === 'Healthy'
                      ? '#009944'
                      : '#cf000f',
                }}>
                {getResult(result.classification)} ({result.classification[getResult(result.classification)]}%)
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                onConfirm(getResult(result.classification));
              }}>
              <View
                style={{
                  backgroundColor: '#EF716B',
                  marginVertical: hp(2),
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
                  Confirm
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
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
  loadingImage: {
    width: 400,
    height: 400,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 20,
  },
});
