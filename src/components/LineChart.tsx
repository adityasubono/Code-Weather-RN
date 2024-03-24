import React from 'react';
import {Dimensions, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

function LineChartComponent() {
  return (
    <View>
      <LineChart
        data={{
          labels: [
            '23.00',
            '24.00',
            '1.00',
            '2.00',
            '3.00',
            '4.00',
            '5.00',
            '6.00',
          ],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 50} // from react-native
        height={200}
        yAxisLabel={'mm/h'}
        chartConfig={{
          backgroundColor: '#faf8f8',
          backgroundGradientFrom: '#f6f5f4',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 0.6) => 'grey',
          labelColor: (opacity = 1) => 'black',
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

export default LineChartComponent;
