import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import TouchID from 'react-native-touch-id';

// Make sure the path matches where you stored the image
import fingerprintImg from './assets/fingerprint.png';

export default function FingerprintScreen({ onClose, onSuccess }) {
  const handleFingerprintAuth = async () => {
    try {
      // Check if device supports biometric authentication
      const biometryType = await TouchID.isSupported();
      
      if (biometryType) {
        // Authenticate user
        await TouchID.authenticate('Verify your identity', {
          title: 'Authentication Required',
          cancelText: 'Cancel',
          fallbackLabel: 'Use Passcode',
        });
        
        // If authentication is successful
        Alert.alert('Success', 'Authentication successful!');
        onSuccess(); // This will trigger navigation to ReadyToScanScreen
      } else {
        Alert.alert('Error', 'Biometric authentication is not supported on this device');
      }
    } catch (error) {
      // Handle authentication errors
      if (error.name === 'LAErrorUserCancel') {
        // User cancelled the authentication
        return;
      }
      Alert.alert('Error', 'Authentication failed. Please try again.');
    }
  };

  return (
    <View style={styles.overlay}>
      {/* Overlay background - only closes the modal */}
      <TouchableOpacity 
        style={styles.overlayTouchable} 
        onPress={onClose}
        activeOpacity={1}
      />
      
      {/* Main content container */}
      <View style={styles.sheet}>
        <View style={styles.handle} />
        <Text style={styles.title}>One Touch Sign-In</Text>

        {/* Fingerprint authentication button */}
        <TouchableOpacity 
          style={styles.fingerprintContainer}
          onPress={handleFingerprintAuth}
          activeOpacity={0.7}
        >
          <Image
            source={fingerprintImg}
            style={styles.fingerprintImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text style={styles.instruction}>
          Place your fingerprint on the scanner{'\n'}to verify your identity
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlayTouchable: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  sheet: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 40,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#ddd',
    borderRadius: 3,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#232323',
  },
  fingerprintContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  fingerprintImage: {
    width: 80,
    height: 80,
  },
  instruction: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    marginTop: 2,
    lineHeight: 22,
  },
});




// import React from 'react';

// import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

// // Custom Fingerprint Icon Component
// const FingerprintIcon = ({ onPress }) => {
//   const styles = fingerprintStyles;
//   return (
//     <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
//       {[...Array(5)].map((_, i) => (
//         <View key={i} style={[styles.ring, { 
//           width: 20 + i * 12, 
//           height: 20 + i * 12, 
//           borderRadius: 10 + i * 6, 
//           borderWidth: i === 4 ? 2 : 1.5, // Thicker outer ring
//         }]} />
//       ))}
//     </TouchableOpacity>
//   );
// };

// const fingerprintStyles = StyleSheet.create({
//   container: {
//     width: 80,
//     height: 80,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 25, // Adjusted margin
//   },
//   ring: {
//     position: 'absolute',
//     borderColor: '#7B3FF2',
//     borderWidth: 1.5,
//   },
// });

// export default function FingerprintScreen({ onClose }) {
//   return (
//     <TouchableWithoutFeedback onPress={onClose}> 
//       <View style={styles.overlay}>
//         <TouchableWithoutFeedback> 
//           <View style={styles.sheet}>
//             <View style={styles.handle} />
//             <Text style={styles.title}>One Touch Sign-In</Text>
//             <FingerprintIcon onPress={onClose} />
//             <Text style={styles.instruction}>Place your fingerprint on the scanner{`\n`}to verify your identity</Text>
//           </View>
//         </TouchableWithoutFeedback>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const PURPLE = '#7B3FF2';
// const styles = StyleSheet.create({
//   overlay: {
//     position: 'absolute',
//     top: 0, 
//     left: 0, 
//     right: 0, 
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.4)', // Slightly darker overlay
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   sheet: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 24,
//     borderTopRightRadius: 24,
//     alignItems: 'center',
//     paddingTop: 15, // Reduced top padding
//     paddingBottom: 40,
//     paddingHorizontal: 24,
//     shadowColor: '#000',
//     shadowOpacity: 0.12,
//     shadowRadius: 12,
//     elevation: 8,
//   },
//   handle: { // Add the small handle bar at the top
//     width: 40,
//     height: 5,
//     backgroundColor: '#ddd',
//     borderRadius: 3,
//     marginBottom: 15,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 18,
//     color: '#232323',
//   },
//   instruction: {
//     fontSize: 15,
//     color: '#444',
//     textAlign: 'center',
//     marginTop: 2,
//     lineHeight: 22,
//   },
// }); 