import React, {useState} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import {color, fonts, hp, wp} from '../helpers/themeHelper';
import Icon from 'react-native-vector-icons/Feather';

export const AddPatientModal = ({visible, closeModal}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [gender, setGender] = useState('');
  const [isGender, setIsGender] = useState([
    {id: 1, value: true, name: 'Male', selected: false},
    {id: 2, value: false, name: 'Female', selected: false},
  ]);

  const RadioButton = ({onPress, selected, children}) => {
    return (
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.radioButton}>
          {selected ? <View style={styles.radioButtonIcon} /> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={[
              styles.radioButtonText,
              {color: selected ? 'black' : '#A9A9A9'},
            ]}>
            {children}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onRadioBtnClick = (item) => {
    let updatedState = isGender.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? {...isLikedItem, selected: true}
        : {...isLikedItem, selected: false},
    );
    setIsGender(updatedState);
  };

  const onSubmit = () => {
    const result = isGender.find((obj) => {
      return obj.selected === true;
    });
    if (firstName === '') {
      Alert.alert('Please Enter First Name');
    } else if (lastName === '') {
      Alert.alert('Please Enter Last Name');
    } else if (phoneNo === '' || phoneNo.length !== 10) {
      Alert.alert('Please Enter correct Phone Number');
    } else if (!result) {
      Alert.alert('Please Select Gender');
    } else {
      console.log(firstName, lastName, phoneNo, result.name);
    }
  };

  return (
    <Modal visible={visible} transparent={true}>
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
          <View style={styles.firstNameInput}>
            <TextInput
              placeholder="Enter Patient's First Name"
              placeholderTextColor="#C0C0C0"
              autoCapitalize="none"
              value={firstName}
              onChangeText={(txt) => setFirstName(txt)}
            />
          </View>
          <View style={styles.lastNameInput}>
            <TextInput
              placeholder="Enter Patient's Last Name"
              placeholderTextColor="#C0C0C0"
              autoCapitalize="none"
              value={lastName}
              onChangeText={(txt) => setLastName(txt)}
            />
          </View>
          <View style={styles.lastNameInput}>
            <TextInput
              placeholder="Enter Patient's Phone No"
              placeholderTextColor="#C0C0C0"
              autoCapitalize="none"
              value={phoneNo}
              maxLength={10}
              onChangeText={(txt) => setPhoneNo(txt)}
              keyboardType="number-pad"
            />
          </View>
          <View
            style={[
              styles.lastNameInput,
              {
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 30,
                marginTop: 20,
                alignSelf: 'center',
              },
            ]}>
            {isGender.map((item) => (
              <RadioButton
                onPress={() => onRadioBtnClick(item)}
                selected={item.selected}
                key={item.id}>
                {item.name}
              </RadioButton>
            ))}
          </View>
          <View
            style={{
              marginTop: 30,
              paddingHorizontal: 30,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={onSubmit}>
              <View
                style={{
                  backgroundColor: '#EF716B',
                  marginVertical: 10,
                  width: wp(50),
                  height: hp(5),
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: color.white,
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: fonts.inHaleFont,
                  }}>
                  Add & Start Test
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
  firstNameInput: {
    marginTop: hp(10),
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F2F2F2',
    width: wp(70),
    height: hp(5.5),
    justifyContent: 'center',
    borderRadius: 20,
  },
  lastNameInput: {
    marginTop: 20,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F2F2F2',
    width: wp(70),
    height: hp(5.5),
    justifyContent: 'center',
    borderRadius: 20,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 45,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#98CFB6',
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
    color: '#A9A9A9',
  },
});
