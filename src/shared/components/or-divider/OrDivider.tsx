import {spacing} from '@shared/styles';
import type {Spacing} from '@shared/styles/spacing';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const OrDivider = ({spacing = 'medium'}: {spacing?: Spacing}) => {
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

const orDividerStyles = (spaceName: Spacing) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: spacing[spaceName],
      paddingBottom: spacing[spaceName],
      gap: spacing[spaceName],
    },
  });

const styles = StyleSheet.create({
  borderElement: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },
});
