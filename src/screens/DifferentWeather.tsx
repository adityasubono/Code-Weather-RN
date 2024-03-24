import React from 'react';
import {View} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';
import {SegmentedButtons} from 'react-native-paper';
function DifferentWeather(props) {
  const [value, setValue] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Card
        style={{
          backgroundColor: 'white',
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text>Temperature</Text>
          </View>

          <View
            style={{
              justifyContent: 'flex-start',
            }}>
            <SegmentedButtons
              style={{
                width: 200,
              }}
              value={value}
              onValueChange={setValue}
              buttons={[
                {
                  value: 'C',
                  label: 'C',
                },
                {
                  value: 'F',
                  label: 'F',
                },
              ]}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text>Wind speed</Text>
          </View>

          <View>
            <SegmentedButtons
              style={{
                width: 230,
              }}
              value={value}
              onValueChange={setValue}
              buttons={[
                {
                  value: 'm/s',
                  label: 'm/s',
                },
                {
                  value: 'km/h',
                  label: 'km/h',
                },
                {
                  value: 'mph',
                  label: 'mph',
                },
              ]}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text>Pressure</Text>
          </View>

          <View>
            <SegmentedButtons
              style={{
                width: 200,
              }}
              value={value}
              onValueChange={setValue}
              buttons={[
                {
                  value: 'hPa',
                  label: 'hPa',
                },
                {
                  value: 'inHg',
                  label: 'inHg',
                },
              ]}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text>Precipitation</Text>
          </View>

          <View>
            <SegmentedButtons
              style={{
                width: 200,
              }}
              value={value}
              onValueChange={setValue}
              buttons={[
                {
                  value: 'mm',
                  label: 'mm',
                },
                {
                  value: 'in',
                  label: 'in',
                },
              ]}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text>Distance</Text>
          </View>

          <View>
            <SegmentedButtons
              style={{
                width: 200,
              }}
              value={value}
              onValueChange={setValue}
              buttons={[
                {
                  value: 'km',
                  label: 'km',
                },
                {
                  value: 'mi',
                  label: 'mi',
                },
              ]}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text>Time format</Text>
          </View>

          <View>
            <SegmentedButtons
              style={{
                width: 200,
              }}
              value={value}
              onValueChange={setValue}
              buttons={[
                {
                  value: '24',
                  label: '24-hour',
                },
                {
                  value: '12',
                  label: '12-hour',
                },
              ]}
            />
          </View>
        </View>
      </Card>
    </View>
  );
}

export default DifferentWeather;
