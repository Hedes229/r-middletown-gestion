import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page-wrapper" style={{ background: 'var(--surface)' }}>
      <header className="page-header" style={{ paddingTop: '12rem', paddingBottom: '6rem' }}>
        <div className="container animate-fade-up">
          <span className="label-md text-secondary">Notre Histoire & Vision</span>
          <h1 className="h-serif display-lg" style={{ marginTop: '1rem' }}>L'Excellence au service du <span className="italic text-primary">Territoire</span></h1>
        </div>
      </header>

      <section className="about-details section-padding">
        <div className="container about-grid">
          <div className="about-visual animate-fade-up">
            <div className="visual-wrapper" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-premium)' }}>
              <img src="/assets/portrait.png" alt="Solange Belmont - R MIDDLETON GESTION" className="main-image" style={{ width: '100%', display: 'block' }} />
            </div>
            <div className="floating-card tonal-card" style={{ bottom: '2rem', right: '-2rem', left: 'auto', padding: '2rem' }}>
                <p className="h-serif" style={{ color: 'var(--primary)', marginBottom: '0.25rem', fontSize: '1.5rem' }}>SOLANGE BELMONT</p>
                <p className="label-md">Fondatrice & Expert-Comptable</p>
            </div>
          </div>
          <div className="about-content animate-fade-up animate-delay-1">
            <h2 className="h-serif display-sm" style={{ marginBottom: '2.5rem' }}>Une expertise de proximité en <span className="italic text-primary">Guadeloupe</span>.</h2>
            <div className="body-lg" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <p>
                Le cabinet **R MIDDLETON GESTION** est né d'une volonté claire : offrir aux entrepreneurs guadeloupéens un accompagnement de haute volée, alliant technicité métropolitaine et agilité locale.
              </p>
              <p>
                Nous transformons la complexité administrative en leviers de croissance. Notre mission est de vous libérer du poids de la gestion pour vous rendre votre ressource la plus précieuse : votre temps.
              </p>
              <p>
                Disponible du **Mardi au Samedi**, notre équipe met un point d'honneur à la réactivité. Ici, vous n'êtes pas un numéro, mais un partenaire stratégique dont nous partageons les ambitions.
              </p>
            </div>
            
            <div className="stats-grid" style={{ marginTop: '4rem', borderTop: '1px solid var(--outline-variant)', paddingTop: '3rem' }}>
              <div className="stat-item">
                <h4 className="display-sm" style={{ color: 'var(--primary)' }}>15+</h4>
                <p className="label-md">Ans d'Expertise</p>
              </div>
              <div className="stat-item">
                <h4 className="display-sm" style={{ color: 'var(--secondary)' }}>100%</h4>
                <p className="label-md">Engagement Local</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values section-padding bg-primary text-white" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-blob" style={{ background: 'var(--secondary)', opacity: 0.1, width: '500px', height: '500px', top: '-250px', left: '-100px' }} />
        <div className="container" style={{ position: 'relative', z-index: 1 }}>
          <h2 className="h-serif text-center display-sm" style={{ marginBottom: '5rem' }}>Nos Valeurs <span className="italic text-secondary">Cardinales</span></h2>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div className="tonal-card" style={{ padding: '4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 className="h-serif" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Intégrité</h3>
              <p className="body-md" style={{ opacity: 0.8 }}>Une transparence absolue dans nos échanges et nos rapports financiers.</p>
            </div>
            <div className="tonal-card" style={{ padding: '4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 className="h-serif" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Agilité</h3>
              <p className="body-md" style={{ opacity: 0.8 }}>Une capacité d'adaptation constante aux évolutions de votre marché.</p>
            </div>
            <div className="tonal-card" style={{ padding: '4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 className="h-serif" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Excellence</h3>
              <p className="body-md" style={{ opacity: 0.8 }}>Le souci du détail et la quête permanente de la performance pour votre entreprise.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

