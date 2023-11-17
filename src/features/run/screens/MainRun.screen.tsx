import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActiveRunDetails} from '../components/ActiveRunDetails';
import {DayInstructions} from '../components/DayInstructions';
import {DaySelector} from '../components/DaySelector';
import {MainControls} from '../components/MainControls';

export const MainRunScreen = () => {
  const [previewDay, setPreviewDay] = React.useState<null | {
    week: number;
    day: number;
  }>(null);

  return (
    <View style={styles.container}>
      <DaySelector setPreviewDay={setPreviewDay} />
      <DayInstructions previewDay={previewDay} />
      <ActiveRunDetails previewDay={previewDay} />
      <MainControls />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
});
