<script lang="ts">
  import { isLoading } from "svelte-i18n";

  import LocaleSelect from "./lib/LocaleSelect.svelte";
  import CharacterSelect from "./lib/CharacterSelect.svelte";
  import ItemSelect from "./lib/ItemSelect.svelte";
  import RandomButton from "./lib/RandomButton.svelte";
  import SelectedItem from "./lib/SelectedItem.svelte";

  import { selectedItems } from "./lib/stores";
  import { images } from "./lib/stores/images";
  const grapplingHook = "grapplingHook";
</script>

{#if $isLoading}
  <p>Loading</p>
{:else}
  <main>
    <LocaleSelect />
    <h1>Tenchu Random Loadout</h1>
    <CharacterSelect />
    <ItemSelect />
    <RandomButton />
    <div>
      {#each $selectedItems as { name, amount }}
        <SelectedItem {name} {amount} src={$images[name]} />
      {/each}
      <SelectedItem
        name={grapplingHook}
        amount={1}
        src={$images[grapplingHook]}
      />
    </div>
  </main>
{/if}

<style>
  div {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: minmax(80px, auto);
  }
</style>
