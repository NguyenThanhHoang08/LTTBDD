import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Header } from './components/Header';
import { CategoryChips } from './components/CategoryChips';
import { BookGrid } from './components/BookGrid';
import { FloatingCartButton } from './components/FloatingCartButton';
import { BOOKS } from './data';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <View style={styles.screen}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Danh mục</Text>
        <CategoryChips />

        <Text style={[styles.sectionTitle, styles.bookTitle]}>Sách nổi bật</Text>
        <BookGrid books={BOOKS} />
      </ScrollView>

      <FloatingCartButton count={cartCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
  },
  bookTitle: {
    marginTop: 18,
  },
});
