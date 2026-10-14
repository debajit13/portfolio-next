'use client';

type SegmentedControlProps<T extends string> = {
  label: string;
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
};

const SegmentedControl = <T extends string>({
  label,
  options,
  value,
  onChange,
}: SegmentedControlProps<T>) => (
  <div
    role='group'
    aria-label={label}
    className='inline-flex h-9 items-center rounded-full bg-fg/[0.06] p-[3px]'
  >
    {options.map((option) => {
      const isSelected = option.value === value;
      return (
        <button
          key={option.value}
          type='button'
          aria-pressed={isSelected}
          onClick={() => onChange(option.value)}
          className={`pressable h-[30px] rounded-full px-3.5 text-sm ${
            isSelected
              ? 'bg-canvas font-medium text-fg shadow-[0_1px_3px_rgb(0_0_0/0.12)]'
              : 'text-fg-secondary hover:text-fg'
          }`}
        >
          {option.label}
        </button>
      );
    })}
  </div>
);

export default SegmentedControl;
