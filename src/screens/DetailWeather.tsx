import React from "react";
import { View } from "react-native";
import { Card, Divider, Icon, MD3Colors, Text } from "react-native-paper";
import LineChartComponent from "../components/LineChart.tsx";

function DetailWeather(props) {
  return (
    <View>
      <Card mode="elevated">
        <Card.Content>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>{dateList}</View>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Icon
                source="dots-vertical"
                color={MD3Colors.secondary50}
                size={20}
              />
            </View>
          </View>
        </Card.Content>
      </Card>
      <Card mode="elevated">
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text variant="titleSmall">Moderate Rain</Text>
              <Text variant="labelSmall">Light breeze</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text>31/25 C</Text>
            </View>
          </View>

          <LineChartComponent />
        </Card.Content>
      </Card>

      <View
        style={{
          flexDirection: 'column',
          paddingVertical: 10,
          paddingHorizontal: 10,
          gap: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Precipitation</Text>
          <Text>11.6mm</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Precipitation</Text>
          <Text>11.6mm</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Probability of precipitation</Text>
          <Text>100%</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Wind</Text>
          <Text>2.9m/s NNW</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Presure</Text>
          <Text>1011hPa</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Humidity</Text>
          <Text>66%</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>UV index</Text>
          <Text>13.6</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Sunrise</Text>
          <Text>05:56</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Sunset</Text>
          <Text>18:01</Text>
        </View>
        <Divider />
      </View>
    </View>
  );
}

export default DetailWeather;
