import { ButtonLink } from '@/components/Layout';
import { realWork } from '@/data/site';
import './Authenticity.css';

const badges = ['Original Photos', 'No Filters', 'No AI Content', 'Real Results'];
const collage = [realWork[1], realWork[4], realWork[6]];

function Badges() {
  return <div className="auth-pills">{badges.map((badge) => <span key={badge}>{badge}</span>)}</div>;
}

function OriginalSeal() {
  return <div className="auth-seal" aria-hidden="true">
    <svg viewBox="0 0 120 120"><defs><path id="auth-seal-ring" d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0" /></defs><text><textPath href="#auth-seal-ring" textLength="290" lengthAdjust="spacing">ORIGINAL PHOTOS • NO FILTERS • </textPath></text></svg>
    <span>100%<small>Original</small></span>
  </div>;
}

export function AuthenticitySection() {
  return <section className="auth-section">
    <div className="auth-glow" />
    <span className="auth-outline-word" aria-hidden="true">REAL</span>
    <div className="container">
      <div className="auth-glass">
        <OriginalSeal />
        <div className="auth-copy">
          <span className="eyebrow">100% REAL RESULTS</span>
          <h2>Real Work. Real Results. <i>Zero Filters.</i></h2>
          <p>Every photo on this website is original. No filters, no editing tricks, and no AI-generated content. What you see is exactly what my chemicals and my hands deliver, and I’m committed to giving every vehicle I touch a true Sho Room Finish.</p>
          <p>I’ve never had a single complaint, and I thank God for that. This work is a gift, and I put my heart and soul into every wash. It’s a true passion, and you can see it in the results: every vehicle ends up looking like a Sho Room Finish.</p>
          <p className="auth-signature">Sutton Christopher, Sho Room Finish</p>
          <Badges />
          <div className="auth-buttons"><ButtonLink to="/gallery">See The Real Results</ButtonLink><ButtonLink to="/contact" secondary>Get a Free Quote</ButtonLink></div>
        </div>
        <div className="auth-collage">
          {collage.map((photo, i) => <figure className={`auth-photo auth-photo-${i + 1}`} key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" /></figure>)}
        </div>
      </div>
    </div>
  </section>;
}

export function AuthenticityBanner() {
  return <section className="auth-banner">
    <div className="auth-glow" />
    <div className="container auth-banner-inner">
      <div className="auth-banner-copy">
        <span className="eyebrow">100% REAL RESULTS</span>
        <p>Every photo here is original. No filters, no editing tricks, and no AI-generated content.</p>
      </div>
      <div className="auth-banner-side"><Badges /><ButtonLink to="/contact">Get a Free Quote</ButtonLink></div>
    </div>
  </section>;
}
