import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  Platform, 
} from 'react-native';

export default function LoginScreen({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Welcome ! Please log in to track your attendance</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text>{showPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity
            style={styles.customCheckbox}
            onPress={() => setRememberMe(!rememberMe)}
          >
            {rememberMe ? <View style={styles.checkedBox} /> : null}
          </TouchableOpacity>
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signInButton} onPress={onSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.newHereText}>New here? </Text>
        <TouchableOpacity>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.adminText}>Login as Admin</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'flex-start',
  },
  backButton: {
    marginTop: 10,
    marginBottom: 20,
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontSize: 22,
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#222',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#222',
  },
  eyeButton: {
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 4,
    color: '#222',
  },
  forgotText: {
    color: '#aaa',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#7B3FF2',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  newHereText: {
    color: '#aaa',
    fontSize: 15,
  },
  createAccountText: {
    color: '#7B3FF2',
    fontWeight: 'bold',
    fontSize: 15,
  },
  adminText: {
    color: '#7B3FF2',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
  },
  customCheckbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#7B3FF2',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checkedBox: {
    width: 12,
    height: 12,
    backgroundColor: '#7B3FF2',
    borderRadius: 2,
  },
}); 