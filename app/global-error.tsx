"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0b1220", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>Something went wrong</h2>
          <p style={{ color: "#9ca3af", fontSize: 14, marginBottom: 24, maxWidth: 400, textAlign: "center" }}>
            The app could not load. Try again or check your connection.
          </p>
          <button
            onClick={() => reset()}
            style={{ padding: "8px 16px", borderRadius: 8, background: "#22d3ee", color: "#0b1220", fontWeight: 500, border: "none", cursor: "pointer" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
