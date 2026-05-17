import type { Note } from '../types/note';
import { copy } from '../lib/i18n';
import { NoteCard } from './NoteCard';
import { SearchBar } from './SearchBar';
import { EmptyState } from './EmptyState';
import { ZanshinMark } from './ZanshinMark';

type NotesListProps = {
  notes: Note[];
  query: string;
  onQueryChange: (value: string) => void;
  onCreateNote: () => void;
  onSelectNote: (id: string) => void;
  hasNotes: boolean;
};

export function NotesList({ notes, query, onQueryChange, onCreateNote, onSelectNote, hasNotes }: NotesListProps) {
  const isSearching = query.trim().length > 0;
  const emptyTitle = hasNotes ? copy.noResultsTitle : copy.emptyTitle;
  const emptySubtitle = hasNotes ? copy.noResultsSubtitle : copy.emptySubtitle;
  const actionLabel = hasNotes ? copy.newNote : copy.emptyAction;

  return (
    <div className="space-y-7 pb-32 pt-5">
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <ZanshinMark />
          <div>
            <h1 className="font-serif text-[28px] leading-tight text-[color:var(--color-sumi)]">{copy.appName}</h1>
            <p className="text-[13px] uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]">{copy.appSubtitle}</p>
          </div>
        </div>
        <p className="max-w-[30ch] text-[15px] leading-7 text-[color:var(--color-ink-muted)]">
          {copy.tagline}
          <span className="block text-[13px] text-[color:var(--color-ink-muted)]/80">{copy.taglineEn}</span>
        </p>
        <SearchBar value={query} onChange={onQueryChange} placeholder={copy.searchPlaceholder} />
      </header>

      {notes.length > 0 ? (
        <section className="space-y-4">
          <div className="flex items-center justify-between text-[12px] uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]">
            <span>{isSearching ? '絞り込み' : 'Notes'}</span>
            <span>{notes.length}</span>
          </div>
          <div className="space-y-4">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} onSelect={() => onSelectNote(note.id)} />
            ))}
          </div>
        </section>
      ) : (
        <EmptyState
          title={emptyTitle}
          subtitle={emptySubtitle}
          actionLabel={actionLabel}
          onAction={onCreateNote}
          compact={isSearching}
        />
      )}

      {notes.length > 0 ? (
        <button
          type="button"
          aria-label={copy.newNote}
          onClick={onCreateNote}
          className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-[max(1rem,env(safe-area-inset-right))] z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-sumi)] text-[22px] text-[color:var(--color-paper)] shadow-[0_18px_38px_var(--color-shadow)] transition duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          <span aria-hidden="true">＋</span>
        </button>
      ) : null}
    </div>
  );
}
