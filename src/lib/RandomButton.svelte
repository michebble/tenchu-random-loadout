<script>
  import {
    rikiWeapons,
    ayameWeapons,
    ninjaItems,
    selectedItems,
  } from "./stores.js";

  const MAX_SELECTED_ITEMS = 5;
  const MAX_ITEM_COUNT = 15;

  const pickRandom = (count, arr) => {
    let _arr = [...arr];
    return [...Array(count)].map(
      () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
    );
  };

  const pickAmount = (max) => Math.floor(Math.random() * max) + 1;

  const reducer = (selectedItems, { name, limit, src }) => {
    const currentTotal = selectedItems
      .map((seclectedItem) => seclectedItem.amount)
      .reduce((a, b) => a + b, 0);
    if (currentTotal >= MAX_ITEM_COUNT) return selectedItems;
    const remaining = MAX_ITEM_COUNT - currentTotal;
    const upperLimit = Math.min(...[remaining, limit]);
    return selectedItems.concat({ name, src, amount: pickAmount(upperLimit) });
  };

  const run = () => {
    // const itemSet = pickRandom(1, $rikiWeapons).concat($ninjaItems);
    $selectedItems = pickRandom(MAX_SELECTED_ITEMS, $ninjaItems)
      .reduce(reducer, [])
      .filter((e) => e);
  };
</script>

<button on:click={run}> Randomize Loadout </button>
