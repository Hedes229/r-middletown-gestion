import { useEffect } from 'react';

function Contact() {
  // We can load the Calendly script here or in index.html. 
  // For simplicity since it's already in the request, we'll assume it's in index.html

  return (
    <div className="page-wrapper">
      <header className="page-header bg-surface-low">
        <div className="container">
          <h1 className="h-serif display-lg text-center">Parlons de votre <span className="italic text-primary">réussite</span></h1>
        </div>
      </header>

      <section className="contact-main section-padding">
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
            
            <div className="calendly-booking">
              <h2 className="h-serif" style={{ marginBottom: '2rem' }}>Prendre <span className="italic text-tertiary">rendez-vous</span> en ligne</h2>
              <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--outline-variant)', minHeight: '600px' }}>
                {/* Standard Calendly Embed - Placeholder for user's URL */}
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/YOUR_LINK_HERE" 
                  style={{ minWidth: '320px', height: '630px' }}
                ></div>
              </div>
              <p className="body-sm" style={{ marginTop: '1rem', opacity: 0.6 }}>
                Prise de rendez-vous sécurisée via Calendly. Confirmez votre créneau en quelques clics.
              </p>
            </div>

            <div className="contact-info">
              <h2 className="h-serif" style={{ marginBottom: '2rem' }}>Nous <span className="italic text-primary">contacter</span></h2>
              <div className="tonal-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                 <div className="contact-item" style={{ display: 'flex', gap: '1.5rem' }}>
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '2.5rem' }}>location_on</span>
                    <div>
                        <h4 className="label-lg">Adresse du Cabinet</h4>
                        <p className="body-lg">15 Cours Louis Chauvel, 97139 Les Abymes, Guadeloupe</p>
                    </div>
                 </div>
                 <div className="contact-item" style={{ display: 'flex', gap: '1.5rem' }}>
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '2.5rem' }}>mail</span>
                    <div>
                        <h4 className="label-lg">Email Direct</h4>
                        <p className="body-lg">middleton.gestion@gmail.com</p>
                    </div>
                 </div>
                 <div className="contact-item" style={{ display: 'flex', gap: '1.5rem' }}>
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '2.5rem' }}>call</span>
                    <div>
                        <h4 className="label-lg">Téléphone</h4>
                        <p className="body-lg">+590 (0)X XX XX XX XX</p>
                    </div>
                 </div>
                 <div className="contact-item" style={{ display: 'flex', gap: '1.5rem' }}>
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '2.5rem' }}>schedule</span>
                    <div>
                        <h4 className="label-lg">Heures d'ouverture</h4>
                        <p className="body-lg">Lundi - Vendredi : 08:30 - 17:00</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
