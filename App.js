import React from 'react';
import {View, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>inHALE</Text>
      </View>
    </>
  );
};

export default App;
