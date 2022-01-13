import { writable } from "svelte/store";

export const ninjaItems = writable({
  invisbilitySpell: { name: "invisbilitySpell", limit: 2, enabled: false },
  fireSpell: { name: "fireSpell", limit: 2, enabled: false },
  chameleonSpell: { name: "chameleonSpell", limit: 3, enabled: false },
  ninjaRebirth: { name: "ninjaRebirth", limit: 1, enabled: false },
  superShuriken: { name: "superShuriken", limit: 5, enabled: false },
  decoyWhistle: { name: "decoyWhistle", limit: 1, enabled: false },
  explodingArrow: { name: "explodingArrow", limit: 3, enabled: false },
  ninjaArmor: { name: "ninjaArmor", limit: 1, enabled: false },
  dogBone: { name: "dogBone", limit: 5, enabled: false },
  stoneOfPower: { name: "stoneOfPower", limit: 1, enabled: false },
  bindingSpell: { name: "bindingSpell", limit: 1, enabled: false },
  tigerTrap: { name: "tigerTrap", limit: 3, enabled: false },
  shuriken: { name: "shuriken", limit: 15, enabled: true },
  healingPotion: { name: "healingPotion", limit: 15, enabled: true },
  caltrops: { name: "caltrops", limit: 15, enabled: true },
  colouredRice: { name: "colouredRice", limit: 5, enabled: true },
  blowGun: { name: "blowGun", limit: 5, enabled: false },
  smokeBomb: { name: "smokeBomb", limit: 15, enabled: false },
  grenade: { name: "grenade", limit: 15, enabled: false },
  poisonRice: { name: "poisonRice", limit: 15, enabled: false },
  mine: { name: "mine", limit: 15, enabled: false },
  poisonAntidote: { name: "poisonAntidote", limit: 15, enabled: false },
  stickyBomb: { name: "stickyBomb", limit: 5, enabled: false },
  strengthPotion: { name: "strengthPotion", limit: 15, enabled: false },
  tetsubishi: { name: "tetsubishi", limit: 5, enabled: false },
  fireworks: { name: "fireworks", limit: 3, enabled: false },
});

export const rikiWeapons = writable({
  fugaku: { name: "fugaku", limit: 1, enabled: false },
  muramasa: { name: "muramasa", limit: 1, enabled: false },
});

export const ayameWeapons = writable({
  dokuto: { name: "dokuto", limit: 1, enabled: false },
  kasumiAndShizuku: { name: "kasumiAndShizuku", limit: 1, enabled: false },
});
