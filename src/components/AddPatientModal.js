import React, {useState} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import {hp, wp} from '../helpers/themeHelper';
import Icon from 'react-native-vector-icons/Feather';

export const AddPatientModal = ({visible, closeModal}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
              placeholder="Enter Your First Name"
              placeholderTextColor="#C0C0C0"
              autoCapitalize="none"
              value={firstName}
              onChangeText={(txt) => setFirstName(txt)}
            />
          </View>
          <View style={styles.lastNameInput}>
            <TextInput
              placeholder="Enter Your Last Name"
              placeholderTextColor="#C0C0C0"
              autoCapitalize="none"
              value={lastName}
              onChangeText={(txt) => setLastName(txt)}
            />
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
    marginTop: 40,
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
});
