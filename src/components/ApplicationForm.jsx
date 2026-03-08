import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    occupation: '',
    experience: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyles = {
    width: '100%',
    padding: '1rem',
    borderRadius: 'var(--radius-md)',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid var(--border-light)',
    color: 'var(--text-primary)',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s, background-color 0.3s'
  };

  return (
    <section id="application-form" className="form-section" style={{ padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           style={{
            background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            border: '1px solid var(--border-strong)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}
        >
          {submitted ? (
            <div className="text-center" style={{ animation: 'fadeIn 0.5s ease' }}>
              <div style={{ 
                width: '80px', height: '80px', borderRadius: '50%', 
                background: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 2rem'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>¡Aplicación Recibida!</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Hemos registrado tu solicitud. Nuestro equipo revisará tu perfil y te contactaremos por WhatsApp en breve para los siguientes pasos.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Aplica al Programa</h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Las plazas para nuevos partners son limitadas. Llena este formulario para que podamos evaluar tu perfil.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nombre Completo</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Ej. Juan Pérez" 
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyles} 
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border-light)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>WhatsApp (con código de país)</label>
                  <input 
                    type="tel" 
                    name="whatsapp" 
                    required 
                    placeholder="Ej. +51 987 654 321" 
                    value={formData.whatsapp}
                    onChange={handleChange}
                    style={inputStyles}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.background = 'rgba(255,255,255,0.08)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border-light)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>¿A qué te dedicas actualmente?</label>
                  <select 
                    name="occupation" 
                    required
                    value={formData.occupation}
                    onChange={handleChange}
                    style={{...inputStyles, appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em'}}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent-primary)'; e.target.style.background = 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%233b82f6\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 1rem center / 1em, rgba(255,255,255,0.08)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border-light)'; e.target.style.background = 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e") no-repeat right 1rem center / 1em, rgba(255,255,255,0.05)'; }}
                  >
                    <option value="" disabled style={{ color: '#000' }}>Selecciona una opción</option>
                    <option value="Agencia de Marketing" style={{ color: '#000' }}>Agencia de Marketing</option>
                    <option value="Vendedor Independiente" style={{ color: '#000' }}>Vendedor Independiente</option>
                    <option value="Consultor de Negocios" style={{ color: '#000' }}>Consultor de Negocios</option>
                    <option value="Empresa de TI / Redes" style={{ color: '#000' }}>Empresa de TI / Redes</option>
                    <option value="Otro" style={{ color: '#000' }}>Otro</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>¿Tienes experiencia en ventas B2B?</label>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input 
                        type="radio" 
                        name="experience" 
                        value="yes" 
                        required 
                        checked={formData.experience === 'yes'}
                        onChange={handleChange}
                        style={{ width: '1.2rem', height: '1.2rem', accentColor: 'var(--accent-primary)' }} 
                      />
                      Sí
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input 
                        type="radio" 
                        name="experience" 
                        value="no" 
                        required 
                        checked={formData.experience === 'no'}
                        onChange={handleChange}
                        style={{ width: '1.2rem', height: '1.2rem', accentColor: 'var(--accent-primary)' }} 
                      />
                      No
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '1.25rem', marginTop: '1rem', fontSize: '1.125rem' }}
                >
                  Enviar Aplicación
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
