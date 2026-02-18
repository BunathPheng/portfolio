"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("App error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b1220] text-white p-6">
      <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
      <p className="text-gray-400 text-sm mb-6 max-w-md text-center">
        The page could not load. This may be a temporary issue.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded-lg bg-[#22d3ee] text-[#0b1220] font-medium hover:opacity-90"
      >
        Try again
      </button>
    </div>
  )
}
