import { writable } from "svelte/store";

export const ninjaItems = writable([
  { name: "bindingSpell", limit: 1 },
  { name: "blowGun", limit: 5 },
  { name: "caltrops", limit: 15 },
  { name: "chameleonSpell", limit: 3 },
  { name: "colouredRice", limit: 5 },
  { name: "decoyWhistle", limit: 1 },
  { name: "dogBone", limit: 5 },
  { name: "explodingArrow", limit: 3 },
  { name: "fireSpell", limit: 2 },
  { name: "fireworks", limit: 3 },
  { name: "grenade", limit: 15 },
  { name: "healingPotion", limit: 15 },
  { name: "invisbilitySpell", limit: 2 },
  { name: "mine", limit: 15 },
  { name: "ninjaArmor", limit: 1 },
  { name: "ninjaRebirth", limit: 1 },
  { name: "poisonAntidote", limit: 15 },
  { name: "poisonRice", limit: 15 },
  { name: "shuriken", limit: 15 },
  { name: "smokeBomb", limit: 15 },
  { name: "stickyBomb", limit: 5 },
  { name: "stoneOfPower", limit: 1 },
  { name: "strengthPotion", limit: 15 },
  { name: "superShuriken", limit: 5 },
  { name: "tetsubishi", limit: 5 },
  { name: "tigerTrap", limit: 3 },
]);

export const rikiWeapons = writable([
  { name: "fugaku", limit: 1 },
  { name: "muramasa", limit: 1 },
]);

export const ayameWeapons = writable([
  { name: "dokuto", limit: 1 },
  { name: "kasumiAndShizuku", limit: 1 },
]);

export const selectedItems = writable([]);
