import { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Calculator() {
  const [clients, setClients] = useState(10);
  const [price, setPrice] = useState(150);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(value);
  };

  const revenue = clients * price;

  return (
    <section className="calculator-section" style={{ padding: '3rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          style={{
            background: 'linear-gradient(145deg, var(--bg-surface) 0%, rgba(20,20,22,1) 100%)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-strong)',
            padding: '4rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Subtle background glow inside the card */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'var(--accent-gradient)'
          }}></div>
          
          <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <CalcIcon size={28} color="var(--accent-primary)" />
                <h2 style={{ fontSize: '2rem', margin: 0 }}>Calculadora de Rentabilidad</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2rem' }}>
                Descubre tu potencial de ingresos como Partner. Ajusta los valores para proyectar tus ganancias mensuales recurrentes.
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 600 }}>
                  <span>¿A cuántos clientes proyectas venderles?</span>
                  <span style={{ color: 'var(--accent-primary)' }}>{clients} clientes</span>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  value={clients}
                  onChange={(e) => setClients(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: 'var(--accent-primary)',
                    cursor: 'pointer',
                    height: '8px',
                    borderRadius: '4px',
                    background: 'var(--bg-elevated)',
                    outline: 'none'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 600 }}>
                  ¿Cuánto les vas a cobrar al mes? (S/)
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>S/</span>
                  <input 
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    style={{
                      width: '100%',
                      padding: '1rem 1rem 1rem 2.5rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-base)',
                      border: '1px solid var(--border-strong)',
                      color: 'var(--text-primary)',
                      fontSize: '1.125rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-strong)'}
                  />
                </div>
              </div>
            </div>

            <div style={{
              background: 'var(--bg-base)',
              borderRadius: 'var(--radius-md)',
              padding: '3rem 2rem',
              border: '1px solid var(--border-light)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%'
            }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                Tu ingreso recurrente mensual será de:
              </p>
              <div style={{ 
                fontSize: 'clamp(3rem, 4vw, 4rem)', 
                fontWeight: 800, 
                color: 'var(--accent-primary)',
                lineHeight: 1,
                marginBottom: '1rem',
                textShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
              }}>
                {formatCurrency(revenue)}
              </div>
              <p style={{ color: '#10b981', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                100% Ganancia Neta para ti
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
