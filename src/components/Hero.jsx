import { ArrowRight, Dumbbell, Wrench, Play } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container flex flex-col items-center text-center"
        style={{ position: "relative", zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            display: "inline-block",
            padding: "0.5rem 1rem",
            borderRadius: "var(--radius-full)",
            background: "rgba(59, 130, 246, 0.1)",
            color: "var(--accent-primary)",
            fontWeight: 600,
            marginBottom: "1rem",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)"
          }}
        >
          Programa de Partners Oficial
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
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
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="section-subtitle mb-8"
          style={{ fontSize: "1.25rem", maxWidth: "700px" }}
        >
          Revende nuestros sistemas de gestión para Gimnasios y Ferreterías con
          tu propio logo, define tus propios precios y genera ingresos
          recurrentes 100% tuyos.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToForm}
          className="btn btn-primary"
          style={{ fontSize: "1.125rem", padding: "1rem 2.5rem", marginTop: "2rem" }}
        >
          Aplicar al Programa{" "}
          <ArrowRight style={{ marginLeft: "0.5rem" }} size={20} />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 50 }}
          className="hero-image-wrapper animate-float"
          style={{
            marginTop: "5rem",
            width: "100%",
            maxWidth: "1000px",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.15)",
            background: "rgba(20, 20, 22, 0.6)",
            backdropFilter: "blur(24px)",
            padding: "1rem",
            position: "relative"
          }}
        >
          {/* Glass refletion glow on top edge */}
          <div style={{
            position: "absolute", top: 0, left: "10%", right: "10%", height: "1px",
            background: "radial-gradient(ellipse at top, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)"
          }}></div>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", position: "relative", zIndex: 2 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#ef4444",
                boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)"
              }}
            ></div>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#f59e0b",
                boxShadow: "0 0 10px rgba(245, 158, 11, 0.5)"
              }}
            ></div>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 10px rgba(16, 185, 129, 0.5)"
              }}
            ></div>
          </div>
          <div
            style={{
              height: "400px",
              borderRadius: "var(--radius-md)",
              background: "rgba(10, 10, 12, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              overflow: "hidden",
            }}
          >
            {/* Left side: FitGym */}
            <motion.div 
              whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.08)" }}
              style={{
                position: "relative",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, transparent 100%)",
                transition: "background-color 0.3s ease",
                cursor: "pointer"
              }}
            >
              <div style={{ position: "absolute", top: "0%", left: "0%", transform: "translate(-50%, -50%)", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }}></div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(59, 130, 246, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                  zIndex: 2,
                  color: "#3b82f6"
                }}
              >
                <Dumbbell size={32} />
              </motion.div>
              <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "0.5rem", zIndex: 2, textAlign: "center" }}>Sis. Admin de Gimnasio</h3>
              <p style={{ color: "#93c5fd", marginBottom: "2rem", fontSize: "0.875rem", zIndex: 2, fontWeight: 500 }}>Módulo FitGym</p>
              <button className="btn btn-primary" style={{ zIndex: 2, padding: "0.75rem 2rem", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem", background: "#3b82f6", color: "white", border: "none" }}>
                <Play size={16} fill="currentColor" /> Probar Demo
              </button>
            </motion.div>

            {/* Right side: FerrePOS */}
            <motion.div 
               whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.08)" }}
               style={{
                position: "relative",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, transparent 0%, rgba(139, 92, 246, 0.03) 100%)",
                transition: "background-color 0.3s ease",
                cursor: "pointer"
              }}
            >
              <div style={{ position: "absolute", bottom: "0%", right: "0%", transform: "translate(50%, 50%)", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }}></div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(139, 92, 246, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
                  zIndex: 2,
                  color: "#8b5cf6"
                }}
              >
                <Wrench size={32} />
              </motion.div>
              <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "0.5rem", zIndex: 2, textAlign: "center" }}>Sis. Admin Ferretería</h3>
              <p style={{ color: "#c4b5fd", marginBottom: "2rem", fontSize: "0.875rem", zIndex: 2, fontWeight: 500 }}>Módulo FerrePOS</p>
              <button className="btn btn-primary" style={{ zIndex: 2, padding: "0.75rem 2rem", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem", background: "#8b5cf6", color: "white", border: "none" }}>
                <Play size={16} fill="currentColor" /> Probar Demo
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
