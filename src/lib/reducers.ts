import { pickAmount } from "./picks";

const MAX_ITEM_COUNT = 15;

const sumAmount = (total: number, amount: number): number => total + amount;

export const ninjaReducer = (selectedItems, { name, limit }) => {
  const currentTotal = selectedItems
    .map((seclectedItem) => seclectedItem.amount)
    .reduce(sumAmount, 0);

  if (currentTotal >= MAX_ITEM_COUNT) return selectedItems;

  const remaining = MAX_ITEM_COUNT - currentTotal;
  const upperLimit = Math.min(...[remaining, limit]);
  return selectedItems.concat({ name, amount: pickAmount(upperLimit) });
};
