import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="hero">
        <div className="hero-blob blob-1" aria-hidden="true" />
        <div className="hero-blob blob-2" aria-hidden="true" />

        <div className="container hero-grid">
          <div className="hero-content animate-fade-up">
            <span className="hero-eyebrow label-md">Expertise & Conseil · Guadeloupe</span>
            <h1 className="h-serif display-lg">
              La rigueur du <em className="text-secondary" style={{ fontStyle: 'italic' }}>chiffre</em>,<br />
              l'audace du <em className="text-tertiary" style={{ fontStyle: 'italic' }}>conseil.</em>
            </h1>
            <p className="body-lg hero-desc">
              R MIDDLETON GESTION redéfinit l'accompagnement comptable. Nous fusionnons précision technique et vision stratégique pour propulser les entrepreneurs de Guadeloupe vers l'excellence.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="cta-gradient btn-pill btn-lg">
                Échanger sur votre projet
              </Link>
              <Link to="/services" className="btn-ghost btn-lg" style={{ border: '2px solid var(--primary)', color: 'var(--primary)' }}>
                Nos expertises →
              </Link>
            </div>

            <div className="trust-bar">
              <div className="trust-item">
                <strong>15+</strong>
                <p className="label-md">Années d'Expertise</p>
              </div>
              <div className="trust-item">
                <strong>Local</strong>
                <p className="label-md">Ancrage Guadeloupe</p>
              </div>
              <div className="trust-item">
                <strong>Privé</strong>
                <p className="label-md">Accompagnement Sur-Mesure</p>
              </div>
            </div>
          </div>

          <div className="hero-visual animate-fade-up animate-delay-1">
            <img
              src="/assets/portrait.png"
              alt="R. Middleton – Image de marque"
              className="hero-portrait"
            />
            <div className="hero-card-badge">
              <span className="material-symbols-outlined text-tertiary">workspace_premium</span>
              <div>
                <p style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)' }}>R MIDDLETON GESTION</p>
                <p className="label-md" style={{ opacity: 0.6, fontSize: '0.65rem' }}>Efficacité · Clarté · Succès</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section className="section-padding bg-surface-low overflow-hidden">
        <div className="container">
          <div className="max-w-xl animate-fade-up">
            <h2 className="display-md h-serif">Pourquoi nous <span className="text-secondary italic">choisir</span> ?</h2>
            <p className="body-lg" style={{ marginTop: '1.5rem', color: 'var(--on-surface-variant)', maxWidth: '600px' }}>
              Plus qu'un cabinet, nous sommes le bras droit de votre croissance. Notre approche repose sur trois piliers fondamentaux.
            </p>
          </div>

          <div className="preview-grid" style={{ marginTop: '5rem' }}>
            <div className="service-card tonal-card animate-fade-up animate-delay-1">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <h3 className="h-serif">Transparence Totale</h3>
              <p>Une clarté absolue sur vos finances et nos honoraires. Pas de surprises, juste des résultats.</p>
            </div>
            <div className="service-card tonal-card animate-fade-up animate-delay-2" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>bolt</span>
              <h3 className="h-serif">Réactivité Agile</h3>
              <p>Dans un monde qui change, nous répondons à vos besoins en temps réel pour ne jamais freiner votre élan.</p>
            </div>
            <div className="service-card tonal-card animate-fade-up animate-delay-3">
              <span className="material-symbols-outlined text-primary">auto_graph</span>
              <h3 className="h-serif">Vision Stratégique</h3>
              <p>Nous ne nous contentons pas de compter le passé, nous planifions votre futur financier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR METHOD ───────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center animate-fade-up" style={{ marginBottom: '6rem' }}>
            <span className="label-md text-secondary">Notre Processus</span>
            <h2 className="display-md h-serif" style={{ marginTop: '1rem' }}>L'Excellence par la <span className="italic text-primary">Méthode</span></h2>
          </div>

          <div className="grid-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
            {[
              { num: '01', title: 'Diagnostic', desc: 'Analyse profonde de votre situation actuelle.' },
              { num: '02', title: 'Stratégie', desc: 'Définition d\'un plan d\'action sur-mesure.' },
              { num: '03', title: 'Exécution', desc: 'Mise en place des outils et processus.' },
              { num: '04', title: 'Pilotage', desc: 'Suivi continu et optimisation de la performance.' },
            ].map((step, i) => (
              <div key={i} className="step-item animate-fade-up" style={{ animationDelay: `${0.2 * i}s` }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, opacity: 0.1, fontFamily: 'var(--font-headline)' }}>{step.num}</span>
                <h4 className="h-serif" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h4>
                <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="section-padding bg-surface-container-low">
        <div className="container">
          <div className="text-center animate-fade-up" style={{ marginBottom: '5rem' }}>
            <span className="label-md text-secondary">Témoignages</span>
            <h2 className="display-md h-serif" style={{ marginTop: '1rem' }}>La voix de nos <span className="italic text-primary">Clients</span></h2>
          </div>

          <div className="preview-grid">
            <div className="tonal-card animate-fade-up animate-delay-1" style={{ padding: '3rem' }}>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>format_quote</span>
              <p className="body-lg" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
                "R MIDDLETON GESTION a transformé notre approche comptable. Leur vision stratégique nous a permis de sécuriser un financement crucial pour notre expansion."
              </p>
              <div>
                <p style={{ fontWeight: 800 }}>Jean-Marc R.</p>
                <p className="label-md" style={{ opacity: 0.6 }}>Directeur, Solaire Antilles</p>
              </div>
            </div>
            <div className="tonal-card animate-fade-up animate-delay-2" style={{ padding: '3rem' }}>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>format_quote</span>
              <p className="body-lg" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
                "Un accompagnement d'une précision rare. Solange et son équipe sont de véritables partenaires de croissance, réactifs et toujours de bon conseil."
              </p>
              <div>
                <p style={{ fontWeight: 800 }}>Marie L.</p>
                <p className="label-md" style={{ opacity: 0.6 }}>Fondatrice, L'Atelier Créatif</p>
              </div>
            </div>
            <div className="tonal-card animate-fade-up animate-delay-3" style={{ padding: '3rem' }}>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>format_quote</span>
              <p className="body-lg" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
                "La clarté apportée sur nos finances nous a libérés l'esprit pour nous concentrer sur notre cœur de métier. Indispensable pour tout entrepreneur."
              </p>
              <div>
                <p style={{ fontWeight: 800 }}>David P.</p>
                <p className="label-md" style={{ opacity: 0.6 }}>Gérant, BTP Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────── */}
      <section className="cta-banner section-padding" style={{
        background: 'var(--primary)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="hero-blob" style={{ background: 'var(--secondary)', opacity: 0.1, width: '800px', height: '800px', top: '-400px', left: '-200px' }} />
        <div className="container" style={{ position: 'relative', z-index: 1 }}>
          <h2 className="h-serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2rem' }}>
            Prêt à transformer votre <span className="text-secondary italic">gestion</span> ?
          </h2>
          <p className="body-lg" style={{ opacity: 0.7, maxWidth: '650px', margin: '0 auto 3rem' }}>
            Rejoignez les entrepreneurs qui ont choisi la clarté et la croissance. Premier diagnostic offert.
          </p>
          <Link
            to="/contact"
            className="btn-pill btn-lg"
            style={{ background: 'var(--secondary)', color: 'var(--primary)', padding: '1.5rem 4rem', display: 'inline-block' }}
          >
            Commencer l'aventure
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
