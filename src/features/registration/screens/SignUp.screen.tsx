import {supabase} from 'src/lib/supabase';
import * as React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';

export const SignUpScreen = () => {
  /** Local State */
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  /** Functions */
  const login = React.useCallback(async () => {
    const {data, error} = await supabase.auth.signUp({
      email,
      password,
    });
    console.log(JSON.stringify(data, null, 2));
    if (error) console.log(error);
  }, [email, password]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{padding: 20}}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button mode="contained" onPress={login}>
            Create
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
