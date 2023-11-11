import * as React from 'react';
import {View} from 'react-native';
import {Button, Dialog, List, Portal} from 'react-native-paper';

interface RadioSettingItemProps {
  title: string;
  description?: string;
  dialogTitle: string;
  content: (dismiss: () => void) => React.ReactNode;
}

export const RadioSettingItem = ({
  title,
  description,
  dialogTitle,
  content,
}: RadioSettingItemProps) => {
  /** Local State */
  const [visible, setVisible] = React.useState(false);

  /** Callbacks */
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View>
      <List.Item title={title} description={description} onPress={showDialog} />
      <Portal>
        <Dialog visible={visible} onDismiss={() => hideDialog()}>
          <Dialog.Title>{dialogTitle}</Dialog.Title>
          <Dialog.Content>{content(hideDialog)}</Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog()}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
