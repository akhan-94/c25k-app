import {supabase} from '@lib/supabase';
import {ScreenWrapper} from '@shared/components';
import * as React from 'react';
import {Text} from 'react-native-paper';

export const MyProfileScreen = () => {
  const [testData, setTestData] = React.useState<any>(null);

  const getShit = React.useCallback(async () => {
    const {
      data: {user},
    } = await supabase.auth.getUser();
    if (!user) return;
    const metadata = user.user_metadata;
    setTestData(metadata);
  }, []);

  React.useEffect(() => {
    getShit();
  }, [getShit]);

  return (
    <ScreenWrapper>
      <Text>My Profile</Text>
      <Text>{JSON.stringify(testData, null, 2)}</Text>
    </ScreenWrapper>
  );
};
