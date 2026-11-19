import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  const [client, setClient] = useState('');
  const [pan, setPan] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const cleanClient = client; //.trim();
    const cleanPan = pan; //.trim().toUpperCase();
    const cleanNumber = number; //.trim();

    try {
      setLoading(true);
      const payload = {
        client_id: cleanClient,
        pan: cleanPan,
        phone_number: cleanNumber,
      };

      const response = await axios.post(
        BASE_URL + 'api/v1/auth/send-otp/',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('OTP SENT SUCCESSFULLY:', response.data);
    } catch (error: any) {
      console.log('FULL ERROR:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Image
            source={require('../../assets/PdfHubAdroit.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.heading}>IPO Login</Text>

          <Text style={styles.label}>Adroit Trading Code (UCC)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Client ID"
            value={client}
            onChangeText={setClient}
            placeholderTextColor="#8A8FA3"
            autoCapitalize="characters"
          />

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          <Text style={styles.label}>PAN (for Non-Adroit users)</Text>
          <TextInput
            style={styles.input}
            placeholder="ABCDE1234F"
            value={pan}
            onChangeText={setPan}
            placeholderTextColor="#8A8FA3"
            autoCapitalize="characters"
            maxLength={10}
          />

          <Text style={[styles.label, styles.labelSpaced]}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="10-digit Mobile Number"
            value={number}
            onChangeText={setNumber}
            placeholderTextColor="#8A8FA3"
            keyboardType="phone-pad"
            maxLength={10}
          />

          <Pressable
            style={({ pressed }) => [
              styles.button,
              (pressed || loading) && styles.buttonPressed,
            ]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Send OTP</Text>
            )}
          </Pressable>

          <Text style={styles.footer}>
            © 2025 IPO Portal. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#EEF1F9',
  },

  scroll: {
    flexGrow: 0.5,
    justifyContent: 'center',
    padding: 16,
  },

  card: {
    width: '100%',
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 18,
    backgroundColor: '#fff',
    borderRadius: 22,
    shadowColor: '#1F2B7B',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },

  logo: {
    alignSelf: 'center',
    width: 120,
    height: 90,
    // marginBottom: 8,
  },

  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1F2B7B',
    textAlign: 'center',
    marginBottom: 22,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2B7B',
    marginBottom: 8,
  },

  labelSpaced: {
    marginTop: 16,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#D5DAEA',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111',
    backgroundColor: '#F5F7FC',
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDE1EE',
  },

  dividerText: {
    marginHorizontal: 12,
    fontSize: 13,
    color: '#6B7084',
  },

  button: {
    height: 52,
    marginTop: 26,
    backgroundColor: '#0046C0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonPressed: {
    opacity: 0.8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  footer: {
    marginTop: 18,
    fontSize: 12,
    color: '#6B7084',
    textAlign: 'center',
  },
});

export default LoginScreen;
