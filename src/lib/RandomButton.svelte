<script lang="ts">
  import { _ } from "svelte-i18n";
  import { pickRandom } from "./picks";
  export let currentNingu;
  export let currentWeaponSet;
  export let itemSelection;
  export let reducer;

  const MAX_SELECTED_ITEMS = 5;

  const run = () => {
    const itemSet = pickRandom(1, currentWeaponSet)
      .concat(currentNingu)
      .filter((item) => item.enabled);
    $itemSelection = pickRandom(MAX_SELECTED_ITEMS, itemSet)
      .reduce(reducer, [])
      .filter((e) => e);
  };
</script>

<button on:click={run}>{$_(`RandomizeButton`)}</button>
