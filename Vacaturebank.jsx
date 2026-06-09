// Ymatch — Vacaturebank (jobs listing).
//
// Layout: compact hero with function + postcode/range search · sticky filter
// sidebar (sector, ervaring, opleiding, locatie, salaris range) + results
// table (rows, not cards) with a personal summary banner above it.

// ── Compact search hero with postcode + range ──
function BankHero({ query, setQuery, postcode, setPostcode, range, setRange, count }) {
  const { Icons } = window;
  const isMobile = window.useIsMobile();
  return (
    <section style={{ position: "relative", padding: isMobile ? "32px 20px 32px" : "48px 40px 40px", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Status strip */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px", flexWrap: "wrap", fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--orange)" }}>
            <span style={{ position: "relative", width: "8px", height: "8px" }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--orange)" }} />
              <span style={{ position: "absolute", inset: "-3px", borderRadius: "50%", background: "var(--orange)", opacity: .25 }} />
            </span>
            Vacaturebank
          </span>
          <span style={{ color: "var(--subtle)" }}>·</span>
          <span style={{ color: "var(--muted)" }}>Vandaag {count} actief</span>
          <span style={{ color: "var(--subtle)" }}>·</span>
          <span style={{ color: "var(--muted)" }}>Salaris bij elke vacature</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1.1fr", gap: isMobile ? "20px" : "48px", alignItems: "center" }}>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: isMobile ? "clamp(40px, 10vw, 56px)" : "clamp(48px, 6vw, 72px)",
            letterSpacing: "-.05em", lineHeight: ".92",
            color: "var(--ink)", margin: 0, textWrap: "balance",
          }}>
            Vind werk dat <em style={{ fontStyle: "italic", fontWeight: 300 }}>klopt</em>.
          </h1>

          {/* Search row: function + postcode + range */}
          <div style={{
            background: "var(--card)", borderRadius: "var(--r)",
            display: "flex", alignItems: "stretch", gap: 0,
            boxShadow: "var(--shadow-sm)", border: "1px solid var(--line)", overflow: "hidden",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", flex: 1, minWidth: 0 }}>
              <Icons.search size={18} stroke="var(--subtle)" />
              <input
                placeholder="Functie, sector…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ flex: 1, minWidth: 0, border: 0, background: "transparent", fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 500, color: "var(--ink)", outline: "none", padding: "8px 0" }}
              />
            </div>
            <div style={{ width: "1px", background: "var(--line-strong)", flexShrink: 0 }} />
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 14px", flexShrink: 0 }}>
              <Icons.pin size={16} stroke="var(--subtle)" />
              <input
                placeholder="3045"
                inputMode="numeric"
                maxLength={4}
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.replace(/\D/g, "").slice(0, 4))}
                style={{ width: "60px", border: 0, background: "transparent", fontFamily: "var(--font-mono)", fontSize: "14px", fontWeight: 700, letterSpacing: ".04em", color: "var(--ink)", outline: "none" }}
              />
              <select
                value={range}
                onChange={(e) => setRange(Number(e.target.value))}
                style={{
                  fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "var(--ink)",
                  background: "var(--bg-2)", border: 0, borderRadius: "var(--r-xs)", padding: "6px 10px", cursor: "pointer", outline: "none",
                }}>
                {[5, 10, 25, 50, 100].map((k) => <option key={k} value={k}>+{k} km</option>)}
              </select>
            </div>
            <button style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px",
              color: "#fff", background: "var(--ink)", border: 0,
              padding: "0 22px", cursor: "pointer", flexShrink: 0,
              display: "inline-flex", alignItems: "center", gap: "8px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--ink-2)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--ink)"}>
              Zoek <Icons.arrow size={16} stroke="#fff" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Dual-thumb salary range slider ──
function SalaryRange({ value, onChange, min = 2000, max = 8000, step = 100 }) {
  const [lo, hi] = value;
  const pct = (v) => ((v - min) / (max - min)) * 100;
  const fmt = (v) => `€${(v / 1000).toFixed(1).replace(".", ",")}k`;
  return (
    <div style={{ padding: "4px 6px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".04em", color: "var(--muted)" }}>{fmt(lo)}</span>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px", color: "var(--green-deep)" }}>
          {fmt(lo)} – {fmt(hi)}/mnd
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".04em", color: "var(--muted)" }}>{fmt(hi)}</span>
      </div>
      <div style={{ position: "relative", height: "32px" }}>
        {/* Track */}
        <div style={{ position: "absolute", top: "14px", left: 0, right: 0, height: "4px", background: "var(--bg-2)", borderRadius: "2px" }} />
        {/* Active range */}
        <div style={{ position: "absolute", top: "14px", left: `${pct(lo)}%`, right: `${100 - pct(hi)}%`, height: "4px", background: "var(--orange)", borderRadius: "2px" }} />
        {/* Min handle */}
        <input type="range" min={min} max={max} step={step} value={lo}
          onChange={(e) => onChange([Math.min(Number(e.target.value), hi - step), hi])}
          className="ym-range" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", appearance: "none", background: "transparent", pointerEvents: "none" }} />
        {/* Max handle */}
        <input type="range" min={min} max={max} step={step} value={hi}
          onChange={(e) => onChange([lo, Math.max(Number(e.target.value), lo + step)])}
          className="ym-range" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", appearance: "none", background: "transparent", pointerEvents: "none" }} />
      </div>
    </div>
  );
}

// ── Filter sidebar ──
function FilterGroup({ title, children }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "10px" }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function FilterCheckbox({ label, count, checked, onChange, accent }) {
  return (
    <label style={{
      display: "flex", alignItems: "center", gap: "10px",
      padding: "7px 10px", borderRadius: "var(--r-sm)",
      cursor: "pointer", transition: "background .12s",
    }}
    onMouseEnter={(e) => e.currentTarget.style.background = "var(--bg-2)"}
    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
      <input type="checkbox" checked={checked} onChange={onChange}
        style={{ width: "16px", height: "16px", accentColor: "var(--orange)", flexShrink: 0, cursor: "pointer" }} />
      {accent && <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: accent, flexShrink: 0 }} />}
      <span style={{ flex: 1, fontSize: "14px", fontWeight: 500, color: "var(--ink)" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".05em", color: "var(--subtle)" }}>{count}</span>
    </label>
  );
}

function FiltersPanel({ filters, setFilters, counts, onClear, isMobile, dominantRecruiter }) {
  const toggleSet = (key, value) => () => setFilters((f) => {
    const set = new Set(f[key]);
    set.has(value) ? set.delete(value) : set.add(value);
    return { ...f, [key]: [...set] };
  });
  const active =
    filters.sector.length + filters.ervaring.length + filters.opleiding.length + filters.locatie.length +
    (filters.salaris[0] !== 2000 || filters.salaris[1] !== 8000 ? 1 : 0);

  return (
    <aside style={{ position: isMobile ? "static" : "sticky", top: "96px" }}>
      <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "var(--r)", padding: "20px", boxShadow: "var(--shadow-sm)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "18px", letterSpacing: "-.02em", margin: 0 }}>
            Filters {active > 0 && <span style={{ color: "var(--orange)" }}>· {active}</span>}
          </h3>
          {active > 0 && (
            <button onClick={onClear} style={{
              fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase",
              color: "var(--muted)", background: "transparent", border: 0, cursor: "pointer", padding: "4px 6px",
            }}>
              Wissen
            </button>
          )}
        </div>

        <FilterGroup title="Sector">
          {[
            { v: "Bouw",     accent: "var(--orange)" },
            { v: "Techniek", accent: "var(--green)"  },
            { v: "Office",   accent: "var(--blue)"   },
          ].map((o) => (
            <FilterCheckbox key={o.v}
              label={o.v}
              count={counts.sector[o.v] || 0}
              accent={o.accent}
              checked={filters.sector.includes(o.v)}
              onChange={toggleSet("sector", o.v)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Ervaringsniveau">
          {["Junior", "Medior", "Senior"].map((o) => (
            <FilterCheckbox key={o}
              label={o}
              count={counts.ervaring[o] || 0}
              checked={filters.ervaring.includes(o)}
              onChange={toggleSet("ervaring", o)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Opleidingsniveau">
          {["MBO 2-3", "MBO 4", "HBO", "WO"].map((o) => (
            <FilterCheckbox key={o}
              label={o}
              count={counts.opleiding[o] || 0}
              checked={filters.opleiding.includes(o)}
              onChange={toggleSet("opleiding", o)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Locatie">
          {["Rotterdam", "Capelle a/d IJssel", "Schiedam", "Vlaardingen", "Spijkenisse"].map((o) => (
            <FilterCheckbox key={o}
              label={o}
              count={counts.locatie[o] || 0}
              checked={filters.locatie.includes(o)}
              onChange={toggleSet("locatie", o)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Salaris per maand">
          <SalaryRange value={filters.salaris} onChange={(v) => setFilters((f) => ({ ...f, salaris: v }))} />
        </FilterGroup>
      </div>

      {/* Sector-aware consultant callout under the filters */}
      <div style={{ marginTop: "16px", background: "var(--ink)", color: "#fff", borderRadius: "var(--r)", padding: "20px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-40px", right: "-40px", width: "120px", height: "120px", borderRadius: "50%", border: "1px solid rgba(233,78,27,.30)", pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "20px", color: "var(--orange)", margin: "0 0 8px", lineHeight: 1.1, transform: "rotate(-1deg)", transformOrigin: "left" }}>
            niet gevonden?
          </p>
          <p style={{ fontSize: "13px", lineHeight: 1.55, color: "rgba(255,255,255,.75)", margin: "0 0 14px" }}>
            App {dominantRecruiter.firstName} met wat je zoekt. {dominantRecruiter.title} kent vaak plekken voordat ze op de site staan.
          </p>
          <a href="https://wa.me/31612345678" target="_blank" rel="noopener" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px",
            color: "#fff", background: "var(--wa)", textDecoration: "none",
            padding: "10px 16px", borderRadius: "var(--r-sm)",
          }}>
            <window.WhatsAppGlyph size={14} /> WhatsApp {dominantRecruiter.firstName}
          </a>
        </div>
      </div>
    </aside>
  );
}

// ── Personal summary banner — sits above the results table ──
function PersonalBanner({ filtered, postcode, range, allCount }) {
  if (filtered.length === 0) return null;
  const avg = Math.round(filtered.reduce((s, j) => s + j.salaryMid, 0) / filtered.length / 50) * 50;
  const nearCount = postcode ? filtered.filter((j) => j.distance != null && j.distance <= range).length : 0;
  return (
    <div style={{
      background: "var(--card)", border: "1px solid var(--line)", borderRadius: "var(--r)",
      padding: "16px 20px", marginBottom: "16px",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap",
    }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "20px", flexWrap: "wrap", fontFamily: "var(--font-display)" }}>
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: "8px" }}>
          <span style={{ fontWeight: 800, fontSize: "22px", letterSpacing: "-.02em", color: "var(--ink)" }}>{filtered.length}</span>
          <span style={{ fontSize: "13px", color: "var(--muted)" }}>voor jou</span>
        </span>
        <span style={{ width: "1px", height: "20px", background: "var(--line-strong)" }} />
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: "8px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--muted)" }}>Gem. salaris</span>
          <span style={{ fontWeight: 700, fontSize: "16px", color: "var(--green-deep)" }}>€{avg.toLocaleString("nl-NL")}/mnd</span>
        </span>
        {postcode && (
          <>
            <span style={{ width: "1px", height: "20px", background: "var(--line-strong)" }} />
            <span style={{ display: "inline-flex", alignItems: "baseline", gap: "8px" }}>
              <span style={{ fontWeight: 700, fontSize: "16px", color: "var(--orange)" }}>{nearCount}</span>
              <span style={{ fontSize: "13px", color: "var(--muted)" }}>binnen {range} km van <b style={{ color: "var(--ink)", fontFamily: "var(--font-mono)" }}>{postcode}</b></span>
            </span>
          </>
        )}
      </div>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--subtle)" }}>
        van {allCount} totaal
      </span>
    </div>
  );
}

// ── Results header (sort) ──
function ResultsHeader({ count, sort, setSort }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      marginBottom: "12px", gap: "16px", flexWrap: "wrap",
    }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)" }}>
        {count} resultaten · salaris altijd zichtbaar
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--muted)" }}>
          Sorteer op
        </span>
        <select value={sort} onChange={(e) => setSort(e.target.value)}
          style={{
            fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "var(--ink)",
            background: "var(--card)", border: "1px solid var(--line-strong)",
            borderRadius: "var(--r-sm)", padding: "6px 10px", cursor: "pointer", outline: "none",
          }}>
          <option value="new">Nieuwste eerst</option>
          <option value="salary-high">Salaris hoog → laag</option>
          <option value="salary-low">Salaris laag → hoog</option>
          <option value="distance">Dichtstbij eerst</option>
          <option value="alpha">Alfabetisch</option>
        </select>
      </div>
    </div>
  );
}

// ── Active filter chips ──
function ActiveChips({ filters, setFilters }) {
  const all = [
    ...filters.sector.map((v)    => ({ key: "sector",    value: v, label: v })),
    ...filters.ervaring.map((v)  => ({ key: "ervaring",  value: v, label: v })),
    ...filters.opleiding.map((v) => ({ key: "opleiding", value: v, label: v })),
    ...filters.locatie.map((v)   => ({ key: "locatie",   value: v, label: v })),
  ];
  if (filters.salaris[0] !== 2000 || filters.salaris[1] !== 8000) {
    all.push({ key: "salaris", value: "range", label: `€${filters.salaris[0]} – €${filters.salaris[1]}/mnd` });
  }
  if (all.length === 0) return null;
  const remove = (key, value) => () => setFilters((f) => key === "salaris"
    ? { ...f, salaris: [2000, 8000] }
    : { ...f, [key]: f[key].filter((x) => x !== value) }
  );
  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
      {all.map((c) => (
        <span key={c.key + c.value} style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "var(--orange-tint)", border: "1px solid var(--orange-soft)",
          borderRadius: "var(--r-pill)", padding: "6px 6px 6px 14px",
          fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "var(--orange-deep)",
        }}>
          {c.label}
          <button onClick={remove(c.key, c.value)} aria-label={`Verwijder ${c.label}`} style={{
            width: "22px", height: "22px", borderRadius: "50%",
            background: "var(--orange)", color: "#fff", border: 0, cursor: "pointer",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontSize: "14px", lineHeight: 1,
          }}>×</button>
        </span>
      ))}
    </div>
  );
}

// ── Results table (rows) — compact, scannable, brand-DNA ──
function ResultsTable({ jobs }) {
  const { Badge } = window.YmatchDesignSystem_7d0d09;
  const isMobile = window.useIsMobile();
  if (jobs.length === 0) {
    return (
      <div style={{
        background: "var(--card)", border: "1px dashed var(--line-strong)",
        borderRadius: "var(--r)", padding: "56px 32px", textAlign: "center",
      }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "26px", letterSpacing: "-.02em", margin: "0 0 12px", color: "var(--ink)" }}>
          Geen vacatures gevonden.
        </h3>
        <p style={{ fontSize: "16px", lineHeight: 1.5, color: "var(--muted)", margin: "0 0 20px", maxWidth: "420px", marginLeft: "auto", marginRight: "auto" }}>
          Probeer een filter weg te halen, of laat het ons weten. Wij hebben vaak
          plekken die nog niet op de site staan.
        </p>
        <a href="https://wa.me/31612345678" target="_blank" rel="noopener" style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px",
          color: "#fff", background: "var(--wa)", textDecoration: "none",
          padding: "12px 22px", borderRadius: "var(--r-sm)",
        }}>
          <window.WhatsAppGlyph /> Vertel Jan wat je zoekt
        </a>
      </div>
    );
  }
  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "var(--r)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
      {/* Column headers — desktop only */}
      {!isMobile && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.7fr) minmax(0, 1.1fr) minmax(0, .9fr) minmax(0, 1fr) auto",
          gap: "16px", padding: "12px 20px",
          background: "var(--bg-2)", borderBottom: "1px solid var(--line)",
          fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)",
        }}>
          <span>Functie</span>
          <span>Locatie · uren</span>
          <span>Salaris</span>
          <span>Consultant</span>
          <span></span>
        </div>
      )}
      {jobs.map((j, i) => <JobRow key={i} job={j} />)}
    </div>
  );
}

function JobRow({ job }) {
  const { Badge, Avatar } = window.YmatchDesignSystem_7d0d09;
  const isMobile = window.useIsMobile();
  const [hover, setHover] = React.useState(false);
  const open = () => { window.location.href = "vacature.html"; };

  if (isMobile) {
    return (
      <div onClick={open}
        style={{
          padding: "16px 16px",
          borderBottom: "1px solid var(--line)",
          background: hover ? "var(--bg-2)" : "transparent",
          cursor: "pointer", transition: "background .14s",
          position: "relative",
        }}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {hover && <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "3px", background: "var(--orange)" }} />}
        <div style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
          {job.badges.slice(0, 2).map((b, i) => <Badge key={i} tone={b.tone}>{b.label}</Badge>)}
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "18px", letterSpacing: "-.025em", marginBottom: "2px", color: "var(--ink)" }}>{job.title}</div>
        <div style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "10px" }}>{job.location}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--green-tint)", border: "1px solid var(--green-soft)", borderRadius: "var(--r-sm)", padding: "5px 10px", fontWeight: 700, fontSize: "13px", color: "var(--green-deep)" }}>
            {job.salary}
          </span>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <Avatar initials={job.recruiter.initials} tone={job.recruiter.tone} size={26} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--muted)" }}>
              {job.recruiter.name.split(" ")[0]}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div onClick={open}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.7fr) minmax(0, 1.1fr) minmax(0, .9fr) minmax(0, 1fr) auto",
        gap: "16px", padding: "16px 20px", alignItems: "center",
        borderBottom: "1px solid var(--line)",
        background: hover ? "var(--bg-2)" : "transparent",
        cursor: "pointer", transition: "background .14s",
        position: "relative",
      }}>
      {hover && <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "3px", background: "var(--orange)" }} />}

      {/* Title + badges */}
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", gap: "6px", marginBottom: "6px", flexWrap: "wrap" }}>
          {job.badges.map((b, i) => <Badge key={i} tone={b.tone}>{b.label}</Badge>)}
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "17px", letterSpacing: "-.025em", color: "var(--ink)", lineHeight: 1.2 }}>
          {job.title}
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--subtle)", marginTop: "4px" }}>
          {job.ervaring} · {job.opleiding}
        </div>
      </div>

      {/* Location */}
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--ink)" }}>{job.city}</div>
        <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "2px" }}>
          {job.urenBucket}
          {job.distance != null && <span style={{ marginLeft: "6px", fontFamily: "var(--font-mono)", color: "var(--orange)" }}>· {job.distance}km</span>}
        </div>
      </div>

      {/* Salary */}
      <div style={{ minWidth: 0 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--green-tint)", border: "1px solid var(--green-soft)", borderRadius: "var(--r-sm)", padding: "5px 10px", fontWeight: 700, fontSize: "13px", color: "var(--green-deep)", whiteSpace: "nowrap" }}>
          {job.salary}
        </span>
      </div>

      {/* Recruiter */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
        <Avatar initials={job.recruiter.initials} tone={job.recruiter.tone} size={32} />
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: "13px", color: "var(--ink)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{job.recruiter.name}</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "var(--muted)" }}>{job.recruiter.role.replace("Consultant ", "")}</div>
        </div>
      </div>

      {/* Apply arrow */}
      <span style={{ fontWeight: 700, fontSize: "13px", color: hover ? "var(--orange)" : "var(--ink)", whiteSpace: "nowrap", transition: "color .14s" }}>
        Bekijk →
      </span>
    </div>
  );
}

// ── Postcode distance helper (rough, demo-only) ──
function distanceKm(jobPC, userPC) {
  if (!userPC || userPC.length < 4) return null;
  const a = parseInt(jobPC.slice(0, 2), 10);
  const b = parseInt(userPC.slice(0, 2), 10);
  if (isNaN(a) || isNaN(b)) return null;
  // Each "1" in the 2-digit prefix ≈ 8 km in the Rijnmond region.
  return Math.abs(a - b) * 8 + Math.floor(Math.abs(parseInt(jobPC.slice(2), 10) - parseInt(userPC.slice(2), 10)) / 25);
}

// ── Main shell — wires hero, filter panel, results ──
function Vacaturebank({ jobs }) {
  const isMobile = window.useIsMobile();
  const [query, setQuery] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [range, setRange] = React.useState(25);
  const [sort, setSort] = React.useState("new");
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [filters, setFilters] = React.useState({
    sector: [], ervaring: [], opleiding: [], locatie: [], salaris: [2000, 8000],
  });

  // Counts per option (full set)
  const counts = React.useMemo(() => {
    const c = { sector: {}, ervaring: {}, opleiding: {}, locatie: {} };
    jobs.forEach((j) => {
      c.sector[j.sector]       = (c.sector[j.sector] || 0) + 1;
      c.ervaring[j.ervaring]   = (c.ervaring[j.ervaring] || 0) + 1;
      c.opleiding[j.opleiding] = (c.opleiding[j.opleiding] || 0) + 1;
      c.locatie[j.city]        = (c.locatie[j.city] || 0) + 1;
    });
    return c;
  }, [jobs]);

  // Annotate with distance based on postcode + range, then filter + sort
  const filtered = React.useMemo(() => {
    let out = jobs.map((j) => ({ ...j, distance: distanceKm(j.postcode, postcode) }));
    if (postcode.length === 4) out = out.filter((j) => j.distance != null && j.distance <= range);
    if (query.trim()) {
      const q = query.toLowerCase();
      out = out.filter((j) => j.title.toLowerCase().includes(q) || j.sector.toLowerCase().includes(q));
    }
    if (filters.sector.length)    out = out.filter((j) => filters.sector.includes(j.sector));
    if (filters.ervaring.length)  out = out.filter((j) => filters.ervaring.includes(j.ervaring));
    if (filters.opleiding.length) out = out.filter((j) => filters.opleiding.includes(j.opleiding));
    if (filters.locatie.length)   out = out.filter((j) => filters.locatie.includes(j.city));
    out = out.filter((j) => j.salaryMid >= filters.salaris[0] && j.salaryMid <= filters.salaris[1]);
    if (sort === "salary-high") out = [...out].sort((a, b) => b.salaryMid - a.salaryMid);
    if (sort === "salary-low")  out = [...out].sort((a, b) => a.salaryMid - b.salaryMid);
    if (sort === "alpha")       out = [...out].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "distance")    out = [...out].sort((a, b) => (a.distance ?? 9e9) - (b.distance ?? 9e9));
    return out;
  }, [jobs, query, postcode, range, filters, sort]);

  // Dominant recruiter for the "niet gevonden?" callout, based on sector
  // filter state — defaults to Jan if no sector chosen.
  const dominantRecruiter = React.useMemo(() => {
    const s = filters.sector[0] || "Bouw";
    return {
      Bouw:     { firstName: "Jan",    title: "Hij" },
      Techniek: { firstName: "Sander", title: "Hij" },
      Office:   { firstName: "Lisa",   title: "Zij" },
    }[s];
  }, [filters.sector]);

  const clearAll = () => setFilters({ sector: [], ervaring: [], opleiding: [], locatie: [], salaris: [2000, 8000] });
  const activeCount =
    filters.sector.length + filters.ervaring.length + filters.opleiding.length + filters.locatie.length +
    (filters.salaris[0] !== 2000 || filters.salaris[1] !== 8000 ? 1 : 0);

  return (
    <div>
      <BankHero query={query} setQuery={setQuery} postcode={postcode} setPostcode={setPostcode} range={range} setRange={setRange} count={jobs.length} />

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "28px 20px 80px" : "40px 40px 120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "280px 1fr", gap: isMobile ? "16px" : "32px", alignItems: "flex-start" }}>
          {!isMobile ? (
            <FiltersPanel filters={filters} setFilters={setFilters} counts={counts} onClear={clearAll} isMobile={false} dominantRecruiter={dominantRecruiter} />
          ) : (
            <button onClick={() => setSheetOpen(true)} style={{
              display: "inline-flex", alignItems: "center", justifyContent: "space-between",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px",
              color: "var(--ink)", background: "var(--card)", border: "1px solid var(--line-strong)",
              padding: "12px 16px", borderRadius: "var(--r-sm)", cursor: "pointer", width: "100%",
            }}>
              Filters {activeCount > 0 && <span style={{ color: "var(--orange)" }}>· {activeCount}</span>}
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, color: "var(--muted)" }}>OPEN</span>
            </button>
          )}

          <div>
            <PersonalBanner filtered={filtered} postcode={postcode} range={range} allCount={jobs.length} />
            <ResultsHeader count={filtered.length} sort={sort} setSort={setSort} />
            <ActiveChips filters={filters} setFilters={setFilters} />
            <ResultsTable jobs={filtered} />
          </div>
        </div>
      </section>

      {/* Mobile filter sheet */}
      {isMobile && sheetOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(21,23,28,.6)", display: "flex", alignItems: "flex-end" }}
          onClick={() => setSheetOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: "var(--bg)", width: "100%", maxHeight: "90vh", overflowY: "auto",
            borderRadius: "var(--r-lg) var(--r-lg) 0 0", padding: "20px",
            boxShadow: "0 -20px 40px rgba(0,0,0,.2)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "20px", margin: 0 }}>Filters</h3>
              <button onClick={() => setSheetOpen(false)} aria-label="Sluit" style={{
                width: "36px", height: "36px", border: "1px solid var(--line-strong)", background: "transparent", borderRadius: "var(--r-sm)", cursor: "pointer",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>×</button>
            </div>
            <FiltersPanel filters={filters} setFilters={setFilters} counts={counts} onClear={clearAll} isMobile={true} dominantRecruiter={dominantRecruiter} />
            <button onClick={() => setSheetOpen(false)} style={{
              width: "100%", marginTop: "16px",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px",
              color: "#fff", background: "var(--ink)", border: 0,
              padding: "16px 20px", borderRadius: "var(--r-sm)", cursor: "pointer",
            }}>
              Toon {filtered.length} vacatures
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Vacaturebank });
