<script lang="ts">
  import { _ } from "svelte-i18n";
  export let ninguSet: Array<{ name: string; enabled: boolean }>;
  const toggleEnabled = (
    itemArray: Array<{ name: string; enabled: boolean }>,
    name: string
  ): void => {
    const objIndex = itemArray.findIndex((obj) => obj.name === name);
    itemArray[objIndex].enabled = !itemArray[objIndex].enabled;
  };
</script>

<div class="ningu">
  {#each ninguSet as { name, enabled }}
    <label class="item-label">
      <input
        on:change={() => toggleEnabled(ninguSet, name)}
        value={name}
        type="checkbox"
        name="items"
        checked={enabled}
      />
      <span>{$_(`items.${name}`)}</span>
    </label>
  {/each}
</div>

<style>
  .ningu {
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
  }
  @media (min-width: 600px) {
    .ningu {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 900px) {
    .ningu {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
