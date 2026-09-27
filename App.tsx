
import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { HomeScreen } from './screens/HomeScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { CartScreen } from './screens/CartScreen';
import { TabBar, TabKey } from './components/TabBar';

import { BOOKS, CART_ITEMS } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const selectedBook =
    BOOKS.find((b) => b.id === selectedBookId) ?? null;

  const renderContent = () => {
    // Nếu đang xem chi tiết sách
    if (selectedBook) {
      return (
        <BookDetailScreen
          book={selectedBook}
          onBack={() => setSelectedBookId(null)}
          onAddToCart={() => setCartCount((n) => n + 1)}
        />
      );
    }

    // Tab Trang chủ
    if (activeTab === 'home') {
      return (
        <HomeScreen
          cartCount={cartCount}
          onPressBook={(id) => setSelectedBookId(id)}
          onPressCart={() => setActiveTab('cart')}
        />
      );
    }

    // Tab Giỏ hàng
    if (activeTab === 'cart') {
      return <CartScreen items={CART_ITEMS} />;
    }

    // Tab Danh mục / Tài khoản
    return <Placeholder tab={activeTab} />;
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        {renderContent()}

        <TabBar
          active={activeTab}
          onChange={(tab) => {
            setSelectedBookId(null);
            setActiveTab(tab);
          }}
        />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function Placeholder({ tab }: { tab: TabKey }) {
  const note: Record<TabKey, string> = {
    home: '',
    category: 'Nội dung Danh mục',
    cart: '',
    account: 'Nội dung Tài khoản',
  };

  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>
        {note[tab]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  body: {
    flex: 1,
  },

  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  placeholderText: {
    textAlign: 'center',
    color: '#5B6B7F',
  },
});