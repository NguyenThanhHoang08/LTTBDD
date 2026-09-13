import { StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../data';
import { CategoryChip } from './CategoryChip';

export function CategoryChips() {
  return (
    <View style={styles.wrap}>
      {CATEGORIES.map((item) => (
        <CategoryChip key={item} label={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
});
