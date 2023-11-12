import {useErrorHandler} from '@shared/hooks';
import * as React from 'react';
import {Button, Dialog, List, Portal, Text} from 'react-native-paper';

export const DeleteAccount = () => {
  /** Hooks */
  const handleError = useErrorHandler();

  /** Local State */
  const [visible, setVisible] = React.useState(false);

  /** Functions */
  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const deleteAccount = React.useCallback(async () => {
    try {
      console.log('delete account');
      hideDialog();
    } catch (error) {
      handleError('failed to delete account', error);
    }
  }, [handleError]);

  return (
    <>
      <List.Item title="Delete account" onPress={showDialog} />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Delete account</Dialog.Title>
          <Dialog.Content>
            <Text>
              Are you sure you want to delete your account? This cannot be
              undone.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={deleteAccount}>Confirm</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};
