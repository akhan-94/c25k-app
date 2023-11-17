import {setProfileState} from '@features/profile/state/profile.slice';
import {SupabaseClient} from '@lib/supabase';
import {store} from '@lib/redux';
import {appActions, loadingActions} from '@app/state';
import {Service} from 'typedi';

@Service()
export class AuthService {
  constructor() {}

  public async getSession() {
    SupabaseClient.auth.getSession().then(async ({data: {session}}) => {
      store.dispatch(appActions.setSession(session));
      if (session) await this._setUserMetaDataToState();
      store.dispatch(loadingActions.setStartupLoading(false));
    });
  }

  public async watchSessionChange() {
    SupabaseClient.auth.onAuthStateChange(async (_event, session) => {
      store.dispatch(appActions.setSession(session));
    });
  }

  private async _setUserMetaDataToState() {
    const {
      data: {user},
    } = await SupabaseClient.auth.getUser();
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
