import { writable, readable } from "svelte/store";

export enum Character {
  Rikimaru = "rikimaru",
  Ayame = "ayame",
  Tesshu = "tesshu"
}

export const characters = readable([Character.Ayame, Character.Rikimaru, Character.Tesshu]);

export const currentCharacter = writable(localStorage.getItem("currentCharacterSan") || Character.Ayame);
currentCharacter.subscribe(character => localStorage.setItem("currentCharacterSan", character))
