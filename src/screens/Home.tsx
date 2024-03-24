import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CardPredictionComponent from '../components/CardPredictionComponent.tsx';
import CardDateComponent from '../components/CardDateComponent.tsx';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Appbar, Card, Divider, Icon, MD3Colors, Text} from 'react-native-paper';
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
      <View
        style={{
          padding: 10,
        }}
        key={i}>
        <CardDateComponent />
      </View>,
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
              28 C
            </Text>
            <Text style={styles.centerText} variant="labelSmall">
              Feels Like 33 c
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
              <Text>Dew point: 23 C</Text>
            </View>
          </Card.Content>
        </Card>
        <Card mode="elevated">
          <Card.Content>
            <ScrollView horizontal={true}>{weatherList}</ScrollView>
          </Card.Content>
        </Card>
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
