import { Slot } from "expo-router";
import { PetProvider } from "../src/services/PetProvider";

export default function RootLayout() {
  return (
    <PetProvider>
      <Slot />
    </PetProvider>
  );
}
