import type { Note } from '../types/note';

const STORAGE_KEY = 'zanshin.notes.v1';

const isNote = (value: unknown): value is Note => {
  if (!value || typeof value !== 'object') return false;
  const note = value as Partial<Note>;
  const locale = note.locale;

  return (
    typeof note.id === 'string' &&
    typeof note.title === 'string' &&
    typeof note.body === 'string' &&
    typeof note.createdAt === 'string' &&
    typeof note.updatedAt === 'string' &&
    typeof note.isFavorite === 'boolean' &&
    (locale === undefined || locale === 'ja' || locale === 'en')
  );
};

const normalizeNotes = (value: unknown): Note[] => {
  if (!Array.isArray(value)) return [];
  return value.filter(isNote).map((note) => ({
    ...note,
    locale: note.locale ?? 'ja',
  }));
};

export const loadNotes = (): Note[] => {
  if (typeof window === 'undefined') return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return normalizeNotes(JSON.parse(raw));
  } catch {
    return [];
  }
};

export const saveNotes = (notes: Note[]): void => {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch {
    // Quiet failure by design.
  }
};
