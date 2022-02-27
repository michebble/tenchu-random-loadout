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

  const persistNingu = (set) => {
    localStorage.setItem(`${$currentCharacter}NinguSan`, JSON.stringify(set));
  };
  const persistWeapon = (set) => {
    localStorage.setItem(`${$currentCharacter}WeaponSan`, JSON.stringify(set));
  };
</script>

<div>
  <h2>{$_(`gameTitle.tenchuSan`)}</h2>
  <fieldset>
    <CharacterSelect characters={$characters} {currentCharacter} />
    <NinguMultiSelect
      ninguSet={$currentNingu}
      title={$_(`itemSelect.title`)}
      handleChange={persistNingu}
    />
    <NinguMultiSelect
      ninguSet={$currentWeaponSet}
      title={$_(`weaponSelect.title`)}
      handleChange={persistWeapon}
    />
    <RandomButton
      currentNingu={$currentNingu}
      currentWeaponSet={$currentWeaponSet}
      itemSelection={selectedItems}
    />
  </fieldset>
  <SelectedItems selectedItems={$selectedItems} />
</div>
