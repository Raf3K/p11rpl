"use client"

import dynamic from "next/dynamic"

const ClientApp = dynamic(() => import("./client-app"), {
  loading: () => <main className="app-loading">Loading simplify.pc…</main>,
  ssr: false,
})

export default function AppLoader() {
  return <ClientApp />
}
