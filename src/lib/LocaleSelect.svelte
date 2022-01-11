<script>
  import { locale } from "svelte-i18n";
  const handleLocaleChange = (e) => {
    e.preventDefault();
    locale.set(e.target.value);
  };
</script>

<div>
  <span>language</span>
  <select on:change={handleLocaleChange}>
    <option value="en">English </option>
    <option value="jp">日本語</option>
  </select>
</div>

<style>
  div {
    display: flex;
    justify-content: flex-end;
  }
  span {
    margin-right: 0.5rem;
  }
</style>
