import type { Note } from '../types/note';
import { formatUpdatedAt } from '../lib/date';
import { copy } from '../lib/i18n';

type NoteCardProps = {
  note: Note;
  onSelect: () => void;
};

const previewText = (body: string): string => {
  const text = body.trim().replace(/\s+/g, ' ');
  return text ? text.slice(0, 120) : '　';
};

export function NoteCard({ note, onSelect }: NoteCardProps) {
  const title = note.title.trim() || copy.untitledNote;
  const date = formatUpdatedAt(note.updatedAt, note.locale ?? 'ja');

  return (
    <button
      type="button"
      aria-label={title}
      onClick={onSelect}
      className="group w-full rounded-[1.85rem] border border-[color:var(--color-line)] bg-[color:var(--color-paper)] px-5 py-5 text-left shadow-[0_10px_28px_var(--color-shadow)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_var(--color-shadow)] active:scale-[0.995]"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 h-16 w-px bg-[color:var(--color-sumi)]/20" aria-hidden="true" />
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="line-clamp-1 font-serif text-[17px] leading-snug text-[color:var(--color-sumi)]">{title}</h3>
            {note.isFavorite ? (
              <span aria-hidden="true" className="shrink-0 text-[18px] leading-none text-[color:var(--color-gold)]">✦</span>
            ) : null}
          </div>
          <p className="line-clamp-2 text-[15px] leading-7 text-[color:var(--color-ink-muted)]">{previewText(note.body)}</p>
          <div className="flex items-center justify-between pt-1 text-[12px] text-[color:var(--color-ink-muted)]">
            <span>{date}</span>
            <span className="rounded-full border border-[color:var(--color-line)] px-2 py-1 text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-gold)]">
              {note.isFavorite ? 'Favorite' : 'Note'}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
