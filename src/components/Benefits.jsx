import { Server, Paintbrush, TrendingUp } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Server size={32} color="var(--accent-primary)" />,
      title: 'Cero Desarrollo',
      description: 'Nosotros nos encargamos del código, los servidores, el mantenimiento y las nuevas actualizaciones.'
    },
    {
      icon: <Paintbrush size={32} color="var(--accent-secondary)" />,
      title: 'Tu Marca, Tus Clientes',
      description: 'El sistema lleva tu logo y colores. El cliente final nunca sabrá que nosotros existimos.'
    },
    {
      icon: <TrendingUp size={32} color="#10b981" />,
      title: 'Ganancia Recurrente',
      description: 'Tú decides cuánto cobrar mensual o anualmente. La diferencia entre nuestro costo base y tu precio de venta es tu ganancia neta.'
    }
  ];

  return (
    <section className="benefits-section" style={{ position: 'relative', padding: '6rem 0' }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">¿Por qué el <span className="text-gradient">Modelo Marca Blanca?</span></h2>
          <p className="section-subtitle">
            Concéntrate en vender y escalar sin preocuparte por la tecnología.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {benefits.map((b, index) => (
            <div key={index} className="glass-card">
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: 'var(--radius-md)', 
                background: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '1px solid var(--border-light)'
              }}>
                {b.icon}
              </div>
              <h3 className="mb-2" style={{ fontSize: '1.5rem' }}>{b.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
