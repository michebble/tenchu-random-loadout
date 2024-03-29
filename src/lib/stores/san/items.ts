import { writable } from "svelte/store";

export const ayameNingu = writable(JSON.parse(localStorage.getItem('ayameNinguSan')) || [
  { name: "invisbilitySpell", limit: 2, enabled: false },
  { name: "fireSpell", limit: 2, enabled: false },
  { name: "chameleonSpell", limit: 3, enabled: false },
  { name: "ninjaRebirth", limit: 1, enabled: false },
  { name: "superShuriken", limit: 5, enabled: false },
  { name: "decoyWhistle", limit: 1, enabled: false },
  { name: "explodingArrow", limit: 3, enabled: false },
  { name: "ninjaArmor", limit: 1, enabled: false },
  { name: "dogBone", limit: 5, enabled: false },
  { name: "stoneOfPower", limit: 1, enabled: false },
  { name: "bindingSpell", limit: 1, enabled: false },
  { name: "tigerTrap", limit: 3, enabled: false },
  { name: "shuriken", limit: 15, enabled: true },
  { name: "healingPotion", limit: 15, enabled: true },
  { name: "caltrops", limit: 15, enabled: true },
  { name: "colouredRice", limit: 5, enabled: true },
  { name: "blowGun", limit: 5, enabled: false },
  { name: "smokeBomb", limit: 15, enabled: false },
  { name: "grenade", limit: 15, enabled: false },
  { name: "poisonRice", limit: 15, enabled: false },
  { name: "mine", limit: 15, enabled: false },
  { name: "poisonAntidote", limit: 15, enabled: false },
  { name: "stickyBomb", limit: 5, enabled: true },
  { name: "strengthPotion", limit: 15, enabled: false },
  { name: "tetsubishi", limit: 5, enabled: false },
  { name: "fireworks", limit: 3, enabled: false },
]);
export const rikiNingu = writable(JSON.parse(localStorage.getItem('rikimaruNinguSan')) || [
  { name: "invisbilitySpell", limit: 2, enabled: false },
  { name: "fireSpell", limit: 2, enabled: false },
  { name: "chameleonSpell", limit: 3, enabled: false },
  { name: "ninjaRebirth", limit: 1, enabled: false },
  { name: "superShuriken", limit: 5, enabled: false },
  { name: "decoyWhistle", limit: 1, enabled: false },
  { name: "explodingArrow", limit: 3, enabled: false },
  { name: "ninjaArmor", limit: 1, enabled: false },
  { name: "dogBone", limit: 5, enabled: false },
  { name: "stoneOfPower", limit: 1, enabled: false },
  { name: "bindingSpell", limit: 1, enabled: false },
  { name: "tigerTrap", limit: 3, enabled: false },
  { name: "shuriken", limit: 15, enabled: true },
  { name: "healingPotion", limit: 15, enabled: true },
  { name: "caltrops", limit: 15, enabled: true },
  { name: "colouredRice", limit: 5, enabled: true },
  { name: "blowGun", limit: 5, enabled: false },
  { name: "smokeBomb", limit: 15, enabled: false },
  { name: "grenade", limit: 15, enabled: false },
  { name: "poisonRice", limit: 15, enabled: false },
  { name: "mine", limit: 15, enabled: false },
  { name: "poisonAntidote", limit: 15, enabled: false },
  { name: "stickyBomb", limit: 5, enabled: false },
  { name: "strengthPotion", limit: 15, enabled: false },
  { name: "tetsubishi", limit: 5, enabled: true },
  { name: "fireworks", limit: 3, enabled: false },
]);
export const tesshuNingu = writable(JSON.parse(localStorage.getItem('tesshuNinguSan')) || [
  { name: "blowGun", limit: 5, enabled: true },
  { name: "smokeBomb", limit: 15, enabled: true },
  { name: "grenade", limit: 15, enabled: true },
  { name: "healingPotion", limit: 15, enabled: true },
  { name: "smokeBomb", limit: 15, enabled: true },
  { name: "poisonAntidote", limit: 15, enabled: true },
  { name: "strengthPotion", limit: 15, enabled: true },
  { name: "throwingNeedle", limit: 15, enabled: true },
  { name: "bambooGun", limit: 3, enabled: false },
  { name: "disguise", limit: 3, enabled: false },
  { name: "explodingArrow", limit: 3, enabled: false },
  { name: "kumihimo", limit: 3, enabled: false },
  { name: "magazine", limit: 3, enabled: false },
  { name: "superNeedle", limit: 1, enabled: false },
]);
export const ayameWeapons = writable(JSON.parse(localStorage.getItem('ayameWeaponSan')) || [
  { name: "dokuto", limit: 1, enabled: false },
  { name: "kasumiAndShizuku", limit: 1, enabled: false },
]);
export const rikiWeapons = writable(JSON.parse(localStorage.getItem('rikimaruWeaponSan')) || [
  { name: "fugaku", limit: 1, enabled: false },
  { name: "muramasa", limit: 1, enabled: false },
]);
export const tesshuWeapons = writable(JSON.parse(localStorage.getItem('tesshuWeaponSan')) || []);
