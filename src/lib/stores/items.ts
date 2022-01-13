import { writable } from "svelte/store";

export const ninjaItems = writable([
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
  { name: "tetsubishi", limit: 5, enabled: false },
  { name: "fireworks", limit: 3, enabled: false },
]);

export const rikiWeapons = writable([
  { name: "fugaku", limit: 1, enabled: false },
  { name: "muramasa", limit: 1, enabled: false },
]);

export const ayameWeapons = writable([
  { name: "dokuto", limit: 1, enabled: false },
  { name: "kasumiAndShizuku", limit: 1, enabled: false },
]);
