// AddPetScreen.js

import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../constants/styles';

const AddPetScreen = ({ onAddPet, initialName }) => {
  const [name, setName] = useState(initialName || '');
  const [memo, setMemo] = useState('');
  const [type, setType] = useState('cat');
  const [imageUri, setImageUri] = useState(null); // To store the selected image URI

  const pickImage = async () => {
    Alert.alert(
      "Add Photo",
      "Choose an option to add a photo",
      [
        {
          text: "Take Photo",
          onPress: async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
              Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
              return;
            }
            let result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });

            if (!result.canceled) {
              setImageUri(result.assets[0].uri);
            }
          }
        },
        {
          text: "Choose from Library",
          onPress: async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
              return;
            }
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });

            if (!result.canceled) {
              setImageUri(result.assets[0].uri);
            }
          }
        },
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    );
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      Alert.alert("Missing Name", "Please enter a name for your pet.");
      return;
    }
    if (!imageUri) {
      Alert.alert("Missing Photo", "Please add a photo for your pet.");
      return;
    }

    const newPet = {
      id: Date.now(),
      createdAt: new Date(),
      name,
      memo,
      type,
      image: imageUri,
    };
    onAddPet(newPet);
    // Reset state
    setName('');
    setMemo('');
    setType('cat');
    setImageUri(null);
  };

  return (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Add a New Pet</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Pet Photo</Text>
        <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
          <Text style={styles.imagePickerButtonText}>Add a Photo</Text>
        </TouchableOpacity>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.selectedImagePreview} />}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Pet&apos;s Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter pet's name"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Animal Type</Text>
        <View style={styles.typeSelectorContainer}>
          <TouchableOpacity
            style={[styles.typeButton, type === 'cat' && styles.typeButtonSelected]}
            onPress={() => setType('cat')}>
            <Text style={[styles.typeButtonText, type === 'cat' && styles.typeButtonTextSelected]}> Cat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.typeButton, type === 'dog' && styles.typeButtonSelected]}
            onPress={() => setType('dog')}>
            <Text style={[styles.typeButtonText, type === 'dog' && styles.typeButtonTextSelected]}> Dog</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.typeButton, type === 'other' && styles.typeButtonSelected]}
            onPress={() => setType('other')}>
            <Text style={[styles.typeButtonText, type === 'other' && styles.typeButtonTextSelected]}> Other</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Memo</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          value={memo}
          onChangeText={setMemo}
          placeholder="e.g., Loves to chase squirrels..."
          multiline
        />
      </View>

      <TouchableOpacity style={styles.mainButton} onPress={handleSubmit}>
        <Text style={styles.mainButtonText}>Save Pet to Library</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddPetScreen;