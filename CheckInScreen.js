import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function CheckInScreen({ onDone }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.shieldContainer}>
          {/* Shield with checkmark */}
          <View style={styles.shield}>
            <View style={styles.checkmark} />
            <View style={styles.checkmarkShort} />
          </View>
        </View>
        <Text style={styles.title}>Check-in Successful!</Text>
        <Text style={styles.subtitle}>Enjoy your session .</Text>
      </View>
      <TouchableOpacity style={styles.doneButton} onPress={onDone}>
        <Text style={styles.doneButtonText}>Done !</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const GREEN = '#1DB954';
const PURPLE = '#7B3FF2';
const BLUE = '#2346D9';
const DARK = '#232323';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  shieldContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  shield: {
    width: 160,
    height: 160,
    borderWidth: 7,
    borderColor: GREEN,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  checkmark: {
    position: 'absolute',
    width: 60,
    height: 12,
    borderLeftWidth: 0,
    borderBottomWidth: 7,
    borderColor: PURPLE,
    borderRadius: 6,
    transform: [{ rotate: '45deg' }],
    left: 45,
    top: 80,
  },
  checkmarkShort: {
    position: 'absolute',
    width: 32,
    height: 12,
    borderLeftWidth: 0,
    borderBottomWidth: 7,
    borderColor: PURPLE,
    borderRadius: 6,
    transform: [{ rotate: '-45deg' }],
    left: 80,
    top: 70,
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    color: DARK,
    marginTop: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
    textAlign: 'center',
  },
  doneButton: {
    backgroundColor: BLUE,
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  doneButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
}); 