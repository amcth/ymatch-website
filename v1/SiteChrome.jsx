// Ymatch — chrome (header + footer) + Lucide icons. Header uses the warm-paper
// translucent backdrop the spec calls for; footer is the only dark surface
// besides the SocialProof band.
const ic = (paths, props = {}) => (
  <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none"
    stroke={props.stroke || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
);
const Icons = {
  search:   (p) => ic(<><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></>, p),
  pin:      (p) => ic(<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>, p),
  home:     (p) => ic(<><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>, p),
  wrench:   (p) => ic(<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>, p),
  monitor:  (p) => ic(<><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>, p),
  arrow:    (p) => ic(<><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>, p),
  phone:    (p) => ic(<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>, p),
  briefcase:(p) => ic(<><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>, p),
  check:    (p) => ic(<polyline points="20 6 9 17 4 12"/>, p),
  star:     (p) => <svg width={p?.size||16} height={p?.size||16} viewBox="0 0 24 24" fill={p?.fill||"var(--orange)"}><path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8L2 9.3l6.9-1z"/></svg>,
};

function WhatsAppGlyph({ size = 16, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
  );
}

function SiteHeader() {
  const links = [
    { id: "vacatures", label: "Vacatures" },
    { id: "sectoren", label: "Sectoren" },
    { id: "team", label: "Ons team" },
    { id: "werkgever", label: "Werkgever" },
  ];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "rgba(239,234,224,.86)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 40px", display: "flex", alignItems: "center", gap: "32px" }}>
        <a href="#top" style={{ display: "inline-flex" }}>
          <img src="assets/ymatch-logo.svg" alt="Ymatch" style={{ width: "108px", display: "block" }} />
        </a>
        <nav style={{ display: "flex", gap: "2px", marginLeft: "8px" }}>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} style={{
              fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600,
              color: "var(--muted)", textDecoration: "none",
              padding: "10px 14px", borderRadius: "var(--r-sm)", transition: "all .14s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.background = "var(--bg-2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "transparent"; }}>
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", gap: "10px", alignItems: "center" }}>
          <a href="tel:+31101234567" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, letterSpacing: ".04em", color: "var(--ink)", textDecoration: "none" }}>
            <Icons.phone size={14} /> 010 · 123 45 67
          </a>
          <button style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px", color: "#fff", background: "var(--wa)", border: 0, padding: "10px 16px", borderRadius: "var(--r-sm)", cursor: "pointer" }}>
            <WhatsAppGlyph /> WhatsApp
          </button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  const cols = [
    { h: "Sectoren", items: ["Bouw & Afbouw", "Techniek & Installatie", "Office & Commercie", "ZZP opdrachten"] },
    { h: "Voor jou", items: ["Vacaturebank", "Ons team", "Hoe het werkt", "Reviews"] },
    { h: "Voor werkgevers", items: ["Detachering", "Werving & Selectie", "ZZP-bemiddeling", "Tarieven & voorwaarden"] },
  ];
  return (
    <footer style={{ background: "var(--ink)", color: "rgba(255,255,255,.7)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1.2px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "-160px", right: "-160px", width: "520px", height: "520px", borderRadius: "50%", border: "1px solid rgba(233,78,27,.18)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-100px", width: "360px", height: "360px", borderRadius: "50%", border: "1px solid rgba(233,78,27,.10)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "80px 40px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "48px", marginBottom: "56px" }}>
          <div>
            <img src="assets/ymatch-logo-light.svg" alt="Ymatch" style={{ width: "128px", marginBottom: "20px" }} />
            <p style={{ fontFamily: "var(--font-hand)", fontSize: "32px", color: "var(--orange)", margin: "0 0 20px", lineHeight: 1, transform: "rotate(-1.5deg)", transformOrigin: "left" }}>
              Vakmanschap verbindt.
            </p>
            <div style={{ fontSize: "14px", lineHeight: 1.7 }}>
              Hoofdweg 100<br/>
              2908 LC Capelle aan den IJssel<br/>
              <span style={{ color: "rgba(255,255,255,.45)" }}>KvK 12345678 · BTW NL0001.B.01</span>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", marginBottom: "18px" }}>{c.h}</div>
              {c.items.map((x) => (
                <a key={x} href="#" style={{ display: "block", fontSize: "14px", marginBottom: "10px", color: "rgba(255,255,255,.75)", textDecoration: "none" }}>{x}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.10)", paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".04em", color: "rgba(255,255,255,.4)" }}>
            © 2026 YMATCH RECRUITMENT &amp; DETACHERING · ROTTERDAM &amp; OMGEVING
          </div>
          <div style={{ display: "flex", gap: "24px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".04em", color: "rgba(255,255,255,.45)" }}>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>PRIVACY</a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>VOORWAARDEN</a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>COOKIES</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Icons, WhatsAppGlyph, SiteHeader, SiteFooter });
