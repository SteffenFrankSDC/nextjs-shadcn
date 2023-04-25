import { Button } from "./ui/button";

import type { RouterOutputs } from "../utils/api";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";

type Note = RouterOutputs["note"]["getAll"][0];

export const NoteCard = ({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: () => void;
}) =>
  <Card>
    <CardHeader>
      <CardTitle>{note.title}</CardTitle>
    </CardHeader>

    <CardContent>
      <article className="whitespace-pre-wrap prose">
        {note.content}
      </article>
    </CardContent>

    <CardFooter className="flex justify-end">
      <Button
        variant="ghost"
        semantics="destructive"
        scale="sm"
        onPointerDown={onDelete}>
        Delete
      </Button>
    </CardFooter >
  </Card>
