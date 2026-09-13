import { View, Text, StyleSheet } from 'react-native';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>BookStore</Text>

      <View style={styles.icons}>
        <Text style={styles.icon}>Search</Text>
        <Text style={styles.icon}>Cart</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#312E81',
    width: '100%',
  },

  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  icon: {
    color: 'white'
  },

  icons: {
    flexDirection: 'row',
    gap: 16,
  },
});