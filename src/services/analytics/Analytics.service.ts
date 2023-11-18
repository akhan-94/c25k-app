import Container, {Service} from 'typedi';
import analytics from '@react-native-firebase/analytics';
import {LoggerService} from '@services/logger';

@Service()
export class AnalyticsService {
  public readonly logger = Container.get(LoggerService);

  constructor() {}

  public async logScreenView(routeName: string | undefined) {
    if (!routeName) return;
    try {
      await analytics().logScreenView({
        screen_name: routeName,
        screen_class: routeName,
      });
    } catch (error) {
      this.logger.recordError(error);
    }
  }
}
