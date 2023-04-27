import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";

export const NoteEditor = ({
  onSave, ...args
}: {
  onSave: (note: { title: string; content: string }) => void;
}) => {
  const [code, setCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </CardTitle>
        <CardDescription>
          Create a new note by adding a title and a description
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          value={code}
          className="w-full h-[30vh]"
          onChange={(e) => setCode(e.target.value)}
        />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          semantics="default"
          onPointerDown={() => {
            onSave({
              title,
              content: code,
            });
            setCode("");
            setTitle("");
          }}
          disabled={title.trim().length === 0 || code.trim().length === 0}
        >
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};
