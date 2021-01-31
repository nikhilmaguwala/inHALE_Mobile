import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import {color, fonts, hp, wp} from '../helpers/themeHelper';
import Icon from 'react-native-vector-icons/Feather';
import {Patients} from '../dummyContent/Patients';
import {ShortNameImage, capitalize} from '../helpers/helperFuntions';

export const HomeScreen = (props) => {
  const [searchWord, setSearchWord] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="log-out" color="#292685" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>inHALE</Text>
        <TouchableOpacity onPress={() => console.log('Profile')}>
          <Image
            source={require('./../assets/profile.png')}
            style={{height: wp(11), width: wp(11)}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchInput}>
        <TextInput
          placeholder="Search for patients"
          placeholderTextColor="#C0C0C0"
          value={searchWord}
          autoCapitalize="none"
          style={styles.search}
          onChangeText={(txt) => setSearchWord(txt)}
        />
        <TouchableOpacity onPress={() => console.log('search')}>
          <View style={styles.searchContainer}>
            <Icon name={'search'} color="#FFFFFF" size={20} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30}}>
        {Patients.map((p) => {
          return (
            <View
              style={{
                width: wp(90),
                paddingVertical: 15,
                marginVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: p.gender === 'Male' ? '#EDF1FA' : '#FAF2EA',
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <ShortNameImage fullName={p.name} gender={p.gender} />
              <View style={{marginLeft: 20, justifyContent: 'center'}}>
                <Text
                  style={{
                    color: '#1E1C61',
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: fonts.inHaleFont,
                  }}>
                  {capitalize(p.name)}
                </Text>
              </View>
            </View>
          );
        })}
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
    marginTop: hp(7),
    flexDirection: 'row',
    width: wp(85),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#F2F2F2',
    width: wp(90),
    height: hp(5.5),
    alignItems: 'center',
    borderRadius: 20,
  },
  searchContainer: {
    marginLeft: 10,
    height: hp(5),
    width: wp(17),
    backgroundColor: '#4B7FFB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  headerText: {
    color: '#1E1C61',
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: wp(10),
    alignSelf: 'center',
    fontFamily: fonts.inHaleFont,
  },
});
