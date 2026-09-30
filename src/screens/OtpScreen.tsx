import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

const OtpScreen = ({onLogin}:any) => {
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/PdfHubAdroit.png')}
        style={styles.logo}
      />
      <View style={styles.card}>
        <Text style={styles.heading}>Verify OTP</Text>

        <Text style={styles.subheading}>
          Enter the 6-digit OTP sent to your mobile number
        </Text>

        <TextInput
          style={styles.otpInput}
          value={otp}
          onChangeText={setOtp}
          placeholder="Enter OTP"
          placeholderTextColor="#999"
          keyboardType="number-pad"
          maxLength={6}
        />

        <Pressable
          style={styles.button}
          onPress={onLogin}
        >
          <Text style={styles.buttonText}>Verify OTP</Text>
        </Pressable>

        {/* <Pressable onPress={() => console.log('Resend OTP')}>
          <Text style={styles.resendText}>Resend OTP</Text>
        </Pressable> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
    backgroundColor: '#f5f6fa',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 35,
  },
  card: {
    width: '100%',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#383B7D',
    borderWidth: 1,
    shadowColor: '#110C2E',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 10,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
  },

  subheading: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
  },

  otpInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#383B7D',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 8,
    backgroundColor: '#fff',
  },

  button: {
    height: 45,
    marginTop: 25,
    backgroundColor: '#383B7D',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  resendText: {
    marginTop: 20,
    color: '#383B7D',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OtpScreen;
