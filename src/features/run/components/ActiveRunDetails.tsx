import * as React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectActiveStep, selectStatus} from '../run.selectors';

export const ActiveRunDetails = () => {
  /** Global State */
  const status = useSelector(selectStatus);
  const activeStep = useSelector(selectActiveStep);
  return (
    <View>
      <Text style={{color: 'white'}}>{status}</Text>
      <Text style={{color: 'white'}}>{activeStep}</Text>
    </View>
  );
};
