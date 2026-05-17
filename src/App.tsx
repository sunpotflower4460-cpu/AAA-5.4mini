import { useEffect, useMemo, useRef, useState } from 'react';
    import { AppShell } from './components/AppShell';
    import { EmptyState } from './components/EmptyState';
    import { NoteEditor } from './components/NoteEditor';
    import { NotesList } from './components/NotesList';
    import { copy } from './lib/i18n';
    import { loadNotes, saveNotes } from './lib/storage';
    import type { Note } from './types/note';

    type ViewMode = 'list' | 'editor';

    type SaveStatus = 'idle' | 'saving' | 'saved';

    const nowIso = (): string => new Date().toISOString();

    const createId = (): string =>
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `note-${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const createNote = (): Note => {
      const stamp = nowIso();

      return {
        id: createId(),
        title: '',
        body: '',
        createdAt: stamp,
        updatedAt: stamp,
        isFavorite: false,
        locale: navigator.language.toLowerCase().startsWith('en') ? 'en' : 'ja',
      };
    };

    const sortNotes = (notes: Note[]): Note[] =>
      [...notes].sort((a, b) => {
        if (a.isFavorite !== b.isFavorite) return Number(b.isFavorite) - Number(a.isFavorite);
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      });

    export default function App() {
      const [notes, setNotes] = useState<Note[]>(() => sortNotes(loadNotes()));
      const [selectedId, setSelectedId] = useState<string | null>(null);
      const [query, setQuery] = useState('');
      const [viewMode, setViewMode] = useState<ViewMode>('list');
      const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
      const saveTimer = useRef<number | null>(null);
      const statusTimer = useRef<number | null>(null);
      const hydrated = useRef(false);

      const selectedNote = useMemo(
        () => notes.find((note) => note.id === selectedId) ?? null,
        [notes, selectedId],
      );

      const filteredNotes = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        const matched = normalizedQuery
          ? notes.filter((note) =>
              [note.title, note.body].some((field) => field.toLowerCase().includes(normalizedQuery)),
            )
          : notes;
        return sortNotes(matched);
      }, [notes, query]);

      const hasNotes = notes.length > 0;

      const persistNotes = (nextNotes: Note[]) => {
        if (saveTimer.current) {
          window.clearTimeout(saveTimer.current);
        }
        if (statusTimer.current) {
          window.clearTimeout(statusTimer.current);
        }

        setSaveStatus('saving');
        saveTimer.current = window.setTimeout(() => {
          saveNotes(nextNotes);
          setSaveStatus('saved');
          statusTimer.current = window.setTimeout(() => {
            setSaveStatus('idle');
          }, 1800);
        }, 450);
      };

      useEffect(() => {
        if (!hydrated.current) {
          hydrated.current = true;
          return;
        }

        persistNotes(notes);
        return () => {
          if (saveTimer.current) {
            window.clearTimeout(saveTimer.current);
          }
          if (statusTimer.current) {
            window.clearTimeout(statusTimer.current);
          }
        };
      }, [notes]);

      const openNote = (id: string) => {
        setSelectedId(id);
        setViewMode('editor');
      };

      const openNewNote = () => {
        const note = createNote();
        setNotes((current) => sortNotes([note, ...current]));
        setSelectedId(note.id);
        setViewMode('editor');
      };

      const updateSelectedNote = (patch: Partial<Pick<Note, 'title' | 'body' | 'isFavorite'>>) => {
        if (!selectedNote) return;
        const updatedAt = nowIso();
        setNotes((current) =>
          sortNotes(
            current.map((note) =>
              note.id === selectedNote.id
                ? {
                    ...note,
                    ...patch,
                    updatedAt,
                  }
                : note,
            ),
          ),
        );
      };

      const deleteSelectedNote = () => {
        if (!selectedNote) return;
        const confirmed = window.confirm(`${copy.deleteConfirmTitle}
${copy.deleteConfirmSubtitle}`);
        if (!confirmed) return;

        setNotes((current) => current.filter((note) => note.id !== selectedNote.id));
        setSelectedId(null);
        setViewMode('list');
      };

      useEffect(() => {
        if (viewMode === 'editor' && selectedNote === null) {
          setViewMode('list');
        }
      }, [selectedNote, viewMode]);

      return (
        <AppShell>
          {viewMode === 'list' ? (
            hasNotes || query.trim().length > 0 ? (
              <NotesList
                notes={filteredNotes}
                query={query}
                onQueryChange={setQuery}
                onCreateNote={openNewNote}
                onSelectNote={openNote}
                hasNotes={hasNotes}
              />
            ) : (
              <EmptyState
                title={copy.emptyTitle}
                subtitle={copy.emptySubtitle}
                actionLabel={copy.emptyAction}
                onAction={openNewNote}
              />
            )
          ) : selectedNote ? (
            <NoteEditor
              note={selectedNote}
              saveStatus={saveStatus}
              onBack={() => setViewMode('list')}
              onChange={updateSelectedNote}
              onDelete={deleteSelectedNote}
            />
          ) : null}
        </AppShell>
      );
    }
