import { View, Text, StyleSheet, FlatList } from 'react-native';

import { COLOURS } from '../utils/colours';
import { FONT_SIZES, SPACING } from '../utils/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.md,
  },
  title: {
    color: COLOURS.white,
    fontSize: FONT_SIZES.md,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    color: COLOURS.white,
    fontSize: FONT_SIZES.md,
    paddingTop: SPACING.sm,
  },
});

const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

export default FocusHistory;
