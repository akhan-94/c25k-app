import {ScreenWrapper} from '@shared/components';
import {SamepleFlower} from '@shared/constants/sample-data';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Card, Searchbar, Text} from 'react-native-paper';

export const FinderScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScreenWrapper>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.popularCategories}>
        <Button compact onPress={() => {}} mode="text">
          Trending
        </Button>
        <Button compact onPress={() => {}} mode="text">
          Recently Added
        </Button>
      </View>
      <FlowerCard flower={SamepleFlower} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  popularCategories: {
    flexDirection: 'row',
  },
});
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export const FlowerCard = ({flower}: any) => {
  const openFlowerDetails = React.useCallback(() => {}, []);
  return (
    <Card mode="contained" onPress={openFlowerDetails}>
      <Card.Content>
        <Text variant="titleLarge">{flower.name}</Text>
        <Text variant="bodyMedium">{flower.description}</Text>
      </Card.Content>
    </Card>
  );
};
