import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {color, wp, hp, fonts} from '../helpers/themeHelper';
import {useDispatch} from 'react-redux';
import {login} from '../Redux/Actions/AuthAction';

export const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (username === '') {
      Alert.alert('Please Enter Username');
    } else if (password === '') {
      Alert.alert('Please Enter Password');
    } else {
      dispatch(login({email: username, password}))
        .then((res) => {
          console.log(res);
          props?.navigation?.navigate('Home');
        })
        .catch(() => {
          Alert.alert('Unable to login');
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerText}>Login to inHALE</Text>
        <View style={styles.usernameInput}>
          <Icon
            name="user"
            color="#C0C0C0"
            size={20}
            style={{marginRight: 20}}
          />
          <TextInput
            placeholder="Enter Your Email"
            placeholderTextColor="#C0C0C0"
            autoCapitalize="none"
            value={username}
            onChangeText={(txt) => setUsername(txt)}
          />
        </View>
        <View style={styles.passwordInput}>
          <Icon
            name="lock"
            color="#C0C0C0"
            size={20}
            style={{marginRight: 20}}
          />
          <TextInput
            placeholder="Enter Your Password"
            placeholderTextColor="#C0C0C0"
            value={password}
            style={{flex: 1}}
            autoCapitalize="none"
            secureTextEntry={!isShowPassword}
            onChangeText={(txt) => setPassword(txt)}
          />
          <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
            <Icon
              name={isShowPassword ? 'eye' : 'eye-slash'}
              color="#C0C0C0"
              size={20}
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnMainContainer}>
          <TouchableOpacity onPress={onSubmit}>
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}>Login</Text>
              <Icon
                name={'chevron-right'}
                color="#FFFFFF"
                size={15}
                style={{marginLeft: 10}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require('./../assets/getstartedAsset.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.white,
  },
  topContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  headerText: {
    color: '#1E1C61',
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: wp(10),
    alignSelf: 'center',
    fontFamily: fonts.inHaleFont,
  },
  usernameInput: {
    flexDirection: 'row',
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F2F2F2',
    width: wp(83),
    height: hp(5.5),
    alignItems: 'center',
    borderRadius: 20,
  },
  passwordInput: {
    flexDirection: 'row',
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F2F2F2',
    width: wp(83),
    height: hp(5.5),
    alignItems: 'center',
    borderRadius: 20,
  },
  image: {
    flex: 0.6,
    width: wp(100),
    height: hp(55),
  },
  btnText: {
    color: color.white,
    fontSize: 18,
    fontFamily: fonts.inHaleFont,
    fontWeight: 'bold',
  },
  btnContainer: {
    width: wp(39),
    height: hp(5),
    backgroundColor: '#4B7FFB',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnMainContainer: {
    marginTop: 20,
    marginHorizontal: wp(5),
    alignSelf: 'flex-end',
  },
});
