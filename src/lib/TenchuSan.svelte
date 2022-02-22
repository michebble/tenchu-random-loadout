<script lang="ts">
  import { _ } from "svelte-i18n";
  import { selectedItems } from "./stores/items";
  import { images } from "./stores/images";
  import { currentWeaponSet, currentNingu } from "./stores/tenchu_san";

  import CharacterSelect from "./CharacterSelect.svelte";
  import NinguMultiSelect from "./NinguMultiSelect.svelte";
  import RandomButton from "./RandomButton.svelte";
  import SelectedItem from "./SelectedItem.svelte";

  const grapplingHook = "grapplingHook";
</script>

<div>
  <fieldset>
    <CharacterSelect />
    <NinguMultiSelect ninguSet={$currentNingu} title={$_(`itemSelect.title`)} />
    <NinguMultiSelect
      ninguSet={$currentWeaponSet}
      title={$_(`weaponSelect.title`)}
    />
    <RandomButton
      currentNingu={$currentNingu}
      currentWeaponSet={$currentWeaponSet}
      itemSelection={selectedItems}
    />
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
