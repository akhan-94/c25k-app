import type {
  BottomSheetBackdropProps,
  BottomSheetBackgroundProps,
} from '@gorhom/bottom-sheet';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import type {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {appTheme} from '@lib/theme';
import {useBottomSheetBackHandler} from '@shared/hooks';
import * as React from 'react';
import {Keyboard, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

export interface ModalContainerProps {
  children: React.ReactNode;
  enableThirdPartyLogin: boolean;
  sheetRef: React.RefObject<BottomSheetModalMethods>;
}

export const ModalContainer = ({
  children,
  sheetRef,
  enableThirdPartyLogin,
}: ModalContainerProps) => {
  /** Derived State */
  const snapPoints = React.useMemo(() => ['100%'], []);

  const {handleSheetPositionChange} = useBottomSheetBackHandler(sheetRef);

  /** Functions */
  const renderBackdrop = React.useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.75}
        enableTouchThrough={false}
        pressBehavior="close"
      />
    ),
    [],
  );

  const handleSheetChanges = React.useCallback(
    (...args: any) => {
      handleSheetPositionChange(args);
      if (args[0] === -1) Keyboard.dismiss();
    },
    [handleSheetPositionChange],
  );

  return (
    <BottomSheetModal
      ref={sheetRef}
      backgroundComponent={BottomSheetBackground}
      backdropComponent={renderBackdrop}
      index={0}
      snapPoints={snapPoints}
      detached={true}
      bottomInset={appTheme.spacing.medium}
      enablePanDownToClose
      enableDynamicSizing={true}
      handleComponent={null}
      style={styles.container}
      onChange={handleSheetChanges}>
      <BottomSheetView style={styles.innerContent}>
        <IconButton
          icon="close"
          onPress={() => {
            sheetRef.current?.dismiss();
          }}
          style={styles.closeButton}
        />
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const BottomSheetBackground = ({
  style,
  animatedIndex,
}: BottomSheetBackgroundProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      animatedIndex.value,
      [0, 1],
      [appTheme.colors.surface, appTheme.colors.surface],
    ),
  }));
  const containerStyle = React.useMemo(
    () => [style, containerAnimatedStyle, styles.sheetBackground],
    [style, containerAnimatedStyle],
  );
  return <Animated.View pointerEvents="none" style={containerStyle} />;
};

const styles = StyleSheet.create({
  container: {},
  innerContent: {
    padding: appTheme.spacing.medium,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: appTheme.spacing.medium,
  },
  closeButton: {
    marginTop: -(appTheme.spacing.medium / 2),
    marginLeft: -(appTheme.spacing.medium / 2),
  },
  sheetBackground: {
    borderRadius: 10,
  },
});
