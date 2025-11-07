import React from 'react';
import { View, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { CardList } from './components/CardList';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#f6f7fb" />
      <CardList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f6f7fb' },
});
