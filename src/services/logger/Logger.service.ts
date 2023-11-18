import {Service} from 'typedi';
import crashlytics from '@react-native-firebase/crashlytics';
import type {LoggerUserDetails} from './logger.types';

@Service()
export class LoggerService {
  constructor() {}

  public async setUserDetails(user: LoggerUserDetails) {
    try {
      await Promise.all([
        crashlytics().setUserId(user.uid),
        crashlytics().setAttributes({
          email: user.email || 'NOT_SET',
        }),
      ]);
    } catch (error) {
      this.recordError(error);
    }
  }

  public recordError(error: any) {
    if (__DEV__) console.error(error);
    else crashlytics().recordError(error);
  }
}
