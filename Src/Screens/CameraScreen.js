import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const App = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.openPicker({
        cropping: true,
        width: 300,
        height: 400,
        compressImageQuality: 0.8,
      });
      setImage(result);
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const captureImage = async () => {
    try {
      const result = await ImagePicker.openCamera({
        cropping: true,
        width: 300,
        height: 400,
        compressImageQuality: 0.8,
      });
      setImage(result);
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Image" onPress={pickImage} />
      <Button title="Capture Image" onPress={captureImage} style={styles.button} />
      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image.path }} style={styles.image} />
          <Text style={styles.text}>Path: {image.path}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginTop: 10,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
});

export default App;
