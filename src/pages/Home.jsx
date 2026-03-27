import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="hero">
        {/* Decorative background blobs */}
        <div className="hero-blob blob-1" aria-hidden="true" />
        <div className="hero-blob blob-2" aria-hidden="true" />

        <div className="container hero-grid">
          {/* Left: Copy */}
          <div className="hero-content">
            <span className="hero-eyebrow label-md">Expertise Comptable · Guadeloupe</span>
            <h1 className="h-serif display-lg">
              L'art de la <em className="text-primary">gestion</em>{' '}
              au service de votre <em className="text-tertiary">vision.</em>
            </h1>
            <p className="body-lg hero-desc">
              Plus qu'un cabinet, un partenaire de confiance. Nous transformons
              vos obligations comptables en leviers de croissance, avec la
              rigueur d'un grand cabinet et la proximité d'une équipe locale.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="cta-gradient btn-pill btn-lg">
                Prendre rendez-vous
              </Link>
              <Link to="/services" className="btn-ghost btn-lg">
                Nos expertises →
              </Link>
            </div>

            {/* Trust bar */}
            <div className="trust-bar">
              <div className="trust-item">
                <strong>15+</strong>
                <span>années d'expertise</span>
              </div>
              <div className="trust-divider" aria-hidden="true" />
              <div className="trust-item">
                <strong>100%</strong>
                <span>ancrage Guadeloupe</span>
              </div>
              <div className="trust-divider" aria-hidden="true" />
              <div className="trust-item">
                <strong>Sur-mesure</strong>
                <span>approche individuelle</span>
              </div>
            </div>
          </div>

          {/* Right: Visual cards */}
          <div className="hero-visual">
            <div className="hero-card hero-card-main tonal-card">
              <img
                src="/assets/portrait.png"
                alt="R. Middleton – Expert-Comptable"
                className="hero-portrait"
              />
              <div className="hero-card-badge tonal-card">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '1.5rem' }}>verified</span>
                <div>
                  <p style={{ fontWeight: 800, fontSize: '0.85rem' }}>Solange Belmont</p>
                  <p className="label-md" style={{ opacity: 0.6 }}>Expert-Comptable</p>
                </div>
              </div>
            </div>

            <div className="hero-card hero-card-stat tonal-card">
              <span className="material-symbols-outlined text-tertiary" style={{ fontSize: '2rem' }}>query_stats</span>
              <p style={{ fontWeight: 700 }}>Pilotage de Performance</p>
              <p className="body-sm" style={{ opacity: 0.65 }}>Éclairez vos décisions stratégiques</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── SERVICES PREVIEW ──────────────────────────────────── */}
      <section className="section-padding bg-surface-low">
        <div className="container">
          <div className="section-header">
            <h2 className="h-serif display-md">
              Expertises <em className="text-primary">ciblées</em>
            </h2>
            <p className="body-lg" style={{ maxWidth: 580, marginTop: '1rem', color: 'var(--on-surface-variant)' }}>
              Une gamme complète de solutions pour sécuriser et optimiser chaque
              étape de la vie de votre entreprise.
            </p>
          </div>

          <div className="preview-grid" style={{ marginTop: '3.5rem' }}>
            <div className="service-card tonal-card">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '2.5rem' }}>account_balance_wallet</span>
              <h3>Tenue &amp; Révision</h3>
              <p>Fiabilité absolue de vos états financiers, externalisation complète de la saisie.</p>
              <Link to="/services" className="learn-more">En savoir plus <span className="material-symbols-outlined">arrow_forward</span></Link>
            </div>

            <div className="service-card tonal-card primary">
              <span className="material-symbols-outlined" style={{ fontSize: '2.5rem' }}>rocket_launch</span>
              <h3 className="h-serif" style={{ fontSize: '1.75rem' }}>Création d'Entreprise</h3>
              <p>De l'idée à la structure juridique idéale. Nous posons les fondations de votre succès.</p>
              <Link to="/services" className="btn-pill" style={{ background: 'white', color: 'var(--primary)', marginTop: '0.5rem', display: 'inline-block', width: 'fit-content' }}>
                Lancer mon projet
              </Link>
            </div>

            <div className="service-card tonal-card">
              <span className="material-symbols-outlined text-tertiary" style={{ fontSize: '2.5rem' }}>query_stats</span>
              <h3>Conseil Stratégique</h3>
              <p>Analyses prévisionnelles et accompagnement à la levée de fonds régionaux.</p>
              <Link to="/services" className="learn-more">En savoir plus <span className="material-symbols-outlined">arrow_forward</span></Link>
            </div>
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link to="/services" className="btn-secondary">Voir tous nos services</Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="visual-wrapper">
              <img
                src="/assets/portrait.png"
                alt="Cabinet Middleton Gestion"
                className="main-image"
              />
            </div>
            <div className="floating-card tonal-card">
              <p className="logo-text" style={{ color: 'var(--primary)' }}>R. MIDDLETON GESTION</p>
              <p className="label-md" style={{ opacity: 0.55 }}>Expertise &amp; Conseil</p>
            </div>
          </div>

          <div className="about-content">
            <h2 className="about-title h-serif">
              Un cabinet à <em className="text-tertiary">taille humaine</em>,<br />dédié à votre succès.
            </h2>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
              Installé au cœur de la Guadeloupe, notre cabinet est né d'une
              conviction : les entrepreneurs locaux méritent une expertise de
              haut niveau qui comprend les spécificités économiques de notre île.
            </p>
            <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
              Nous privilégions la transparence, la proximité et la réactivité.
              Vous n'êtes pas un numéro de dossier – vous êtes un partenaire.
            </p>
            <Link to="/about" className="btn-secondary" style={{ width: 'fit-content', marginTop: '1rem' }}>
              Découvrir notre histoire
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────── */}
      <section className="cta-banner section-padding" style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--tertiary) 100%)',
        color: 'white',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 className="h-serif" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
            Prêt à donner une nouvelle dimension à votre gestion ?
          </h2>
          <p className="body-lg" style={{ opacity: 0.85, maxWidth: 600, margin: '0 auto 2.5rem' }}>
            Réservez un premier rendez-vous gratuit et découvrez comment nous
            pouvons transformer vos contraintes en opportunités.
          </p>
          <Link
            to="/contact"
            className="btn-pill btn-lg"
            style={{ background: 'white', color: 'var(--primary)' }}
          >
            Prendre rendez-vous gratuitement
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
