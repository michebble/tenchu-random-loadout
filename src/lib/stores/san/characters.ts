import { writable, readable } from "svelte/store";

export enum Character {
  Rikimaru = "rikimaru",
  Ayame = "ayame",
}

export const characters = readable([Character.Ayame, Character.Rikimaru]);

export const currentCharacter = writable(localStorage.getItem("currentCharacter") || Character.Ayame);
currentCharacter.subscribe(character => localStorage["currentCharacter"] = character)
