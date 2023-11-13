import type {DrawerContentComponentProps} from '@react-navigation/drawer';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Drawer} from 'react-native-paper';
import {ProfileSection} from './ProfileSection';

export const MainMenu = ({navigation, state}: DrawerContentComponentProps) => {
  const active = state.routes[state.index].name;
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProfileSection navigation={navigation} active={active} />
        <Drawer.Item
          label="Run"
          icon="run"
          active={active === 'Run'}
          onPress={() => navigation.navigate('Run')}
        />
        <Drawer.Item
          label="History"
          icon="chart-bell-curve"
          active={active === 'History'}
          onPress={() => navigation.navigate('History')}
        />
        <Drawer.Item
          label="Reminders"
          icon="bell-circle-outline"
          active={active === 'Reminders'}
          onPress={() => navigation.navigate('Reminders')}
        />
        <Drawer.Item
          label="Achievements"
          icon="trophy-outline"
          active={active === 'Achievements'}
          onPress={() => navigation.navigate('Achievements')}
        />
        <Drawer.Item
          label="Settings"
          icon="cog-outline"
          active={active === 'Settings'}
          onPress={() => navigation.navigate('Settings')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#111111',
  },
});
