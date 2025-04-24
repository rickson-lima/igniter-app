import { Card, CardDescription } from "@/components/ui/card";
import { api } from "@/igniter.client";
import { CheckCheckIcon } from "lucide-react";

export default async function Home() {
  const todos = await api.todo.findMany.query();
  return (
    <div className="min-h-screen flex flex-col pt-12 space-y-12">
      {todos.data?.map((todo) => (
        <Card key={todo.id}>
          <CardDescription>
            <h2>{todo.title}</h2>
            <p>{todo.completed ? <CheckCheckIcon /> : "TODO"}</p>
          </CardDescription>
        </Card>
      ))}
    </div>
  );
}
