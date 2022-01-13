<script lang="ts">
  import { _ } from "svelte-i18n";
  import { rikiWeapons, ayameWeapons, ninjaItems } from "./stores/items";
  import { currentCharacter, Character } from "./stores/characters";
  const toggleEnabled = (
    itemArray: Array<{ name: string; enabled: boolean }>,
    name: string
  ): void => {
    const objIndex = itemArray.findIndex((obj) => obj.name === name);
    itemArray[objIndex].enabled = !itemArray[objIndex].enabled;
  };
</script>

<div>
  <fieldset class="item-fieldset">
    <legend>{$_(`itemSelect.title`)}</legend>
    {#each $ninjaItems as { name, enabled }}
      <label class="item-label">
        <input
          on:change={() => toggleEnabled($ninjaItems, name)}
          type="checkbox"
          name="items"
          checked={enabled}
        />
        <span>{$_(`items.${name}`)}</span>
      </label>
    {/each}
  </fieldset>
  <fieldset>
    <legend>{$_(`weaponSelect.title`)}</legend>
    {#if $currentCharacter === Character.Rikimaru}
      {#each $rikiWeapons as { name, enabled }}
        <label>
          <input
            on:change={() => toggleEnabled($rikiWeapons, name)}
            type="checkbox"
            name="weapons"
            checked={enabled}
          />
          <span>{$_(`items.${name}`)}</span>
        </label>
      {/each}
    {:else}
      {#each $ayameWeapons as { name, enabled }}
        <label>
          <input
            on:change={() => toggleEnabled($ayameWeapons, name)}
            type="checkbox"
            name="weapons"
            checked={enabled}
          />
          <span>{$_(`items.${name}`)}</span>
        </label>
      {/each}
    {/if}
  </fieldset>
</div>

<style>
  .item-fieldset {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .item-label {
    min-width: 48%;
  }
</style>
