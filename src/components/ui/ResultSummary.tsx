type ResultSummaryProps = {
  shown: number;
  total: number;
  noun: string;
  isFiltered: boolean;
  onReset: () => void;
};

const ResultSummary = ({ shown, total, noun, isFiltered, onReset }: ResultSummaryProps) => (
  <div className='mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1'>
    <p aria-live='polite' className='text-caption text-fg-tertiary'>
      {isFiltered ? `${shown} of ${total} ${noun}` : `${total} ${noun}`}
    </p>
    {isFiltered && (
      <button type='button' onClick={onReset} className='text-caption text-accent hover:underline'>
        Clear filters
      </button>
    )}
  </div>
);

export default ResultSummary;
