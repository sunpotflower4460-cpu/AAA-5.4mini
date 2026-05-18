import type { Note } from '../types/note';
import { copy } from '../lib/i18n';

type NoteEditorProps = {
  note: Note;
  saveStatus: 'idle' | 'saving' | 'saved';
  onBack: () => void;
  onChange: (patch: Partial<Pick<Note, 'title' | 'body' | 'isFavorite'>>) => void;
  onDelete: () => void;
};

export function NoteEditor({ note, saveStatus, onBack, onChange, onDelete }: NoteEditorProps) {
  const isFavorite = note.isFavorite;

  return (
    <section className="flex flex-1 flex-col pt-4">
      <div className="sticky top-0 z-10 -mx-4 border-b border-[color:var(--color-line)] bg-[color:var(--color-washi)]/92 px-4 pb-4 pt-[max(0.85rem,env(safe-area-inset-top))] backdrop-blur-md sm:-mx-5 sm:px-5">
        <div className="mx-auto flex w-full max-w-[680px] items-start justify-between gap-3">
          <button
            type="button"
            aria-label={copy.back}
            onClick={onBack}
            className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-paper)] px-4 text-[14px] text-[color:var(--color-sumi)] transition duration-300 hover:bg-[color:var(--color-paper)]/80 active:scale-[0.99]"
          >
            ← {copy.back}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={copy.favorite}
              onClick={() => onChange({ isFavorite: !isFavorite })}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 ${
                isFavorite
                  ? 'border-[color:var(--color-gold)] bg-[color:var(--color-gold)]/12 text-[color:var(--color-gold)]'
                  : 'border-[color:var(--color-line)] bg-[color:var(--color-paper)] text-[color:var(--color-ink-muted)]'
              }`}
            >
              <span aria-hidden="true">✦</span>
            </button>
            <button
              type="button"
              aria-label={copy.delete}
              onClick={onDelete}
              className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--color-vermilion)] px-4 text-[14px] text-[color:var(--color-vermilion)] transition duration-300 hover:bg-[color:var(--color-vermilion)]/10 active:scale-[0.99]"
            >
              {copy.delete}
            </button>
          </div>
        </div>

        <div className="mx-auto mt-3 flex w-full max-w-[680px] items-center justify-between gap-3 text-[12px] tracking-[0.14em] text-[color:var(--color-ink-muted)]">
          <span>
            {saveStatus === 'saving' ? copy.saving : saveStatus === 'saved' ? copy.saved : '\u00A0'}
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]/70">
            {saveStatus === 'saved' ? copy.savedEn : '\u00A0'}
          </span>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[680px] flex-1 flex-col gap-6 pb-[calc(env(safe-area-inset-bottom)+2rem)] pt-6">
        <div className="rounded-[2rem] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(251,248,241,0.92),rgba(248,243,233,0.94))] px-5 py-5 shadow-[0_10px_28px_var(--color-shadow)] sm:px-6 sm:py-6">
          <input
            aria-label="Title"
            className="w-full bg-transparent font-serif text-[clamp(24px,5.2vw,34px)] leading-tight text-[color:var(--color-sumi)] outline-none placeholder:text-[color:var(--color-ink-muted)]"
            type="text"
            value={note.title}
            placeholder={copy.titlePlaceholder}
            onChange={(event) => onChange({ title: event.target.value })}
          />
        </div>

        <div className="flex flex-1 rounded-[2rem] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(251,248,241,0.88),rgba(247,241,229,0.92))] px-5 py-5 shadow-[0_10px_28px_var(--color-shadow)] sm:px-6 sm:py-6">
          <textarea
            aria-label="Body"
            className="min-h-[56dvh] w-full flex-1 resize-none bg-transparent text-[16px] leading-[1.9] tracking-[0.01em] text-[color:var(--color-sumi)] outline-none placeholder:text-[color:var(--color-ink-muted)]"
            value={note.body}
            placeholder={copy.bodyPlaceholder}
            onChange={(event) => onChange({ body: event.target.value })}
          />
        </div>
      </div>
    </section>
  );
}
