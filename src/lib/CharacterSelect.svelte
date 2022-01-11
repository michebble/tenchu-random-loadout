<script lang="ts">
  import { _ } from "../services/lang/i18n";
  import { currentCharacter, characters } from "./stores/characters";
</script>

<div>
  <fieldset>
    <legend>Character Select</legend>
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
