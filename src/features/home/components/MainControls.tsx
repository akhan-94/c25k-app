import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {IconButton, MD3Colors, Text} from 'react-native-paper';

export const MainControls = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <IconButton
          icon="camera"
          mode="contained"
          iconColor={MD3Colors.error50}
          size={30}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View style={styles.middle}>
        <Pressable style={styles.mainButton}>
          <Text>Start</Text>
        </Pressable>
      </View>
      <View style={styles.right}>
        <IconButton
          icon="camera"
          iconColor={MD3Colors.error50}
          size={30}
          mode="contained"
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flex: 2,
    marginRight: 16,
    display: 'flex',
    alignItems: 'flex-end',
  },
  middle: {
    flex: 1,
  },
  right: {
    marginLeft: 16,
    flex: 2,
    display: 'flex',
    alignItems: 'flex-start',
  },
  mainButton: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 200,
    width: 75,
    height: 75,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
