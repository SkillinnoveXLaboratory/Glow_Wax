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
  Layers3,
  Mail,
  Menu,
  Paintbrush,
  Search,
  Scissors,
  ShieldCheck,
  Sparkles,
  Store,
  TicketPercent,
  UsersRound,
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
    image: '/images/saloon.png',
  },
  {
    title: 'Spa',
    icon: Sparkles,
    image: '/images/spa.png',
  },
  {
    title: 'Tattoo',
    icon: Paintbrush,
    image: '/images/tatoo.jpeg',
  },
  {
    title: 'Beauty',
    icon: Gem,
    image: '/images/beauty.jpeg',
  },
  {
    title: 'Grooming',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=820&q=78',
  },
  {
    title: 'Wellness',
    icon: HeartPulse,
    image: '/images/welness.jpeg',
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

const appFeatures = [
  {
    title: 'Smart Discovery',
    icon: Search,
    description: 'Search by service, category, city, tags, nearby listings, featured partners, and top-rated professionals.',
    points: ['Nearby and featured discovery', 'Autocomplete and filters', 'Recent search history'],
  },
  {
    title: 'Live Booking Flow',
    icon: CalendarCheck,
    description: 'Customers can check real-time slot availability, create bookings, reschedule visits, and track status updates end to end.',
    points: ['Available time slots', 'Reschedule acceptance flow', 'Upcoming and history tracking'],
  },
  {
    title: 'Wallet And Secure Payments',
    icon: CreditCard,
    description: 'The platform supports Razorpay checkout, wallet top-ups, saved payment methods, refunds, invoices, and payment verification.',
    points: ['Wallet top-up and pay', 'Refund and invoice support', 'Razorpay verification'],
  },
  {
    title: 'Partner KYC And Launch',
    icon: BadgeCheck,
    description: 'Businesses can register, upload KYC documents, complete approval, set availability, add galleries, and go live with confidence.',
    points: ['KYC approval workflow', 'Availability and slots', 'Portfolio image uploads'],
  },
  {
    title: 'Staff And Service Operations',
    icon: UsersRound,
    description: 'Partners can manage services, assign staff to bookings, track schedules, handle leaves, and view staff earnings.',
    points: ['Staff assignment', 'Schedule and leave control', 'Partner service pricing'],
  },
  {
    title: 'Reviews, Alerts, And Membership',
    icon: Layers3,
    description: 'Completed-booking reviews, real-time notifications, push messaging, featured listings, and membership benefits are built in.',
    points: ['Verified review rules', 'WebSocket and push alerts', 'Membership plans and perks'],
  },
]

const appFeatureStats = [
  { value: '6', label: 'premium app features' },
  { value: '15', label: 'connected platform modules' },
  { value: '7', label: 'live experience touchpoints' },
]

function GlowvaxWordmark({ className = '' }) {
  const classes = ['brand-wordmark', className].filter(Boolean).join(' ')

  return (
    <span className={classes} aria-label="Glowvax">
      <span className="brand-gold">GLOW</span><span className="brand-purple">VAX</span>
    </span>
  )
}

function InstagramBrandIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  )
}

function FacebookBrandIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M14 8.5V7.1c0-.7.4-1 1-1h1.6V3.5H14c-2.2 0-3.5 1.3-3.5 3.6v1.4H8v2.6h2.5V20H14v-9h2.7l.3-2.6H14Z"
      />
    </svg>
  )
}

function LinkedinBrandIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M6.2 8.8H3.7V20h2.5V8.8ZM5 3.8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm5.6 5H8.1V20h2.5v-6.1c0-1.8.7-2.8 2.2-2.8 1.4 0 1.9 1 1.9 2.8V20h2.5v-6.6c0-3.1-1.7-4.7-3.9-4.7-1.4 0-2.4.6-3.1 1.6h-.1V8.8Z"
      />
    </svg>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const animatedItems = Array.from(document.querySelectorAll('.motion-card, .hero-fade'))

    if (!('IntersectionObserver' in window)) {
      animatedItems.forEach((item) => item.classList.add('in-view'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.14 },
    )

    animatedItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const handleContactSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    const subject = `Glowvax enquiry from ${name || 'website visitor'}`
    const body = [
      `Name: ${name || 'Not provided'}`,
      `Email: ${email || 'Not provided'}`,
      '',
      message || 'Hello Glowvax team, I would like to get in touch.',
    ].join('\n')

    window.location.href = `mailto:hello@glowvax.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    event.currentTarget.reset()
  }

  return (
    <>
      <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
        <a className="logo" href="#home" aria-label="Glowvax">
          <img className="brand-mark" src="/images/logo.png" alt="" aria-hidden="true" />
          <GlowvaxWordmark />
        </a>
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
          <div className="hero-content hero-fade">
            <p className="eyebrow">Premium beauty booking</p>
            <h1 aria-label="Glowvax">
              <GlowvaxWordmark className="brand-hero" />
            </h1>
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
          <div className="section-kicker motion-card from-left">Services</div>
          <div className="section-heading motion-card from-right">
            <h2>Premium Services Preview</h2>
            <p>Choose the service you need and book with verified professionals in just a few taps.</p>
          </div>
          <div className="service-grid">
            {services.map(({ title, icon: Icon, image }, index) => (
              <article
                className={`service-card motion-card ${index % 2 === 0 ? 'from-left' : 'from-right'}`}
                key={title}
                style={{ '--motion-delay': `${index * 70}ms` }}
              >
                <img src={image} alt={`${title} service`} loading="lazy" decoding="async" />
                <div className="service-card-content">
                  <span><Icon size={22} /></span>
                  <h3>{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="app-features-section" id="app-features">
          <div className="app-features-shell">
            <div className="app-features-intro motion-card from-left">
              <div className="section-kicker">App Features</div>
              <h2>Built for Seamless <GlowvaxWordmark className="brand-inline brand-heading-mark" /> Experiences</h2>
              <p>
                Explore a premium booking experience designed to feel simple, secure, and elegant from the first search
                to the final confirmation. Every feature is crafted to help customers discover trusted services and help
                partners grow with ease.
              </p>
              <div className="app-feature-stats" aria-label="Platform stats">
                {appFeatureStats.map(({ value, label }) => (
                  <div className="app-feature-stat" key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="app-feature-grid">
              {appFeatures.map(({ title, icon: Icon, description, points }, index) => (
                <article
                  className={`app-feature-card motion-card ${index % 2 === 0 ? 'from-right' : 'from-left'}`}
                  key={title}
                  style={{ '--motion-delay': `${index * 70}ms` }}
                >
                  <div className="app-feature-card-top">
                    <span className="app-feature-icon"><Icon size={24} /></span>
                    <span className="app-feature-index">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="app-feature-points">
                    {points.map((point) => (
                      <span key={point}>{point}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why-section" id="why">
          <div className="why-copy motion-card from-left">
            <div className="section-kicker">Why <GlowvaxWordmark className="brand-inline brand-kicker-mark" /></div>
            <h2>Why <GlowvaxWordmark className="brand-inline brand-heading-mark" /></h2>
            <p>
              <GlowvaxWordmark className="brand-inline brand-copy-mark" /> helps you discover trusted beauty professionals and book appointments effortlessly.
              We make salon booking simple, secure, and convenient.
            </p>
          </div>
          <div className="why-grid">
            {whyFeatures.map(({ label, icon: Icon }, index) => (
              <article
                className={`feature-card motion-card ${index % 2 === 0 ? 'from-right' : 'from-left'}`}
                key={label}
                style={{ '--motion-delay': `${index * 65}ms` }}
              >
                <Icon size={28} />
                <h3>{label}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="partner-section" id="partner">
          <div className="partner-image motion-card from-left">
            <img
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1100&q=78"
              alt="Salon professional preparing a beauty workspace"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="partner-copy motion-card from-right">
            <div className="section-kicker">Partner With Us</div>
            <h2>Partner With <GlowvaxWordmark className="brand-inline brand-heading-mark" /></h2>
            <p>
              Join <GlowvaxWordmark className="brand-inline brand-copy-mark" /> and grow your salon business. Reach more customers, manage appointments with ease,
              and increase your bookings through our platform.
            </p>
            <a href="mailto:hello@glowvax.com?subject=Partner%20With%20Glowvax" className="site-button primary-action">
              Become a Partner
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section className="download-section" id="download">
          <div className="download-center motion-card from-left">
            <div className="section-kicker">Download App</div>
            <h2>Download the <GlowvaxWordmark className="brand-inline brand-heading-mark" /> App</h2>
            <p>
              Discover and book trusted salons, spas, and beauty services near you. Enjoy a fast,
              secure, and hassle-free booking experience with <GlowvaxWordmark className="brand-inline brand-copy-mark" />.
            </p>
            <div className="store-row">
              <a href="mailto:hello@glowvax.com?subject=Glowvax%20Google%20Play" className="store-button">
                <i className="fa-brands fa-google-play" aria-hidden="true" />
                Google Play
              </a>
              <a href="mailto:hello@glowvax.com?subject=Glowvax%20App%20Store" className="store-button">
                <Apple size={26} />
                App Store
              </a>
            </div>
          </div>
          <div className="phone-frame motion-card from-right" aria-hidden="true">
            <div className="phone-screen">
              <div className="phone-notch">
                <span />
              </div>
              <div className="phone-app-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <strong><GlowvaxWordmark className="brand-phone" /></strong>
              <span>Book salon appointments<br />faster.</span>
              <div className="phone-photo">
                <img src="/images/saloon.png" alt="" loading="eager" decoding="async" />
              </div>
              <div className="phone-dots">
                <span />
                <span className="active" />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="big-brand" aria-hidden="true">
            <GlowvaxWordmark className="brand-ghost" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand motion-card from-left">
          <a className="logo footer-logo" href="#home" aria-label="Glowvax">
            <img className="brand-mark" src="/images/logo.png" alt="" aria-hidden="true" />
            <GlowvaxWordmark />
          </a>
          <p>Premium beauty and wellness booking for trusted salons, spas, and professionals.</p>
        </div>
        <div className="footer-links motion-card from-right" aria-label="Footer navigation">
          <a href="#why">About Us</a>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms & Conditions</a>
          <a href="mailto:hello@glowvax.com">Contact Us</a>
        </div>
        <div className="footer-contact motion-card from-left">
          <span className="footer-label">Email</span>
          <a href="mailto:hello@glowvax.com"><Mail size={18} /> hello@glowvax.com</a>
          <span className="footer-label">Social Media</span>
          <div className="social-links" aria-label="Social media">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramBrandIcon />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookBrandIcon />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinBrandIcon />
            </a>
          </div>
        </div>
        <div className="footer-contact-form motion-card from-right">
          <span className="footer-label">Contact Us</span>
          <p>Share your name, email, and note. We will open your email app with a ready-to-send message.</p>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <input type="text" name="name" placeholder="Your name" aria-label="Your name" autoComplete="name" />
            <input type="email" name="email" placeholder="Email address" aria-label="Email address" autoComplete="email" />
            <textarea name="message" rows="4" placeholder="Tell us what you need" aria-label="Message" />
            <button type="submit" className="site-button footer-submit">Send Message</button>
          </form>
        </div>
        <p className="copyright">Copyright (c) <GlowvaxWordmark className="brand-inline brand-copy-mark" />. All Rights Reserved.</p>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
