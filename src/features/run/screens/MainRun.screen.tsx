import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {ActiveRunDetails} from '../components/ActiveRunDetails';
import {DayInstructions} from '../components/DayInstructions';
import {DaySelector} from '../components/DaySelector';
import {MainControls} from '../components/MainControls';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export const MainRunScreen = () => {
  const [previewDay, setPreviewDay] = React.useState<null | {
    week: number;
    day: number;
  }>(null);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{height: 200, width: Dimensions.get('screen').width}}
      />
      {/* <DayInstructions previewDay={previewDay} /> */}
      <ActiveRunDetails previewDay={previewDay} />
      <DaySelector setPreviewDay={setPreviewDay} />

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
