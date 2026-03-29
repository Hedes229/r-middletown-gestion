import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer section-padding" style={{ background: 'var(--surface-container-low)', borderTop: '1px solid var(--outline-variant)' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '1.5rem' }}>
              <img src="/assets/logo.png" alt="R MIDDLETON GESTION" className="logo-img logo-img-sm" />
              <span className="logo-text">R MIDDLETON GESTION</span>
            </div>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '300px' }}>
              Expertise comptable et conseil stratégique pour les entrepreneurs audacieux de la Guadeloupe.
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="label-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Navigation</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" className="body-md">Accueil</Link></li>
              <li><Link to="/services" className="body-md">Nos Services</Link></li>
              <li><Link to="/about" className="body-md">Le Cabinet</Link></li>
              <li><Link to="/contact" className="body-md">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="label-lg" style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Contact</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>location_on</span>
                <span className="body-md">Les Abymes, Guadeloupe</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>mail</span>
                <span className="body-md">middleton.gestion@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid var(--outline-variant)', display: 'flex', justifyContent: 'space-between', opacity: 0.6 }}>
          <p className="label-md">© 2024 R MIDDLETON GESTION. Tous droits réservés.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="#" className="label-md">Mentions Légales</Link>
            <Link to="#" className="label-md">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
