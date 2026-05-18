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
    <div className={`flex flex-col items-center justify-center gap-6 px-5 text-center text-[color:var(--color-ink-muted)] ${compact ? 'min-h-[34dvh] py-8' : 'min-h-[48dvh] py-10'}`}>
      <div className="relative flex h-28 w-28 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-[color:var(--color-line)]/70 bg-[radial-gradient(circle,rgba(201,166,70,0.08),transparent_70%)]" />
        <span className="absolute inset-3 rounded-full border border-[color:var(--color-line)]/55" />
        <span className="absolute inset-[21px] rounded-full border border-[color:var(--color-line)]/40" />
        <div className="relative opacity-95">
          <ZanshinMark />
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="font-serif text-[23px] leading-tight text-[color:var(--color-sumi)]">{title}</h2>
        <p className="max-w-[22ch] text-[15px] leading-7 sm:max-w-[26ch]">{subtitle}</p>
      </div>
      <button
        type="button"
        aria-label={actionLabel}
        onClick={onAction}
        className="inline-flex h-14 items-center justify-center rounded-full border border-[color:var(--color-gold)]/60 bg-[color:var(--color-paper)] px-6 text-[14px] font-medium text-[color:var(--color-sumi)] shadow-[0_10px_24px_var(--color-shadow)] transition duration-300 hover:bg-[color:var(--color-gold)]/10 active:scale-[0.99]"
      >
        {actionLabel}
      </button>
      {!compact ? <div className="h-3 w-16 rounded-full bg-[color:var(--color-line)]/55" /> : null}
    </div>
  );
}
