import type {DrawerContentComponentProps} from '@react-navigation/drawer';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Drawer} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProfileSection} from './ProfileSection';
import FeatureFlagManager from '@lib/feature-flag';
import {FeatureFlag} from '@lib/feature-flag/feature-flag.constants';

export const MainMenu = ({navigation, state}: DrawerContentComponentProps) => {
  const active = state.routes[state.index].name;
  return (
    <SafeAreaView style={styles.container}>
      <ProfileSection navigation={navigation} active={active} />
      <View>
        {FeatureFlagManager.isEnabled([FeatureFlag.RUN]) && (
          <Drawer.Item
            label="Run"
            icon="run"
            active={active === 'Run'}
            onPress={() => navigation.navigate('Run')}
          />
        )}
        {FeatureFlagManager.isEnabled([FeatureFlag.RUNNING_HISTORY]) && (
          <Drawer.Item
            label="History"
            icon="chart-bell-curve"
            active={active === 'History'}
            onPress={() => navigation.navigate('History')}
          />
        )}
        {FeatureFlagManager.isEnabled([FeatureFlag.RUNNING_HISTORY]) && (
          <Drawer.Item
            label="Reminders"
            icon="bell-circle-outline"
            active={active === 'Reminders'}
            onPress={() => navigation.navigate('Reminders')}
          />
        )}
        {FeatureFlagManager.isEnabled([FeatureFlag.ACHIEVEMENTS]) && (
          <Drawer.Item
            label="Achievements"
            icon="trophy-outline"
            active={active === 'Achievements'}
            onPress={() => navigation.navigate('Achievements')}
          />
        )}
        {FeatureFlagManager.isEnabled([FeatureFlag.SETTINGS]) && (
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
