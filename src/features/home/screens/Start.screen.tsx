import {ScreenWrapper} from '@shared/components';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {DayInstructions} from '../components/DayInstructions';
import {DaySelector} from '../components/DaySelector';
import {MainControls} from '../components/MainControls';
import {MotivationImage} from '../components/MotivationImage';

export const StartScreen = () => {
  return (
    <ScreenWrapper withScrollView={false}>
      <View style={styles.wrapper}>
        <View style={styles.mainContent}>
          <DaySelector />
          <MotivationImage />
        </View>
        <View style={styles.dayContainer}>
          <DayInstructions />
        </View>
        <View style={styles.buttonContainer}>
          <MainControls />
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
  },
  dayContainer: {
    flexShrink: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexShrink: 1,
  },
});
