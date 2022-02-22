import { derived } from "svelte/store";
import { currentCharacter, Character } from "./characters";
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
