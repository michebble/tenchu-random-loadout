<script lang="ts">
  import { isLoading } from "svelte-i18n";
  import LocaleSelect from "./lib/LocaleSelect.svelte";
  import TenchuSan from "./lib/TenchuSan.svelte";
</script>

{#if $isLoading}
  <p>Loading</p>
{:else}
  <main>
    <LocaleSelect />
    <h1>Tenchu Random Loadout</h1>
    <TenchuSan />
  </main>
{/if}
