<script lang="ts">
  import { currentCharacter, characters } from "./stores/characters";
</script>

<div>
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
</div>

<style>
  span {
    text-transform: capitalize;
  }
</style>
