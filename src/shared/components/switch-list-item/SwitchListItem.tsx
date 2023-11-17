import * as React from 'react';
import {View} from 'react-native';
import {List, Switch} from 'react-native-paper';
import {styles} from './SwitchListItem.styles';
import type {SwitchListItemProps} from './SwitchListItem.types';

export const SwitchListItem = ({
  title,
  value,
  onPress,
  description,
}: SwitchListItemProps) => {
  return (
    <View>
      <List.Item
        title={title}
        description={description}
        onPress={onPress}
        right={() => (
          <Switch
            style={styles.centered}
            value={value}
            onValueChange={onPress}
          />
        )}
      />
    </View>
  );
};
