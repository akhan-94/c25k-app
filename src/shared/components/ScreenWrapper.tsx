import {appTheme} from '@lib/theme';
import * as React from 'react';
import type {ScrollViewProps, StyleProp, ViewStyle} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = ScrollViewProps & {
  children: React.ReactNode;
  withScrollView?: boolean;
  style?: StyleProp<ViewStyle>;
  noPadding?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export const ScreenWrapper = ({
  children,
  withScrollView = true,
  noPadding = false,
  style,
  contentContainerStyle,
  ...rest
}: Props) => {
  const theme = useTheme();

  const insets = useSafeAreaInsets();

  const containerStyle = [
    styles.container,
    {
      backgroundColor: theme.colors.background,
      paddingTop: noPadding ? 0 : appTheme.spacing.medium,
      paddingBottom: noPadding ? 0 : insets.bottom || appTheme.spacing.medium,
      paddingLeft: noPadding ? 0 : insets.left || appTheme.spacing.medium,
      paddingRight: noPadding ? 0 : insets.right || appTheme.spacing.medium,
    },
  ];

  return (
    <>
      {withScrollView ? (
        <ScrollView
          {...rest}
          contentContainerStyle={contentContainerStyle}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          style={[containerStyle, style]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[containerStyle, style]}>{children}</View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
