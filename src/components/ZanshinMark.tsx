export function ZanshinMark() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-paper)] text-[color:var(--color-gold)] shadow-[0_1px_0_var(--color-shadow)]"
    >
      <span className="relative h-[18px] w-[18px] rounded-full border border-current/45">
        <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-current/55" />
        <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-current/55" />
      </span>
    </span>
  );
}
