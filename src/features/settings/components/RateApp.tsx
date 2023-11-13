import * as React from 'react';
import {Platform} from 'react-native';
import {List} from 'react-native-paper';
import InAppReview from 'react-native-in-app-review';
import {useAppDispatch, useErrorHandler} from '@shared/hooks';
import {appActions} from '@app/state';

export const RateApp = () => {
  /** Hooks */
  const dispatch = useAppDispatch();
  const handleError = useErrorHandler();

  /** Functions */
  const rateApp = React.useCallback(() => {
    const canOpenInApp = InAppReview.isAvailable();
    if (!canOpenInApp) return;
    InAppReview.RequestInAppReview()
      .then(hasFlowFinishedSuccessfully => {
        console.log('InAppReview in android', hasFlowFinishedSuccessfully);
        console.log(
          'InAppReview in ios has launched successfully',
          hasFlowFinishedSuccessfully,
        );
        if (hasFlowFinishedSuccessfully) {
          dispatch(
            appActions.setAppRating({
              hasRated: true,
              dateRated: new Date().toISOString(),
            }),
          );
        }
      })
      .catch(error => {
        handleError('failed to open in-app rating', error);
      });
  }, [handleError, dispatch]);

  return (
    <List.Item
      title={`Rate on ${
        Platform.OS === 'android' ? 'Google Play' : 'App Store'
      }`}
      onPress={rateApp}
    />
  );
};
