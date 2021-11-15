<script>
  import RandomButton from "./lib/RandomButton.svelte";
  import SelectedItem from "./lib/SelectedItem.svelte";
  import { selectedItems } from "./lib/stores";
  let selectedItemsValue;

  selectedItems.subscribe((value) => {
    selectedItemsValue = value;
  });
</script>

<main>
  <RandomButton />
  <div class="wrapper">
    {#each selectedItemsValue as { name, amount, src }}
      <SelectedItem {name} {amount} {src} />
    {:else}{/each}
  </div>
</main>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: minmax(80px, auto);
  }
</style>
