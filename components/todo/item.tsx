import { useTodoRedux } from "@/lib/store/index.store"
import { cn } from "@/lib/utils"

interface Props {
   todo: IntTodo
}

export default function TodoItem({ todo }: Props) {
   const { toggleTodo } = useTodoRedux()
   return (
      <li
         className={cn("p-2 flex gap-2 items-center", {
            "line-through": todo.completed,
         })}
      >
         <span>{todo.text}</span>
         <button
            className="px-4 py-2 rounded-lg bg-slate-700 text-slate-50"
            onClick={toggleTodo.bind(null, todo.id)}
         >
            Check
         </button>
      </li>
   )
}
