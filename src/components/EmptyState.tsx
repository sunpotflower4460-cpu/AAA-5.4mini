import { ZanshinMark } from './ZanshinMark';

type EmptyStateProps = {
  title: string;
  subtitle: string;
  actionLabel: string;
  onAction: () => void;
  compact?: boolean;
};

export function EmptyState({ title, subtitle, actionLabel, onAction, compact = false }: EmptyStateProps) {
  return (
    <div className="flex min-h-[48dvh] flex-col items-center justify-center gap-5 px-5 py-10 text-center text-[color:var(--color-ink-muted)]">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-dashed border-[color:var(--color-line)] opacity-60" />
        <span className="absolute inset-3 rounded-full border border-[color:var(--color-line)] opacity-50" />
        <div className="relative opacity-90">
          <ZanshinMark />
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="font-serif text-[22px] leading-tight text-[color:var(--color-sumi)]">{title}</h2>
        <p className="text-[15px] leading-7">{subtitle}</p>
      </div>
      <button
        type="button"
        aria-label={actionLabel}
        onClick={onAction}
            className="inline-flex h-[52px] items-center justify-center rounded-full border border-[color:var(--color-gold)] px-6 text-[14px] font-medium text-[color:var(--color-sumi)] transition duration-300 hover:bg-[color:var(--color-gold)]/10 active:scale-[0.99]"
      >
        {actionLabel}
      </button>
      {!compact ? <div className="h-3 w-16 rounded-full bg-[color:var(--color-line)]/60" /> : null}
    </div>
  );
}
