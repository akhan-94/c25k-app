import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Switch} from 'react-native-paper';

interface SwitchSettingItemProps {
  title: string;
  description?: string;
}

export const SwitchSettingItem = ({
  title,
  description,
}: SwitchSettingItemProps) => {
  return (
    <View>
      <List.Item
        title={title}
        description={description}
        right={() => <Switch style={styles.centered} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    alignSelf: 'center',
  },
});
