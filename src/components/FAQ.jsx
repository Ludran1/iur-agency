import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: '¿Quién da el soporte técnico al cliente final?',
      answer: 'Tú das el soporte de primer nivel (dudas de uso, configuración básica). Nosotros te damos soporte técnico avanzado a ti y a tu equipo ante cualquier incidencia técnica.'
    },
    {
      question: '¿Puedo poner el precio que yo quiera?',
      answer: 'Sí, tú tienes el control total de tu estructura de precios. Nosotros te damos un costo fijo por licencia y tú decides tu margen de ganancia.'
    },
    {
      question: '¿Qué pasa si el sistema se cae?',
      answer: 'Nuestro equipo de ingenieros monitorea los servidores 24/7. Garantizamos un uptime del 99.9% en la infraestructura de AWS para que nunca quedes mal con tus clientes.'
    },
    {
      question: '¿Cuánto tardan en configurar mi marca blanca?',
      answer: 'Una vez adquirido el paquete inicial y enviado tu logo/branding, tu plataforma estará lista en un máximo de 48 a 72 horas hábiles.'
    }
  ];

  return (
    <section className="faq-section" style={{ backgroundColor: 'var(--bg-elevated)', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle">Resolvemos todas tus dudas sobre el programa.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                style={{
                  background: 'var(--bg-surface)',
                  border: `1px solid ${isOpen ? 'var(--accent-primary)' : 'var(--border-light)'}`,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  {faq.question}
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? 'var(--accent-primary)' : 'var(--text-secondary)'
                    }} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '0 1.5rem 1.5rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6
                      }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
