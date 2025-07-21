import React from 'react';
import { Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../constants/styles';

const LibraryScreen = ({ displayedPets, searchTerm, setSearchTerm, sortType, setSortType }) => {
  const typeIcons = { cat: '🐱', dog: '🐶', other: '🐾' };

  return (
    <View style={{flex: 1}}>
      <View style={styles.libraryControls}>
        <TextInput
          style={styles.searchInput}
          placeholder=" Find a pet by name..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <View style={styles.sortContainer}>
          <Text style={styles.sortLabel}>Sort by:</Text>
          <TouchableOpacity
            style={[styles.sortButton, sortType === 'date' && styles.sortButtonActive]}
            onPress={() => setSortType('date')}>
            <Text style={[styles.sortButtonText, sortType === 'date' && styles.sortButtonTextActive]}>Date</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sortButton, sortType === 'name' && styles.sortButtonActive]}
            onPress={() => setSortType('name')}>
            <Text style={[styles.sortButtonText, sortType === 'name' && styles.sortButtonTextActive]}>Name</Text>
          </TouchableOpacity>
        </View>
      </View>
      {displayedPets.length === 0 ? (
        <View style={[styles.screenContainer, { justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={{ fontSize: 60 }}>🐾</Text>
          <Text style={styles.emptyStateTitle}>No Pets Found</Text>
          <Text style={styles.emptyStateSubtitle}>{searchTerm ? 'Try a different search term.' : "Your library is empty."}</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.libraryGrid}>
          {displayedPets.map((pet) => (
            <View key={pet.id} style={styles.petCard}>
              <Image source={{ uri: pet.image }} style={styles.petCardImage} />
              <View style={styles.petCardInfo}>
                <View style={styles.petCardHeader}>
                  <Text style={styles.petCardName} numberOfLines={1}>{pet.name}</Text>
                  <Text style={styles.petCardIcon}>{typeIcons[pet.type] || ''}</Text>
                </View>
                <Text style={styles.petCardMemo} numberOfLines={1}>{pet.memo}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default LibraryScreen;
