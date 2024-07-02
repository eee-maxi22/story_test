import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

const StoryDetailsScreen = ({ route, navigation }) => {
  const { name } = route.params || {};
  const [category, setCategory] = useState('');
  const [storyName, setStoryName] = useState('');
  const [file, setFile] = useState(null);

  const handleFilePicker = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success' && result.name/endsWith('.html')) {
      setFile(result);
    }
    else {
      alert('Please select an HTML file');
    }
  };

  const handleNext = async () => {
    // Handle next step (saving data and opening twine)
    if (file) {
      const formData = new FormData();
      formData.append('file', {
        uri: file.uri,
        name: file.name,
        type: 'text/html',
      });

      try {
        const response = await axios.post('http://192.168.1.48:8081/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        console.error('File upload failed:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Give us a little hint towards what you're planning, {name}</Text>
      <TextInput
        placeholder="Category"
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        placeholder="Title"
        style={styles.input}
        value={storyName}
        onChangeText={setStoryName}
      />
      <TextInput
        placeholder="..."
        style={styles.input}
        // value={storyName}
        // onChangeText={setStoryName}
      />
      <TextInput
        placeholder="..."
        style={styles.input}
        // value={storyName}
        // onChangeText={setStoryName}
      />
      <TouchableOpacity style={styles.button} title="Upload Story" onPress={handleFilePicker} >
        <Text style={styles.buttonText}> Upload Story </Text>
      </TouchableOpacity>
      {file && <Text style={styles.fileName}>{file.name}</Text>}
      <TouchableOpacity style={styles.fileName} title="Next" onPress={handleNext} >
        <Text style={styles.buttonText}> Next </Text>
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
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  fileName: {
    marginVertical: 10,
    fontSize: 16,
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

export default StoryDetailsScreen;
