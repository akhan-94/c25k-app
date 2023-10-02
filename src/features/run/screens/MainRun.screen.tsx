import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DayInstructions} from '../components/DayInstructions';
import {DaySelector} from '../components/DaySelector';
import {MainControls} from '../components/MainControls';
import {MotivationImage} from '../components/MotivationImage';
import {ActiveRunDetails} from '../components/ActiveRunDetails';
import {useSelector} from 'react-redux';
import {ImageCarousel} from '../components/ImageCarousel';
import {useAppTheme} from '@shared/hooks/useAppTheme';
import {selectStatus} from '../selectors/run.selectors';

export const MainRunScreen = () => {
  /** Hooks */
  const insets = useSafeAreaInsets();
  const appTheme = useAppTheme();

  /** Global State */
  const status = useSelector(selectStatus);

  /** Derived State */
  const insetSafetyStyles = [
    {
      paddingLeft: insets.left || 16,
      paddingRight: insets.left || 16,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={[insetSafetyStyles, styles.mainContent]}>
          {status === 'waiting' ? (
            <>
              <DaySelector />
              <MotivationImage />
              <View style={styles.dayContainer}>
                <DayInstructions />
              </View>
            </>
          ) : (
            <>
              <ImageCarousel />
            </>
          )}
        </View>
        {status !== 'waiting' && (
          <View style={[insetSafetyStyles, styles.detailsContainer]}>
            <ActiveRunDetails />
          </View>
        )}
        <View
          style={[
            insetSafetyStyles,
            styles.buttonContainer,
            {
              backgroundColor: appTheme.colors.surfaceVariant,
            },
          ]}>
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
    marginTop: 16,
  },
  detailsContainer: {
    flexShrink: 1,
    marginTop: 16,
    marginBottom: 16,
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
    paddingBottom: 17,
    paddingTop: 17,
  },
});
