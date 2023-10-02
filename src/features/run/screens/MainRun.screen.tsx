import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DayInstructions} from '../components/DayInstructions';
import {DaySelector} from '../components/DaySelector';
import {MainControls} from '../components/MainControls';
import {MotivationImage} from '../components/MotivationImage';
import {ActiveRunDetails} from '../components/ActiveRunDetails';

export const MainRunScreen = () => {
  /** Hooks */
  const insets = useSafeAreaInsets();

  const insetSafetyStyles = [
    {
      paddingBottom: insets.bottom || 17,
      paddingLeft: insets.left || 17,
      paddingRight: insets.left || 17,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.mainContent}>
          <DaySelector />
          <MotivationImage />
        </View>
        <View style={styles.dayContainer}>
          <DayInstructions />
        </View>
        <View style={[insetSafetyStyles, styles.buttonContainer]}>
          <ActiveRunDetails />
          <MainControls />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexShrink: 1,
    backgroundColor: 'rgba(0, 0, 0, .95)',
    paddingTop: 17,
  },
});
