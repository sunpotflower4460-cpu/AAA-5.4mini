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
    <div className="space-y-8 pb-[8.5rem] pt-5 sm:pt-7">
      <header className="space-y-6 pt-1">
        <div className="flex items-start gap-4">
          <ZanshinMark />
          <div className="space-y-1">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[color:var(--color-ink-muted)]/80">{copy.appSubtitle}</p>
            <h1 className="font-serif text-[clamp(34px,7vw,44px)] leading-[0.95] text-[color:var(--color-sumi)]">{copy.appName}</h1>
          </div>
        </div>
        <p className="max-w-[22ch] text-[16px] leading-8 text-[color:var(--color-ink-muted)] sm:max-w-[26ch]">
          {copy.tagline}
          <span className="mt-2 block text-[13px] tracking-[0.12em] text-[color:var(--color-ink-muted)]/72">{copy.taglineEn}</span>
        </p>
        <div className="space-y-3">
          <SearchBar value={query} onChange={onQueryChange} placeholder={copy.searchPlaceholder} />
          <div className="flex items-center justify-between text-[12px] uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]/80">
            <span>{isSearching ? '絞り込み' : 'Notes'}</span>
            <span>{notes.length}</span>
          </div>
        </div>
      </header>

      {notes.length > 0 ? (
        <section className="space-y-4">
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
          className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-[max(1rem,env(safe-area-inset-right))] z-20 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-[linear-gradient(180deg,rgba(31,27,24,0.94),rgba(31,27,24,0.9))] text-[23px] text-[color:var(--color-paper)] shadow-[0_18px_40px_var(--color-shadow)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_22px_46px_var(--color-shadow)] active:scale-[0.98]"
        >
          <span aria-hidden="true">＋</span>
        </button>
      ) : null}
    </div>
  );
}
