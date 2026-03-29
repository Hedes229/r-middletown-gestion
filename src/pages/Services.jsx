function Services() {
  const serviceCategories = [
    {
      title: "Gestion Compta & Conseil",
      description: "Plus qu'une simple tenue de comptes, un pilotage stratégique.",
      icon: "account_balance",
      items: [
        { name: "Tenue & Révision", text: "Expertise technique pour une fiabilité absolue de vos bilans." },
        { name: "Conseil Fiscal", text: "Optimisation de votre structure et accompagnement aux crédits d'impôts." },
        { name: "Pilotage Dashboard", text: "Indicateurs clés en temps réel pour vos décisions." }
      ]
    },
    {
      title: "Création & Développement",
      description: "Donnez vie à vos projets avec des fondations solides.",
      icon: "rocket_launch",
      items: [
        { name: "Création d'Entreprise", text: "Statuts, business plan et immatriculation (SAS, SARL, SCI, etc.)." },
        { name: "Dossiers de Subvention", text: "Montage de dossiers complexes (Région, Europe, Aides locales)." },
        { name: "Ingénierie Financière", text: "Accompagnement à la levée de fonds et dossiers bancaires." }
      ]
    },
    {
      title: "Social & RH",
      description: "Sécurisez votre capital humain en toute conformité.",
      icon: "diversity_3",
      items: [
        { name: "Gestion de la Paie", text: "Établissement des bulletins et déclarations sociales." },
        { name: "Contrats & Droit", text: "Accompagnement juridique et rédaction de contrats." },
        { name: "Audit Social", text: "Vérification de la conformité de vos obligations sociales." }
      ]
    }
  ];

  return (
    <div className="page-wrapper" style={{ background: 'var(--surface)' }}>
      <header className="page-header" style={{ paddingTop: '12rem', paddingBottom: '6rem' }}>
        <div className="container animate-fade-up">
          <span className="label-md text-secondary">Notre Expertise</span>
          <h1 className="h-serif display-lg" style={{ marginTop: '1rem' }}>Solutions pour <span className="italic text-primary">Entrepreneurs</span></h1>
        </div>
      </header>

      <section className="service-details section-padding">
        <div className="container">
          <div className="services-grid-large" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '4rem' }}>
            {serviceCategories.map((cat, i) => (
              <div key={i} className="tonal-card animate-fade-up" style={{ padding: '4rem', animationDelay: `${i * 0.2}s` }}>
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>{cat.icon}</span>
                <h2 className="h-serif" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{cat.title}</h2>
                <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: '3rem' }}>{cat.description}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ borderLeft: '2px solid var(--secondary)', paddingLeft: '2rem' }}>
                      <h4 className="label-md" style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>{item.name}</h4>
                      <p className="body-md" style={{ opacity: 0.8 }}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-blob" style={{ background: 'var(--secondary)', opacity: 0.05, width: '600px', height: '600px', bottom: '-300px', right: '-100px' }} />
        <div className="container" style={{ position: 'relative', z-index: 1 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="h-serif display-md">Votre succès est notre <span className="text-secondary italic">priorité</span>.</h2>
            <p className="body-lg" style={{ marginTop: '2rem', opacity: 0.8 }}>
              Chez R MIDDLETON GESTION, nous croyons qu'une comptabilité claire est le socle de toute grande ambition. Nous mettons tout en œuvre pour que vous puissiez vous concentrer sur votre métier.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
