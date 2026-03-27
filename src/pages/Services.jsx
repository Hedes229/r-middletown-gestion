function Services() {
  const serviceCategories = [
    {
      title: "Comptabilité & Gestion",
      description: "La base de votre sérénité financière.",
      icon: "balance",
      items: [
        { name: "Tenue comptable complète", text: "Externalisation totale de votre saisie et révision." },
        { name: "Bilans & Comptes de résultat", text: "États financiers annuels certifiés." },
        { name: "Comptabilité analytique", text: "Analyse fine de votre rentabilité par segment." }
      ]
    },
    {
      title: "Social & RH",
      description: "Sécurisez vos relations employé-employeur.",
      icon: "groups",
      items: [
        { name: "Gestion de la paie", text: "Établissement des bulletins et déclarations." },
        { name: "Contrats de travail", text: "Accompagnement juridique et rédactionnel." },
        { name: "Audit social", text: "Vérification de votre conformité conventionnelle." }
      ]
    },
    {
      title: "Fiscalité",
      description: "Optimisez votre charge fiscale en toute légalité.",
      icon: "menu_book",
      items: [
        { name: "Déclarations fiscales", text: "TVA, IS, CVAE, IR et autres taxes." },
        { name: "Conseil fiscal", text: "Optimisation des structures et crédits d'impôt." },
        { name: "Assistance au contrôle", text: "Défense de vos intérêts face à l'administration." }
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      <header className="page-header bg-surface-low">
        <div className="container">
          <h1 className="h-serif display-lg text-center">Nos <span className="italic text-primary">Expertises</span> à votre service</h1>
        </div>
      </header>

      <section className="service-details section-padding">
        <div className="container">
          <div className="services-grid-large" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {serviceCategories.map((cat, i) => (
              <div key={i} className="tonal-card" style={{ padding: '3rem' }}>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{cat.icon}</span>
                <h2 className="h-serif" style={{ fontSize: '2rem', marginBottom: '1rem' }}>{cat.title}</h2>
                <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: '2.5rem' }}>{cat.description}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ borderLeft: '3px solid var(--tertiary-container)', paddingLeft: '1.5rem' }}>
                      <h4 className="label-lg" style={{ marginBottom: '0.25rem' }}>{item.name}</h4>
                      <p className="body-md" style={{ opacity: 0.8 }}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="creation-enterprise section-padding" style={{ background: 'var(--primary-container)', color: 'var(--on-primary-container)' }}>
        <div className="container">
            <div className="creation-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <h2 className="h-serif display-sm">Accompagnement à la <span className="italic text-primary">création</span></h2>
                    <p className="body-lg" style={{ marginTop: '2rem' }}>
                        De la rédaction des statuts à l'immatriculation finale. Nous vous aidons à choisir le statut juridique optimal (SAS, SARL, EURL...) et à bâtir un business plan solide pour vos partenaires bancaires.
                    </p>
                    <div style={{ marginTop: '3rem' }}>
                        <button className="btn-pill" style={{ background: 'white', color: 'var(--primary)', padding: '1.25rem 3rem', fontSize: '1.1rem' }}>Lançons votre projet</button>
                    </div>
                </div>
                <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '32px', backdropFilter: 'blur(10px)' }}>
                     <h3 className="label-lg" style={{ opacity: 0.8, marginBottom: '2rem' }}>Check-list Création</h3>
                     <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', gap: '1rem' }}><span className="material-symbols-outlined">check_circle</span> Étude de faisabilité & BP</li>
                        <li style={{ display: 'flex', gap: '1rem' }}><span className="material-symbols-outlined">check_circle</span> Choix de la structure juridique</li>
                        <li style={{ display: 'flex', gap: '1rem' }}><span className="material-symbols-outlined">check_circle</span> Formalités d'immatriculation</li>
                        <li style={{ display: 'flex', gap: '1rem' }}><span className="material-symbols-outlined">check_circle</span> Mise en place des outils de gestion</li>
                     </ul>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
