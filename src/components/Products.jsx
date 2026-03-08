import { Dumbbell, Wrench } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 'fitgym',
      icon: <Dumbbell size={24} color="#fff" />,
      name: 'Módulo FitGym',
      color: 'var(--accent-primary)',
      description: 'Software de gestión de membresías, control de acceso y finanzas para centros deportivos.',
      features: ['Control de accesos biométrico', 'Gestión de membresías', 'Punto de venta integrado', 'App para clientes']
    },
    {
      id: 'ferrepos',
      icon: <Wrench size={24} color="#fff" />,
      name: 'Módulo FerrePOS',
      color: 'var(--accent-secondary)',
      description: 'Punto de venta web con facturación electrónica, control de inventario y métricas para ferreterías.',
      features: ['Facturación Electrónica', 'Control de Inventario Multi-almacén', 'Cuentas por cobrar', 'Reportes en tiempo real']
    }
  ];

  return (
    <section className="products-section" style={{ backgroundColor: 'var(--bg-elevated)', padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="section-title">El Catálogo: <br/><span style={{ color: 'var(--text-secondary)' }}>Tus "Productos en Caja"</span></h2>
          <p className="section-subtitle">
            Sistemas probados y listos para ser distribuidos bajo tu propia marca.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="glass-card" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              background: 'linear-gradient(180deg, rgba(30,30,35,0.8) 0%, rgba(20,20,22,0.9) 100%)',
              borderTop: `2px solid ${product.color}`
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: product.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 8px 16px ${product.color}40`
                }}>
                  {product.icon}
                </div>
                <h3 style={{ fontSize: '1.75rem', margin: 0 }}>{product.name}</h3>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', flex: 1 }}>
                {product.description}
              </p>

              <div style={{ 
                backgroundColor: 'rgba(0,0,0,0.2)', 
                borderRadius: 'var(--radius-md)', 
                padding: '1.5rem',
                border: '1px solid var(--border-light)'
              }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Incluye
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {product.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: product.color }}></div>
                      <span style={{ color: 'var(--text-primary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
