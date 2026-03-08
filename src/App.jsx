import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Products from './components/Products'
import HowItWorks from './components/HowItWorks'
import Calculator from './components/Calculator'
import FAQ from './components/FAQ'
import ApplicationForm from './components/ApplicationForm'

function App() {
  return (
    <div className="app-wrapper">
      <header style={{
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--border-light)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(10, 10, 12, 0.8)'
      }}>
        <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>
          <span className="text-gradient">iur</span>Agency
        </div>
        <button 
          className="btn btn-secondary" 
          style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}
          onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Aplicar Ahora
        </button>
      </header>

      <main>
        <Hero />
        <Benefits />
        <Products />
        <HowItWorks />
        <Calculator />
        <FAQ />
        <ApplicationForm />
      </main>

      <footer style={{
        padding: '1rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--border-light)',
        color: 'var(--text-muted)'
      }}>
        <div className="container">
          <div style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '1rem' }}>
            <span className="text-gradient">Nex</span>Agency
          </div>
          <p style={{ marginBottom: '2rem' }}>
            Empodera tu negocio con la mejor tecnología de marca blanca.
          </p>
          <div style={{ fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} NexAgency Partners. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
