import {Vibration} from 'react-native';

class VibrationManager {
  constructor() {}

  public vibrate() {
    Vibration.vibrate(1000);
  }
}

const vibrationManager = new VibrationManager();

export default vibrationManager;
