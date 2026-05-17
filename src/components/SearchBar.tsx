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
  'placeholder:text-[color:var(--color-ink-muted)]',
].join(' ');

const containerClassName = [
  'flex',
  'h-[54px]',
  'items-center',
  'gap-3',
  'rounded-[1.4rem]',
  'border',
  'border-[color:var(--color-line)]',
  'bg-[color:var(--color-paper)]',
  'px-4',
  'text-[color:var(--color-ink-muted)]',
  'shadow-[0_8px_24px_var(--color-shadow)]',
  'transition',
  'duration-300',
  'focus-within:border-[color:var(--color-gold)]',
].join(' ');

export function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <label className="block">
      <span className="sr-only">Search</span>
      <div className={containerClassName}>
        <span aria-hidden="true" className="text-sm">⌕</span>
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
