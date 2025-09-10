"use client";

import { useEffect } from "react";

export default function ChunkErrorHandler() {
  useEffect(() => {
    const handleChunkError = (e: ErrorEvent) => {
      if (e.message.includes("Loading chunk")) {
        console.warn("Chunk load failed. Reloading page...");
        window.location.reload();
      }
    };

    window.addEventListener("error", handleChunkError);

    return () => {
      window.removeEventListener("error", handleChunkError);
    };
  }, []);

  return null;
}
