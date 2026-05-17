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
      const statusText =
        saveStatus === 'saving'
          ? copy.saving
          : saveStatus === 'saved'
            ? `${copy.saved}
${copy.savedEn}`
            : '';

      return (
        <section className="flex flex-1 flex-col pt-6">
          <div className="sticky top-0 z-10 -mx-5 mb-5 border-b border-[color:var(--color-line)] bg-[color:var(--color-washi)]/95 px-5 pb-4 pt-[max(1rem,env(safe-area-inset-top))] backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                aria-label={copy.back}
                onClick={onBack}
                className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--color-line)] px-4 text-[14px] text-[color:var(--color-sumi)] transition duration-300 hover:bg-[color:var(--color-paper)]"
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
                      ? 'border-[color:var(--color-gold)] bg-[color:var(--color-gold)]/10 text-[color:var(--color-gold)]'
                      : 'border-[color:var(--color-line)] bg-[color:var(--color-paper)] text-[color:var(--color-ink-muted)]'
                  }`}
                >
                  <span aria-hidden="true">✦</span>
                </button>
                <button
                  type="button"
                  aria-label={copy.delete}
                  onClick={onDelete}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--color-vermilion)] px-4 text-[14px] text-[color:var(--color-vermilion)] transition duration-300 hover:bg-[color:var(--color-vermilion)]/10"
                >
                  {copy.delete}
                </button>
              </div>
            </div>
            <div className="mt-3 min-h-5 text-[12px] tracking-[0.12em] text-[color:var(--color-ink-muted)] transition-opacity duration-300">
              {statusText ? <span className="whitespace-pre-line">{statusText}</span> : <span aria-hidden="true">&nbsp;</span>}
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-5 pb-[calc(env(safe-area-inset-bottom)+2rem)]">
            <input
              aria-label="Title"
              className="w-full bg-transparent font-serif text-[24px] leading-tight text-[color:var(--color-sumi)] outline-none placeholder:text-[color:var(--color-ink-muted)]"
              type="text"
              value={note.title}
              placeholder={copy.titlePlaceholder}
              onChange={(event) => onChange({ title: event.target.value })}
            />
            <textarea
              aria-label="Body"
              className="min-h-[58dvh] w-full flex-1 resize-none bg-transparent text-[16px] leading-[1.618] text-[color:var(--color-sumi)] outline-none placeholder:text-[color:var(--color-ink-muted)]"
              value={note.body}
              placeholder={copy.bodyPlaceholder}
              onChange={(event) => onChange({ body: event.target.value })}
            />
          </div>
        </section>
      );
    }
