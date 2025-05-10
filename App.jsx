import React, { useState } from 'react'
import { StyleSheet, Modal, View } from 'react-native'
import LoginScreen from './LoginScreen'
import HomeScreen from './HomeScreen'
import FingerprintScreen from './FingerprintScreen'
import ReadyToScanScreen from './ReadyToScanScreen'
import CheckInScreen from './CheckInScreen'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [showFingerprint, setShowFingerprint] = useState(false)
  const [showReadyToScan, setShowReadyToScan] = useState(false)
  const [showCheckIn, setShowCheckIn] = useState(false)

  const handleFingerprintSuccess = () => {
    setShowFingerprint(false); // Close fingerprint modal
    setShowReadyToScan(true); // Show ReadyToScan screen
  };

  const handleFingerprintCancel = () => {
    setShowFingerprint(false); // Just close the modal without navigation
  };

  const handleCancelScan = () => {
    setShowReadyToScan(false); // Close ReadyToScan screen, return to Home
  };

  const handleShowFingerprint = () => {
    setShowFingerprint(true);
  };

  const handleNfcScan = () => {
    setShowReadyToScan(false);
    setShowCheckIn(true);
  };

  const handleCheckInDone = () => {
    setShowCheckIn(false);
  };

  return (
    <View style={{flex: 1}}> 
      {!loggedIn ? (
        <LoginScreen onSignIn={() => setLoggedIn(true)} />
      ) : showCheckIn ? (
        <CheckInScreen onDone={handleCheckInDone} />
      ) : showReadyToScan ? (
        <ReadyToScanScreen onCancel={handleCancelScan} onNfcScan={handleNfcScan} />
      ) : (
        <HomeScreen onTapCenter={handleShowFingerprint} />
      )}

      {/* Fingerprint Modal */}
      <Modal
        transparent={true}
        visible={showFingerprint}
        animationType="slide"
        onRequestClose={handleFingerprintCancel}
      >
        <FingerprintScreen 
          onClose={handleFingerprintCancel}
          onSuccess={handleFingerprintSuccess}
        /> 
      </Modal>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})