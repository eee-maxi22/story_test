import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignIn = () => {
    navigation.navigate('Welcome', { name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>iNethi Stories</Text>
      <Image source={require('../assets/book.png')} style={styles.image} />
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} title="Sign In" onPress={handleSignIn}>
        <Text style={styles.buttonText}> Sign In </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} title="Register" onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}> Register </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 50,
    width: '30%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default HomeScreen;
