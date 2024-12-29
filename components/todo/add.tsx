"use client"
import { useTodoRedux } from "@/lib/store/index.store"
import { useState } from "react"

export default function AddTodo() {
   const { addTodo } = useTodoRedux()
   const [text, setText] = useState("")
   const onAddTodo = () => {
      if (text.length == 0) return
      addTodo(text)
   }
   return (
      <div className="p-4 w-full flex flex-col gap-4">
         <label htmlFor="todo">Todo</label>
         <input
            id="todo"
            type="text"
            className="p-2 border rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
         />
         <button
            className="px-4 py-2 rounded-lg bg-slate-700 text-slate-50"
            onClick={onAddTodo}
         >
            Add Todo
         </button>
      </div>
   )
}
