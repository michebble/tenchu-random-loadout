export const pickRandom = (count: number, arr: Array<any>): any => {
  const _arr = [...arr];
  return [...Array(count)].map(
    () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
  ).filter((e) => e);
};

export const pickAmount = (max: number): number =>
  Math.floor(Math.random() * max) + 1;
