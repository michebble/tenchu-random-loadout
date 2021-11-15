import { writable } from 'svelte/store';

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

export const ninjaItems = writable([
  { name: "binding spell", limit: 1, src: binding_spell_img },
  { name: "blow gun", limit: 5, src: blow_gun_img },
  { name: "caltrops", limit: 15, src: caltrops_img },
  { name: "chameleon spell", limit: 3, src: chameleon_spell_img },
  { name: "coloured rice", limit: 5, src: colored_rice_img },
  { name: "decoy whistle", limit: 1, src: decoy_whistle_img },
  { name: "dog bone", limit: 5, src: dog_bone_img },
  { name: "exploding arrow", limit: 3, src: exploding_arrow_img },
  { name: "fire spell", limit: 2, src: fire_spell_img },
  { name: "fireworks", limit: 3, src: fireworks_img },
  { name: "grenade", limit: 15, src: grenade_img },
  { name: "healing potion", limit: 15, src: healing_potion_img },
  { name: "invisbility spell", limit: 2, src: invisibility_spell_img },
  { name: "mine", limit: 15, src: mine_img },
  { name: "ninja armor", limit: 1, src: ninja_armor_img },
  { name: "ninja rebirth", limit: 1, src: ninja_rebirth_img },
  { name: "poison antidote", limit: 15, src: poison_antidote_img },
  { name: "poison rice", limit: 15, src: poison_rice_img },
  { name: "shuriken", limit: 15, src: shuriken_img },
  { name: "smoke bomb", limit: 15, src: smoke_bomb_img },
  { name: "sticky bomb", limit: 5, src: sticky_bomb_img },
  { name: "stone of power", limit: 1, src: stone_of_power_img },
  { name: "strength potion", limit: 15, src: strength_potion_img },
  { name: "super shuriken", limit: 5, src: super_shuriken_img },
  { name: "tetsubishi", limit: 5, src: tetsubishi_img },
  { name: "tiger trap", limit: 3, src: tiger_trap_img },
]);

export const rikiWeapons = writable([
  { name: "fugaku", limit: 1, src: fugaku_img },
  { name: "muramasa", limit: 1, src: muramasa_img },
]);

export const ayameWeapons = writable([
  { name: "dokuto", limit: 1, src: dokuto_img },
  { name: "kasumi and shizuku", limit: 1, src: kasumi_and_shizuku_img },
]);

export const selectedItems = writable([]);
