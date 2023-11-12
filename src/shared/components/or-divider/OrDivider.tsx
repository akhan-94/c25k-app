import type {AppThemeSpacing} from '@lib/theme';
import {appTheme} from '@lib/theme';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const OrDivider = ({
  spacing = 'medium',
}: {
  spacing?: AppThemeSpacing;
}) => {
  return (
    <View style={orDividerStyles(spacing).container}>
      <View style={styles.borderElement} />
      <View>
        <Text>OR</Text>
      </View>
      <View style={styles.borderElement} />
    </View>
  );
};

const orDividerStyles = (spaceName: AppThemeSpacing) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: appTheme.spacing[spaceName],
      paddingBottom: appTheme.spacing[spaceName],
      gap: appTheme.spacing[spaceName],
    },
  });

const styles = StyleSheet.create({
  borderElement: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },
});
