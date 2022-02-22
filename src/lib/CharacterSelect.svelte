<script lang="ts">
  import { _ } from "svelte-i18n";
  export let characters;
  export let currentCharacter;
</script>

<div>
  <h3>{$_(`characterSelect.title`)}</h3>
  {#each characters as character}
    <label>
      <input
        bind:group={$currentCharacter}
        type="radio"
        name="characters"
        value={character}
      />
      <span>{$_(`characters.${character}`)}</span>
    </label>
  {/each}
</div>
