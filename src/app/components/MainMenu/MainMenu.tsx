import type {DrawerContentComponentProps} from '@react-navigation/drawer';
import {FeatureFlag, useFeatureFlag} from '@services/feature-flag';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Drawer} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProfileSection} from './ProfileSection';

export const MainMenu = ({navigation, state}: DrawerContentComponentProps) => {
  /** Hooks */
  const featureFlag = useFeatureFlag();

  /** Local state */
  const active = state.routes[state.index].name;
  return (
    <SafeAreaView style={styles.container}>
      <ProfileSection navigation={navigation} active={active} />
      <View>
        {featureFlag.isEnabled([FeatureFlag.RUN]) && (
          <Drawer.Item
            label="Run"
            icon="run"
            active={active === 'Run'}
            onPress={() => navigation.navigate('Run')}
          />
        )}
        {featureFlag.isEnabled([FeatureFlag.RUNNING_HISTORY]) && (
          <Drawer.Item
            label="History"
            icon="chart-bell-curve"
            active={active === 'History'}
            onPress={() => navigation.navigate('History')}
          />
        )}
        {featureFlag.isEnabled([FeatureFlag.RUNNING_HISTORY]) && (
          <Drawer.Item
            label="Reminders"
            icon="bell-circle-outline"
            active={active === 'Reminders'}
            onPress={() => navigation.navigate('Reminders')}
          />
        )}
        {featureFlag.isEnabled([FeatureFlag.ACHIEVEMENTS]) && (
          <Drawer.Item
            label="Achievements"
            icon="trophy-outline"
            active={active === 'Achievements'}
            onPress={() => navigation.navigate('Achievements')}
          />
        )}
        {featureFlag.isEnabled([FeatureFlag.SETTINGS]) && (
          <Drawer.Item
            label="Settings"
            icon="cog-outline"
            active={active === 'Settings'}
            onPress={() => navigation.navigate('Settings')}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});
