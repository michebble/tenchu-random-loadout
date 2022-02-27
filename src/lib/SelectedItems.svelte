<script lang="ts">
  import { _ } from "svelte-i18n";
  import SelectedItem from "./SelectedItem.svelte";

  export let selectedItems;
  const grapplingHook = "grapplingHook";
</script>

<div>
  <h3>Loadout</h3>
  <ul class="selected-items">
    <SelectedItem name={grapplingHook} amount={1} />
    {#each selectedItems as { name, amount }}
      <SelectedItem {name} {amount} />
    {/each}
  </ul>
</div>

<style>
  .selected-items {
    min-height: 12rem;
  }
</style>
