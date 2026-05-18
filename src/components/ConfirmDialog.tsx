type ConfirmDialogProps = {
  open: boolean;
  title: string;
  subtitle: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmDialog({
  open,
  title,
  subtitle,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center bg-[color:var(--color-sumi)]/28 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] backdrop-blur-sm md:items-center">
      <div className="w-full max-w-[420px] rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(251,248,241,0.98),rgba(247,241,229,0.98))] p-5 shadow-[0_24px_60px_var(--color-shadow)]">
        <div className="space-y-3">
          <div className="h-1.5 w-12 rounded-full bg-[color:var(--color-line)]/60" />
          <h2 className="font-serif text-[21px] leading-tight text-[color:var(--color-sumi)]">{title}</h2>
          <p className="text-[14px] leading-7 text-[color:var(--color-ink-muted)]">{subtitle}</p>
        </div>
        <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            aria-label={cancelLabel}
            onClick={onCancel}
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-[color:var(--color-line)] px-4 text-[14px] text-[color:var(--color-sumi)] transition duration-300 hover:bg-[color:var(--color-washi)] sm:w-auto"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            aria-label={confirmLabel}
            onClick={onConfirm}
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-[color:var(--color-vermilion)] bg-[color:var(--color-vermilion)] px-4 text-[14px] text-white transition duration-300 hover:opacity-90 active:scale-[0.99] sm:w-auto"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
