// Ymatch homepage — Hero (LIGHT, bold + italic H1, photo collage right),
// search row with popular chips, and the brand marquee.

function Hero({ onSearch }) {
  const { Icons } = window;
  const popular = ["Timmerman", "Elektromonteur", "Lasser", "ZZP opdracht", "Werkvoorbereider", "Uitvoerder"];
  return (
    <section id="top" style={{ position: "relative", padding: "56px 40px 72px" }}>
      {/* Decorative blueprint dimension line, top-right */}
      <div aria-hidden="true" style={{ position: "absolute", top: "32px", right: "40px", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: ".08em", color: "var(--blue)", opacity: .55 }}>
        <span style={{ width: "10px", height: "1px", background: "var(--blue)" }} />
        <span style={{ width: "180px", height: "1px", background: "var(--blue)", position: "relative" }}>
          <span style={{ position: "absolute", left: 0, top: "-3px", width: "1px", height: "7px", background: "var(--blue)" }} />
          <span style={{ position: "absolute", right: 0, top: "-3px", width: "1px", height: "7px", background: "var(--blue)" }} />
        </span>
        <span>1.080 PX</span>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: "56px", alignItems: "center" }}>
        {/* Left — headline + search */}
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--orange)", display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <span style={{ width: "24px", height: "1.5px", background: "var(--orange)" }} />
            Bouw · Techniek · Office · Rotterdam &amp; omgeving
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(56px, 7.4vw, 96px)", letterSpacing: "-.05em",
            lineHeight: ".90", color: "var(--ink)", margin: "0 0 28px",
          }}>
            Voor <em style={{ fontStyle: "italic", fontWeight: 300 }}>vakmensen</em><br/>
            die werk willen<br/>
            dat <span style={{ color: "var(--orange)" }}>klopt</span>.
          </h1>

          <p style={{ fontFamily: "var(--font-display)", fontSize: "19px", lineHeight: 1.5, color: "var(--muted)", margin: "0 0 36px", maxWidth: "520px" }}>
            Geen formulierengedoe. Geen "marktconform". Wij bellen je morgen terug —
            met een naam, een salaris en een eerlijke vraag: <b style={{ color: "var(--ink)" }}>past dit?</b>
          </p>

          {/* Search bar */}
          <div style={{
            background: "var(--card)", borderRadius: "var(--r)",
            padding: "8px 8px 8px 22px", display: "flex", alignItems: "center", gap: "12px",
            maxWidth: "640px", boxShadow: "var(--shadow-sm)", border: "1px solid var(--line)"
          }}>
            <Icons.search size={20} stroke="var(--subtle)" />
            <input placeholder="Functie, sector of stad…"
              onKeyDown={(e) => e.key === "Enter" && onSearch?.(e.target.value)}
              style={{ flex: 1, border: 0, background: "transparent", fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 500, color: "var(--ink)", outline: "none", padding: "12px 0", minWidth: 0 }} />
            <div style={{ width: "1px", height: "32px", background: "var(--line-strong)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0 8px" }}>
              <Icons.pin size={16} stroke="var(--subtle)" />
              <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--muted)" }}>Rotterdam</span>
            </div>
            <button onClick={() => onSearch?.("")} style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px",
              color: "#fff", background: "var(--ink)", border: 0,
              padding: "13px 22px", borderRadius: "10px", cursor: "pointer", flexShrink: 0,
              display: "inline-flex", alignItems: "center", gap: "8px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--ink-2)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--ink)"}>
              Zoek <Icons.arrow size={16} stroke="#fff" />
            </button>
          </div>

          {/* Popular chips */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "20px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--subtle)", marginRight: "4px" }}>
              Vaak gezocht:
            </span>
            {popular.map((p) => (
              <button key={p}
                onClick={() => onSearch?.(p)}
                style={{
                  fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 500,
                  color: "var(--ink)", background: "transparent",
                  border: "1px solid var(--line-strong)",
                  borderRadius: "var(--r-pill)", padding: "6px 14px", cursor: "pointer",
                  transition: "all .14s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--orange)"; e.currentTarget.style.color = "var(--orange)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line-strong)"; e.currentTarget.style.color = "var(--ink)"; }}
              >{p}</button>
            ))}
          </div>
        </div>

        {/* Right — photo collage of real people (placeholders) */}
        <HeroCollage />
      </div>
    </section>
  );
}

function HeroCollage() {
  // Four photo-slot tiles laid out as a tilted polaroid stack.
  // image-slot lets the user drag real portraits in; until then we show
  // a labelled placeholder with the consultant's initials in Caveat.
  const slots = [
    { id: "hero-portrait-1", initials: "JB", name: "Jan",     role: "Bouw",     tone: "var(--orange)", t: { top: "20px",  left: "30px",  w: 200, h: 250, rot: -4 }, hand: "Jan, op de werf" },
    { id: "hero-portrait-2", initials: "SB", name: "Sander",  role: "Techniek", tone: "var(--green)",  t: { top: "0",     left: "230px", w: 180, h: 230, rot: 3 },  hand: "Sander, altijd telefoon op" },
    { id: "hero-portrait-3", initials: "LV", name: "Lisa",    role: "Office",   tone: "var(--blue)",   t: { top: "230px", left: "60px",  w: 170, h: 220, rot: 5 },  hand: "Lisa, koffie & dossier" },
    { id: "hero-portrait-4", initials: "MV", name: "Marieke", role: "Detach.",  tone: "var(--ink)",    t: { top: "260px", left: "260px", w: 170, h: 200, rot: -2 }, hand: "Marieke, in gesprek" },
  ];
  return (
    <div style={{ position: "relative", height: "520px", minWidth: "460px" }}>
      {/* Bolt / cross-section motif behind the stack */}
      <div aria-hidden="true" style={{ position: "absolute", top: "100px", left: "80px", width: "340px", height: "340px", borderRadius: "50%", border: "1.5px solid var(--orange)", opacity: .12, pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "150px", left: "130px", width: "240px", height: "240px", borderRadius: "50%", border: "1.5px solid var(--orange)", opacity: .18, pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "220px", left: "200px", width: "100px", height: "100px", borderRadius: "50%", background: "var(--orange)", opacity: .08, pointerEvents: "none" }} />

      {slots.map((s) => (
        <div key={s.id} style={{
          position: "absolute", top: s.t.top, left: s.t.left,
          width: `${s.t.w}px`, transform: `rotate(${s.t.rot}deg)`,
          transition: "transform .25s ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = `rotate(${s.t.rot}deg) translateY(-4px) scale(1.03)`; e.currentTarget.style.zIndex = 10; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${s.t.rot}deg)`; e.currentTarget.style.zIndex = "auto"; }}>
          {/* Polaroid card */}
          <div style={{
            background: "#fff", padding: "12px 12px 18px", borderRadius: "4px",
            boxShadow: "0 14px 32px -8px rgba(21,23,28,.22), 0 2px 6px rgba(21,23,28,.10)",
            border: "1px solid rgba(21,23,28,.06)",
          }}>
            <image-slot
              id={s.id}
              shape="rect"
              radius="2"
              placeholder={`${s.name} — sleep een foto`}
              style={{ display: "block", width: "100%", height: `${s.t.h}px`, background: s.tone }}
            >
              {/* Fallback content visible until user drops an image */}
              <div style={{
                position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                background: s.tone, color: "#fff",
                fontFamily: "var(--font-hand)", fontWeight: 700, fontSize: `${Math.round(s.t.h * 0.45)}px`, lineHeight: 1,
              }}>
                {s.initials}
              </div>
            </image-slot>
            <div style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-hand)", fontSize: "18px", color: "var(--ink)", lineHeight: 1 }}>{s.hand}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 700, letterSpacing: ".06em", color: "var(--subtle)", textTransform: "uppercase" }}>{s.role}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Small floating chip — "online nu" */}
      <div style={{
        position: "absolute", bottom: "0", right: "0", zIndex: 12,
        background: "var(--card)", borderRadius: "var(--r-pill)",
        padding: "8px 14px 8px 10px", display: "inline-flex", alignItems: "center", gap: "8px",
        boxShadow: "var(--shadow)", border: "1px solid var(--line)",
      }}>
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 0 3px rgba(45,122,79,.18)" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--ink)" }}>4 consultants online</span>
      </div>
    </div>
  );
}

function Marquee() {
  const items = [
    { t: "Bouw" }, { d: true }, { t: "Techniek" }, { d: true }, { t: "Office" }, { d: true },
    { t: "ZZP" }, { d: true }, { t: "Rotterdam" }, { d: true }, { t: "Capelle a/d IJssel" }, { d: true },
    { t: "Schiedam" }, { d: true }, { t: "Vlaardingen" }, { d: true }, { t: "Direct in dienst" }, { d: true },
    { t: "Detachering" }, { d: true }, { t: "98 vacatures" }, { d: true },
  ];
  const row = (key) => (
    <div key={key} style={{ display: "inline-flex", alignItems: "center", gap: "28px", padding: "0 14px" }}>
      {items.map((it, i) => it.d
        ? <span key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--orange)" }} />
        : <span key={i} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "32px", letterSpacing: "-.025em", color: "var(--ink)" }}>{it.t}</span>
      )}
    </div>
  );
  return (
    <section aria-hidden="true" style={{
      borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
      background: "var(--card)", overflow: "hidden", padding: "20px 0",
    }}>
      <div style={{ display: "flex", whiteSpace: "nowrap", animation: "ym-marquee 38s linear infinite" }}>
        {row("a")}{row("b")}{row("c")}
      </div>
    </section>
  );
}

Object.assign(window, { Hero, HeroCollage, Marquee });
