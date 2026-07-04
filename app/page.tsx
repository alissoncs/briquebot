"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to reach the API"));
  }, []);

  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>briquebot</h1>
      <p style={{ opacity: 0.7, marginBottom: "1.5rem" }}>
        Message fetched from <code>/api/hello</code>:
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "#7cc4ff",
        }}
      >
        {message}
      </p>
    </main>
  );
}
