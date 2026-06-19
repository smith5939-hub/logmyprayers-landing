export default function DeleteAccount() {
  return (
    <div className="page">
      <div className="hero" style={{ minHeight: "auto", paddingBottom: 48 }}>
        <div className="dove-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="hero-dove-icon">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 6.5c0-2.5 2-4.5 4.5-4.5S21 4 21 6.5c0 4-4.5 7-9 11C7.5 13.5 3 10.5 3 6.5A4.5 4.5 0 017.5 2C10 2 12 4 12 6.5z" />
          </svg>
        </div>
        <div className="wordmark">LIFT</div>
        <div className="tagline">PRAYER JOURNAL</div>
      </div>

      <div className="section" style={{ paddingTop: 12 }}>
        <h2>Account &amp; Data Deletion</h2>
        <p className="section-copy">
          We respect your right to control your data. If you'd like to delete your LIFT account
          and all associated data, follow the steps below.
        </p>
      </div>

      <div style={{ width: "min(calc(100% - 44px), 760px)", margin: "0 auto 32px" }}>
        <div className="home-screen" style={{ marginBottom: 18, textAlign: "left" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: "#5c8068", marginBottom: 10 }}>
            Option 1 — Delete from the app
          </h3>
          <p style={{ color: "#6b6b6b", lineHeight: 1.6, margin: 0 }}>
            Open LIFT → tap <strong>Profile</strong> → scroll to <strong>Account</strong> → tap <strong>Delete Account</strong>.
            This will permanently remove your account and all prayer data.
          </p>
        </div>

        <div className="home-screen" style={{ marginBottom: 18, textAlign: "left" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: "#5c8068", marginBottom: 10 }}>
            Option 2 — Request via email
          </h3>
          <p style={{ color: "#6b6b6b", lineHeight: 1.6, margin: "0 0 16px" }}>
            Send an email to{" "}
            <a href="mailto:logitfortransformation@gmail.com?subject=LIFT%20Account%20Deletion%20Request"
              style={{ color: "#5c8068", fontWeight: 600, textDecoration: "underline" }}>
              logitfortransformation@gmail.com
            </a>{" "}
            with the subject <strong>"LIFT Account Deletion Request"</strong> and include
            the email address on your LIFT account. We'll process your request within 30 days.
          </p>
          <a href="mailto:logitfortransformation@gmail.com?subject=LIFT%20Account%20Deletion%20Request"
            className="button primary"
            style={{ maxWidth: 320, fontSize: 17, minHeight: 52 }}>
            Email Deletion Request
          </a>
        </div>

        <div className="home-screen" style={{ textAlign: "left" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: "#5c8068", marginBottom: 10 }}>
            What data is deleted
          </h3>
          <ul style={{ color: "#6b6b6b", lineHeight: 1.8, paddingLeft: 20, margin: "0 0 12px" }}>
            <li>Your account profile (name, email, profile photo)</li>
            <li>All personal prayer requests and journal entries</li>
            <li>Prayer history and answered prayer records</li>
            <li>Circle memberships and friend connections</li>
            <li>Notification preferences and device tokens</li>
          </ul>
          <p style={{ color: "#6b6b6b", lineHeight: 1.6, margin: 0, fontSize: 15 }}>
            <strong>Note:</strong> Prayer requests previously shared with friends or circles
            may remain visible to those users until individually removed. Anonymous analytics
            data may be retained for up to 90 days.
          </p>
        </div>
      </div>

      <footer>
        <span>© {new Date().getFullYear()} LIFT Prayer Journal · All rights reserved</span>
        <a href="/privacy" style={{ color: "#5c8068", fontWeight: 600 }}>Privacy Policy</a>
      </footer>
    </div>
  );
}
