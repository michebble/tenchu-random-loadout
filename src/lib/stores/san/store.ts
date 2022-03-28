import { derived, writable } from "svelte/store";
import { buildReducer } from "../../reducers"
import { currentCharacter, Character, characters } from "./characters";
import { rikiWeapons, ayameWeapons, rikiNingu, ayameNingu, tesshuNingu, tesshuWeapons } from "./items";
export const currentWeaponSet = derived([currentCharacter, rikiWeapons, ayameWeapons, tesshuWeapons], ([$currentCharacter, $rikiWeapons, $ayameWeapons, $tesshuWeapons]) => {
  const weaponSets = {
    [Character.Ayame]: $ayameWeapons,
    [Character.Rikimaru]: $rikiWeapons,
    [Character.Tesshu]: $tesshuWeapons,
  }
  return weaponSets[$currentCharacter];
});
export const currentNingu = derived([currentCharacter, rikiNingu, ayameNingu, tesshuNingu], ([$currentCharacter, $rikiNingu, $ayameNingu, $tesshuNingu]) => {
  const ninguSets = {
    [Character.Ayame]: $ayameNingu,
    [Character.Rikimaru]: $rikiNingu,
    [Character.Tesshu]: $tesshuNingu,
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
    [Character.Tesshu]: assasinReducer
  }
  return reducers[$currentCharacter];
});
export { currentCharacter, characters };
