<script lang="ts">
  export let name: string;
  export let amount: number;
  export let src: string;
</script>

<div>
  <img {src} alt={name} />
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
