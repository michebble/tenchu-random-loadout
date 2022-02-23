<script lang="ts">
  import { _ } from "svelte-i18n";
  import { images } from "./stores/images";
  import SelectedItem from "./SelectedItem.svelte";

  export let selectedItems;
  const grapplingHook = "grapplingHook";
</script>

<div class="selected-items">
  {#each selectedItems as { name, amount }}
    <SelectedItem {name} {amount} src={$images[name]} />
  {/each}
  <SelectedItem name={grapplingHook} amount={1} src={$images[grapplingHook]} />
</div>

<style>
  .selected-items {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: minmax(80px, auto);
  }
</style>
