import React, { createContext, useState, useContext } from 'react';

export interface Pet {
  id: string;
  name: string;
  photo: string;
  memo: string;
  type: 'cat' | 'dog' | 'other';
  addedDate: string;
}

interface PetContextData {
  pets: Pet[];
  addPet: (pet: Omit<Pet, 'id' | 'addedDate'>) => void;
}

const PetContext = createContext<PetContextData>({} as PetContextData);

export const PetProvider: React.FC = ({ children }) => {
  const [pets, setPets] = useState<Pet[]>([]);

  const addPet = (pet: Omit<Pet, 'id' | 'addedDate'>) => {
    const newPet = { ...pet, id: Date.now().toString(), addedDate: new Date().toISOString().split('T')[0] };
    setPets([...pets, newPet]);
  };

  return (
    <PetContext.Provider value={{ pets, addPet }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePets = () => useContext(PetContext);
