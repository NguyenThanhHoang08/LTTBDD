import { StyleSheet, Text, View } from 'react-native';

type FloatingCartButtonProps = {
  count?: number;
};

export function FloatingCartButton({ count = 0 }: FloatingCartButtonProps) {
  return (
    <View style={styles.cartButton}>
      <Text style={styles.cartText}>🛒</Text>
      <View style={styles.cartBadge}>
        <Text style={styles.cartBadgeText}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartButton: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4f46e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    fontSize: 26,
    color: '#fff',
  },
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#ef4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
