<script lang="ts">
  import {
    rikiWeapons,
    ayameWeapons,
    ninjaItems,
    selectedItems,
  } from "./stores";
  import { currentCharacter, Character } from "./stores/characters";
  import { pickRandom } from "./picks";
  import { ninjaReducer } from "./reducers";

  const MAX_SELECTED_ITEMS = 5;

  const weaponSets = {
    [Character.Rikimaru]: $rikiWeapons,
    [Character.Ayame]: $ayameWeapons,
  };

  const run = () => {
    const weaponSet = weaponSets[$currentCharacter];
    const itemSet = pickRandom(1, weaponSet).concat($ninjaItems);
    $selectedItems = pickRandom(MAX_SELECTED_ITEMS, itemSet)
      .reduce(ninjaReducer, [])
      .filter((e) => e);
  };
</script>

<button on:click={run}> Randomize Loadout </button>
