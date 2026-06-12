import { PiHandsPrayingBold } from "react-icons/pi";
import { FaDove } from "react-icons/fa";
import "./App.css";

const APP_URL = "https://logmyprayers.app";

function LeafIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19c7-1 12-6 14-14-8 2-13 7-14 14Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 19c3-4 7-7 12-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function Icon({ type }) {
  const common = {
    width: 42,
    height: 42,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "pray") {
    return <PiHandsPrayingBold className="pray-hands-icon" aria-hidden="true" />;
  }

  if (type === "reflect") {
    return (
      <svg {...common}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z" />
        <path d="M8 7h8" />
        <path d="M8 11h6" />
      </svg>
    );
  }

  if (type === "remember") {
    return (
      <svg {...common}>
        <path d="M12 21V11" />
        <path d="M12 11c-4 0-7-3-7-7 4 0 7 3 7 7Z" />
        <path d="M12 11c4 0 7-3 7-7-4 0-7 3-7 7Z" />
      </svg>
    );
  }

  if (type === "list") {
    return (
      <svg {...common}>
        <path d="M9 5h10" />
        <path d="M9 12h10" />
        <path d="M9 19h10" />
        <path d="M4 5h.01" />
        <path d="M4 12h.01" />
        <path d="M4 19h.01" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M3 10h18" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 19c4-8 10-12 16-14-1 7-5 13-14 15" />
      <path d="M4 19c4-4 8-7 13-10" />
    </svg>
  );
}

function FeatureCard({ icon, title, children }) {
  return (
    <div className="feature-card">
      <div className="icon-circle">
        <Icon type={icon} />
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function StepCard({ number, icon, title, children }) {
  return (
    <div className="step-card">
      <div className="step-number">{number}</div>
      <Icon type={icon} />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="dove-badge">
          <FaDove className="hero-dove-icon" aria-hidden="true" />
        </div>
        <div className="wordmark">LIFT</div>
        <div className="tagline">LOG IT FOR TRANSFORMATION</div>

        <h1>A quiet place to bring your prayers.</h1>
        <p className="hero-copy">
          Track what’s on your heart, hold others up, reflect privately,
          and remember how God moves.
        </p>

        <div className="cta-stack">
          <a className="button primary" href={APP_URL}>
            <LeafIcon /> Open the App
          </a>
          <a className="button secondary" href="#home-screen">
            <span className="plus">＋</span> Save to Home Screen
          </a>
        </div>

        <div className="privacy">🔒 Private by default.</div>
        <div className="hills" />
      </section>

      <section className="section">
        <h2>What is LIFT?</h2>
        <p className="section-copy">
          LIFT is a prayer list and reflection app that helps you keep your prayers organized,
          stay consistent, and see how God is at work over time.
        </p>

        <div className="features">
          <FeatureCard icon="pray" title="Pray">
            Keep a simple list of what matters most.
          </FeatureCard>
          <FeatureCard icon="reflect" title="Reflect">
            Write private journal entries as you pray.
          </FeatureCard>
          <FeatureCard icon="remember" title="Remember">
            Look back and celebrate how God has moved.
          </FeatureCard>
        </div>
      </section>

      <section className="section compact">
        <h2>How it works</h2>
        <div className="steps">
          <StepCard number="1" icon="list" title="Add your prayers">
            Capture what’s on your heart in seconds.
          </StepCard>
          <StepCard number="2" icon="calendar" title="Return daily">
            Pray, reflect, and build a habit that sticks.
          </StepCard>
          <StepCard number="3" icon="remember" title="See your story unfold">
            Look back and notice God’s faithfulness.
          </StepCard>
        </div>
      </section>

      <section className="built">
        <h2>Built for...</h2>
        <div className="pills">
          <span>Personal prayer</span>
          <span>Holding others up</span>
          <span>Reflection</span>
          <span>Community</span>
        </div>
      </section>

      <section className="closing">
        <div>
          <h2>Start with what’s on your heart.</h2>
          <p>A quiet place to pray, reflect, and remember how God moves.</p>
        </div>
        <div className="closing-actions">
          <a className="button primary" href={APP_URL}>Continue with Google</a>
          <a className="button secondary" href={APP_URL}>
            <LeafIcon /> Explore LIFT
          </a>
        </div>
      </section>

      <section id="home-screen" className="home-screen">
        <h2>Save LIFT to your home screen</h2>
        <p><strong>iPhone:</strong> open the app link, tap Share, then tap Add to Home Screen.</p>
        <p><strong>Android:</strong> open the app link, tap the browser menu, then tap Add to Home screen.</p>
      </section>

      <footer>
        <LeafIcon />
        <strong>logmyprayers.com</strong>
        <span>Open the web app anytime.</span>
      </footer>
    </main>
  );
}
