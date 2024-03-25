import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import CardPredictionComponent from '../components/CardPredictionComponent.tsx';
import CardDateComponent from '../components/CardDateComponent.tsx';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Appbar, Card, Divider, Icon, Text} from 'react-native-paper';
import LineChartComponent from '../components/LineChart.tsx';
function Home({navigation}) {
  const _handleSetting = () => navigation.navigate('Settings');
  const _handleSearch = () => navigation.navigate('Searching');
  const weatherList = [];
  const dateList = [];

  for (let i = 0; i < 24; i++) {
    weatherList.push(
      <View
        style={{
          padding: 10,
        }}
        key={i}>
        <CardPredictionComponent />
      </View>,
    );
  }

  for (let i = 24; i < 31; i++) {
    dateList.push(
      <>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <View>
            <Text>Mon Mar {i}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text>32 / 25˚C</Text>
            <Text variant="labelSmall">image</Text>
            <Icon size={20} source="chevron-right" />
          </View>
        </TouchableOpacity>
        <Divider />
      </>,
    );
  }
  return (
    <SafeAreaProvider>
      <Appbar.Header>
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Content title="Kalisuren, West Java" />
        <Appbar.Action icon="pin" />
        <Appbar.Action icon="dots-vertical" onPress={_handleSetting} />
      </Appbar.Header>

      <ScrollView>
        <Card mode="elevated">
          <Card.Content>
            <Text style={styles.centerText} variant="titleSmall">
              Broken Clouds
            </Text>
            <Text style={styles.centerText} variant="labelSmall">
              Light Air
            </Text>
            <Text style={styles.centerText} variant="displayLarge">
              28˚C
            </Text>
            <Text style={styles.centerText} variant="labelSmall">
              Feels Like 33˚C
            </Text>
          </Card.Content>
        </Card>

        <Card mode="elevated">
          <Card.Content>
            <Text style={styles.centerText} variant="labelMedium">
              No precipitation within an hour
            </Text>
            <LineChartComponent />
          </Card.Content>
        </Card>
        <Card mode="elevated">
          <Card.Content
            style={{
              borderRadius: 10,
              backgroundColor: '#dad3d3',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text>Wind: 1.2/s S</Text>
              <Text>Humidity: 77%</Text>
              <Text>UV index: 0.0</Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text>Pressure: 1013hPa</Text>
              <Text>Visibility: 10.0km</Text>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text>Dew point: 23˚C</Text>
            </View>
          </Card.Content>
        </Card>
        <Card mode="elevated">
          <Card.Content>
            <ScrollView horizontal={true}>{weatherList}</ScrollView>
            {dateList}
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
  },
});
export default Home;
