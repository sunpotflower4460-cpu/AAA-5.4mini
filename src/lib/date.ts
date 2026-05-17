const pad = (value: number): string => String(value).padStart(2, '0');

const formatDate = (date: Date): string => `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())}`;

const sameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export const formatUpdatedAt = (value: string, locale: 'ja' | 'en' = 'ja'): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  if (sameDay(date, today)) {
    return locale === 'en' ? 'Today' : '今日';
  }

  if (sameDay(date, yesterday)) {
    return locale === 'en' ? 'Yesterday' : '昨日';
  }

  if (locale === 'en') {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  }

  return formatDate(date);
};
