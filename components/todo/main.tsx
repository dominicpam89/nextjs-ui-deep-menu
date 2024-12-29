"use client"

import { useTodoRedux } from "@/lib/store/index.store"
import TodoItem from "./item"

export default function TodoComponent() {
   const { todos } = useTodoRedux()
   return (
      <ul className="w-full flex flex-col gap-4">
         {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
         ))}
      </ul>
   )
}
