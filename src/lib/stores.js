import { writable, readable } from 'svelte/store';

import binding_spell_img from "../assets/binding_spell.jpeg";
import blow_gun_img from "../assets/blow_gun.jpeg";
import caltrops_img from "../assets/caltrops.jpeg";
import chameleon_spell_img from "../assets/chameleon_spell.jpeg";
import colored_rice_img from "../assets/colored_rice.jpeg";
import decoy_whistle_img from "../assets/decoy_whistle.jpeg";
import dog_bone_img from "../assets/dog_bone.jpeg";
import dokuto_img from "../assets/dokuto.jpeg";
import exploding_arrow_img from "../assets/exploding_arrow.jpeg";
import fire_spell_img from "../assets/fire_spell.jpeg";
import fireworks_img from "../assets/fireworks.jpeg";
import fugaku_img from "../assets/fugaku.jpeg";
import grappling_hook_img from "../assets/grappling_hook.jpeg";
import grenade_img from "../assets/grenade.jpeg";
import healing_potion_img from "../assets/healing_potion.jpeg";
import invisibility_spell_img from "../assets/invisiblity_spell.jpeg";
import kasumi_and_shizuku_img from "../assets/kasumi_and_shizuku.jpeg";
import mine_img from "../assets/mine.jpeg";
import muramasa_img from "../assets/muramasa.jpeg";
import ninja_armor_img from "../assets/ninja_armor.jpeg";
import ninja_rebirth_img from "../assets/ninja_rebirth.jpeg";
import poison_antidote_img from "../assets/poison_antidote.jpeg";
import poison_rice_img from "../assets/poison_rice.jpeg";
import shuriken_img from "../assets/shuriken.jpeg";
import smoke_bomb_img from "../assets/smoke_bomb.jpeg";
import sticky_bomb_img from "../assets/sticky_bomb.jpeg";
import stone_of_power_img from "../assets/stone_of_power.jpeg";
import strength_potion_img from "../assets/strength_potion.jpeg";
import super_shuriken_img from "../assets/super_shuriken.jpeg";
import tetsubishi_img from "../assets/tetsubishi.jpeg";
import tiger_trap_img from "../assets/tiger_trap.jpeg";

export const images = readable(
  {
    bindingSpell: binding_spell_img,
    blowGun: blow_gun_img,
    caltrops: caltrops_img,
    chameleonSpell: chameleon_spell_img,
    colouredRice: colored_rice_img,
    decoyWhistle: decoy_whistle_img,
    dogBone: dog_bone_img,
    explodingArrow: exploding_arrow_img,
    fireSpell: fire_spell_img,
    fireworks: fireworks_img,
    grapplingHook: grappling_hook_img,
    grenade: grenade_img,
    healingPotion: healing_potion_img,
    invisbilitySpell: invisibility_spell_img,
    mine: mine_img,
    ninjaArmor: ninja_armor_img,
    ninjaRebirth: ninja_rebirth_img,
    poisonAntidote: poison_antidote_img,
    poisonRice: poison_rice_img,
    shuriken: shuriken_img,
    smokeBomb: smoke_bomb_img,
    stickyBomb: sticky_bomb_img,
    stoneOfPower: stone_of_power_img,
    strengthPotion: strength_potion_img,
    superShuriken: super_shuriken_img,
    tetsubishi: tetsubishi_img,
    tigerTrap: tiger_trap_img,
    fugaku: fugaku_img,
    muramasa: muramasa_img,
    dokuto: dokuto_img,
    kasumiAndShizuku: kasumi_and_shizuku_img,
  }
)

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
