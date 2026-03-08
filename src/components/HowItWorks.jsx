import { ShoppingCart, Settings, Rocket } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <ShoppingCart size={28} color="var(--accent-primary)" />,
      title: 'Adquiere tus licencias',
      description: 'Compras un paquete mayorista (ej. 5 licencias iniciales) a un precio preferencial.'
    },
    {
      number: '02',
      icon: <Settings size={28} color="var(--accent-secondary)" />,
      title: 'Personalizamos tu sistema',
      description: 'Subes tu logo y configuramos tu subdominio (ej. app.tuagencia.com).'
    },
    {
      number: '03',
      icon: <Rocket size={28} color="#10b981" />,
      title: 'Vende y escala',
      description: 'Empiezas a comercializar el software en tu ciudad y te quedas con el margen de ganancia.'
    }
  ];

  return (
    <section className="how-it-works-section" style={{ padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">¿Cómo funciona?</h2>
          <p className="section-subtitle">
            Un proceso de 3 pasos extremadamente simple para que empieces hoy mismo.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
          className="grid grid-cols-3 gap-8"
          style={{ position: 'relative' }}
        >
          {/* Connecting line for desktop */}
          <div style={{
            position: 'absolute',
            top: '48px',
            left: '15%',
            right: '15%',
            height: '2px',
            background: 'linear-gradient(90deg, var(--border-light) 0%, var(--border-strong) 50%, var(--border-light) 100%)',
            zIndex: 0,
            display: 'none', // Hidden on mobile, could be shown with media queries
          }} className="hidden md:block"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 60 } }
              }}
              style={{ 
                position: 'relative', 
                zIndex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center' 
              }}
            >
              <div style={{
                width: '96px',
                height: '96px',
                borderRadius: '50%',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-strong)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}>
                {step.icon}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  background: 'var(--accent-gradient)',
                  color: 'white',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.875rem',
                  border: '3px solid var(--bg-base)'
                }}>
                  {step.number}
                </div>
              </div>
              <h3 className="mb-2" style={{ fontSize: '1.5rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '280px' }}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
