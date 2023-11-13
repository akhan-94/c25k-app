import {selectUserFullName} from '@features/profile';
import type {DrawerContentComponentProps} from '@react-navigation/drawer';
import {LoginButton} from '@shared/components/login-button';
import {useAppDispatch} from '@shared/hooks';
import * as React from 'react';
import {View} from 'react-native';
import {IconButton, Text, TouchableRipple} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectGuestMode} from '../../selectors/app.selectors';
import {appActions} from '../../state';
import {drawerStyles} from '../../styles';

const {profileSectionStyles} = drawerStyles;

export const ProfileSection = ({
  navigation,
}: {
  navigation: DrawerContentComponentProps['navigation'];
  active: string;
}) => {
  /** Hooks */
  const dispatch = useAppDispatch();

  /** Global state */
  const isGuestMode = useSelector(selectGuestMode);
  const fullName = useSelector(selectUserFullName);

  /** Funtions */
  const disableGuestMode = () => {
    dispatch(appActions.toggleGuestMode());
  };

  return (
    <View style={profileSectionStyles.container}>
      <View style={profileSectionStyles.detailsContainer}>
        <View style={profileSectionStyles.nameContainer}>
          <Text variant="headlineSmall" style={{textTransform: 'capitalize'}}>
            {isGuestMode ? 'Guest' : fullName}
          </Text>
          <Text variant="labelSmall">0 runs completed</Text>
        </View>
        <View>
          <IconButton
            icon="account-cog"
            mode="outlined"
            size={50}
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </View>

      {isGuestMode && (
        <View style={profileSectionStyles.guestContainer}>
          <LoginButton enableThirdPartyLogin />
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
