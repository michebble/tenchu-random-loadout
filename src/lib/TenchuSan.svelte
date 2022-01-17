<script>
  import { _ } from "svelte-i18n";
  import { currentCharacter, Character } from "./stores/characters";
  import {
    rikiWeapons,
    ayameWeapons,
    ninjaItems,
    selectedItems,
  } from "./stores/items";
  import { images } from "./stores/images";

  import CharacterSelect from "./CharacterSelect.svelte";
  import NinguMultiSelect from "./NinguMultiSelect.svelte";
  import RandomButton from "./RandomButton.svelte";
  import SelectedItem from "./SelectedItem.svelte";

  const grapplingHook = "grapplingHook";
</script>

<div>
  <fieldset>
    <CharacterSelect />
    <h3>{$_(`itemSelect.title`)}</h3>
    <NinguMultiSelect ninguSet={$ninjaItems} />
    <h3>{$_(`weaponSelect.title`)}</h3>
    {#if $currentCharacter === Character.Rikimaru}
      <NinguMultiSelect ninguSet={$rikiWeapons} />
    {:else}
      <NinguMultiSelect ninguSet={$ayameWeapons} />
    {/if}
    <RandomButton />
  </fieldset>
  <div class="selected-items">
    {#each $selectedItems as { name, amount }}
      <SelectedItem {name} {amount} src={$images[name]} />
    {/each}
    <SelectedItem
      name={grapplingHook}
      amount={1}
      src={$images[grapplingHook]}
    />
  </div>
</div>

<style>
  .selected-items {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: minmax(80px, auto);
  }
</style>
