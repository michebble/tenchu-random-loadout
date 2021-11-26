<script lang="ts">
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
        <span>{character}</span>
      </label>
    {/each}
  </fieldset>
</div>

<style>
  span {
    text-transform: capitalize;
  }
</style>
