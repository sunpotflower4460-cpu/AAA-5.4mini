type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

const inputClassName = [
  'w-full',
  'bg-transparent',
  'text-[16px]',
  'text-[color:var(--color-sumi)]',
  'outline-none',
  'placeholder:tracking-[0.04em]',
  'placeholder:text-[color:var(--color-ink-muted)]',
].join(' ');

const containerClassName = [
  'flex',
  'h-[56px]',
  'items-center',
  'gap-[14px]',
  'rounded-[1.55rem]',
  'border',
  'border-[color:var(--color-line)]',
  'bg-[linear-gradient(180deg,rgba(251,248,241,0.94),rgba(247,241,229,0.96))]',
  'px-[18px]',
  'text-[color:var(--color-ink-muted)]',
  'shadow-[0_10px_28px_var(--color-shadow)]',
  'transition',
  'duration-300',
  'focus-within:border-[color:var(--color-gold)]',
  'focus-within:shadow-[0_14px_34px_var(--color-shadow)]',
].join(' ');

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <label className="block">
      <span className="sr-only">Search</span>
      <div className={containerClassName}>
        <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-white/60 text-sm">⌕</span>
        <input
          aria-label={placeholder}
          className={inputClassName}
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
}
