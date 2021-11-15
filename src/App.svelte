<script>
  import RandomButton from "./lib/RandomButton.svelte";
  import SelectedItem from "./lib/SelectedItem.svelte";
  import { selectedItems, images } from "./lib/stores";
  let selectedItemsValue;
  const grapplingHook = "grapplingHook";

  selectedItems.subscribe((value) => {
    selectedItemsValue = value;
  });
</script>

<main>
  <RandomButton />
  <div class="wrapper">
    {#each selectedItemsValue as { name, amount }}
      <SelectedItem {name} {amount} src={$images[name]} />
    {:else}{/each}
    <SelectedItem
      name={grapplingHook}
      amount={1}
      src={$images[grapplingHook]}
    />
  </div>
</main>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: minmax(80px, auto);
  }
</style>
