import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
} from 'react-native';

const LoginScreen = ({ navigation, onLogin }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/PdfHubAdroit.png')}
        style={styles.logo}
      />

      <View style={styles.card}>
        <Text style={styles.heading}>Login</Text>

        <Text style={styles.subheading}>Please login to continue</Text>

        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <Pressable
          style={styles.button}
          onPress={onLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.signupText}>
        <Text style={styles.signupNormal}>Don't have an account? </Text>

        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signup}>Sign Up</Text>
        </Pressable>
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
    marginBottom: 20,
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
  },

  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
  },

  input: {
    height: 45,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#383B7D',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },

  button: {
    height: 45,
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: '#383B7D',
    borderRadius: 15,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  signupText: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signupNormal: {
    color: '#666',
    fontSize: 13,
  },

  signup: {
    color: '#383B7D',
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default LoginScreen;
