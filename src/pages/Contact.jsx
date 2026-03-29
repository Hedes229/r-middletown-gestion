import { useState } from 'react';

function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "Quels sont les documents à fournir pour une création ?", a: "Généralement, une pièce d'identité, un justificatif de domicile et le projet de statuts. Nous vous guidons pas à pas." },
    { q: "Quels types de subventions pouvez-vous m'aider à obtenir ?", a: "Nous intervenons sur les aides régionales (Guadeloupe), les fonds européens (FEDER) et les dispositifs d'aide à l'innovation." },
    { q: "Proposez-vous un premier rendez-vous gratuit ?", a: "Oui, nous offrons un premier diagnostic de 30 minutes pour comprendre vos besoins et définir une stratégie." }
  ];

  const whatsappNumber = "590690426961";

  return (
    <div className="page-wrapper" style={{ background: 'var(--surface)' }}>
      <header className="page-header" style={{ paddingTop: '12rem', paddingBottom: '6rem' }}>
        <div className="container animate-fade-up">
          <span className="label-md text-secondary">Contact & Localisation</span>
          <h1 className="h-serif display-lg" style={{ marginTop: '1rem' }}>Bâtissons votre <span className="italic text-primary">Croissance</span></h1>
        </div>
      </header>

      <section className="contact-main section-padding">
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem' }}>
            
            <div className="contact-info animate-fade-up">
              <h2 className="h-serif" style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>Informations <span className="italic text-secondary">Directes</span></h2>
              <div className="tonal-card" style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                 <div className="contact-item" style={{ display: 'flex', gap: '2rem' }}>
                    <span className="material-symbols-outlined text-secondary" style={{ fontSize: '2.5rem' }}>location_on</span>
                    <div>
                        <h4 className="label-md">Cabinet</h4>
                        <p className="body-lg" style={{ fontWeight: 600 }}>15 Cours Louis Chauvel, 97139 Les Abymes</p>
                    </div>
                 </div>
                 <div className="contact-item" style={{ display: 'flex', gap: '2rem' }}>
                    <span className="material-symbols-outlined text-secondary" style={{ fontSize: '2.5rem' }}>call</span>
                    <div>
                        <h4 className="label-md">Ligne Directe</h4>
                        <p className="body-lg" style={{ fontWeight: 600 }}>+590 690 42-6961</p>
                    </div>
                 </div>
                 <div className="contact-item" style={{ display: 'flex', gap: '2rem' }}>
                    <span className="material-symbols-outlined text-secondary" style={{ fontSize: '2.5rem' }}>mail</span>
                    <div>
                        <h4 className="label-md">Email</h4>
                        <p className="body-lg" style={{ fontWeight: 600 }}>middleton.gestion@gmail.com</p>
                    </div>
                 </div>
                 <div className="contact-item" style={{ display: 'flex', gap: '2rem' }}>
                    <span className="material-symbols-outlined text-secondary" style={{ fontSize: '2.5rem' }}>schedule</span>
                    <div>
                        <h4 className="label-md">Horaires de Réception</h4>
                        <p className="body-lg" style={{ fontWeight: 600 }}>Mardi - Samedi : 08:30 - 17:00</p>
                    </div>
                 </div>
              </div>

              {/* WhatsApp Button */}
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-pill" 
                style={{ 
                  backgroundColor: '#25D366', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '1rem',
                  marginTop: '2rem',
                  padding: '1.25rem',
                  boxShadow: '0 10px 20px rgba(37, 211, 102, 0.2)'
                }}
              >
                <span className="material-symbols-outlined">chat</span>
                Nous contacter sur WhatsApp
              </a>
            </div>

            <div className="faq-section animate-fade-up animate-delay-1">
              <h2 className="h-serif" style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>Questions <span className="italic text-primary">Fréquentes</span></h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className="tonal-card" 
                    style={{ padding: '1.5rem 2rem', cursor: 'pointer', borderColor: openFaq === i ? 'var(--secondary)' : 'transparent' }}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4 className="h-serif" style={{ fontSize: '1.1rem' }}>{faq.q}</h4>
                      <span className="material-symbols-outlined" style={{ transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(180deg)' : 'none' }}>expand_more</span>
                    </div>
                    {openFaq === i && (
                      <p className="body-md" style={{ marginTop: '1.5rem', opacity: 0.8, borderTop: '1px solid var(--outline-variant)', paddingTop: '1.5rem' }}>{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="tonal-card" style={{ marginTop: '3rem', padding: '3rem', background: 'var(--primary)', color: 'white' }}>
                 <p className="body-lg" style={{ fontWeight: 600 }}>Besoin d'un accompagnement personnalisé ?</p>
                 <p className="body-sm" style={{ opacity: 0.7, marginTop: '0.5rem' }}>Réservez votre créneau diagnostic dès maintenant.</p>
                 <button className="btn-pill" style={{ background: 'var(--secondary)', color: 'var(--primary)', marginTop: '2rem', border: 'none', width: '100%' }}>Réserver via Calendly</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

