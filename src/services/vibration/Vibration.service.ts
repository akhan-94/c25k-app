import {Vibration} from 'react-native';
import {Service} from 'typedi';

@Service()
export class VibrationService {
  constructor() {}

  public vibrate() {
    Vibration.vibrate(1000);
  }
}
