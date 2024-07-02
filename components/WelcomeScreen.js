import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WelcomeScreen = ({ route, navigation }) => {
  const { name } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to iNethi Stories {'\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t' + name}!</Text>
      <Text style={styles.subtitle}>
        Unleash your creativity, and write the most thrilling narrative that you can imagine!
      </Text>
      <TouchableOpacity style={styles.button} title="Author" onPress={() => navigation.navigate('StoryDetails', { name })} >
        <Text style={styles.buttonText}> Author </Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>
        Explore the realm of interactive narratives, offering you the knowledge of any category you can think of!
      </Text>
      <TouchableOpacity style={styles.button} title="Interact" onPress={() => {}} >
        <Text style={styles.buttonText}> Interact </Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>
        View the usage analytics to your stories, and see how users interacted with your work!
      </Text>
      <TouchableOpacity style={styles.button} title="View Story Analytics" onPress={() => {}} >
        <Text style={styles.buttonText}> Analytics </Text>
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
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
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
});

export default WelcomeScreen;
