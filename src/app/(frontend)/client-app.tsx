"use client"

import { useEffect, useState } from "react"
import { RouterProvider } from "react-router"
import { createAppRouter } from "./routes"

export default function ClientApp() {
  const [router, setRouter] = useState<ReturnType<typeof createAppRouter> | null>(null)

  useEffect(() => {
    setRouter(createAppRouter())
  }, [])

  if (!router) {
    return <main className="app-loading">Loading simplify.pc…</main>
  }

  return <RouterProvider router={router} />
}
