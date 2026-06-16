export default function Privacy() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#333", lineHeight: 1.7 }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ color: "#666", marginBottom: 40 }}>Last updated: June 16, 2026</p>
      <p>This Privacy Policy describes our policies on the collection, use and disclosure of your information when you use LIFT Prayer Journal.</p>
      <h2>Information We Collect</h2>
      <ul>
        <li>Email address and name (via Google Sign-In)</li>
        <li>Prayer requests and journal entries you create</li>
        <li>Usage data such as device type, IP address, and app activity</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide and maintain the LIFT service</li>
        <li>To manage your account and authenticate you</li>
        <li>To enable social features like sharing prayers with friends</li>
        <li>To send push notifications about prayer activity</li>
      </ul>
      <h2>Data Sharing</h2>
      <p>We do not sell your personal data. We may share data with service providers (Firebase, Google) who help us operate the app. Your prayers are private by default unless you choose to share them.</p>
      <h2>Children's Privacy</h2>
      <p>LIFT is not intended for users under the age of 16.</p>
      <h2>Contact Us</h2>
      <p>Questions? Email us at <a href="mailto:logitfortransformation@gmail.com">logitfortransformation@gmail.com</a></p>
    </div>
  );
}
