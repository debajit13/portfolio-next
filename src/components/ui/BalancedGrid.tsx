'use client';
import { useEffect, useRef, useState } from 'react';
import { balanceColumns, sameLayout } from '@/lib/masonry';

const GAP_PX = 16;
const COLUMN_QUERIES = [
  { query: '(min-width: 1024px)', columns: 3 },
  { query: '(min-width: 640px)', columns: 2 },
];

const columnCount = () =>
  COLUMN_QUERIES.find(({ query }) => window.matchMedia(query).matches)?.columns ?? 1;

const naturalHeight = (card: HTMLElement) => {
  const style = getComputedStyle(card);
  const children = Array.from(card.children) as HTMLElement[];
  const gap = parseFloat(style.rowGap) || 0;
  return (
    children.reduce((sum, child) => sum + child.offsetHeight, 0) +
    gap * Math.max(0, children.length - 1) +
    parseFloat(style.paddingTop) +
    parseFloat(style.paddingBottom)
  );
};

type BalancedGridProps = { items: { key: string; node: React.ReactNode }[] };

const BalancedGrid = ({ items }: BalancedGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState<number[][] | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof ResizeObserver === 'undefined') return;
    let frame = 0;

    const layout = () => {
      const count = columnCount();
      if (count === 1) {
        setColumns(null);
        return;
      }
      const cards = Array.from(container.querySelectorAll<HTMLElement>('[data-card-index]')).sort(
        (a, b) => Number(a.dataset.cardIndex) - Number(b.dataset.cardIndex)
      );
      const heights = cards.map((card) => naturalHeight(card.firstElementChild as HTMLElement));
      const next = balanceColumns(heights, count, GAP_PX);
      setColumns((current) => (sameLayout(current, next) ? current : next));
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(layout);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(container);
    schedule();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [items.length]);

  return (
    <div ref={containerRef}>
      {columns ? (
        <div
          role='list'
          className='grid gap-4'
          style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
        >
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} role='none' className='flex flex-col gap-4'>
              {column.map((itemIndex, position) => (
                <div
                  key={items[itemIndex].key}
                  role='listitem'
                  data-card-index={itemIndex}
                  className={`flex ${position === column.length - 1 ? 'flex-1' : ''}`}
                >
                  {items[itemIndex].node}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <ul className='gap-4 sm:columns-2 lg:columns-3'>
          {items.map(({ key, node }, index) => (
            <li key={key} data-card-index={index} className='mb-4 flex break-inside-avoid'>
              {node}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BalancedGrid;
