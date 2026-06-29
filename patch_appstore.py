import sys

path = "src/App.jsx"
with open(path) as f:
    src = f.read()
with open(path + ".bak", "w") as f:
    f.write(src)

def patch(src, old, new, label):
    n = src.count(old)
    if n != 1:
        print(f"  ✗ {label}: anchor found {n} times (expected 1) — ABORTING, nothing written")
        sys.exit(1)
    print(f"  ✓ {label}")
    return src.replace(old, new)

# 1. Add App Store URL constant after APP_URL
src = patch(src,
    'const APP_URL = "https://logmyprayers.app";',
    'const APP_URL = "https://logmyprayers.app";\nconst APPSTORE_URL = "https://apps.apple.com/app/id6780954227";',
    "add APPSTORE_URL constant")

# 2. Add a reusable AppStoreBadge component before the App component.
#    Insert it right after the APPSTORE_URL line block.
badge_component = '''const APPSTORE_URL = "https://apps.apple.com/app/id6780954227";

function AppStoreBadge() {
  return (
    
      href={APPSTORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="appstore-badge"
      aria-label="Download on the App Store"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" role="img" aria-hidden="true">
        <rect width="120" height="40" rx="8" fill="#000"/>
        <g fill="#fff">
          <path d="M24.77 20.3a4.95 4.95 0 0 1 2.36-4.15 5.07 5.07 0 0 0-3.99-2.16c-1.68-.18-3.31 1-4.17 1-.87 0-2.19-.98-3.61-.95a5.32 5.32 0 0 0-4.48 2.73c-1.93 3.35-.49 8.27 1.36 10.98.93 1.33 2.01 2.81 3.43 2.76 1.39-.06 1.91-.89 3.58-.89 1.66 0 2.13.89 3.58.85 1.48-.02 2.42-1.33 3.31-2.67a10.96 10.96 0 0 0 1.51-3.08 4.78 4.78 0 0 1-2.92-4.4zM22.04 12.21a4.87 4.87 0 0 0 1.11-3.49 4.96 4.96 0 0 0-3.21 1.66 4.64 4.64 0 0 0-1.14 3.36 4.1 4.1 0 0 0 3.24-1.53z"/>
        </g>
        <g fill="#fff" font-family="-apple-system, Helvetica, Arial, sans-serif">
          <text x="34" y="16" font-size="7">Download on the</text>
          <text x="34" y="30" font-size="14" font-weight="600">App Store</text>
        </g>
      </svg>
    </a>
  );
}'''
src = patch(src,
    'const APPSTORE_URL = "https://apps.apple.com/app/id6780954227";',
    badge_component,
    "add AppStoreBadge component")

# 3. Hero CTA — add badge above existing buttons
src = patch(src,
'''        <div className="cta-stack">
          <a className="button primary" href={APP_URL}>
            <LeafIcon /> Open the App
          </a>
          <a className="button secondary" href="#home-screen">
            <span className="plus">＋</span> Save to Home Screen
          </a>
        </div>''',
'''        <div className="cta-stack">
          <AppStoreBadge />
          <a className="button primary" href={APP_URL}>
            <LeafIcon /> Open the Web App
          </a>
          <a className="button secondary" href="#home-screen">
            <span className="plus">＋</span> Save to Home Screen
          </a>
        </div>''',
    "hero CTA: add badge + relabel")

# 4. Closing CTA — add badge
src = patch(src,
'''        <div className="closing-actions">
          <a className="button primary" href={APP_URL}>Continue with Google</a>
          <a className="button secondary" href={APP_URL}>
            <LeafIcon /> Explore LIFT
          </a>
        </div>''',
'''        <div className="closing-actions">
          <AppStoreBadge />
          <a className="button primary" href={APP_URL}>
            <LeafIcon /> Open the Web App
          </a>
        </div>''',
    "closing CTA: add badge + replace")

with open(path, "w") as f:
    f.write(src)
print("\nAll patches applied. Backup at src/App.jsx.bak")
