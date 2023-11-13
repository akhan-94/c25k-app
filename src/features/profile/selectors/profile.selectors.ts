import {createSelector} from '@reduxjs/toolkit';
import {selectProfileState} from '../state/profile.slice';

export const selectUserFullName = createSelector(
  selectProfileState,
  ({firstName, lastName}) => {
    if (!firstName || !lastName) return 'User';
    return `${firstName} ${lastName}`;
  },
);
