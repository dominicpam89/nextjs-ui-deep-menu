import { NextResponse } from "next/server"

export async function GET() {
   // mock todos, supposedly get from backend
   const todos: IntTodo[] = [
      { id: "1028973608", text: "Learn TypeScript", completed: false },
      { id: "8712693871", text: "Build a Next.js app", completed: false },
      { id: "0897162837", text: "Deploy the app", completed: false },
   ]

   return NextResponse.json(todos)
}
