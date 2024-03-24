import React from 'react';
import { TouchableOpacity, View } from "react-native";
import {Divider, Icon, Paragraph, Text} from 'react-native-paper';

function Settings({navigation}) {
  const _handleDiferent = () => navigation.navigate('Different');
  const _handleUnits = () => navigation.navigate('Units');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
      }}>
      <TouchableOpacity
        onPress={_handleDiferent}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <View>
          <Text variant="titleSmall">Diferent weather?</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Icon size={20} source="arrow-right" />
        </View>
      </TouchableOpacity>
      <Divider />

      <TouchableOpacity
        onPress={_handleUnits}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <View>
          <Text variant="titleSmall">Customize units</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Icon size={20} source="arrow-right" />
        </View>
      </TouchableOpacity>
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
        }}>
        <Text variant="titleSmall">Data</Text>
        <Text>One Call API</Text>
      </View>
      <Paragraph
        style={{
          textAlign: 'justify',
          fontWeight: '400',
        }}>
        All the data for OpenWeather App is provided by One Call API.
        OpenWeather aggregates and processes meteorological data from tens of
        thousands of weather stations, on-ground radars and satellites to bring
        you accurate and actionable weather dara for any location worldwide.
      </Paragraph>
    </View>
  );
}

export default Settings;
