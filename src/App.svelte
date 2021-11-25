<script lang="ts">
  import RandomButton from "./lib/RandomButton.svelte";
  import SelectedItem from "./lib/SelectedItem.svelte";
  import CharacterSelect from "./lib/CharacterSelect.svelte";
  import { selectedItems } from "./lib/stores";
  import { images } from "./lib/stores/images";
  const grapplingHook = "grapplingHook";

  let selectedItemsValue;
  selectedItems.subscribe((value) => (selectedItemsValue = value));
</script>

<main>
  <CharacterSelect />
  <RandomButton />
  <div>
    {#each selectedItemsValue as { name, amount }}
      <SelectedItem {name} {amount} src={$images[name]} />
    {/each}
    <SelectedItem
      name={grapplingHook}
      amount={1}
      src={$images[grapplingHook]}
    />
  </div>
</main>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: minmax(80px, auto);
  }
</style>
