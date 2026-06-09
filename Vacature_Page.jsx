// Ymatch — Vacature single page.
//
// Layout: breadcrumb · job hero (sector + title + salary + meta) · 2-col main
// (description / sidebar with recruiter + apply) · related vacatures · CTA.
//
// Voice rules from the design system: "je/jij" always, salary always visible,
// active sentences ("Wij bellen je morgen", not "er zal contact worden
// opgenomen"), no "marktconform", no em-dashes in subtitles.

// ── Page-level state container reads the job from a global JOB const set in
// the host HTML. Keeps this file presentation-only.

function VacatureBreadcrumb({ sector }) {
  return (
    <div style={{ borderBottom: "1px solid var(--line)", background: "var(--card)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 40px", display: "flex", alignItems: "center", gap: "10px" }}>
        <a href="index.html" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none" }}>
          ← Home
        </a>
        <span style={{ color: "var(--subtle)" }}>·</span>
        <a href="index.html#vacatures" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none" }}>
          Vacaturebank
        </a>
        <span style={{ color: "var(--subtle)" }}>·</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ink)" }}>
          {sector}
        </span>
      </div>
    </div>
  );
}

// ── Hero — energetic, brand-forward. Meta and salary visible above the fold
// alongside the title. Two columns: typography stack left, editorial photo
// right; on mobile the photo collapses to a top banner.
function VacatureHero({ job }) {
  const { Icons, Badge } = window.YmatchDesignSystem_7d0d09 ? { Badge: window.YmatchDesignSystem_7d0d09.Badge, Icons: window.Icons } : { Icons: window.Icons };
  const isMobile = window.useIsMobile();
  return (
    <section style={{ position: "relative", padding: isMobile ? "32px 20px 40px" : "48px 40px 64px" }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr",
        gap: isMobile ? "32px" : "56px",
        alignItems: "center",
      }}>
        {/* Left — typography stack */}
        <div>
          {/* Job-status strip: vac-number, posted, responses */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px", flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--orange)" }}>
              <span style={{ position: "relative", width: "8px", height: "8px" }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--orange)" }} />
                <span style={{ position: "absolute", inset: "-3px", borderRadius: "50%", background: "var(--orange)", opacity: .25 }} />
              </span>
              Nieuwe vacature
            </span>
            <span style={{ color: "var(--subtle)" }}>·</span>
            <span style={{ color: "var(--muted)" }}>{job.posted}</span>
            <span style={{ color: "var(--subtle)" }}>·</span>
            <span style={{ color: "var(--muted)" }}>{job.responses} reacties</span>
            <span style={{ color: "var(--subtle)" }}>·</span>
            <span style={{ color: "var(--subtle)" }}>{job.id}</span>
          </div>

          {/* Badges */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
            {job.badges.map((b, i) => <Badge key={i} tone={b.tone}>{b.label}</Badge>)}
          </div>

          {/* Title + italic location subtitle inline */}
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: isMobile ? "clamp(48px, 11vw, 64px)" : "clamp(60px, 7.2vw, 96px)",
            letterSpacing: "-.05em", lineHeight: ".92",
            color: "var(--ink)", margin: "0 0 8px", textWrap: "balance",
          }}>
            {job.title}
          </h1>
          <div style={{
            fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 300,
            fontSize: isMobile ? "clamp(22px, 5vw, 28px)" : "clamp(26px, 2.8vw, 36px)",
            letterSpacing: "-.02em", lineHeight: 1, color: "var(--muted)", marginBottom: "20px",
          }}>
            in {job.locationShort}.
          </div>

          {/* Caveat hand-lettering — personal touch, like an annotation */}
          <p style={{
            fontFamily: "var(--font-hand)", fontSize: "22px", color: "var(--blue)",
            margin: "0 0 24px", lineHeight: 1.15, transform: "rotate(-1deg)", transformOrigin: "left", maxWidth: "440px",
          }}>
            {job.handNote}
          </p>

          {/* Pitch — short, ymatch voice */}
          <p style={{ fontFamily: "var(--font-display)", fontSize: isMobile ? "16px" : "18px", lineHeight: 1.55, color: "var(--ink)", margin: "0 0 28px", maxWidth: "520px" }}>
            {job.pitch}
          </p>

          {/* Salary lockup — primary highlight, green-tinted */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "16px",
            background: "var(--green-tint)", border: "1px solid var(--green-soft)",
            borderRadius: "var(--r)", padding: "14px 20px", marginBottom: "16px",
          }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "50%", background: "var(--green)",
              display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0,
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "18px",
            }}>
              €
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--green)" }}>
                {job.salaryLabel || "Salaris"}
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: isMobile ? "22px" : "26px", letterSpacing: "-.025em", lineHeight: 1.1, color: "var(--green-deep)" }}>
                {job.salary}
              </div>
            </div>
          </div>

          {/* Meta chips — scannable, no labels */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "32px", flexWrap: "wrap" }}>
            {job.metaChips.map((m, i) => (
              <span key={i} style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "var(--card)", border: "1px solid var(--line)",
                borderRadius: "var(--r-pill)", padding: "8px 14px",
                fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "var(--ink)",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)" }}>
                  {m.label}
                </span>
                {m.value}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#sollicitatie" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px",
              color: "#fff", background: "var(--ink)", border: 0, textDecoration: "none",
              padding: "16px 28px", borderRadius: "var(--r-sm)", cursor: "pointer",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--ink-2)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--ink)"}>
              Solliciteer direct <Icons.arrow size={16} stroke="#fff" />
            </a>
            <a href="https://wa.me/31612345678" target="_blank" rel="noopener" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px",
              color: "#fff", background: "var(--wa)", border: 0, textDecoration: "none",
              padding: "16px 24px", borderRadius: "var(--r-sm)", cursor: "pointer",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--wa-deep)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--wa)"}>
              <window.WhatsAppGlyph /> App {job.recruiter.firstName}
            </a>
          </div>
        </div>

        {/* Right — editorial brand visual */}
        {!isMobile && (
          <div style={{ position: "relative" }}>
            {/* Bolt motif behind */}
            <div aria-hidden="true" style={{ position: "absolute", top: "-30px", right: "-30px", width: "220px", height: "220px", borderRadius: "50%", border: "1.5px solid var(--orange)", opacity: .16, pointerEvents: "none" }} />
            <div aria-hidden="true" style={{ position: "absolute", bottom: "-20px", left: "-30px", width: "160px", height: "160px", borderRadius: "50%", background: "var(--orange)", opacity: .08, pointerEvents: "none" }} />

            <div style={{
              position: "relative",
              background: "var(--card)", borderRadius: "var(--r-lg)",
              border: "1px solid var(--line)", boxShadow: "var(--shadow-lg)",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "var(--orange)", zIndex: 2 }} />
              <img
                src={job.heroImage}
                alt=""
                style={{ display: "block", width: "100%", height: "560px", objectFit: "cover", objectPosition: "center 30%" }} />
            </div>

            {/* Floating sector tag, top-left of image */}
            <div style={{
              position: "absolute", top: "24px", left: "-12px", zIndex: 3,
              background: "var(--ink)", color: "#fff",
              padding: "10px 16px", borderRadius: "var(--r-sm)", boxShadow: "var(--shadow-lg)",
              fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase",
              display: "inline-flex", alignItems: "center", gap: "8px",
            }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--orange)" }} />
              {job.sector} · 34 vacatures
            </div>

            {/* Floating quote, bottom-right of image */}
            <div style={{
              position: "absolute", bottom: "-24px", right: "-12px", zIndex: 3, maxWidth: "260px",
              background: "var(--card)", border: "1px solid var(--line)",
              padding: "16px 20px", borderRadius: "var(--r)", boxShadow: "var(--shadow-lg)",
              transform: "rotate(1deg)",
            }}>
              <p style={{ fontFamily: "var(--font-hand)", fontSize: "20px", color: "var(--ink)", margin: 0, lineHeight: 1.15 }}>
                "{job.recruiter.firstName} kent de plek persoonlijk."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
                <img src={job.recruiter.photo} alt="" style={{ width: "22px", height: "22px", borderRadius: "50%", objectFit: "cover" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)" }}>
                  {job.recruiter.name}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Section header for in-body sections ──
function VacatureSection({ title, em, children }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "clamp(26px, 3.4vw, 36px)", letterSpacing: "-.035em", lineHeight: 1.02,
        margin: "0 0 16px", color: "var(--ink)",
      }}>
        {title} {em ? <em style={{ fontStyle: "italic", fontWeight: 300 }}>{em}</em> : null}
      </h2>
      {children}
    </div>
  );
}

// ── Numbered list with orange index pill — used for "Wat je doet" etc. ──
function NumberedList({ items, accent = "var(--orange)" }) {
  return (
    <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
      {items.map((t, i) => (
        <li key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <span style={{
            flexShrink: 0, width: "28px", height: "28px", borderRadius: "var(--r-xs)",
            background: accent, color: "#fff",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "11px", letterSpacing: ".04em",
          }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <span style={{ fontSize: "16px", lineHeight: 1.55, color: "var(--ink)", paddingTop: "4px" }}>
            {t}
          </span>
        </li>
      ))}
    </ol>
  );
}

// ── Bulleted "what we offer" list with a check icon ──
function CheckList({ items }) {
  const { Icons } = window;
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 32px" }}>
      {items.map((t, i) => (
        <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
          <span style={{
            flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%",
            background: "var(--green-tint)", border: "1px solid var(--green-soft)",
            display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: "2px",
          }}>
            <Icons.check size={12} stroke="var(--green)" />
          </span>
          <span style={{ fontSize: "15px", lineHeight: 1.5, color: "var(--ink)" }}>{t}</span>
        </li>
      ))}
    </ul>
  );
}

// ── Sticky sidebar with recruiter + apply CTA + meta + share ──
function VacatureSidebar({ job }) {
  const { Icons, WhatsAppGlyph } = window;
  const isMobile = window.useIsMobile();
  return (
    <aside style={{ position: isMobile ? "static" : "sticky", top: "96px" }}>
      {/* Apply card */}
      <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "var(--r)", padding: "0", boxShadow: "var(--shadow-sm)", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--orange)", zIndex: 2 }} />

        {/* Recruiter lockup */}
        <div style={{ padding: "24px 24px 20px", borderBottom: "1px solid var(--line)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img src={job.recruiter.photo} alt={job.recruiter.name}
                style={{ width: "58px", height: "58px", borderRadius: "50%", objectFit: "cover", display: "block" }} />
              <span style={{ position: "absolute", bottom: 0, right: 0, width: "14px", height: "14px", borderRadius: "50%", background: "var(--green)", border: "2.5px solid var(--card)" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--orange)" }}>
                Jouw consultant
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "17px", letterSpacing: "-.02em", color: "var(--ink)", lineHeight: 1.15, marginTop: "2px" }}>
                {job.recruiter.name}
              </div>
              <div style={{ fontFamily: "var(--font-hand)", fontSize: "16px", color: "var(--blue)", lineHeight: 1, marginTop: "4px" }}>
                {job.recruiter.tagline}
              </div>
            </div>
          </div>

          {/* Primary apply (ink) + secondary WhatsApp */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="#sollicitatie" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px",
              color: "#fff", background: "var(--ink)", border: 0, textDecoration: "none",
              padding: "14px 20px", borderRadius: "var(--r-sm)", cursor: "pointer", width: "100%", boxSizing: "border-box",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--ink-2)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--ink)"}>
              Solliciteer direct <Icons.arrow size={16} stroke="#fff" />
            </a>
            <a href="https://wa.me/31612345678" target="_blank" rel="noopener" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px",
              color: "#fff", background: "var(--wa)", textDecoration: "none",
              padding: "12px 20px", borderRadius: "var(--r-sm)", width: "100%", boxSizing: "border-box",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--wa-deep)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--wa)"}>
              <WhatsAppGlyph /> App {job.recruiter.firstName} direct
            </a>
            <a href={`tel:${job.recruiter.phone.replace(/\s/g, "")}`} style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px",
              color: "var(--ink)", background: "transparent",
              border: "1.5px solid var(--line-strong)",
              padding: "11px 20px", borderRadius: "var(--r-sm)", width: "100%", boxSizing: "border-box",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--ink)"; e.currentTarget.style.background = "var(--bg-2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line-strong)"; e.currentTarget.style.background = "transparent"; }}>
              <Icons.phone size={15} stroke="var(--ink)" /> {job.recruiter.phone}
            </a>
          </div>

          <p style={{ fontSize: "12px", color: "var(--subtle)", margin: "16px 0 0", lineHeight: 1.5, textAlign: "center" }}>
            Geen formulieren. Geen "we nemen contact op". <b style={{ color: "var(--ink)" }}>{job.recruiter.firstName} belt je binnen 1 werkdag.</b>
          </p>
        </div>

        {/* Job meta */}
        <div style={{ padding: "20px 24px" }}>
          {[
            { l: "Vacaturenummer", v: job.id },
            { l: "Geplaatst",       v: job.posted },
            { l: "Reacties",        v: `${job.responses} kandidaten` },
            { l: "Sluit",           v: job.closes },
          ].map((row, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "8px 0",
              borderBottom: i < 3 ? "1px dashed var(--line)" : "none",
            }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)" }}>
                {row.l}
              </span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)" }}>
                {row.v}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Share */}
      <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--subtle)", marginRight: "auto" }}>
          Stuur door
        </span>
        {[
          { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent("Bekijk deze vacature: " + job.title)}` },
          { label: "Mail",     href: `mailto:?subject=${encodeURIComponent(job.title + " - Ymatch")}` },
          { label: "Kopieer",  href: "#" },
        ].map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener" style={{
            fontFamily: "var(--font-display)", fontSize: "12px", fontWeight: 600,
            color: "var(--ink)", textDecoration: "none",
            border: "1px solid var(--line-strong)", padding: "6px 12px", borderRadius: "var(--r-pill)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--orange)"; e.currentTarget.style.color = "var(--orange)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line-strong)"; e.currentTarget.style.color = "var(--ink)"; }}>
            {s.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

// ── Main body — sections sit in a 2-col grid w/ sticky sidebar ──
function VacatureBody({ job }) {
  const isMobile = window.useIsMobile();
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "32px 20px 0" : "48px 40px 0" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.7fr 1fr",
        gap: isMobile ? "40px" : "64px",
        alignItems: "flex-start",
      }}>
        <div>
          <VacatureSection title="Wat je" em="doet.">
            {job.intro?.map((p, i) => (
              <p key={i} style={{ fontSize: "17px", lineHeight: 1.65, color: "var(--ink)", margin: i === 0 ? "0 0 16px" : "0 0 16px" }}>
                {p}
              </p>
            ))}
            <NumberedList items={job.tasks} />
          </VacatureSection>

          <VacatureSection title="Wat je" em="meebrengt.">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {job.requirements.map((t, i) => (
                <li key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--orange)", marginTop: "11px", flexShrink: 0 }} />
                  <span style={{ fontSize: "16px", lineHeight: 1.55, color: "var(--ink)" }}>{t}</span>
                </li>
              ))}
            </ul>
          </VacatureSection>

          <VacatureSection title="Wat wij" em="bieden.">
            <CheckList items={job.offer} />
          </VacatureSection>

          <VacatureSection title="Over de" em="werkgever.">
            <p style={{ fontSize: "16px", lineHeight: 1.65, color: "var(--ink)", margin: "0 0 16px" }}>
              {job.employer.about}
            </p>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginTop: "16px",
            }}>
              {job.employer.facts.map((f, i) => (
                <div key={i} style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "var(--r)", padding: "16px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "26px", letterSpacing: "-.03em", color: "var(--ink)", lineHeight: 1 }}>
                    {f.n}<span style={{ color: "var(--orange)", fontSize: "16px" }}>{f.suf}</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", marginTop: "8px" }}>
                    {f.l}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.55, margin: "16px 0 0", fontStyle: "italic" }}>
              {job.employer.note}
            </p>
          </VacatureSection>

          <VacatureSection title="Hoe het" em="verder gaat.">
            <NumberedList accent="var(--ink)" items={job.process} />
          </VacatureSection>
        </div>

        <VacatureSidebar job={job} />
      </div>
    </div>
  );
}

// ── In-page sollicitatie form — one click from the hero, no modal. ──
function VacatureApplyForm({ job }) {
  const { TextField, Textarea } = window.YmatchDesignSystem_7d0d09;
  const { Icons, WhatsAppGlyph } = window;
  const isMobile = window.useIsMobile();
  const [form, setForm] = React.useState({ naam: "", email: "", tel: "", jobAlert: false, privacy: false });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.checked }));

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.naam.trim()) next.naam = "Vul je naam in.";
    if (!form.email.trim()) next.email = "Vul je e-mailadres in.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Geen geldig e-mailadres.";
    if (!form.privacy) next.privacy = "Vink aan om door te gaan.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section id="sollicitatie" style={{
      background: "var(--card)",
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)",
      marginTop: isMobile ? "64px" : "96px",
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, rgba(46,74,107,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(46,74,107,.05) 1px, transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "-120px", right: "-120px", width: "440px", height: "440px", borderRadius: "50%", border: "1.5px solid var(--orange)", opacity: .10, pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", border: "1.5px solid var(--orange)", opacity: .14, pointerEvents: "none" }} />

      <div style={{
        position: "relative", maxWidth: "1200px", margin: "0 auto",
        padding: isMobile ? "56px 20px" : "88px 40px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1.1fr",
        gap: isMobile ? "32px" : "72px",
        alignItems: "flex-start",
      }}>
        {/* Left — pitch + consultant lockup */}
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--orange)", display: "inline-block", marginBottom: "16px" }}>
            Solliciteren
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: isMobile ? "clamp(32px, 8vw, 44px)" : "clamp(40px, 4.6vw, 60px)",
            letterSpacing: "-.045em", lineHeight: ".95", margin: 0, color: "var(--ink)", textWrap: "balance",
          }}>
            Twee velden.<br/><em style={{ fontStyle: "italic", fontWeight: 300 }}>De rest doen wij.</em>
          </h2>
          <p style={{ fontSize: isMobile ? "16px" : "18px", lineHeight: 1.55, color: "var(--muted)", margin: "20px 0 28px", maxWidth: "440px" }}>
            Naam en e-mail zijn genoeg. {job.recruiter.firstName} belt je binnen 1 werkdag om de rest
            te bespreken, niet om door een formulier heen te ploeteren.
          </p>

          {/* Consultant lockup */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 20px", background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--r)", marginBottom: "20px" }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img src={job.recruiter.photo} alt={job.recruiter.name}
                style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", display: "block" }} />
              <span style={{ position: "absolute", bottom: 0, right: 0, width: "13px", height: "13px", borderRadius: "50%", background: "var(--green)", border: "2.5px solid #fff" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--orange)" }}>
                {job.recruiter.firstName} belt je binnen 1 werkdag
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", color: "var(--ink)", marginTop: "2px" }}>
                {job.recruiter.name} <span style={{ color: "var(--muted)", fontWeight: 500 }}>· {job.recruiter.role}</span>
              </div>
            </div>
          </div>

          {/* Alt channels */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="https://wa.me/31612345678" target="_blank" rel="noopener" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px",
              color: "#fff", background: "var(--wa)", textDecoration: "none",
              padding: "12px 20px", borderRadius: "var(--r-sm)",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--wa-deep)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--wa)"}>
              <WhatsAppGlyph /> WhatsApp {job.recruiter.firstName}
            </a>
            <a href={`tel:${job.recruiter.phone.replace(/\s/g, "")}`} style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px",
              color: "var(--ink)", background: "transparent", textDecoration: "none",
              border: "1.5px solid var(--line-strong)",
              padding: "11px 20px", borderRadius: "var(--r-sm)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--ink)"; e.currentTarget.style.background = "var(--bg-2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line-strong)"; e.currentTarget.style.background = "transparent"; }}>
              <Icons.phone size={15} stroke="var(--ink)" /> {job.recruiter.phone}
            </a>
          </div>
        </div>

        {/* Right — form card */}
        <div style={{
          background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--r-lg)",
          boxShadow: "var(--shadow)", padding: isMobile ? "28px 24px" : "40px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "var(--orange)", zIndex: 2 }} />

          {sent ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                background: "var(--green-tint)", border: "1px solid var(--green-soft)",
                display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "20px",
              }}>
                <Icons.check size={32} stroke="var(--green)" />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "26px", letterSpacing: "-.025em", margin: "0 0 10px", color: "var(--ink)" }}>
                Bedankt, <em style={{ fontStyle: "italic", fontWeight: 300 }}>{form.naam.split(" ")[0]}</em>.
              </h3>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: "var(--muted)", margin: "0 auto", maxWidth: "360px" }}>
                {job.recruiter.firstName} belt je binnen <b style={{ color: "var(--ink)" }}>1 werkdag</b> over de
                vacature <b style={{ color: "var(--ink)" }}>{job.title}</b>. Geen e-mail, geen tussenpersoon —
                gewoon zijn nummer aan de andere kant.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "22px", letterSpacing: "-.02em", margin: 0, color: "var(--ink)", lineHeight: 1.15 }}>
                  Solliciteer op <em style={{ fontStyle: "italic", fontWeight: 300 }}>{job.title}</em>
                </h3>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--subtle)" }}>
                  ± 30 seconden
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <TextField
                  label="Naam *"
                  placeholder="Voor- en achternaam"
                  value={form.naam}
                  onChange={update("naam")}
                  error={errors.naam}
                  autoComplete="name"
                />
                <TextField
                  label="E-mailadres *"
                  type="email"
                  placeholder="je@voorbeeld.nl"
                  value={form.email}
                  onChange={update("email")}
                  error={errors.email}
                  autoComplete="email"
                />
                <TextField
                  label="Telefoon"
                  hint="Optioneel. Met nummer bellen we, anders mailen we."
                  type="tel"
                  placeholder="+31 6 12 34 56 78"
                  value={form.tel}
                  onChange={update("tel")}
                  autoComplete="tel"
                />

                {/* Optional job alert + required privacy consent.
                    Checkbox is hand-rolled (no DS Checkbox) but uses DS
                    tokens for colour, border-radius and focus ring. */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
                  <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer" }}>
                    <input type="checkbox" checked={form.jobAlert} onChange={toggle("jobAlert")}
                      style={{ width: "18px", height: "18px", marginTop: "2px", accentColor: "var(--orange)", flexShrink: 0, cursor: "pointer" }} />
                    <span style={{ fontSize: "14px", lineHeight: 1.5, color: "var(--ink)" }}>
                      Stuur me ook nieuwe vacatures in <b>Bouw</b>. <span style={{ color: "var(--muted)" }}>Eén mail per week, uitschrijven met één klik.</span>
                    </span>
                  </label>
                  <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer" }}>
                    <input type="checkbox" checked={form.privacy} onChange={toggle("privacy")}
                      style={{ width: "18px", height: "18px", marginTop: "2px", accentColor: "var(--orange)", flexShrink: 0, cursor: "pointer" }} />
                    <span style={{ fontSize: "14px", lineHeight: 1.5, color: "var(--ink)" }}>
                      Ik ga akkoord met de{" "}
                      <a href="#" style={{ color: "var(--orange)", fontWeight: 600 }}>privacyvoorwaarden</a>.{" "}
                      <span style={{ color: "var(--danger)", fontWeight: 700 }}>*</span>
                    </span>
                  </label>
                  {errors.privacy && (
                    <span style={{ fontSize: "12px", color: "var(--danger)", fontWeight: 600, paddingLeft: "30px" }}>
                      {errors.privacy}
                    </span>
                  )}
                </div>
              </div>

              <button type="submit" style={{
                width: "100%", marginTop: "24px",
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px",
                color: "#fff", background: "var(--ink)", border: 0,
                padding: "16px 24px", borderRadius: "var(--r-sm)", cursor: "pointer",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--ink-2)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--ink)"}>
                Verstuur sollicitatie <Icons.arrow size={16} stroke="#fff" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Related vacatures — three cards from the same sector ──
function RelatedVacatures({ jobs }) {
  const { VacatureCard } = window.YmatchDesignSystem_7d0d09;
  const isMobile = window.useIsMobile();
  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "64px 20px 0" : "112px 40px 0" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "32px", marginBottom: "32px", flexWrap: "wrap" }}>
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--orange)", display: "inline-block", marginBottom: "12px" }}>
            Past dit nog niet?
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: isMobile ? "clamp(28px, 7vw, 36px)" : "clamp(32px, 3.6vw, 44px)",
            letterSpacing: "-.035em", lineHeight: 1.02, margin: 0, color: "var(--ink)",
          }}>
            Meer werk in <em style={{ fontStyle: "italic", fontWeight: 300 }}>Bouw</em>.
          </h2>
        </div>
        <a href="index.html#vacatures" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px", color: "var(--ink)", textDecoration: "none", borderBottom: "2px solid var(--orange)", paddingBottom: "2px", whiteSpace: "nowrap" }}>
          Alle 34 in Bouw →
        </a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "20px" }}>
        {jobs.map((j, i) => <VacatureCard key={i} {...j} onClick={() => {}} />)}
      </div>
    </section>
  );
}

// ── Closing CTA — compact band, NOT fully orange ──
function VacatureClosingCTA({ recruiter }) {
  const { Icons, WhatsAppGlyph } = window;
  const isMobile = window.useIsMobile();
  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "56px 20px 80px" : "112px 40px 120px" }}>
      <div style={{
        background: "var(--ink)", color: "#fff", borderRadius: "var(--r-lg)",
        padding: isMobile ? "40px 24px" : "56px 56px", position: "relative", overflow: "hidden",
        display: "grid", gridTemplateColumns: isMobile ? "1fr" : "auto 1fr auto", gap: isMobile ? "24px" : "48px", alignItems: "center",
      }}>
        {/* Subtle dotted-grid overlay on the ink card */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1.2px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-80px", right: "-60px", width: "260px", height: "260px", borderRadius: "50%", border: "1px solid rgba(233,78,27,.20)", pointerEvents: "none" }} />

        {/* Recruiter photo */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: isMobile ? "flex-start" : "center" }}>
          <div style={{ position: "relative" }}>
            <img src={recruiter.photo} alt={recruiter.name}
              style={{ width: isMobile ? "72px" : "104px", height: isMobile ? "72px" : "104px", borderRadius: "50%", objectFit: "cover", border: "3px solid #fff", display: "block" }} />
            <span style={{ position: "absolute", bottom: "2px", right: "2px", width: "20px", height: "20px", borderRadius: "50%", background: "var(--green)", border: "3px solid var(--ink)" }} />
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "10px" }}>
            Nog twijfels?
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: isMobile ? "clamp(28px, 8vw, 38px)" : "clamp(32px, 3.6vw, 46px)",
            letterSpacing: "-.035em", lineHeight: 1.0, margin: 0, color: "#fff", textWrap: "balance",
          }}>
            App {recruiter.firstName}. <em style={{ fontStyle: "italic", fontWeight: 300 }}>Hij kent de plek.</em>
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.55, color: "rgba(255,255,255,.7)", margin: "12px 0 0", maxWidth: "440px" }}>
            Vragen over salaris, sfeer of waarom dit werk past? {recruiter.firstName} antwoordt binnen 1 werkdag.
          </p>
        </div>

        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
          <a href="https://wa.me/31612345678" target="_blank" rel="noopener" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px",
            color: "#fff", background: "var(--wa)", textDecoration: "none",
            padding: "14px 22px", borderRadius: "var(--r-sm)", whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "var(--wa-deep)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "var(--wa)"}>
            <WhatsAppGlyph /> WhatsApp {recruiter.firstName}
          </a>
          <a href={`tel:${recruiter.phone.replace(/\s/g, "")}`} style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px",
            color: "#fff", background: "transparent", textDecoration: "none",
            border: "1.5px solid rgba(255,255,255,.20)",
            padding: "12px 22px", borderRadius: "var(--r-sm)", whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,.40)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,.20)"; }}>
            <Icons.phone size={15} stroke="#fff" /> {recruiter.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  VacatureBreadcrumb, VacatureHero, VacatureBody,
  VacatureSection, NumberedList, CheckList,
  VacatureSidebar, VacatureApplyForm, RelatedVacatures, VacatureClosingCTA,
});
