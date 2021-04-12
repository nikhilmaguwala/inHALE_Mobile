import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {fonts, hp, wp} from '../helpers/themeHelper';
import Icon from 'react-native-vector-icons/Feather';

export const ResultAccordian = ({data, title, color}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const renderCycle = ({item}) => {
    return (
      <View
        style={{
          height: hp(3),
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.inHaleFont,
            fontSize: 15,
            fontWeight: 'bold',
            color: '#1E1C61',
          }}>
          Cycle: {item + 1}
        </Text>
        <Text
          style={{
            fontFamily: fonts.inHaleFont,
            fontSize: 15,
            fontWeight: 'bold',
            color:
              data['Cycle: ' + (item + 1)] === 'Healthy'
                ? '#009944'
                : '#cf000f',
          }}>
          {data['Cycle: ' + (item + 1)]}
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        width: wp(90),
        backgroundColor: color,
        shadowColor: '#000000',
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
        paddingHorizontal: 10,
        marginTop: 20,
      }}>
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
        <View
          style={{
            height: hp(7),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: fonts.inHaleFont,
              fontSize: 16,
              fontWeight: 'bold',
              color: '#1E1C61',
            }}>
            {title}
          </Text>
          <Icon
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            color="#1E1C61"
            size={30}
          />
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <FlatList
          data={Array.from(Array(9).keys())}
          renderItem={renderCycle}
          keyExtractor={(item) => Number(item)}
        />
      )}
    </View>
  );
};
