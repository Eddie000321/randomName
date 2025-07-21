import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../constants/styles';

const HomeScreen = ({ onGenerateName, nameSuggestion, selectedType, onSelectType, onAdoptName }) => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Find the Perfect Name</Text>
      <Text style={styles.screenSubtitle}>Let&apos;s find a name for your new best friend!</Text>

      <View style={styles.typeSelectorContainer}>
        <TouchableOpacity
          style={[styles.typeButton, selectedType === 'cat' && styles.typeButtonSelected]}
          onPress={() => onSelectType('cat')}>
          <Text style={[styles.typeButtonText, selectedType === 'cat' && styles.typeButtonTextSelected]}> Cat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeButton, selectedType === 'dog' && styles.typeButtonSelected]}
          onPress={() => onSelectType('dog')}>
          <Text style={[styles.typeButtonText, selectedType === 'dog' && styles.typeButtonTextSelected]}> Dog</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeButton, selectedType === 'other' && styles.typeButtonSelected]}
          onPress={() => onSelectType('other')}>
          <Text style={[styles.typeButtonText, selectedType === 'other' && styles.typeButtonTextSelected]}> Other</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.suggestionBox}>
        <Text style={styles.suggestionText}>{nameSuggestion}</Text>
      </View>

      <TouchableOpacity style={styles.mainButton} onPress={onGenerateName}>
        <Text style={styles.mainButtonText}>
          {nameSuggestion === '?' ? 'Suggest a Name' : 'Suggest another name'}
        </Text>
      </TouchableOpacity>

      {nameSuggestion !== '?' && (
        <TouchableOpacity
          style={[styles.mainButton, { marginTop: 16, backgroundColor: '#10b981' }]} // emerald-500
          onPress={() => onAdoptName(nameSuggestion)}
        >
          <Text style={styles.mainButtonText}>I love this name! ❤️</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeScreen;