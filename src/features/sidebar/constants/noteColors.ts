export type CardColor = {
  header: string;
  body: string;
  text: string;
};

export const NOTE_COLORS = {
  red: {
    header: '#F87171',
    body: '#FECACA',
    text: '#27272A',
  },
  blue: {
    header: '#60A5FA',
    body: '#BFDBFE',
    text: '#27272A',
  },
  yellow: {
    header: '#FACC15',
    body: '#FEF3C7',
    text: '#27272A',
  },
  green: {
    header: '#4ADE80',
    body: '#BBF7D0',
    text: '#27272A',
  },
  purple: {
    header: '#C084FC',
    body: '#E9D5FF',
    text: '#27272A',
  },
} as const;

export type NoteColorKey = keyof typeof NOTE_COLORS;
export const NOTE_COLORS_KEYS = Object.keys(NOTE_COLORS) as NoteColorKey[];
