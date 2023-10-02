import type {DrawerContentComponentProps} from '@react-navigation/drawer';
import * as React from 'react';
import {StatusBar, View} from 'react-native';
import {getBuildNumber, getVersion} from 'react-native-device-info';
import {ScrollView} from 'react-native-gesture-handler';
import {Avatar, Drawer, Text} from 'react-native-paper';
import {drawerStyles} from '../styles';

const versionName = getVersion();
const versionCode = getBuildNumber();

export const DrawerContent = ({
  navigation,
  state,
}: DrawerContentComponentProps) => {
  const active = state.routes[state.index].name;
  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        paddingTop: StatusBar.currentHeight,
      }}>
      <ScrollView>
        <ProfileSection />
        <Drawer.Section>
          <Drawer.Item
            label="Run"
            icon="flower"
            active={active === 'Run'}
            onPress={() => navigation.navigate('Run')}
          />

          <Drawer.Item
            label="Achievements"
            icon="bee-flower"
            active={active === 'Guides'}
            onPress={() => navigation.navigate('Guides')}
          />
          <Drawer.Item
            label="Account"
            icon="account-circle-outline"
            active={active === 'Account'}
            onPress={() => navigation.navigate('Account')}
          />
          <Drawer.Item
            label="Settings"
            icon="cog"
            active={active === 'Settings'}
            onPress={() => navigation.navigate('Settings')}
          />
        </Drawer.Section>
        <Drawer.Item
          label="Share App"
          icon="share-variant"
          active={active === 'Share App'}
          onPress={() => navigation.navigate('Share App')}
        />
        <Drawer.Item
          label="About"
          active={active === 'About'}
          icon="book-open-outline"
          onPress={() => navigation.navigate('About')}
        />
      </ScrollView>
      <View>
        <Text variant="labelSmall" style={drawerStyles.text.versionDetails}>
          v{versionName} ({versionCode})
        </Text>
      </View>
    </View>
  );
};

const {profileSectionStyles} = drawerStyles;

const ProfileSection = () => {
  return (
    <View style={profileSectionStyles.container}>
      <View style={profileSectionStyles.nameContainer}>
        <Text variant="headlineSmall">User</Text>
      </View>
      <View style={profileSectionStyles.avatarContainer}>
        <Avatar.Text size={50} label="U" />
      </View>
    </View>
  );
};
