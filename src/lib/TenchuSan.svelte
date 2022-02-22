<script lang="ts">
  import { _ } from "svelte-i18n";
  import { selectedItems } from "./stores/items";
  import { currentWeaponSet, currentNingu } from "./stores/tenchu_san";

  import CharacterSelect from "./CharacterSelect.svelte";
  import NinguMultiSelect from "./NinguMultiSelect.svelte";
  import RandomButton from "./RandomButton.svelte";
  import SelectedItems from "./SelectedItems.svelte";
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
  <SelectedItems selectedItems={$selectedItems} />
</div>
