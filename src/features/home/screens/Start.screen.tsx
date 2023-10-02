import {ScreenWrapper} from '@shared/components';
import * as React from 'react';
import {DayInstructions} from '../components/DayInstructions';
import {DaySelector} from '../components/DaySelector';
import {MotivationImage} from '../components/MotivationImage';
import {Button} from 'react-native-paper';
import {View} from 'react-native';

export const StartScreen = () => {
  return (
    <ScreenWrapper withScrollView={false}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <View style={{flex: 1}}>
          <DaySelector />
          <MotivationImage />
          <DayInstructions />
        </View>
        <View style={{flexShrink: 1}}>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Start
          </Button>
        </View>
      </View>
    </ScreenWrapper>
  );
};
