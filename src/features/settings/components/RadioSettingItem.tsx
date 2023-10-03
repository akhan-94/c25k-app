import * as React from 'react';
import {View} from 'react-native';
import {Button, Dialog, List, Portal, Text} from 'react-native-paper';

interface RadioSettingItemProps {
  title: string;
  description?: string;
  dialogTitle: string;
}

export const RadioSettingItem = ({
  title,
  description,
  dialogTitle,
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
          <Dialog.Content>
            <Text variant="bodyMedium">This is simple dialog</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog()}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
