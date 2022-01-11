<script lang="ts">
  import { _ } from "svelte-i18n";
  import { selectedItems } from "./stores";
  import { rikiWeapons, ayameWeapons, ninjaItems } from "./stores/items";
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
    const itemSet = pickRandom(1, Object.values(weaponSet))
      .concat(Object.values($ninjaItems))
      .filter((item) => item.enabled);
    $selectedItems = pickRandom(MAX_SELECTED_ITEMS, itemSet)
      .reduce(ninjaReducer, [])
      .filter((e) => e);
  };
</script>

<button on:click={run}>{$_(`RandomizeButton`)}</button>
