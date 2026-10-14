const MAX_EXHAUSTIVE_LAYOUTS = 200_000;

const columnHeights = (columns: number[][], heights: number[], gap: number) =>
  columns.map((column) =>
    column.reduce((sum, index, position) => sum + heights[index] + (position > 0 ? gap : 0), 0)
  );

export const heightSpread = (columns: number[][], heights: number[], gap: number) => {
  const totals = columnHeights(columns, heights, gap);
  return Math.max(...totals) - Math.min(...totals);
};

const tallestFirst = (heights: number[], columnCount: number, gap: number) => {
  const columns: number[][] = Array.from({ length: columnCount }, () => []);
  heights
    .map((_, index) => index)
    .sort((a, b) => heights[b] - heights[a])
    .forEach((index) => {
      const totals = columnHeights(columns, heights, gap);
      columns[totals.indexOf(Math.min(...totals))].push(index);
    });
  return columns;
};

const mostEven = (heights: number[], columnCount: number, gap: number) => {
  let best = tallestFirst(heights, columnCount, gap);
  let bestSpread = heightSpread(best, heights, gap);
  const layouts = columnCount ** heights.length;
  for (let layout = 0; layout < layouts && bestSpread > 0; layout += 1) {
    const columns: number[][] = Array.from({ length: columnCount }, () => []);
    let remaining = layout;
    heights.forEach((_, index) => {
      columns[remaining % columnCount].push(index);
      remaining = Math.floor(remaining / columnCount);
    });
    const spread = heightSpread(columns, heights, gap);
    if (spread < bestSpread) {
      best = columns;
      bestSpread = spread;
    }
  }
  return best;
};

export const balanceColumns = (heights: number[], columnCount: number, gap: number) => {
  const columns =
    columnCount ** heights.length <= MAX_EXHAUSTIVE_LAYOUTS
      ? mostEven(heights, columnCount, gap)
      : tallestFirst(heights, columnCount, gap);
  return columns
    .map((column) => [...column].sort((a, b) => a - b))
    .sort((a, b) => (a[0] ?? Infinity) - (b[0] ?? Infinity));
};

export const sameLayout = (a: number[][] | null, b: number[][] | null) =>
  JSON.stringify(a) === JSON.stringify(b);
