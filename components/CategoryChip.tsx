import { StyleSheet, Text, View } from 'react-native';

type CategoryChipProps = {
  label: string;
};

export function CategoryChip({ label }: CategoryChipProps) {
  return (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#4f46e5',
    backgroundColor: '#eef2ff',
  },
  chipText: {
    color: '#312e81',
    fontSize: 14,
    fontWeight: '600',
  },
});
