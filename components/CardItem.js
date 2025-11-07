import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

// default export: CardItem
export default function CardItem({ title, description, image, link }) {
  const openLink = async () => {
    if (!link) return;
    const supported = await Linking.canOpenURL(link);
    if (supported) {
      await Linking.openURL(link);
    } else {
      console.warn("Can't open URL:", link);
    }
  };

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={openLink}>
      <Image source={{ uri: image }} style={styles.cover} resizeMode="cover" />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc} numberOfLines={3}>{description}</Text>
        {link ? <Text style={styles.linkText}>Tap to open</Text> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    // Android elevation
    elevation: 3,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  cover: {
    width: '100%',
    height: 150,
    backgroundColor: '#eee'
  },
  body: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  desc: {
    color: '#555',
    marginBottom: 8,
  },
  linkText: {
    color: '#0066cc',
    fontSize: 12,
    fontWeight: '600',
  }
});
