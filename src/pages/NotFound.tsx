import { ButtonLink } from '@/components/Layout';
import { displayPhone, phone } from '@/data/site';
import './NotFound.css';

export function NotFound() {
  return <section className="not-found">
    <div className="not-found-code" aria-hidden="true">404</div>
    <div className="container not-found-inner">
      <span className="eyebrow">Page not found</span>
      <h1>This page is missing.</h1>
      <p>The link may be outdated or mistyped. Let’s get you back to a clean finish.</p>
      <div className="not-found-actions"><ButtonLink to="/">Back to Home</ButtonLink><ButtonLink secondary to={`tel:${phone}`}>Call Now · {displayPhone}</ButtonLink></div>
    </div>
  </section>;
}
