import type {DrawerContentComponentProps} from '@react-navigation/drawer';
import {LoginButton} from '@shared/components/login-button';
import * as React from 'react';
import {StatusBar, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Drawer, IconButton, Text, TouchableRipple} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectGuestMode} from '../selectors/app.selectors';
import {drawerStyles} from '../styles';
import {useAppDispatch} from '@shared/hooks';
import {toggleGuestMode} from '../state/app.slice';

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
        backgroundColor: '#111111',
      }}>
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

const {profileSectionStyles} = drawerStyles;

const ProfileSection = ({
  navigation,
}: {
  navigation: DrawerContentComponentProps['navigation'];
  active: string;
}) => {
  /** Hooks */
  const dispatch = useAppDispatch();

  /** Global state */
  const isGuestMode = useSelector(selectGuestMode);

  /** Funtions */
  const disableGuestMode = () => {
    dispatch(toggleGuestMode());
  };

  return (
    <View style={profileSectionStyles.container}>
      <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
        <View style={{flex: 1}}>
          <View style={profileSectionStyles.nameContainer}>
            <Text variant="headlineSmall">
              {isGuestMode ? 'Guest' : 'User'}
            </Text>
          </View>
          <View>
            <Text variant="labelSmall">0 runs completed</Text>
          </View>
        </View>
        <View>
          <IconButton
            icon="account-cog"
            mode="outlined"
            size={30}
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </View>

      {isGuestMode && (
        <View style={profileSectionStyles.guestContainer}>
          <LoginButton />
          <TouchableRipple
            onPress={disableGuestMode}
            style={profileSectionStyles.signUpButton}
            rippleColor="rgba(255, 255, 255, .32)">
            <Text variant="labelSmall">
              No account?{' '}
              <Text style={profileSectionStyles.signUpLabel}>Sign Up</Text>
            </Text>
          </TouchableRipple>
        </View>
      )}
    </View>
  );
};
