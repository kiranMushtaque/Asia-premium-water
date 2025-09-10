import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        color: "#333",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "4rem", margin: 0 }}>404</h1>
      <h2 style={{ fontSize: "2rem", margin: "1rem 0" }}>Page Not Found</h2>
      <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}
