<script>
  import { locale } from "svelte-i18n";
  const handleLocaleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    locale.set(value);
    localStorage.setItem("locale", value);
  };
</script>

<div>
  <span>language</span>
  <select on:change={handleLocaleChange} value={$locale}>
    <option value="en">English </option>
    <option value="ja">日本語</option>
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
