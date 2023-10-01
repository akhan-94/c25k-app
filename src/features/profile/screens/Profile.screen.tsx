import {useAuth} from '@shared/hooks/useAuth';
import {ScreenWrapper} from '@shared/components';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Text} from 'react-native-paper';

export const ProfileScreen = () => {
  /** Hooks */
  const {signOut} = useAuth();

  return (
    <ScreenWrapper>
      <View style={styles.avatarContainer}>
        <Avatar.Text size={120} label="XD" />
      </View>
      <Text variant="headlineLarge" style={styles.userName}>
        Profile
      </Text>
      <Button mode="contained" onPress={signOut}>
        Logout
      </Button>
    </ScreenWrapper>
  );
};

export const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  userName: {
    textAlign: 'center',
    marginBottom: 20,
  },
});
