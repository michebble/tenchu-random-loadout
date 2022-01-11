<script lang="ts">
  import { _ } from "../services/lang/i18n";
  import { rikiWeapons, ayameWeapons, ninjaItems } from "./stores/items";
  import { currentCharacter, Character } from "./stores/characters";
  const toggleEnabled = (set: object, key: string, item: any): void => {
    item.enabled = !item.enabled;
    set[key] = item;
  };
  const isDefaultItem = (name: string): boolean => {
    return [
      "caltrops",
      "colouredRice",
      "healingPotion",
      "shuriken",
      "tetsubishi",
    ].includes(name);
  };
</script>

<div>
  <fieldset class="item-fieldset">
    <legend>Items</legend>
    {#each Object.entries($ninjaItems) as [key, item]}
      <label class="item-label">
        <input
          on:change={() => toggleEnabled($ninjaItems, key, item)}
          type="checkbox"
          name="items"
          checked={item.enabled}
          disabled={isDefaultItem(item.name)}
        />
        <span>{$_(`items.${item.name}`)}</span>
      </label>
    {/each}
  </fieldset>
  <fieldset>
    <legend>Weapons</legend>
    {#if $currentCharacter === Character.Rikimaru}
      {#each Object.entries($rikiWeapons) as [key, weapon]}
        <label>
          <input
            on:change={() => toggleEnabled($rikiWeapons, key, weapon)}
            type="checkbox"
            name="weapons"
            checked={weapon.enabled}
          />
          <span>{$_(`items.${weapon.name}`)}</span>
        </label>
      {/each}
    {:else}
      {#each Object.entries($ayameWeapons) as [key, weapon]}
        <label>
          <input
            on:change={() => toggleEnabled($ayameWeapons, key, weapon)}
            type="checkbox"
            name="weapons"
            checked={weapon.enabled}
          />
          <span>{$_(`items.${weapon.name}`)}</span>
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
