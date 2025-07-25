import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

// Import screen components
import HomeScreen from '../src/screens/HomeScreen';
import LibraryScreen from '../src/screens/LibraryScreen';
import AddPetScreen from '../src/screens/AddPetScreen';

// Import constants and styles

import styles from '../src/constants/styles';
import { PET_NAMES } from '../src/constants/data';



/**
 * Main App Component
 * Manages state and navigation for the entire application.
 */
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [petLibrary, setPetLibrary] = useState([]);
  const [displayedPets, setDisplayedPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('date'); // 'date' or 'name'
  const [nameSuggestion, setNameSuggestion] = useState('?');
  const [selectedType, setSelectedType] = useState('cat');

  // 채택된 이름을 'AddPetScreen'으로 전달하기 위한 상태
  const [initialPetName, setInitialPetName] = useState(null);

  // Effect to handle filtering and sorting
  useEffect(() => {
    let pets = [...petLibrary];

    // Filtering
    if (searchTerm) {
        pets = pets.filter(pet => pet.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Sorting
    if (sortType === 'name') {
        pets.sort((a, b) => a.name.localeCompare(b.name));
    } else { // Default to 'date'
        pets.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    setDisplayedPets(pets);
  }, [petLibrary, searchTerm, sortType]);


  const handleGenerateName = () => {
    const nameList = PET_NAMES[selectedType] || PET_NAMES['other'];
    const randomIndex = Math.floor(Math.random() * nameList.length);
    setNameSuggestion(nameList[randomIndex]);
  };

  const handleSelectType = (type) => {
    setSelectedType(type);
    setNameSuggestion('?');
  };
  
  const handleAddPet = (newPet) => {
    setPetLibrary(prevLibrary => [{...newPet, createdAt: new Date().toISOString(), id: Date.now().toString()}, ...prevLibrary]);
    setCurrentScreen('library'); // Switch to library after adding a pet
  };

  // 홈 화면에서 추천된 이름을 '채택'했을 때 호출되는 함수
  const handleAdoptName = (name) => {
    setInitialPetName(name); // 채택된 이름을 상태에 저장
    setCurrentScreen('add');   // '펫 추가' 화면으로 이동
  };

  // '+' 버튼을 눌러 수동으로 추가 화면에 갈 때, 초기 이름을 null로 설정
  const navigateToAddScreen = () => {
    setInitialPetName(null);
    setCurrentScreen('add');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen 
                  onGenerateName={handleGenerateName} 
                  nameSuggestion={nameSuggestion}
                  selectedType={selectedType}
                  onSelectType={handleSelectType}
                  onAdoptName={handleAdoptName} // Pass onAdoptName prop
                />;
      case 'library':
        return <LibraryScreen 
                    displayedPets={displayedPets}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    sortType={sortType}
                    setSortType={setSortType} 
                />;
      case 'add':
        return <AddPetScreen onAddPet={handleAddPet} initialName={initialPetName} />;
      default:
        return <HomeScreen />;
    }
  };
  
  const headerTitle = {
    home: 'MyPetLibrary',
    library: 'My Library',
    add: 'Add New Pet'
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.appHeader}>
        <Text style={styles.appHeaderText}>{headerTitle[currentScreen]}</Text>
      </View>
      
      <View style={styles.contentArea}>
        {renderScreen()}
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => setCurrentScreen('home')}>
          <Text style={[styles.navIcon, currentScreen === 'home' && styles.navIconActive]}></Text>
          <Text style={[styles.navText, currentScreen === 'home' && styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navAddButton} onPress={navigateToAddScreen}>
          <Text style={styles.navAddButtonText}>＋</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton} onPress={() => setCurrentScreen('library')}>
          <Text style={[styles.navIcon, currentScreen === 'library' && styles.navIconActive]}></Text>
          <Text style={[styles.navText, currentScreen === 'library' && styles.navTextActive]}>Library</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}