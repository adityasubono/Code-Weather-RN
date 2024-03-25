import React from 'react';
import {View} from 'react-native';
import {
  Button,
  Checkbox,
  Divider,
  Icon,
  RadioButton,
  Text,
  TextInput
} from "react-native-paper";
function DifferentWeather(props) {
  const [text, setText] = React.useState('');
  const [checkedWind, setCheckedWind] = React.useState('light');
  const [checkedDataSource, setCheckedDataSource] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text variant="bodySmall">What is the sky like?</Text>
        <Text variant="bodySmall">clear sky</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
          gap: 20,
          backgroundColor: 'grey',
        }}>
        <View
          style={{
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon size={30} source="camera" />
          </View>
          <View>
            <Text variant="bodyLarge">clear sky</Text>
          </View>
        </View>

        <View
          style={{
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon size={30} source="camera" />
          </View>
          <View>
            <Text variant="bodyLarge">few clouds</Text>
          </View>
        </View>

        <View
          style={{
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon size={30} source="camera" />
          </View>
          <View>
            <Text variant="bodyLarge">overcast clouds</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 30,
          backgroundColor: 'grey',
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon size={30} source="camera" />
          </View>
          <View>
            <Text variant="bodyLarge">clear sky</Text>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon size={30} source="camera" />
          </View>
          <View>
            <Text variant="bodyLarge">few clouds</Text>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon size={30} source="camera" />
          </View>
          <View>
            <Text variant="bodyLarge">overcast clouds</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 30,
          backgroundColor: 'grey',
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon size={30} source="camera" />
          </View>
          <View>
            <Text variant="bodyLarge">clear sky</Text>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon size={30} source="camera" />
          </View>
          <View>
            <Text variant="bodyLarge">few clouds</Text>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Icon size={30} source="camera" />
          </View>
          <View>
            <Text variant="bodyLarge">overcast clouds</Text>
          </View>
        </View>
      </View>

      <Text>Temperature:</Text>

      <Text>Wind:</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <RadioButton
            value="light"
            status={checkedWind === 'light' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedWind('light')}
          />
          <Text>Light</Text>
        </View>
        <View>
          <RadioButton
            value="moderate"
            status={checkedWind === 'moderate' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedWind('moderate')}
          />
          <Text>Moderate</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <RadioButton
            value="strong"
            status={checkedWind === 'strong' ? 'checked' : 'unchecked'}
            onPress={() => setCheckedWind('strong')}
          />
          <Text>Strong</Text>
        </View>
      </View>

      <TextInput
        label="Email (optional)"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TextInput
        label="Message (Optional)"
        value={text}
        onChangeText={text => setText(text)}
      />

      <Text>Data Source</Text>
      <Divider />
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Checkbox
            status={checkedDataSource ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedDataSource(!checkedDataSource);
            }}
          />
          <Text>Personal feelings</Text>

        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Checkbox
            status={checkedDataSource ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedDataSource(!checkedDataSource);
            }}
          />
          <Text>Own weather station or devices</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Checkbox
            status={checkedDataSource ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedDataSource(!checkedDataSource);
            }}
          />
          <Text>Local weather provider</Text>

        </View>


        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Checkbox
            status={checkedDataSource ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedDataSource(!checkedDataSource);
            }}
          />
          <Text>Global weather provider</Text>

        </View>


        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Checkbox
            status={checkedDataSource ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedDataSource(!checkedDataSource);
            }}
          />
          <Text>Other</Text>
        </View>
      </View>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        SEND
      </Button>
    </View>
  );
}

export default DifferentWeather;
