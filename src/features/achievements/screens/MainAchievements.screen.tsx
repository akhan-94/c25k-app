import {ScreenWrapper} from '@shared/components';
import * as React from 'react';
import {View} from 'react-native';
import {Avatar, Card, List, SegmentedButtons, Text} from 'react-native-paper';

export const MainAchievementsScreen = () => {
  const [value, setValue] = React.useState('Unlocked');

  return (
    <View style={{flex: 1}}>
      <List.Item title="100" description="Total Points" />
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        style={{marginHorizontal: 16}}
        buttons={[
          {
            value: 'Unlocked',
            label: 'Unlocked',
          },
          {
            value: 'Locked',
            label: 'Locked',
          },
        ]}
      />
      <ScreenWrapper>
        <Card mode="elevated">
          <Card.Title title="Abandoned Ship" />
          <Card.Content>
            <Text>asd</Text>
          </Card.Content>
        </Card>
      </ScreenWrapper>
    </View>
  );
};
