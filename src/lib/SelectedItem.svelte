<script>
  export let name;
  export let amount;
  export let src;
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
