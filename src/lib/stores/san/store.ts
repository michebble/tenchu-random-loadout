import { derived, writable } from "svelte/store";
import { buildReducer } from "../../reducers"
import { currentCharacter, Character, characters } from "./characters";
import { rikiWeapons, ayameWeapons, rikiNingu, ayameNingu } from "./items";
export const currentWeaponSet = derived([currentCharacter, rikiWeapons, ayameWeapons], ([$currentCharacter, $rikiWeapons, $ayameWeapons]) => {
  const weaponSets = {
    [Character.Ayame]: $ayameWeapons,
    [Character.Rikimaru]: $rikiWeapons
  }
  return weaponSets[$currentCharacter];
});
export const currentNingu = derived([currentCharacter, rikiNingu, ayameNingu], ([$currentCharacter, $rikiNingu, $ayameNingu]) => {
  const ninguSets = {
    [Character.Ayame]: $ayameNingu,
    [Character.Rikimaru]: $rikiNingu
  }
  return ninguSets[$currentCharacter];
});

export const selectedItems = writable([]);

const ninjaReducer = buildReducer(15);
const assasinReducer = buildReducer(75);

export const currentReducer = derived(currentCharacter, $currentCharacter => {
  const reducers = {
    [Character.Ayame]: ninjaReducer,
    [Character.Rikimaru]: ninjaReducer,
  }
  return reducers[$currentCharacter];
});
export { currentCharacter, characters };
