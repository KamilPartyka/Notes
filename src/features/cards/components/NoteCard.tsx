interface NoteCardProps {
  note: {
    body: string;
  };
}

export const NoteCard = ({ note }: NoteCardProps) => {
  const body = JSON.parse(note.body);

  return <div>{body}</div>;
};
