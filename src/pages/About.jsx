function About() {
  return (
    <div className="page-wrapper">
      <header className="page-header bg-surface-low">
        <div className="container">
          <h1 className="h-serif display-lg text-center">L'humain au cœur des <span className="italic text-tertiary">chiffres</span></h1>
        </div>
      </header>

      <section className="about-details section-padding">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="visual-wrapper" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="/assets/portrait.png" alt="R. Middleton - Expert-Comptable" className="main-image" style={{ width: '100%', display: 'block' }} />
            </div>
            <div className="floating-card tonal-card" style={{ bottom: '2rem', right: '-2rem', left: 'auto', padding: '1.5rem' }}>
                <p className="logo-text" style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>SOLANGE BELMONT</p>
                <p className="label-md">Fondatrice & Expert-Comptable</p>
            </div>
          </div>
          <div className="about-content">
            <h2 className="h-serif" style={{ marginBottom: '2rem' }}>Une expertise de proximité en <span className="italic text-primary">Guadeloupe</span>.</h2>
            <div className="body-lg" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                Le cabinet R. MIDDLETON GESTION est né d'une conviction profonde : les entrepreneurs de Guadeloupe méritent un accompagnement d'excellence qui comprend les spécificités de notre économie insulaire.
              </p>
              <p>
                Ma mission est de libérer les chefs d'entreprise des contraintes administratives et comptables pour leur permettre de se concentrer sur ce qu'ils font de mieux : créer de la valeur.
              </p>
              <p>
                Nous privilégions une relation de confiance et de long terme. Pour nous, chaque client est un partenaire unique avec des défis singuliers. Nous y répondons avec précision, clarté et réactivité.
              </p>
            </div>
            
            <div className="stats-grid" style={{ marginTop: '3rem' }}>
              <div className="stat-item">
                <h4 className="display-sm">15+</h4>
                <p className="label-lg">Années d'expertise</p>
              </div>
              <div className="stat-item">
                <h4 className="display-sm text-tertiary">Guadeloupe</h4>
                <p className="label-lg">Ancrage territorial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values section-padding bg-surface-low">
        <div className="container">
          <h2 className="h-serif text-center" style={{ marginBottom: '4rem' }}>Nos <span className="italic text-primary">Valeurs</span> Fondamentales</h2>
          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="value-card tonal-card" style={{ padding: '3rem' }}>
              <h3 className="h-serif">Transparence</h3>
              <p className="body-md">Aucun frais caché, une communication claire sur l'état de vos finances.</p>
            </div>
            <div className="value-card tonal-card" style={{ padding: '3rem' }}>
              <h3 className="h-serif">Agilité</h3>
              <p className="body-md">Nous nous adaptons à l'évolution de votre entreprise et aux changements législatifs.</p>
            </div>
            <div className="value-card tonal-card" style={{ padding: '3rem' }}>
              <h3 className="h-serif">Proximité</h3>
              <p className="body-md">Un interlocuteur unique et dédié, disponible au coeur des Abymes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
