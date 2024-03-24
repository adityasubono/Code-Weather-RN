import React from 'react';
import { Appbar, Title } from "react-native-paper";
import {getHeaderTitle} from '@react-navigation/elements';
import {View} from 'react-native';

function CustomNavigationBarComponent({navigation, route, options, back}) {
  const title = getHeaderTitle(options, route.name);

  const AppbarCustom = () => (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );

  return <View>{route.name === 'Home' ? null : <AppbarCustom />}</View>;
}
export default CustomNavigationBarComponent;
