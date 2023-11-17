import {useAppDispatch} from '@shared/hooks';
import * as React from 'react';
import {List, RadioButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectSettingsState, setUnits} from '../state/settings.slice';
import {RadioSettingItem} from './RadioSettingItem';

export const Units = () => {
  /** Hooks */
  const dispatch = useAppDispatch();

  /** Global state */
  const {units} = useSelector(selectSettingsState);

  return (
    <RadioSettingItem
      title="Units"
      description={units === 'imperial' ? 'Imperial' : 'Metric'}
      dialogTitle="Choose unit system"
      content={dismiss => (
        <>
          <List.Item
            title="Metric"
            left={() => (
              <RadioButton
                value="metric"
                status={units === 'metric' ? 'checked' : 'unchecked'}
              />
            )}
            onPress={() => {
              dispatch(setUnits('metric'));
              dismiss();
            }}
          />
          <List.Item
            title="Imperial"
            left={() => (
              <RadioButton
                value="imperial"
                status={units === 'imperial' ? 'checked' : 'unchecked'}
              />
            )}
            onPress={() => {
              dispatch(setUnits('imperial'));
              dismiss();
            }}
          />
        </>
      )}
    />
  );
};
