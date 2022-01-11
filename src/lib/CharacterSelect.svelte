<script lang="ts">
  import { _ } from "svelte-i18n";
  import { currentCharacter, characters } from "./stores/characters";
</script>

<div>
  <fieldset>
    <legend>{$_(`characterSelect.title`)}</legend>
    {#each $characters as character}
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
  </fieldset>
</div>
