<script lang="ts">
  import { _ } from "svelte-i18n";
  import { selectedItems } from "./stores/items";
  import { currentWeaponSet, currentNingu } from "./stores/tenchu_san";
  import { pickRandom } from "./picks";
  import { ninjaReducer } from "./reducers";

  const MAX_SELECTED_ITEMS = 5;

  const run = () => {
    const itemSet = pickRandom(1, $currentWeaponSet)
      .concat($currentNingu)
      .filter((item) => item.enabled);
    $selectedItems = pickRandom(MAX_SELECTED_ITEMS, itemSet)
      .reduce(ninjaReducer, [])
      .filter((e) => e);
  };
</script>

<button on:click={run}>{$_(`RandomizeButton`)}</button>
