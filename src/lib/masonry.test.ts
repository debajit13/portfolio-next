import { balanceColumns, heightSpread, sameLayout } from './masonry';

const GAP = 16;
const measuredTestimonials = [626, 500, 306, 297, 362, 500, 324, 610, 914];

describe('balanceColumns', () => {
  it('places every item exactly once', () => {
    const columns = balanceColumns(measuredTestimonials, 3, GAP);
    expect(columns.flat().sort((a, b) => a - b)).toEqual(measuredTestimonials.map((_, i) => i));
  });

  it('keeps the first item at the top of the first column and each column in order', () => {
    const columns = balanceColumns(measuredTestimonials, 3, GAP);
    expect(columns[0][0]).toBe(0);
    columns.forEach((column) => expect(column).toEqual([...column].sort((a, b) => a - b)));
  });

  it('evens out the measured testimonials far better than placing them in order', () => {
    const columns = balanceColumns(measuredTestimonials, 3, GAP);
    expect(heightSpread(columns, measuredTestimonials, GAP)).toBeLessThanOrEqual(58);
  });

  it('falls back to tallest-first placement for large sets', () => {
    const heights = Array.from({ length: 40 }, (_, i) => 200 + ((i * 97) % 300));
    const columns = balanceColumns(heights, 3, GAP);
    expect(columns.flat()).toHaveLength(40);
    expect(heightSpread(columns, heights, GAP)).toBeLessThan(Math.max(...heights));
  });

  it('handles more columns than items', () => {
    expect(balanceColumns([100, 200], 3, GAP)).toEqual([[0], [1], []]);
  });
});

describe('sameLayout', () => {
  it('compares layouts by value', () => {
    expect(sameLayout([[0, 1], [2]], [[0, 1], [2]])).toBe(true);
    expect(sameLayout([[0], [1, 2]], [[0, 1], [2]])).toBe(false);
    expect(sameLayout(null, null)).toBe(true);
  });
});
