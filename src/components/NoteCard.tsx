import type { Note } from '../types/note';
import { formatUpdatedAt } from '../lib/date';
import { copy } from '../lib/i18n';

type NoteCardProps = {
  note: Note;
  onSelect: () => void;
};

const cardBodyPreviewMaxLength = 96;

const previewText = (body: string): string => {
  const text = body.trim().replace(/\s+/g, ' ');
  return text ? text.slice(0, cardBodyPreviewMaxLength) : '　';
};

export function NoteCard({ note, onSelect }: NoteCardProps) {
  const title = note.title.trim() || copy.untitledNote;
  const date = formatUpdatedAt(note.updatedAt, note.locale ?? 'ja');

  return (
    <button
      type="button"
      aria-label={title}
      onClick={onSelect}
      className="group w-full rounded-[1.9rem] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(251,248,241,0.98),rgba(248,243,233,0.98))] px-5 py-5 text-left shadow-[0_8px_24px_var(--color-shadow)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_var(--color-shadow)] active:scale-[0.995]"
    >
      <div className="flex items-start gap-4">
        <div
          className="mt-1 h-[86px] w-px rounded-full bg-[linear-gradient(180deg,rgba(31,27,24,0.06),rgba(31,27,24,0.28),rgba(31,27,24,0.08))]"
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1 space-y-2.5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="line-clamp-1 font-serif text-[17px] leading-snug text-[color:var(--color-sumi)]">{title}</h3>
            {note.isFavorite ? (
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-gold)]/30 bg-[color:var(--color-gold)]/10 text-[10px] text-[color:var(--color-gold)]"
              >
                ✦
              </span>
            ) : null}
          </div>
          <p className="line-clamp-2 text-[15px] leading-7 text-[color:var(--color-ink-muted)]">{previewText(note.body)}</p>
          <div className="flex items-center justify-between pt-1 text-[12px] text-[color:var(--color-ink-muted)]">
            <span>{date}</span>
            <span className="uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]/80">
              {note.isFavorite ? 'Favorite' : 'Note'}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
