import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

function CardPredictionComponent() {
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <Text>20:00</Text>
      <Text variant="labelSmall">Image</Text>
      <Text>26˚C</Text>
    </View>
  );
}

export default CardPredictionComponent;
