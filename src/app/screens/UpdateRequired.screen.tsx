import * as React from 'react';
import {Linking, View} from 'react-native';
import {Text} from 'react-native-paper';

export const UpdateRequiredScreen = () => {
  const openStore = () => {
    Linking.openURL('market://details?id=<package_name>');
  };
  return (
    <View>
      <Text>Update required screen</Text>
    </View>
  );
};
