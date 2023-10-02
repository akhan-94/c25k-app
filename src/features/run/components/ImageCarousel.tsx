import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Dimensions} from 'react-native';
const win = Dimensions.get('window');

export const ImageCarousel = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
      <Image
        source={require('./image.jpg')}
        style={styles.image}
        resizeMode={'cover'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    borderRadius: 10,
    width: win.width - 17 - 17,
  },
});
