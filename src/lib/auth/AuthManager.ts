import {setProfileState} from '@features/profile/state/profile.slice';
import {supabase} from '@lib/supabase';
import {store} from '@lib/redux';
import {appActions, loadingActions} from '@app/state';

export class AuthManager {
  constructor() {}

  public async initialize() {
    supabase.auth.getSession().then(async ({data: {session}}) => {
      store.dispatch(appActions.setSession(session));
      if (session) await this._setUserMetaDataToState();
      store.dispatch(loadingActions.setStartupLoading(false));
    });
    supabase.auth.onAuthStateChange(async (_event, session) => {
      if (_event === 'TOKEN_REFRESHED') {
        store.dispatch(appActions.setSession(session));
      }
    });
  }

  private async _setUserMetaDataToState() {
    const {
      data: {user},
    } = await supabase.auth.getUser();
    if (!user) return;
    const metadata = user.user_metadata;
    store.dispatch(
      setProfileState({
        email: user.email,
        birthdate: metadata?.birthdate,
        firstName: metadata?.first_name,
        lastName: metadata?.last_name,
      }),
    );
  }
}

const authManager = new AuthManager();

export default authManager;
