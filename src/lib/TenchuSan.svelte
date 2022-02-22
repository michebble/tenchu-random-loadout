<script lang="ts">
  import { _ } from "svelte-i18n";
  import {
    currentWeaponSet,
    currentNingu,
    selectedItems,
    currentCharacter,
    characters,
  } from "./stores/san/store";

  import CharacterSelect from "./CharacterSelect.svelte";
  import NinguMultiSelect from "./NinguMultiSelect.svelte";
  import RandomButton from "./RandomButton.svelte";
  import SelectedItems from "./SelectedItems.svelte";
</script>

<div>
  <fieldset>
    <CharacterSelect characters={$characters} {currentCharacter} />
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
  <SelectedItems selectedItems={$selectedItems} />
</div>
