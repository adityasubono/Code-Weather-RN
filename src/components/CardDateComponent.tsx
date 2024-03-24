import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

function CardDateComponent() {
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <Text>Sun</Text>
      <Text>24</Text>
    </View>
  );
}

export default CardDateComponent;
