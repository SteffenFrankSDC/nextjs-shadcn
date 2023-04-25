import { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";

import { api, type RouterOutputs } from "~/utils/api";
import { AppHeader } from "~/components/AppHeader";
import { NoteEditor } from "~/components/NoteEditor";
import { NoteCard } from "~/components/NoteCard";
import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Separator } from "~/components/ui/separator";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS Shadcn UI Playground</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppHeader />
        <Content />
      </main>
    </>
  );
};

export default Home;

type Topic = RouterOutputs["topic"]["getAll"][0];

const Content: React.FC = () => {
  const { data: sessionData } = useSession();

  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
    undefined, // no input
    {
      enabled: sessionData?.user !== undefined,
      onSuccess: (data) => {
        setSelectedTopic(selectedTopic ?? data[0] ?? null);
      },
    }
  );

  const createTopic = api.topic.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  const { data: notes, refetch: refetchNotes } = api.note.getAll.useQuery(
    {
      topicId: selectedTopic?.id ?? "",
    },
    {
      enabled: sessionData?.user !== undefined && selectedTopic !== null,
    }
  );

  const createNote = api.note.create.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  const deleteNote = api.note.delete.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  console.log({ notes, topics, selectedTopic });

  return (
    <div className="p-5">

      <Tabs
        id="topics"
        orientation="vertical"
        activationMode="manual"
        value={selectedTopic?.id}
        onValueChange={
          (id) => setSelectedTopic(topics?.find(topic => topic.id === id) ?? null)
        }>

        <TabsList className="w-fit-content max-w-[200px]">
          <Label htmlFor="topics" scale="lg" className="font-bold mb-2">Topics</Label>
          {topics?.map((topic: Topic) => (
            <TabsTrigger key={topic.id} value={topic.id}>
              {topic.title}
            </TabsTrigger>
          ))}

          <Separator orientation="horizontal" scale="lg" />

          <div className="w-full">
            <Label htmlFor="topic-input" className="font-bold">
              New Topic
            </Label>
            <Input
              id="topic-input"
              type="text"
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  createTopic.mutate({
                    title: e.currentTarget.value,
                  });
                  e.currentTarget.value = "";
                }
              }} />
            <Label htmlFor="topic-input" scale="xs">
              ENTER to create new topic
            </Label>
          </div>

        </TabsList>

        <div className="p-2 flex-1 flex flex-col gap-2">
          {notes?.map((note) => (
            <div key={note.id}>
              <NoteCard
                note={note}
                onDelete={() => void deleteNote.mutate({ id: note.id })}
              />
            </div>
          ))}

          <NoteEditor
            onSave={({ title, content }) => {
              void createNote.mutate({
                title,
                content,
                topicId: selectedTopic?.id ?? "",
              });
            }}
          />
        </div>
      </Tabs>

    </div>
  );
};
