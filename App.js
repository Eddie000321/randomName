
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

// 분리된 파일들을 import 합니다.
import { NAMES_DATA } from './src/constants/data';
import styles from './src/constants/styles';
import HomeScreen from './src/screens/HomeScreen';
import LibraryScreen from './src/screens/LibraryScreen';
import AddPetScreen from './src/screens/AddPetScreen';


export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [petLibrary, setPetLibrary] = useState([]);
  const [displayedPets, setDisplayedPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('date');
  const [nameSuggestion, setNameSuggestion] = useState('?');
  const [selectedType, setSelectedType] = useState('cat');

  // --- 변경된 부분 시작 ---
  // 채택된 이름을 'AddPetScreen'으로 전달하기 위한 상태
  const [initialPetName, setInitialPetName] = useState(null);
  // --- 변경된 부분 끝 ---


  useEffect(() => {
    let pets = [...petLibrary];
    if (searchTerm) {
      pets = pets.filter(pet => pet.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (sortType === 'name') {
      pets.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      pets.sort((a, b) => b.createdAt - a.createdAt);
    }
    setDisplayedPets(pets);
  }, [petLibrary, searchTerm, sortType]);

  const handleGenerateName = () => {
    const nameList = NAMES_DATA[selectedType] || NAMES_DATA['other'];
    const randomIndex = Math.floor(Math.random() * nameList.length);
    setNameSuggestion(nameList[randomIndex]);
  };

  const handleSelectType = (type) => {
    setSelectedType(type);
    setNameSuggestion('?');
  };

  const handleAddPet = (newPet) => {
    setPetLibrary(prevLibrary => [newPet, ...prevLibrary]);
    // 펫 추가 후 홈 화면으로 돌아가도록 변경하거나, 라이브러리로 유지할 수 있습니다.
    setCurrentScreen('library');
  };

  // --- 변경된 부분 시작 ---
  // 홈 화면에서 추천된 이름을 '채택'했을 때 호출되는 함수
  const handleAdoptName = (name) => {
    setInitialPetName(name); // 채택된 이름을 상태에 저장
    setCurrentScreen('add');   // '펫 추가' 화면으로 이동
  };

  // '+' 버튼을 눌러 수동으로 추가 화면에 갈 때, 초기 이름을 null로 설정
  const navigateToAddScreen = () => {
    setInitialPetName(null);
    setCurrentScreen('add');
  }
  // --- 변경된 부분 끝 ---

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen
          onGenerateName={handleGenerateName}
          nameSuggestion={nameSuggestion}
          selectedType={selectedType}
          onSelectType={handleSelectType}
          onAdoptName={handleAdoptName} // 새로 추가된 prop
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
        // initialPetName을 prop으로 전달
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

        {/* '+' 버튼의 onPress를 새로운 핸들러로 변경 */}
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
