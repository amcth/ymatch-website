// Ymatch homepage — body sections.
// Order (per brief): Sectoren · Consultants · Vacatures · SocialProof(dark)
//                    · Werkwijze · Reviews · Werkgever · CTA

// ── Small shared eyebrow + section header (the orange-dash + sentence-case
// title with italic emphasis word).
function Eyebrow({ children }) {
  return (
    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--orange)", display: "inline-flex", alignItems: "center", gap: "12px" }}>
      <span style={{ width: "24px", height: "1.5px", background: "var(--orange)" }} />
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, em, tail, sub, align = "left", onDark = false }) {
  const titleColor = onDark ? "#fff" : "var(--ink)";
  const subColor = onDark ? "rgba(255,255,255,.65)" : "var(--muted)";
  return (
    <div style={{ marginBottom: "40px", textAlign: align, maxWidth: align === "center" ? "720px" : "760px", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>
      <div style={{ marginBottom: "16px", justifyContent: align === "center" ? "center" : "flex-start", display: "flex" }}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 800,
        fontSize: "clamp(34px, 4.4vw, 56px)", letterSpacing: "-.04em",
        lineHeight: ".98", margin: 0, color: titleColor, textWrap: "balance",
      }}>
        {title} <em style={{ fontStyle: "italic", fontWeight: 300 }}>{em}</em>{tail ? <span> {tail}</span> : null}
      </h2>
      {sub ? (
        <p style={{ fontSize: "18px", lineHeight: 1.5, color: subColor, margin: "18px 0 0", maxWidth: "560px", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>{sub}</p>
      ) : null}
    </div>
  );
}

// ── 3. Sectoren ──
function SectorenSection() {
  const { SectorCard } = window.YmatchDesignSystem_7d0d09;
  return (
    <section id="sectoren" style={{ maxWidth: "1200px", margin: "0 auto", padding: "112px 40px 0" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "40px", marginBottom: "40px", flexWrap: "wrap" }}>
        <SectionHead eyebrow="Drie sectoren · één team" title="Kies je" em="vakgebied." sub="Wij bemiddelen alleen waar we de mensen, de markt en de gereedschapskist écht kennen. Geen breed jobboard — drie sectoren, drie specialisten." />
        <a href="#vacatures" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", color: "var(--ink)", textDecoration: "none", borderBottom: "2px solid var(--orange)", paddingBottom: "2px", whiteSpace: "nowrap" }}>
          Alle 98 vacatures →
        </a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        <SectorCard scheme="bouw"   title="Bouw"     items={["Timmerman · Metselaar", "Uitvoerder · Wachtbaas", "Voorman · Calculator", "34 actieve vacatures"]} cta="Bekijk Bouw →" onClick={() => {}} />
        <SectorCard scheme="tech"   title="Techniek" items={["Elektromonteur · Lasser", "Installateur · Monteur", "Service-engineer · WTB", "47 actieve vacatures"]} cta="Bekijk Techniek →" onClick={() => {}} />
        <SectorCard scheme="office" title="Office"   items={["Werkvoorbereider · Planner", "Projectsecretaresse", "Calculator · KAM", "17 actieve vacatures"]} cta="Bekijk Office →" onClick={() => {}} />
      </div>
    </section>
  );
}

// ── 4. Consultants — prominent recruiter row (named, photo, WhatsApp) ──
function ConsultantsSection() {
  const { RecruiterCard } = window.YmatchDesignSystem_7d0d09;
  const team = [
    { name: "Jan Bakker",     tagline: "— altijd telefoon op", role: "Consultant Bouw",      initials: "JB", tone: "orange", placements: 47 },
    { name: "Sander Berg",    tagline: "— kent elk gereedschap", role: "Consultant Techniek", initials: "SB", tone: "green",  placements: 52 },
    { name: "Lisa Visser",    tagline: "— regelt het binnen 24u", role: "Consultant Office",    initials: "LV", tone: "blue",   placements: 31 },
    { name: "Marieke de Vries", tagline: "— denkt met je mee", role: "Detachering & ZZP",      initials: "MV", tone: "ink",    placements: 28 },
  ];
  return (
    <section id="team" style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 40px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "flex-end", marginBottom: "48px" }}>
        <SectionHead eyebrow="Geen call center · echte mensen" title="Praat direct met de" em="consultant die jouw vak kent." />
        <div>
          <p style={{ fontSize: "18px", lineHeight: 1.55, color: "var(--muted)", margin: 0, maxWidth: "440px" }}>
            App, bel of mail — geen tussenpersoon, geen ticketsysteem. Onze consultants
            werken zelf in de sector en kennen de opdrachtgevers persoonlijk.
            <b style={{ color: "var(--ink)" }}> Reactie binnen 24 uur, beloofd.</b>
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        {team.map((p) => <RecruiterCard key={p.name} {...p} status="online" />)}
      </div>

      <div style={{ marginTop: "24px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--green)" }} />
          Allemaal online · gemiddelde reactietijd 47 min
        </span>
        <span style={{ flex: 1 }} />
        <a href="#team" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px", color: "var(--ink)", textDecoration: "none", borderBottom: "2px solid var(--orange)", paddingBottom: "2px" }}>
          Maak kennis met het hele team →
        </a>
      </div>
    </section>
  );
}

// ── 5. Vacatures — featured selection from the vacaturebank ──
function VacaturesSection({ jobs }) {
  const { VacatureCard, FilterChip } = window.YmatchDesignSystem_7d0d09;
  const [filter, setFilter] = React.useState("Alle");
  const filters = ["Alle", "Bouw", "Techniek", "Office", "ZZP"];
  const filtered = filter === "Alle" ? jobs : jobs.filter((j) => j.badges.some((b) => b.label.toLowerCase().includes(filter.toLowerCase())));
  return (
    <section id="vacatures" style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 40px 0" }}>
      <SectionHead eyebrow="Vers uit de vacaturebank" title="Werk dat je morgen kunt" em="beginnen." />
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px", flexWrap: "wrap" }}>
        {filters.map((f) => (
          <FilterChip key={f} active={filter === f} onClick={() => setFilter(f)}>{f}</FilterChip>
        ))}
        <span style={{ flex: 1 }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--subtle)" }}>
          {filtered.length} resultaten · sorteer op nieuw
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {filtered.slice(0, 6).map((j, i) => (
          <VacatureCard key={j.title + i} {...j} onClick={() => {}} />
        ))}
      </div>
      <div style={{ marginTop: "36px", display: "flex", justifyContent: "center" }}>
        <button style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px",
          color: "var(--ink)", background: "transparent",
          border: "1.5px solid var(--line-strong)", padding: "14px 28px",
          borderRadius: "var(--r-sm)", cursor: "pointer",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-2)"; e.currentTarget.style.borderColor = "var(--ink)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--line-strong)"; }}>
          Bekijk alle 98 vacatures →
        </button>
      </div>
    </section>
  );
}

// ── 6. Social proof — THE one dark section ──
function SocialProofSection() {
  const stats = [
    { n: "1.000", suf: "+", l: "Bemiddelingen sinds 2014", k: "12 jaar lang, vakman voor vakman." },
    { n: "4.7",   suf: "★", l: "Op 289 Google-reviews",     k: "Gemiddeld over alle drie de sectoren." },
    { n: "92",    suf: "%", l: "Stay-rate na 12 maanden",   k: "Wie via ons start, blijft. Geen draaideur." },
    { n: "47",    suf: "min", l: "Gemiddelde reactietijd", k: "Werkdagen, niet werktijden." },
  ];
  return (
    <section style={{ marginTop: "120px", background: "var(--ink)", color: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Dotted grid + concentric bolt motif on dark */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1.2px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "-120px", left: "-120px", width: "440px", height: "440px", borderRadius: "50%", border: "1px solid rgba(233,78,27,.18)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "-60px",  left: "-60px",  width: "320px", height: "320px", borderRadius: "50%", border: "1px solid rgba(233,78,27,.12)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: "-100px", right: "-80px", width: "260px", height: "260px", borderRadius: "50%", background: "var(--orange)", opacity: .07, pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "96px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "64px", alignItems: "center" }}>
          <div>
            <div style={{ marginBottom: "16px" }}><Eyebrow>De cijfers · geen praatjes</Eyebrow></div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(38px,5vw,64px)", letterSpacing: "-.045em", lineHeight: ".95", margin: 0, color: "#fff" }}>
              Twaalf jaar<br/><em style={{ fontStyle: "italic", fontWeight: 300 }}>vakmanschap</em><br/>verbinden.
            </h2>
            <p style={{ fontFamily: "var(--font-hand)", fontSize: "28px", color: "var(--orange)", margin: "24px 0 0", lineHeight: 1.1, transform: "rotate(-1.5deg)", transformOrigin: "left" }}>
              en we zijn nog niet klaar.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", border: "1px solid rgba(255,255,255,.10)", borderRadius: "var(--r)" }}>
            {stats.map((s, i) => (
              <div key={s.l} style={{
                padding: "32px 28px",
                borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,.10)" : "none",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,.10)" : "none",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "64px", letterSpacing: "-.045em", lineHeight: ".9", color: "#fff" }}>
                  {s.n}<span style={{ color: "var(--orange)" }}>{s.suf}</span>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: ".06em", color: "rgba(255,255,255,.55)", marginTop: "12px", fontWeight: 700 }}>
                  {s.l}
                </div>
                <div style={{ fontSize: "13px", lineHeight: 1.5, color: "rgba(255,255,255,.7)", marginTop: "8px" }}>
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 7. Werkwijze — "Vier stappen. Zonder ruis." ──
function WerkwijzeSection() {
  const { Icons } = window;
  const steps = [
    { n: "01", t: "Bel of app",            d: "Vijf minuten, geen formulier eerst. Vertel wat je zoekt — wij luisteren.",                  meta: "± 5 minuten" },
    { n: "02", t: "Wij matchen",           d: "We kennen onze opdrachtgevers persoonlijk. Geen CV-databank, wel een korte lijst van twee, drie passende plekken.", meta: "Binnen 48 uur" },
    { n: "03", t: "Stel kennis",           d: "Wij gaan mee naar het eerste gesprek. Salaris, uren en voorwaarden liggen vóóraf op tafel.", meta: "Eén gesprek" },
    { n: "04", t: "Start — en wij blijven", d: "Ook na je eerste werkdag bellen we. Niet voor een review, wel om te checken of het klopt.", meta: "Voor altijd" },
  ];
  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 40px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "56px", marginBottom: "48px", alignItems: "flex-end" }}>
        <SectionHead eyebrow="Hoe het werkt" title="Vier stappen." em="Zonder ruis." />
        <p style={{ fontSize: "18px", lineHeight: 1.55, color: "var(--muted)", margin: 0, maxWidth: "520px" }}>
          Geen sollicitatieportaal, geen "we nemen contact op". Een telefoongesprek,
          een match en een handdruk. Zo werkt Ymatch al twaalf jaar.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", border: "1px solid var(--line)", borderRadius: "var(--r)", background: "var(--card)", overflow: "hidden" }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{ padding: "32px 28px", borderRight: i < 3 ? "1px solid var(--line)" : "none", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, letterSpacing: ".08em", color: "var(--orange)" }}>{s.n}</span>
              {i < 3 ? <Icons.arrow size={16} stroke="var(--subtle)" /> : <Icons.check size={16} stroke="var(--green)" />}
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "22px", letterSpacing: "-.025em", margin: "0 0 10px", lineHeight: 1.1 }}>{s.t}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--muted)", margin: "0 0 20px" }}>{s.d}</p>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--blue)", background: "var(--blue-tint)", padding: "5px 9px", borderRadius: "var(--r-xs)" }}>
              {s.meta}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── 8. Reviews — one big Caveat hero quote + two small ──
function ReviewsSection() {
  const small = [
    { q: "Geen gedoe, gewoon eerlijk over het salaris. Zo hoort het.",      a: "Dhr. Yılmaz", r: "Timmerman · Rotterdam",          score: 5 },
    { q: "Eindelijk een bureau dat het vak snapt. En gewoon mijn naam weet.", a: "Dhr. Bakker", r: "Service-monteur · Capelle a/d IJssel", score: 5 },
  ];
  return (
    <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 40px 0" }}>
      <SectionHead eyebrow="289 Google-reviews · 4.7 ★" title="Wat kandidaten" em="terugbellen om te zeggen." />

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "20px", alignItems: "stretch" }}>
        {/* Hero quote */}
        <div style={{
          background: "var(--card)", border: "1px solid var(--line)", borderRadius: "var(--r)",
          padding: "48px 48px 40px", position: "relative", overflow: "hidden",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}>
          <div aria-hidden="true" style={{ position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "var(--orange-tint)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
              {[0,1,2,3,4].map((s) => <span key={s} style={{ color: "var(--orange)", fontSize: "22px" }}>★</span>)}
            </div>
            <blockquote style={{ margin: 0 }}>
              <p style={{ fontFamily: "var(--font-hand)", fontSize: "38px", lineHeight: 1.15, color: "var(--ink)", margin: 0 }}>
                "Binnen een week een nieuwe baan.
                Sander belde dezelfde dag nog terug,
                en wist precies wat ik zocht."
              </p>
            </blockquote>
          </div>
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "14px", marginTop: "32px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--green)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-hand)", fontWeight: 700, fontSize: "20px" }}>MG</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "15px" }}>Mevr. de Groot</div>
              <div style={{ fontSize: "13px", color: "var(--muted)" }}>Lasser MIG/MAG · Schiedam · gestart maart 2026</div>
            </div>
          </div>
        </div>

        {/* Small reviews stacked */}
        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "20px" }}>
          {small.map((r, i) => (
            <div key={i} style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "var(--r)", padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "14px" }}>
                  {Array.from({ length: r.score }).map((_, s) => <span key={s} style={{ color: "var(--orange)", fontSize: "15px" }}>★</span>)}
                </div>
                <p style={{ fontSize: "17px", lineHeight: 1.45, color: "var(--ink)", margin: 0, fontWeight: 500, letterSpacing: "-.01em" }}>"{r.q}"</p>
              </div>
              <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--line)" }}>
                <div style={{ fontWeight: 700, fontSize: "14px" }}>{r.a}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--subtle)", marginTop: "2px" }}>{r.r}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review-platform strip */}
      <div style={{ marginTop: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 28px", border: "1px solid var(--line)", borderRadius: "var(--r)", background: "var(--card)", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", gap: "2px" }}>
            {[0,1,2,3,4].map((s) => <span key={s} style={{ color: "var(--orange)", fontSize: "18px" }}>★</span>)}
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-.02em" }}>4.7 op Google</div>
            <div style={{ fontSize: "13px", color: "var(--muted)" }}>289 reviews · meer dan elk concurrerend bureau in de regio</div>
          </div>
        </div>
        <a href="#" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px", color: "var(--ink)", textDecoration: "none", borderBottom: "2px solid var(--orange)", paddingBottom: "2px" }}>
          Lees alle reviews →
        </a>
      </div>
    </section>
  );
}

// ── 9. Werkgever — substantial, NOT an afterthought ──
function WerkgeverSection() {
  const { Icons } = window;
  const props = [
    { t: "Detachering",        d: "Wij blijven werkgever. Jij krijgt de vakman, wij regelen de rest — pensioen, ziekteverzuim, scholing." },
    { t: "Werving & Selectie", d: "Directe plaatsing bij jou in dienst. Geen jaarcontract via ons, één keer fee. Garantie tot 6 maanden." },
    { t: "ZZP-bemiddeling",    d: "Een netwerk van 400+ vaste zelfstandigen. Modelovereenkomst geregeld, factuurafhandeling optioneel." },
    { t: "Try & Hire",         d: "Drie maanden detacheren, daarna overnemen zonder vergoeding. Voor twijfelgevallen waar je zeker wilt zijn." },
  ];
  return (
    <section id="werkgever" style={{ maxWidth: "1200px", margin: "120px auto 0", padding: "0 40px" }}>
      <div style={{
        background: "var(--card)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)",
        padding: "72px 64px", position: "relative", overflow: "hidden",
      }}>
        {/* Blueprint grid overlay */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, rgba(46,74,107,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(46,74,107,.06) 1px, transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", border: "1.5px solid var(--blue)", opacity: .12, pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "20px", right: "40px", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: ".08em", color: "var(--blue)", opacity: .6 }}>
          <span style={{ width: "120px", height: "1px", background: "var(--blue)", position: "relative" }}>
            <span style={{ position: "absolute", left: 0, top: "-3px", width: "1px", height: "7px", background: "var(--blue)" }} />
            <span style={{ position: "absolute", right: 0, top: "-3px", width: "1px", height: "7px", background: "var(--blue)" }} />
          </span>
          <span>VOOR WERKGEVERS</span>
        </div>

        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "64px", alignItems: "flex-start" }}>
          <div>
            <div style={{ marginBottom: "20px" }}><Eyebrow>Voor opdrachtgevers</Eyebrow></div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px,4.6vw,52px)", letterSpacing: "-.04em", lineHeight: ".95", margin: 0, color: "var(--ink)" }}>
              Zoekt u een<br/><em style={{ fontStyle: "italic", fontWeight: 300 }}>vakman</em> die<br/>blijft <span style={{ color: "var(--orange)" }}>plakken</span>?
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.55, color: "var(--muted)", margin: "24px 0 32px", maxWidth: "420px" }}>
              We werken alleen op no-cure-no-pay en kennen elke kandidaat persoonlijk
              vóórdat we 'm voorstellen. 92% blijft langer dan een jaar. Bel Marieke,
              dan zit u morgen aan tafel.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <button style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px",
                color: "#fff", background: "var(--ink)", border: 0,
                padding: "16px 28px", borderRadius: "var(--r-sm)", cursor: "pointer", alignSelf: "flex-start",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--ink-2)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--ink)"}>
                Plan een kennismaking <Icons.arrow size={16} stroke="#fff" />
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "6px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--ink)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-hand)", fontWeight: 700, fontSize: "18px" }}>MV</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px" }}>Marieke de Vries</div>
                  <div style={{ fontSize: "12px", color: "var(--muted)" }}>Senior Consultant · 010 · 123 45 67</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {props.map((p) => (
              <div key={p.t} style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--r)", padding: "24px", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--orange)" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "19px", letterSpacing: "-.02em", margin: "8px 0 8px" }}>{p.t}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--muted)", margin: 0 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logos / opdrachtgevers strip */}
        <div style={{ position: "relative", marginTop: "56px", paddingTop: "28px", borderTop: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--subtle)" }}>
            Vertrouwd door 140+ opdrachtgevers in de regio
          </span>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", alignItems: "center" }}>
            {["Van der Velde Bouw", "Visser Techniek", "Rotterdam Office Group", "Heijmans Capelle", "BAM Infra Zuid"].map((n) => (
              <span key={n} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "14px", letterSpacing: "-.015em", color: "var(--subtle)", opacity: .7 }}>{n}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 10. CTA — NOT fully orange (brief is explicit). Warm card with one
//      orange accent + one WhatsApp accent + one primary ink button.
function ClosingCTA() {
  const { Icons, WhatsAppGlyph } = window;
  return (
    <section style={{ maxWidth: "1200px", margin: "120px auto 100px", padding: "0 40px" }}>
      <div style={{
        background: "var(--card)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)",
        padding: "64px 56px", position: "relative", overflow: "hidden",
        display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "48px", alignItems: "center",
      }}>
        {/* Dotted grid texture stays on, plus a faint orange bolt motif */}
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "60px", width: "300px", height: "300px", borderRadius: "50%", border: "1.5px solid var(--orange)", opacity: .14, pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-40px", right: "120px", width: "180px", height: "180px", borderRadius: "50%", border: "1.5px solid var(--orange)", opacity: .22, pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "40px", right: "200px", width: "60px", height: "60px", borderRadius: "50%", background: "var(--orange)", opacity: .10, pointerEvents: "none" }} />

        <div style={{ position: "relative" }}>
          <div style={{ marginBottom: "20px" }}><Eyebrow>Klaar voor je volgende stap</Eyebrow></div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px,5.4vw,68px)", letterSpacing: "-.045em", lineHeight: ".95", margin: 0, color: "var(--ink)" }}>
            Eén gesprek.<br/><em style={{ fontStyle: "italic", fontWeight: 300 }}>Morgen</em>, <span style={{ color: "var(--orange)" }}>beloofd</span>.
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.55, color: "var(--muted)", margin: "24px 0 36px", maxWidth: "520px" }}>
            Geen formulier. Geen "we nemen contact op". Bel, app of laat je nummer
            achter — dan bellen wij morgen tijdens lunch. Met een echte naam aan de lijn.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px",
              color: "#fff", background: "var(--ink)", border: 0,
              padding: "16px 28px", borderRadius: "var(--r-sm)", cursor: "pointer",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--ink-2)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--ink)"}>
              Bel mij morgen terug <Icons.arrow size={16} stroke="#fff" />
            </button>
            <button style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px",
              color: "#fff", background: "var(--wa)", border: 0,
              padding: "16px 24px", borderRadius: "var(--r-sm)", cursor: "pointer",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--wa-deep)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--wa)"}>
              <WhatsAppGlyph /> WhatsApp Jan
            </button>
            <span style={{ marginLeft: "8px", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--subtle)" }}>
              óf bel direct · <span style={{ color: "var(--ink)" }}>010 · 123 45 67</span>
            </span>
          </div>
        </div>

        {/* Right: contact form-lite card */}
        <div style={{ position: "relative", background: "#fff", border: "1px solid var(--line)", borderRadius: "var(--r)", padding: "28px", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "var(--orange)", borderRadius: "var(--r) var(--r) 0 0" }} />
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "8px" }}>Laat je bellen</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "22px", letterSpacing: "-.02em", margin: "0 0 18px", lineHeight: 1.15 }}>
            Eén veld. <em style={{ fontStyle: "italic", fontWeight: 300 }}>Klaar.</em>
          </h3>
          <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "6px" }}>Je nummer</label>
          <input
            placeholder="+31 6 12 34 56 78"
            style={{
              width: "100%", boxSizing: "border-box",
              fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 500,
              padding: "12px 14px", borderRadius: "var(--r-sm)", border: "1.5px solid var(--line-strong)",
              background: "var(--card)", outline: "none", color: "var(--ink)",
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--orange)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--orange-soft)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "var(--line-strong)"; e.currentTarget.style.boxShadow = "none"; }}
          />
          <button style={{
            width: "100%", marginTop: "12px",
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px",
            color: "#fff", background: "var(--orange)", border: 0,
            padding: "13px 16px", borderRadius: "var(--r-sm)", cursor: "pointer",
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "var(--orange-deep)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "var(--orange)"}>
            Bel mij <Icons.arrow size={14} stroke="#fff" />
          </button>
          <p style={{ fontSize: "12px", color: "var(--subtle)", margin: "12px 0 0", lineHeight: 1.5 }}>
            We bellen je binnen <b style={{ color: "var(--ink)" }}>24 uur</b>. Geen e-mail, geen nieuwsbrief.
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Eyebrow, SectionHead,
  SectorenSection, ConsultantsSection, VacaturesSection,
  SocialProofSection, WerkwijzeSection, ReviewsSection,
  WerkgeverSection, ClosingCTA,
});
