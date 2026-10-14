'use client';

type ToggleChipProps = {
  pressed: boolean;
  onChange: (pressed: boolean) => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const ToggleChip = ({ pressed, onChange, icon, children }: ToggleChipProps) => (
  <button
    type='button'
    aria-pressed={pressed}
    onClick={() => onChange(!pressed)}
    className={`pressable inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-sm ${
      pressed
        ? 'bg-fg font-medium text-canvas'
        : 'bg-fg/[0.06] text-fg-secondary hover:bg-fg/10 hover:text-fg'
    }`}
  >
    {icon}
    {children}
  </button>
);

export default ToggleChip;
