import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

export default function ReadyToScanScreen({ onCancel, onNfcScan }) {
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds countdown

  useEffect(() => {
    // Start countdown when component mounts
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSessionExpired();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup timer on unmount
    return () => clearInterval(timer);
  }, []);

  const handleSessionExpired = () => {
    Alert.alert(
      'Session Expired',
      'Your scanning session has expired. Please authenticate again.',
      [
        {
          text: 'OK',
          onPress: onCancel
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Ready to Scan</Text>
        
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>{timeLeft}s</Text>
        </View>

        <View style={styles.graphicContainer}>
          <TouchableOpacity 
            style={[styles.outerCircle, timeLeft === 0 && styles.disabledCircle]} 
            onPress={timeLeft > 0 ? onNfcScan : null} 
            activeOpacity={0.7}
          >
            <View style={styles.phoneIcon}>
              <View style={styles.phoneScreen} />
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.instruction}>
          {timeLeft > 0 
            ? 'Approach the NFC reader'
            : 'Session expired. Please try again.'}
        </Text>
      </View>

      <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const PURPLE = '#7B3FF2';
const GRAY_LIGHT = '#f0f0f0';
const GRAY_MEDIUM = '#bdbdbd';
const GRAY_DARK = '#666';
const DARK = '#232323';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GRAY_LIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30, // Push cancel button from bottom edge
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: DARK,
    marginBottom: 20, // Spacing below title
  },
  timerContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: PURPLE,
    borderRadius: 20,
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  graphicContainer: {
    marginBottom: 30, // Spacing below graphic
    alignItems: 'center',
  },
  outerCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledCircle: {
    borderColor: GRAY_MEDIUM,
    opacity: 0.5,
  },
  phoneIcon: {
    width: 70,
    height: 120,
    borderRadius: 10,
    backgroundColor: PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5, // Padding inside the phone border
  },
  phoneScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: DARK,
    borderRadius: 6, // Slightly smaller radius for the screen
  },
  instruction: {
    fontSize: 16,
    color: GRAY_DARK,
    marginTop: 10, // Spacing above instruction
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: GRAY_MEDIUM,
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    color: GRAY_DARK, 
    fontWeight: '500',
  },
}); 