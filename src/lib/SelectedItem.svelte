<script lang="ts">
  import { _ } from "svelte-i18n";
  export let name: string;
  export let amount: number;
  export let src: string;
</script>

<div>
  <img {src} alt={$_(`items.${name}`)} />
  <p>{amount}</p>
</div>

<style>
  div {
    position: relative;
    text-align: center;
  }
  p {
    position: absolute;
    bottom: 8px;
    right: 16px;
  }
</style>
