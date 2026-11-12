import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Facebook, Menu, Phone, X } from 'lucide-react';
import { displayPhone, email, facebook, phone } from '@/data/site';

const nav = [['Home', '/'], ['Services', '/services'], ['About', '/about'], ['Gallery', '/gallery'], ['Reviews', '/reviews'], ['Contact', '/contact']];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); setMenu(false); }, [location.pathname]);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { const lenis = new Lenis({ lerp: 0.08, smoothWheel: true }); const tick = (time: number) => lenis.raf(time * 1000); gsap.ticker.add(tick); return () => { gsap.ticker.remove(tick); lenis.destroy(); }; }, []);
  return <div className="site-shell">
    <div className="scroll-line" />
    <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
      <Link to="/" className="brand-mark" aria-label="Sho Room Finish home"><img src="/Sho_Room_Finish_Detailing_Emblem.png" alt="Sho Room Finish" /></Link>
      <nav className="desktop-nav">{nav.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}</nav>
      <div className="nav-actions"><Link className="nav-phone" to="/contact"><Phone size={15} /> <span>{displayPhone}</span></Link><Link className="button button-small" to="/contact">Get a Free Quote <ArrowUpRight size={16} /></Link><button className="menu-trigger" onClick={() => setMenu(true)} aria-label="Open menu"><Menu /></button></div>
    </header>
    <div className={`mobile-menu ${menu ? 'open' : ''}`}><button className="menu-close" onClick={() => setMenu(false)} aria-label="Close menu"><X /></button><img src="/Sho_Room_Finish_Detailing_Emblem.png" alt="Sho Room Finish" /> <div className="mobile-links">{nav.map(([label, path]) => <Link key={path} to={path}>{label}<ArrowUpRight size={22} /></Link>)}</div><a className="button mobile-call" href={`tel:${phone}`}><Phone size={17} /> Call {displayPhone}</a></div>
    <main>{children}</main>
    <footer className="footer"><div className="wave-top" /><div className="footer-outline">SHO ROOM FINISH</div><div className="container footer-grid"><div><img className="footer-logo" src="/Sho_Room_Finish_Detailing_Emblem.png" alt="Sho Room Finish" /><p className="footer-note">On-site & mobile detailing<br />for cars, homes, and everything in between.</p></div><div><p className="footer-label">Explore</p>{nav.slice(0, 5).map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}</div><div><p className="footer-label">Services</p><Link to="/services">Auto detailing</Link><Link to="/services">House washing</Link><Link to="/services">Driveways & patios</Link><Link to="/services">Decks & fences</Link></div><div><p className="footer-label">Get in touch</p><a href={`tel:${phone}`}>{displayPhone}</a><a href={`mailto:${email}`}>{email}</a><span>Wallace, North Carolina<br />& surrounding areas</span><a className="social" href={facebook} target="_blank" rel="noreferrer"><Facebook size={17} /> Facebook <ArrowUpRight size={14} /></a></div></div><div className="container footer-bottom"><span>© 2026 Sho Room Finish</span><span>Detailing with intention.</span></div></footer>
    <div className="mobile-bar"><a href={`tel:${phone}`}><Phone size={17} /> Call Now</a><Link to="/contact"><ArrowUpRight size={17} /> Get Quote</Link></div>
  </div>;
}

export function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: React.ReactNode; copy?: string; light?: boolean }) { return <div className={`section-heading ${light ? 'light' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>; }
export function ButtonLink({ children, to = '/contact', secondary = false }: { children: React.ReactNode; to?: string; secondary?: boolean }) { return <Link className={`button ${secondary ? 'button-outline' : ''}`} to={to}>{children}<ArrowUpRight size={17} /></Link>; }
