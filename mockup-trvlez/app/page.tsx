export default function Home() {
  return (
    <>
      <header className="site">
        <div className="wrap">
          <a className="wordmark" href="#top" aria-label="TrvlEz home">
            Trvl<span>Ez</span>
          </a>
          <nav className="primary" aria-label="Main">
            <a href="#about" className="hide-sm">
              About
            </a>
            <a href="#hotels">For hotels</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <h1>Hotel stays, simply booked.</h1>
            <p className="lede">
              TrvlEz is an online travel platform connecting travellers with
              independent hotels across the UK, Sri Lanka and India.
            </p>
            <a className="btn" href="#contact">
              Partner with us
            </a>
            <a className="btn quiet" href="#about">
              Learn more
            </a>

            <div
              className="route"
              role="img"
              aria-label="Route line connecting our three launch markets: United Kingdom, India and Sri Lanka"
            >
              <svg viewBox="0 0 1000 230" aria-hidden="true">
                <path
                  className="ghost"
                  d="M90 150 C 300 20, 520 20, 640 110 S 860 190, 910 120"
                />
                <path
                  className="path"
                  d="M90 150 C 300 20, 520 20, 640 110 S 860 190, 910 120"
                />
                <circle className="stop home" cx="90" cy="150" r="10" />
                <circle className="stop" cx="640" cy="110" r="10" />
                <circle className="stop" cx="910" cy="120" r="10" />
                <text x="90" y="196" textAnchor="middle">
                  UK
                </text>
                <text className="sub" x="90" y="218" textAnchor="middle">
                  Home base
                </text>
                <text x="640" y="160" textAnchor="middle">
                  India
                </text>
                <text x="935" y="92" textAnchor="end">
                  Sri Lanka
                </text>
              </svg>
            </div>
          </div>
        </section>

        <section className="block" id="about">
          <div className="wrap">
            <h2>A simpler way to find and book a room.</h2>
            <p className="intro">
              We focus on independent hotels, guesthouses and boutique stays,
              and on making booking them straightforward for everyone involved.
            </p>

            <div className="split">
              <div className="panel">
                <h3>For travellers</h3>
                <ul>
                  <li>
                    <strong>Independent stays</strong>Discover hotels you won&apos;t
                    find on every other site.
                  </li>
                  <li>
                    <strong>Clear prices</strong>See what you&apos;ll pay before
                    you book.
                  </li>
                  <li>
                    <strong>Secure payment</strong>Pay online safely at the time
                    of booking.
                  </li>
                </ul>
              </div>
              <div className="panel" id="hotels">
                <h3>For hotels</h3>
                <ul>
                  <li>
                    <strong>Reach new guests</strong>List your rooms in front of
                    travellers across our markets.
                  </li>
                  <li>
                    <strong>Keep your current setup</strong>Connect through the
                    systems you already use.
                  </li>
                  <li>
                    <strong>Competitive commission</strong>You pay only when a
                    booking is made.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="block" id="discovery">
          <div className="wrap discover">
            <div>
              <h2>Smarter search, so the right guests find you.</h2>
              <p className="intro">
                We use AI to match travellers with stays that fit what they&apos;re
                actually looking for, so smaller hotels get found on more than
                price and star rating alone.
              </p>
              <ul className="points">
                <li>
                  <strong>Search the way people talk</strong>Travellers describe
                  the trip they want in their own words, and we match it to the
                  places that fit.
                </li>
                <li>
                  <strong>Listings that stand out</strong>We help hotels present
                  rooms and features clearly, in the languages their guests
                  speak.
                </li>
                <li>
                  <strong>Seen wherever travellers search</strong>Hotel
                  information is structured so it can be found through search
                  engines and AI assistants, not only on our site.
                </li>
              </ul>
            </div>
            <div className="search-demo" aria-hidden="true">
              <div className="query">
                A quiet guesthouse near the beach in Galle, good for working
                remotely
              </div>
              <div className="match">
                <span className="dot"></span>
                <div>
                  <strong>Seaside guesthouse</strong>
                  <span>Quiet location · Beach nearby · Fast Wi-Fi</span>
                </div>
              </div>
              <div className="match">
                <span className="dot"></span>
                <div>
                  <strong>Boutique villa</strong>
                  <span>Garden workspace · Short walk to the beach</span>
                </div>
              </div>
              <div className="match faded">
                <span className="dot"></span>
                <div>
                  <strong>Family-run homestay</strong>
                  <span>Peaceful street · Breakfast included</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="block" id="connectivity">
          <div className="wrap connect">
            <div>
              <h2>Built to connect with hotel systems.</h2>
              <p className="intro">
                We integrate with property management systems and channel
                managers, so rates, availability and bookings stay in sync with
                each hotel&apos;s own records.
              </p>
              <p className="intro" style={{ marginBottom: 0 }}>
                If you provide hotel technology and would like to discuss an
                integration, we&apos;d be glad to hear from you.
              </p>
            </div>
            <div className="diagram" aria-hidden="true">
              <svg viewBox="0 0 420 260">
                <line x1="210" y1="130" x2="80" y2="50" />
                <line x1="210" y1="130" x2="340" y2="50" />
                <line x1="210" y1="130" x2="80" y2="210" />
                <line x1="210" y1="130" x2="340" y2="210" />
                <rect x="20" y="28" width="120" height="44" rx="10" />
                <text x="80" y="55" textAnchor="middle">
                  PMS
                </text>
                <rect x="266" y="28" width="148" height="44" rx="10" />
                <text x="340" y="55" textAnchor="middle">
                  Channel manager
                </text>
                <rect x="20" y="188" width="120" height="44" rx="10" />
                <text x="80" y="215" textAnchor="middle">
                  Hotel
                </text>
                <rect x="280" y="188" width="120" height="44" rx="10" />
                <text x="340" y="215" textAnchor="middle">
                  Traveller
                </text>
                <rect
                  className="core"
                  x="145"
                  y="104"
                  width="130"
                  height="52"
                  rx="26"
                />
                <text className="on-core" x="210" y="136" textAnchor="middle">
                  TrvlEz
                </text>
              </svg>
            </div>
          </div>
        </section>

        <section className="wrap" id="contact">
          <div className="contact">
            <div>
              <h2>Let&apos;s talk.</h2>
              <p>
                For partnership, integration and general enquiries, email us and
                we&apos;ll reply within one working day.
              </p>
            </div>
            <div>
              <a className="email" href="mailto:trvlezy@gmail.com">
                trvlezy@gmail.com
              </a>
              <p className="note">Based in the United Kingdom</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site">
        <div className="wrap">
          <span>&copy; 2026 TrvlEz. All rights reserved.</span>
          <span>Launching in the UK, Sri Lanka and India</span>
        </div>
      </footer>
    </>
  );
}
