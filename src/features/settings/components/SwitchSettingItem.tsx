import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Switch} from 'react-native-paper';

interface SwitchSettingItemProps {
  title: string;
  description?: string;
  value: boolean;
  onPress: () => void;
}

export const SwitchSettingItem = ({
  title,
  value,
  onPress,
  description,
}: SwitchSettingItemProps) => {
  return (
    <View>
      <List.Item
        title={title}
        description={description}
        onPress={onPress}
        right={() => <Switch style={styles.centered} value={value} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    alignSelf: 'center',
  },
});
