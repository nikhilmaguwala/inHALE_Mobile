import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import {color, fonts, hp, wp} from '../helpers/themeHelper';
import Icon from 'react-native-vector-icons/Feather';
import {Patients} from '../dummyContent/Patients';
import {ShortNameImage, capitalize} from '../helpers/helperFuntions';
import {AddPatientModal} from '../components/AddPatientModal';
import {useDispatch} from 'react-redux';
import {logout} from '../Redux/Actions/AuthAction';

export const HomeScreen = (props) => {
  const [searchWord, setSearchWord] = useState('');
  const [patientList, setPatientList] = useState(Patients);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const doLogout = () => {
    dispatch(logout())
      .then(() => props.navigation.navigate('Login'))
      .catch(() => Alert.alert('Unable to Logout'));
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: wp(90),
          paddingVertical: 15,
          marginVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: item.gender === 'Male' ? '#EDF1FA' : '#FAF2EA',
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <ShortNameImage fullName={item.name} gender={item.gender} />
        <View style={{marginLeft: 20, justifyContent: 'center'}}>
          <Text
            style={{
              color: '#1E1C61',
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: fonts.inHaleFont,
            }}>
            {capitalize(item.name)}
          </Text>
        </View>
      </View>
    );
  };
  const onChangeText = (name) => {
    setSearchWord(name);
    setPatientList(
      Patients.filter((i) => i.name.toLowerCase().match(name.toLowerCase())),
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={doLogout}>
          <Icon name="log-out" color="#292685" size={30} />
        </TouchableOpacity>
        <Text style={styles.headerText}>inHALE</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
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
          onChangeText={(txt) => onChangeText(txt)}
        />
        <TouchableOpacity onPress={() => console.log('search')}>
          <View style={styles.searchContainer}>
            <Icon name={'search'} color="#FFFFFF" size={20} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 30}}>
        <FlatList
          data={patientList}
          renderItem={renderItem}
          keyExtractor={(item) => item?.id}
        />
      </View>
      <View style={styles.floatingMenuButtonStyle}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <View style={styles.addButtonContainer}>
            <Icon name={'plus'} color="#FFFFFF" size={20} />
          </View>
        </TouchableOpacity>
      </View>
      <AddPatientModal
        visible={isModalVisible}
        closeModal={() => {
          setIsModalVisible(false);
        }}
      />
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
  addButtonContainer: {
    marginLeft: 10,
    height: wp(15),
    width: wp(15),
    backgroundColor: '#4B7FFB',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingMenuButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 30,
    right: 30,
    zIndex: 999,
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
