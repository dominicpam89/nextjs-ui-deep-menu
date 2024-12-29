import { useTodoRedux } from "@/lib/store/index.store"
import { cn } from "@/lib/utils"

interface Props {
   todo: IntTodo
}

export default function TodoItem({ todo }: Props) {
   const { toggleTodo, removeTodo } = useTodoRedux()
   return (
      <li className="p-2 flex gap-2 items-center">
         <span className={cn("w-5/12", { "line-through": todo.completed })}>
            {todo.text}
         </span>
         <div aria-label="action" className="flex items-center gap-1">
            <button
               className="px-4 py-2 rounded-lg bg-slate-700 text-slate-50"
               onClick={() => toggleTodo(todo.id)}
            >
               Check
            </button>
            <button
               className="px-4 py-2 rounded-lg border-slate-700 text-slate-700"
               onClick={() => removeTodo(todo.id)}
            >
               Delete
            </button>
         </div>
      </li>
   )
}
