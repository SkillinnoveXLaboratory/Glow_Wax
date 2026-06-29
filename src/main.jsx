import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Apple,
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  CalendarCheck,
  CreditCard,
  Download,
  Gem,
  HeartPulse,
  Mail,
  Menu,
  Paintbrush,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  TicketPercent,
  X,
} from 'lucide-react'
import './styles.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Why Glowvax', href: '#why' },
  { label: 'Services', href: '#services' },
  { label: 'Partner With Us', href: '#partner' },
  { label: 'Download App', href: '#download' },
]

const services = [
  {
    title: 'Salon',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=820&q=78',
  },
  {
    title: 'Spa',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=820&q=78',
  },
  {
    title: 'Tattoo',
    icon: Paintbrush,
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=820&q=78',
  },
  {
    title: 'Beauty',
    icon: Gem,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=820&q=78',
  },
  {
    title: 'Grooming',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=820&q=78',
  },
  {
    title: 'Wellness',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=820&q=78',
  },
]

const whyFeatures = [
  { label: 'Verified Partner Salons', icon: BadgeCheck },
  { label: 'Easy Online Booking', icon: CalendarCheck },
  { label: 'Secure Payments', icon: CreditCard },
  { label: 'Best Offers', icon: TicketPercent },
  { label: 'Instant Confirmation', icon: BellRing },
  { label: 'Trusted Experience', icon: ShieldCheck },
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
        <a className="logo" href="#home">Glowvax</a>
        <nav aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a href={link.href} key={link.label}>{link.label}</a>
          ))}
        </nav>
        <a className="site-button header-button" href="#download">
          <Download size={16} />
          Download App
        </a>
        <button className="menu-toggle" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </header>

      <div className={menuOpen ? 'mobile-menu active' : 'mobile-menu'}>
        <button aria-label="Close menu" onClick={closeMenu}>
          <X size={28} />
        </button>
        {navLinks.map((link) => (
          <a href={link.href} key={link.label} onClick={closeMenu}>{link.label}</a>
        ))}
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-content reveal">
            <p className="eyebrow">Premium beauty booking</p>
            <h1>Glowvax</h1>
            <p className="hero-copy">
              Discover trusted salons, spas, and beauty professionals near you.
              Book appointments effortlessly with a simple, secure, and convenient experience.
            </p>
            <a href="#download" className="site-button primary-action">
              <Download size={18} />
              Download App
            </a>
          </div>
          <div className="hero-note" aria-hidden="true">
            <Sparkles size={22} />
            <span>Trusted beauty booking</span>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-kicker">Services</div>
          <div className="section-heading">
            <h2>Premium Services Preview</h2>
            <p>Choose the service you need and book with verified professionals in just a few taps.</p>
          </div>
          <div className="service-grid">
            {services.map(({ title, icon: Icon, image }) => (
              <article className="service-card" key={title}>
                <img src={image} alt={`${title} service`} loading="lazy" />
                <div className="service-card-content">
                  <span><Icon size={22} /></span>
                  <h3>{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="why-section" id="why">
          <div className="why-copy">
            <div className="section-kicker">Why Glowvax</div>
            <h2>Why Glowvax</h2>
            <p>
              Glowvax helps you discover trusted beauty professionals and book appointments effortlessly.
              We make salon booking simple, secure, and convenient.
            </p>
          </div>
          <div className="why-grid">
            {whyFeatures.map(({ label, icon: Icon }) => (
              <article className="feature-card" key={label}>
                <Icon size={28} />
                <h3>{label}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="partner-section" id="partner">
          <div className="partner-image">
            <img
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1100&q=78"
              alt="Salon professional preparing a beauty workspace"
              loading="lazy"
            />
          </div>
          <div className="partner-copy">
            <div className="section-kicker">Partner With Us</div>
            <h2>Partner With Glowvax</h2>
            <p>
              Join Glowvax and grow your salon business. Reach more customers, manage appointments with ease,
              and increase your bookings through our platform.
            </p>
            <a href="mailto:hello@glowvax.com?subject=Partner%20With%20Glowvax" className="site-button primary-action">
              Become a Partner
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section className="download-section" id="download">
          <div className="download-center">
            <div className="section-kicker">Download App</div>
            <h2>Download the Glowvax App</h2>
            <p>
              Discover and book trusted salons, spas, and beauty services near you. Enjoy a fast,
              secure, and hassle-free booking experience with Glowvax.
            </p>
            <div className="store-row">
              <a href="mailto:hello@glowvax.com?subject=Glowvax%20Google%20Play" className="site-button">
                <Download size={18} />
                Google Play
              </a>
              <a href="mailto:hello@glowvax.com?subject=Glowvax%20App%20Store" className="site-button">
                <Apple size={18} />
                App Store
              </a>
            </div>
          </div>
          <div className="phone-frame" aria-hidden="true">
            <div className="phone-screen">
              <Star size={22} />
              <strong>Glowvax</strong>
              <span>Book salon appointments faster.</span>
            </div>
          </div>
          <div className="big-brand">Glowvax</div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="logo" href="#home">Glowvax</a>
          <p>Premium beauty and wellness booking for trusted salons, spas, and professionals.</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <a href="#why">About Us</a>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms & Conditions</a>
          <a href="mailto:hello@glowvax.com">Contact Us</a>
        </div>
        <div className="footer-contact">
          <span className="footer-label">Email</span>
          <a href="mailto:hello@glowvax.com"><Mail size={18} /> hello@glowvax.com</a>
          <span className="footer-label">Social Media</span>
          <div className="social-links" aria-label="Social media">
            <a href="#home" aria-label="Instagram">IG</a>
            <a href="#home" aria-label="Facebook">FB</a>
            <a href="#home" aria-label="LinkedIn">IN</a>
          </div>
        </div>
        <p className="copyright">Copyright © Glowvax. All Rights Reserved.</p>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
