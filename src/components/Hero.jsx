import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToForm = () => {
    document
      .getElementById("application-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "0.5rem 2rem 4rem",
      }}
    >
      <div
        className="bg-glow"
        style={{ top: "-10%", left: "50%", transform: "translateX(-50%)" }}
      ></div>
      <div
        className="container flex flex-col items-center text-center"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "0.5rem 1rem",
            borderRadius: "var(--radius-full)",
            background: "rgba(59, 130, 246, 0.1)",
            color: "var(--accent-primary)",
            fontWeight: 600,
            marginBottom: "1rem",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          }}
        >
          Programa de Partners Oficial
        </div>

        <h1
          className="mb-2"
          style={{
            fontSize: "clamp(3rem, 5vw, 4.5rem)",
            maxWidth: "900px",
            background: "linear-gradient(to right, #fff, #a1a1aa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Crea tu propia agencia de software sin saber programar.
        </h1>

        <p
          className="section-subtitle mb-8"
          style={{ fontSize: "1.25rem", maxWidth: "700px" }}
        >
          Revende nuestros sistemas de gestión para Gimnasios y Ferreterías con
          tu propio logo, define tus propios precios y genera ingresos
          recurrentes 100% tuyos.
        </p>

        <button
          onClick={scrollToForm}
          className="btn btn-primary"
          style={{ fontSize: "1.125rem", padding: "1rem 2.5rem", marginTop: "2rem" }}
        >
          Aplicar al Programa{" "}
          <ArrowRight style={{ marginLeft: "0.5rem" }} size={20} />
        </button>

        <div
          className="hero-image-wrapper"
          style={{
            marginTop: "5rem",
            width: "100%",
            maxWidth: "1000px",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            border: "1px solid var(--border-light)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            background: "var(--bg-elevated)",
            padding: "1rem",
          }}
        >
          {/* We'll use a placeholder div that mimics a UI window for now */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#ef4444",
              }}
            ></div>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#f59e0b",
              }}
            ></div>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#10b981",
              }}
            ></div>
          </div>
          <div
            style={{
              height: "400px",
              borderRadius: "var(--radius-md)",
              background:
                "linear-gradient(145deg, var(--bg-surface) 0%, var(--bg-base) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
            }}
          >
            [Muestra interactiva de la interfaz de marca blanca]
          </div>
        </div>
      </div>
    </section>
  );
}
