import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight,
  BadgeCheck,
  Bell,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Crown,
  Download,
  Heart,
  MapPin,
  Menu,
  Scissors,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Wallet,
  X,
} from 'lucide-react'
import './styles.css'

const serviceSlides = [
  {
    title: 'Spa & massage',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1300&q=85',
  },
  {
    title: 'Salon styling',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1300&q=85',
  },
  {
    title: 'Makeup & bridal',
    image:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1300&q=85',
  },
  {
    title: 'Nails & waxing',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1300&q=85',
  },
]

const features = [
  { icon: Search, label: 'Smart discovery', text: 'Search by service, area, partner rating, category, price, and availability.' },
  { icon: CalendarCheck, label: 'Instant booking', text: 'Pick a partner, select a slot, pay, reschedule, or cancel from one smooth flow.' },
  { icon: Wallet, label: 'Wallet + refunds', text: 'Top up, pay from wallet, receive refunds, and track every transaction.' },
  { icon: Store, label: 'Partner console', text: 'Partners manage KYC, services, gallery, slots, staff, tips, and earnings.' },
  { icon: Crown, label: 'Membership plans', text: 'Unlock recurring discounts, premium benefits, and loyal-customer offers.' },
  { icon: Bell, label: 'Realtime alerts', text: 'Socket events and push notifications keep users and partners in sync.' },
]

const metrics = [
  ['247', 'API endpoints planned for marketplace workflows'],
  ['15', 'Business modules across users, partners, bookings, wallet, and admin'],
  ['7+', 'Service categories ready for beauty and wellness discovery'],
  ['24/7', 'Self-serve booking, payments, notifications, and tracking'],
]

const featurePills = [
  { title: 'OTP Login', score: 'Fast', icon: ShieldCheck, tone: 'dark', x: 7, y: 10 },
  { title: 'Slot Booking', score: 'Live', icon: CalendarCheck, tone: 'light', x: 36, y: 19 },
  { title: 'Razorpay', score: 'Pay', icon: CreditCard, tone: 'dark', x: 63, y: 12 },
  { title: 'Reviews', score: '4.8', icon: Star, tone: 'light', x: 18, y: 55 },
  { title: 'KYC Trust', score: 'Safe', icon: BadgeCheck, tone: 'dark', x: 55, y: 56 },
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [slide, setSlide] = useState(0)
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [gradient, setGradient] = useState({ x: 50, y: 50 })
  const dragAreaRef = useRef(null)
  const dragState = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    const onMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY })
      setGradient({
        x: Math.round((event.clientX / window.innerWidth) * 100),
        y: Math.round((event.clientY / window.innerHeight) * 100),
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % serviceSlides.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const onMove = (event) => {
      if (!dragState.current || !dragAreaRef.current) return
      const area = dragAreaRef.current.getBoundingClientRect()
      const card = dragState.current.element
      const clientX = event.touches ? event.touches[0].clientX : event.clientX
      const clientY = event.touches ? event.touches[0].clientY : event.clientY
      const x = Math.max(0, Math.min(clientX - area.left - dragState.current.offsetX, area.width - card.offsetWidth))
      const y = Math.max(0, Math.min(clientY - area.top - dragState.current.offsetY, area.height - card.offsetHeight))
      card.style.left = `${(x / area.width) * 100}%`
      card.style.top = `${(y / area.height) * 100}%`
    }
    const stop = () => {
      if (dragState.current?.element) dragState.current.element.style.zIndex = ''
      dragState.current = null
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('touchmove', onMove, { passive: false })
    document.addEventListener('mouseup', stop)
    document.addEventListener('touchend', stop)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('touchmove', onMove)
      document.removeEventListener('mouseup', stop)
      document.removeEventListener('touchend', stop)
    }
  }, [])

  const marquee = useMemo(
    () =>
      'BOOK SALON * SPA * WAXING * MASSAGE * MAKEUP * NAILS * TATTOO * FACIAL * BRIDAL * ',
    []
  )

  const startDrag = (event) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const clientX = event.touches ? event.touches[0].clientX : event.clientX
    const clientY = event.touches ? event.touches[0].clientY : event.clientY
    dragState.current = {
      element,
      offsetX: clientX - rect.left,
      offsetY: clientY - rect.top,
    }
    element.style.zIndex = '12'
  }

  const moveSlide = (direction) => {
    setSlide((current) => (current + direction + serviceSlides.length) % serviceSlides.length)
  }

  return (
    <>
      <div
        className="bg-gradient"
        style={{
          background: `radial-gradient(circle at ${gradient.x}% ${gradient.y}%, #ff5a1f, #e10062 56%, #160008 100%)`,
        }}
      />
      <div className="cursor" style={{ left: cursor.x, top: cursor.y }} />
      <div className="cursor-follower" style={{ left: cursor.x, top: cursor.y }} />

      <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
        <a className="logo" href="#home">Glow Wax</a>
        <nav>
          <a href="#features">Features</a>
          <a href="#services">Services</a>
          <a href="#partners">Partners</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="download-btn" href="#download">
          <Download size={16} />
          Download App
        </a>
        <button className="menu-toggle" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </header>

      <div className={menuOpen ? 'mobile-menu active' : 'mobile-menu'}>
        <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <X size={28} />
        </button>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#partners" onClick={() => setMenuOpen(false)}>Partners</a>
        <a href="#download" onClick={() => setMenuOpen(false)}>Download</a>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-content reveal">
            <p className="eyebrow">Beauty and wellness, on demand</p>
            <h1>Glow Wax</h1>
            <p className="hero-copy">
              Discover trusted salons, spas, makeup artists, waxing experts, and wellness partners near you.
              Book slots, pay securely, manage memberships, and get realtime updates from one glowing app.
            </p>
            <div className="hero-actions">
              <a href="#download" className="primary-action">
                <Download size={18} />
                Download app
              </a>
              <a href="#partners" className="ghost-action">
                Join as partner
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <a className="booking-circle" href="#features" aria-label="Explore Glow Wax features">
            <svg viewBox="0 0 200 200">
              <defs>
                <path id="circlePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>
              <text fontSize="13" letterSpacing="2">
                <textPath href="#circlePath">BOOK BEAUTY * BOOK WELLNESS * BOOK GLOW *</textPath>
              </text>
            </svg>
            <span>
              <Sparkles size={34} />
            </span>
          </a>
        </section>

        <section className="experience-section">
          <div className="moving-headline">
            <div className="moving-track">{marquee.repeat(2)}</div>
          </div>
          <div className="experience-container">
            <div className="experience-left">
              <h2>15</h2>
              <span>Marketplace modules</span>
            </div>
            <div className="experience-right">
              <div className="client-images">
                {[
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
                  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
                  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
                ].map((src) => (
                  <img key={src} src={src} alt="Glow Wax customer" />
                ))}
              </div>
              <h2>
                A booking marketplace that feels premium,
                <span> trusted, and fast from search to checkout.</span>
              </h2>
            </div>
          </div>
        </section>

        <section className="feature-grid-section" id="features">
          <div className="section-kicker">* Dedicated Features</div>
          <h2 className="section-title">Everything your beauty platform needs</h2>
          <div className="features-grid">
            {features.map(({ icon: Icon, label, text }) => (
              <article className="feature-card" key={label}>
                <Icon size={30} />
                <h3>{label}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-section" id="services">
          <span className="section-kicker">* Service discovery</span>
          <h2 className="section-title">Book the glow you need today</h2>
          <div className="product-slider">
            <button className="slider-btn prev-btn" aria-label="Previous service" onClick={() => moveSlide(-1)}>
              <ChevronLeft size={24} />
            </button>
            <div
              className="slider-track"
              style={{
                transform: `translateX(calc(50% - ${slide * 54 + 27}%))`,
              }}
            >
              {serviceSlides.map((item, index) => (
                <article className={index === slide ? 'slide active' : 'slide'} key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
            <button className="slider-btn next-btn" aria-label="Next service" onClick={() => moveSlide(1)}>
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="slider-dots">
            {serviceSlides.map((item, index) => (
              <button
                aria-label={`Show ${item.title}`}
                className={index === slide ? 'dot active' : 'dot'}
                key={item.title}
                onClick={() => setSlide(index)}
              />
            ))}
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-left">
            {metrics.slice(0, 2).map(([value, label]) => (
              <div className="stat-item" key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="about-image-frame">
            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85"
              alt="Salon service booking"
            />
          </div>
          <div className="stats-right">
            {metrics.slice(2).map(([value, label]) => (
              <div className="stat-item" key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="drag-section">
          <h2>Tap, book, pay, glow</h2>
          <div className="drag-area" ref={dragAreaRef}>
            {featurePills.map(({ title, score, icon: Icon, tone, x, y }) => (
              <div
                className={`drag-card ${tone}`}
                key={title}
                style={{ left: `${x}%`, top: `${y}%` }}
                onMouseDown={startDrag}
                onTouchStart={startDrag}
              >
                <span><Icon size={34} /></span>
                <h3>{score}</h3>
                <p>{title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="workflow-section">
          <div className="marquee-wrapper">
            <div className="marquee-text">
              USER APP - PARTNER PANEL - ADMIN DASHBOARD - WALLET - PAYMENTS - REVIEWS -
            </div>
          </div>
          <div className="workflow-grid">
            <div>
              <h2>For customers</h2>
              <WorkflowItem icon={MapPin} title="Find nearby experts" text="Discover partners by location, category, rating, and price." />
              <WorkflowItem icon={CalendarCheck} title="Book live slots" text="Reserve services with notes, staff selection, and reschedule support." />
              <WorkflowItem icon={Heart} title="Save favorites" text="Keep trusted partners close for repeat bookings." />
            </div>
            <div>
              <h2>For partners</h2>
              <WorkflowItem icon={BadgeCheck} title="KYC and approval" text="Onboard with documents, profile, gallery, bank details, and admin approval." />
              <WorkflowItem icon={Scissors} title="Services and staff" text="Set pricing, duration, availability, leaves, and staff assignment." />
              <WorkflowItem icon={Wallet} title="Earnings and payout" text="Track completed bookings, tips, wallet balance, and payout summaries." />
            </div>
            <div className="profile-round">
              <img
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=700&q=85"
                alt="Beauty partner workspace"
              />
            </div>
          </div>
        </section>

        <section className="partners-section" id="partners">
          <div className="partners-text">
            <span className="section-kicker">* Partner growth</span>
            <h2>Bring your salon, spa, or studio online</h2>
            <p>
              Glow Wax gives partners the tools to accept bookings, manage staff, receive realtime alerts,
              showcase work, handle tips, and see earnings from one clean operating system.
            </p>
            <a href="#contact" className="primary-action">Become a partner <ArrowUpRight size={18} /></a>
          </div>
          <div className="partners-image">
            <img
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1000&q=85"
              alt="Beauty partner dashboard concept"
            />
          </div>
        </section>

        <section className="testimonial-section">
          <h2>What early users would love</h2>
          <div className="testimonial-track">
            {[...Array(2)].flatMap(() => [
              ['Aisha Mehra', 'Booked waxing and facial in under two minutes. The slot flow felt effortless.'],
              ['Rohan Studio', 'The partner tools make bookings, KYC, staff, and earnings easier to manage.'],
              ['Neha Kapoor', 'Wallet refunds and booking updates make the app feel reliable.'],
            ]).map(([name, quote], index) => (
              <article className="testimonial-card" key={`${name}-${index}`}>
                <img
                  src={`https://images.unsplash.com/photo-${index % 3 === 0 ? '1494790108377-be9c29b29330' : index % 3 === 1 ? '1500648767791-00dcc994a43e' : '1534528741775-53994a69daeb'}?auto=format&fit=crop&w=200&q=80`}
                  alt={name}
                />
                <p>"{quote}"</p>
                <h3>{name}</h3>
                <span>{index % 2 === 0 ? 'Customer' : 'Partner'}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="download-section" id="download">
          <div className="download-circle">
            <p>DISCOVER YOUR NEXT</p>
            <h3>Glow <ArrowUpRight size={24} /></h3>
          </div>
          <div className="download-center">
            <h2>Download Glow Wax</h2>
            <div className="download-lines" />
            <div className="store-row">
              <a href="#contact"><Download size={18} /> App Store</a>
              <a href="#contact"><Download size={18} /> Google Play</a>
            </div>
          </div>
          <div className="phone-frame">
            <img src="/images/hero-glow.png" alt="Glow Wax app download visual" />
          </div>
          <div className="big-brand">Glow<span>Wax</span></div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <h2>Let the city glow with you</h2>
            <p>Launch the marketplace, onboard partners, and put booking-ready beauty experiences in every customer pocket.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              Name
              <input type="text" required />
            </label>
            <label>
              Email
              <input type="email" required />
            </label>
            <label>
              Message
              <textarea rows="4" required />
            </label>
            <button type="submit">Send message <ArrowUpRight size={18} /></button>
          </form>
        </section>
      </main>
    </>
  )
}

function WorkflowItem({ icon: Icon, title, text }) {
  return (
    <article className="workflow-item">
      <Icon size={22} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

createRoot(document.getElementById('root')).render(<App />)
