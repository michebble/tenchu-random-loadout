<script lang="ts">
  import { _ } from "svelte-i18n";
  export let name: string;
  export let amount: number;
</script>

<li>{$_(`items.${name}`)} - {amount}</li>
