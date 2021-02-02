import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {wp, hp, fonts} from '../helpers/themeHelper';

export const doctorProfilePage = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/profileAsset.png')}
        style={{height: wp(100), top: -20}}
        resizeMode="contain"
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          top: -hp(9),
          bottom: 0,
          width: wp(100),
          borderRadius: 50,
        }}>
        <View
          style={{
            marginTop: hp(3),
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: wp(8),
          }}>
          <Image
            source={require('./../assets/femaleDoctor.png')}
            style={{width: wp(23.5), height: hp(13)}}
            resizeMode="contain"
          />
          <View style={{marginLeft: 20}}>
            <Text
              style={{
                color: '#1E1C61',
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: fonts.inHaleFont,
              }}>
              Dr. Riyanka Jariwala
            </Text>
            <Text
              style={{
                color: '#1E1C61',
                fontSize: 14,
                opacity: 65,
                fontFamily: fonts.inHaleFont,
                marginTop: 10,
              }}>
              Heart Surgeon - Flower Hospitals
            </Text>
          </View>
        </View>
        <View style={{marginTop: 25, marginHorizontal: 35}}>
          <Text
            style={{
              color: '#1E1C61',
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: fonts.inHaleFont,
            }}>
            About Doctor
          </Text>
          <Text
            style={{
              color: '#1E1C61',
              fontSize: 14,
              opacity: 65,
              fontFamily: fonts.inHaleFont,
              marginTop: 10,
            }}>
            Dr. Stella is the top most heart surgeon in Flower Hospital. She has
            done over 100 successful sugeries within past 3 years. She has
            achieved several awards for her wonderful contribution in her own
            field. She’s available for private consultation for given schedules.
          </Text>
        </View>
        <View style={{marginTop: 25, marginHorizontal: 35}}>
          <Text
            style={{
              color: '#1E1C61',
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: fonts.inHaleFont,
            }}>
            Case History
          </Text>
          <View
            style={{
              width: wp(85),
              marginTop: 20,
              alignSelf: 'center',
              paddingVertical: 15,
              marginVertical: 10,
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
                20
              </Text>
              <Text
                style={{
                  color: '#4B7FFB',
                  fontSize: 17,
                  fontFamily: fonts.inHaleFont,
                }}>
                Feb
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
                Tanya Sharma
              </Text>
            </View>
          </View>
          <View
            style={{
              width: wp(85),
              alignSelf: 'center',
              paddingVertical: 15,
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
                13
              </Text>
              <Text
                style={{
                  color: '#4B7FFB',
                  fontSize: 17,
                  fontFamily: fonts.inHaleFont,
                }}>
                Jan
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
                Nikhil Maguwala
              </Text>
            </View>
          </View>
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
  },
});
