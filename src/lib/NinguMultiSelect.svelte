<script lang="ts">
  import { _ } from "svelte-i18n";
  export let ninguSet;
</script>

<div class="ningu">
  {#each ninguSet as item}
    <label class="item-label">
      <input
        value={item.name}
        type="checkbox"
        name="items"
        bind:checked={item.enabled}
        autocomplete="nope"
      />
      <span>{$_(`items.${item.name}`)}</span>
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
