/* @ds-bundle: {"format":3,"namespace":"YmatchDesignSystem_7d0d09","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"FilterChip","sourcePath":"components/core/FilterChip.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Avatar","sourcePath":"components/recruitment/Avatar.jsx"},{"name":"RecruiterCard","sourcePath":"components/recruitment/RecruiterCard.jsx"},{"name":"SectorCard","sourcePath":"components/recruitment/SectorCard.jsx"},{"name":"VacatureCard","sourcePath":"components/recruitment/VacatureCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"bbae95129e2b","components/core/Button.jsx":"8bb6f4a164dc","components/core/FilterChip.jsx":"b77b5427ee3b","components/forms/Select.jsx":"e6b66c075a8a","components/forms/TextField.jsx":"72ee877edf8b","components/forms/Textarea.jsx":"5116a5506b75","components/recruitment/Avatar.jsx":"5e5d81f5b9f7","components/recruitment/RecruiterCard.jsx":"82cd38cc45fe","components/recruitment/SectorCard.jsx":"de6b63299a9f","components/recruitment/VacatureCard.jsx":"64592784043d","ui_kits/website/HomeView.jsx":"60e20745d20e","ui_kits/website/SiteChrome.jsx":"10acfe58acd9","ui_kits/website/TeamView.jsx":"2f8e4375c38c","ui_kits/website/VacaturesView.jsx":"9ada8bfeb9cd"},"inlinedExternals":[],"unexposedExports":[{"name":"controlStyle","sourcePath":"components/forms/TextField.jsx"},{"name":"errStyle","sourcePath":"components/forms/TextField.jsx"},{"name":"hintStyle","sourcePath":"components/forms/TextField.jsx"},{"name":"labelStyle","sourcePath":"components/forms/TextField.jsx"}]} */

(() => {

const __ds_ns = (window.YmatchDesignSystem_7d0d09 = window.YmatchDesignSystem_7d0d09 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ymatch Badge — small mono label for sectors, status and tags.
 * Space Mono, uppercase, 4px radius (scherp).
 */
function Badge({
  children,
  tone = "sector",
  style,
  ...rest
}) {
  const tones = {
    sector: {
      background: "var(--orange-tint)",
      color: "var(--orange-deep)",
      border: "none"
    },
    zzp: {
      background: "var(--ink)",
      color: "#fff",
      border: "none"
    },
    new: {
      background: "var(--green-tint)",
      color: "var(--green-deep)",
      border: "1px solid var(--green-soft)"
    },
    info: {
      background: "var(--blue-tint)",
      color: "var(--blue)",
      border: "none"
    },
    neutral: {
      background: "var(--bg-2)",
      color: "var(--muted)",
      border: "none"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: ".05em",
      textTransform: "uppercase",
      padding: "4px 10px",
      borderRadius: "var(--r-xs)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ymatch Button.
 * "Ink voor de échte CTA. Oranje is het merk — niet de knop."
 * Elke pagina heeft max. één primary (ink) knop.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = false,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    whiteSpace: "nowrap",
    border: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background .15s, border-color .15s, transform .15s, box-shadow .15s",
    width: fullWidth ? "100%" : "auto"
  };
  const sizes = {
    md: {
      fontSize: "16px",
      padding: "14px 28px",
      borderRadius: "var(--r-sm)"
    },
    sm: {
      fontSize: "14px",
      padding: "9px 18px",
      borderRadius: "var(--r-xs)"
    }
  };
  const variants = {
    primary: {
      background: "var(--ink)",
      color: "#fff"
    },
    brand: {
      background: "var(--orange)",
      color: "#fff"
    },
    outline: {
      background: "transparent",
      color: "var(--ink)",
      border: "1.5px solid var(--line-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--orange)",
      border: "1.5px solid var(--orange)"
    },
    whatsapp: {
      background: "var(--wa)",
      color: "#fff"
    }
  };
  const hover = {
    primary: (e, on) => {
      e.currentTarget.style.background = on ? "var(--ink-2)" : "var(--ink)";
      e.currentTarget.style.transform = on ? "translateY(-1px)" : "none";
      e.currentTarget.style.boxShadow = on ? "var(--shadow)" : "none";
    },
    brand: (e, on) => {
      e.currentTarget.style.background = on ? "var(--orange-deep)" : "var(--orange)";
      e.currentTarget.style.transform = on ? "translateY(-1px)" : "none";
    },
    outline: (e, on) => {
      e.currentTarget.style.borderColor = on ? "var(--ink)" : "var(--line-strong)";
      e.currentTarget.style.background = on ? "var(--bg-2)" : "transparent";
    },
    ghost: (e, on) => {
      e.currentTarget.style.background = on ? "var(--orange-tint)" : "transparent";
    },
    whatsapp: (e, on) => {
      e.currentTarget.style.background = on ? "var(--wa-deep)" : "var(--wa)";
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: e => !disabled && hover[variant]?.(e, true),
    onMouseLeave: e => !disabled && hover[variant]?.(e, false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), icon && !iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, icon) : null, children, icon && iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ymatch FilterChip — pill toggle for the vacaturebank filter row.
 * Active = ink fill; idle hovers to orange.
 */
function FilterChip({
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const idle = {
    background: hover ? "var(--orange-tint)" : "var(--card)",
    color: hover ? "var(--orange)" : "var(--muted)",
    borderColor: hover ? "var(--orange)" : "var(--line-strong)"
  };
  const on = {
    background: "var(--ink)",
    color: "#fff",
    borderColor: "var(--ink)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      padding: "6px 14px",
      borderRadius: "var(--r-pill)",
      border: "1px solid",
      cursor: "pointer",
      transition: "all .14s",
      ...(active ? on : idle),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  fontWeight: 600,
  fontSize: "14px",
  color: "var(--ink)"
};
const hintStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  color: "var(--subtle)"
};
const errStyle = {
  fontSize: "12px",
  color: "var(--danger)",
  fontWeight: 600
};
function controlStyle(error, focus) {
  return {
    fontFamily: "var(--font-display)",
    fontSize: "15px",
    fontWeight: 500,
    background: "var(--card)",
    border: `1.5px solid ${error ? "var(--danger)" : focus ? "var(--orange)" : "var(--line-strong)"}`,
    boxShadow: error ? "0 0 0 3px rgba(217,83,79,.15)" : focus ? "var(--ring)" : "none",
    borderRadius: "var(--r-sm)",
    padding: "13px 16px",
    color: "var(--ink)",
    outline: "none",
    transition: "border-color .14s, box-shadow .14s",
    width: "100%"
  };
}

/** Ymatch text input with label, optional hint and error. */
function TextField({
  label,
  hint,
  error,
  type = "text",
  value,
  onChange,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, label) : null, hint ? /*#__PURE__*/React.createElement("span", {
    style: hintStyle
  }, hint) : null, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: controlStyle(error, focus)
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: errStyle
  }, error) : null);
}
Object.assign(__ds_scope, { TextField, controlStyle, labelStyle, hintStyle, errStyle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ymatch select with custom chevron. Options: array of strings or {value,label}. */
function Select({
  label,
  hint,
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    style: __ds_scope.labelStyle
  }, label) : null, hint ? /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.hintStyle
  }, hint) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.controlStyle(false, focus),
      appearance: "none",
      WebkitAppearance: "none",
      cursor: "pointer",
      paddingRight: "40px"
    }
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "16px",
      top: "50%",
      transform: "translateY(-50%)",
      width: 0,
      height: 0,
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderTop: "5px solid var(--muted)",
      pointerEvents: "none"
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ymatch multi-line text area. Keep forms short — vraag alleen wat je nu nodig hebt. */
function Textarea({
  label,
  hint,
  value,
  onChange,
  placeholder,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    style: __ds_scope.labelStyle
  }, label) : null, hint ? /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.hintStyle
  }, hint) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.controlStyle(false, focus),
      resize: "vertical",
      minHeight: "100px"
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/recruitment/Avatar.jsx
try { (() => {
const TONES = {
  orange: "var(--orange)",
  green: "var(--green)",
  blue: "var(--blue)",
  ink: "var(--ink)"
};

/**
 * Ymatch Avatar — initials circle (or photo) with optional status dot.
 * Initials use the Caveat hand font; photo variant swaps in an <img>.
 */
function Avatar({
  initials,
  src,
  alt = "",
  size = 38,
  tone = "orange",
  status,
  style
}) {
  const dot = size >= 60 ? 14 : 11;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-block",
      flexShrink: 0,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      objectFit: "cover",
      display: "block",
      background: "var(--bg-2)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: TONES[tone] || tone,
      color: "#fff",
      fontFamily: "var(--font-hand)",
      fontWeight: 700,
      fontSize: Math.round(size * 0.42),
      lineHeight: 1
    }
  }, initials), status ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 1,
      right: 1,
      width: dot,
      height: dot,
      borderRadius: "50%",
      border: "2.5px solid var(--card)",
      background: status === "online" ? "var(--green)" : "var(--subtle)"
    }
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/recruitment/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/recruitment/RecruiterCard.jsx
try { (() => {
/**
 * Ymatch Recruiter-kaart. Echte mensen, directe lijn.
 * Naam, foto/initialen, sector, plaatsingen-stat en een directe WhatsApp-knop.
 */
function RecruiterCard({
  name,
  tagline,
  role,
  initials,
  photo,
  tone = "orange",
  placements,
  status = "online",
  whatsappLabel,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r)",
      padding: "24px",
      boxShadow: "var(--shadow-sm)",
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: initials,
    src: photo,
    alt: name,
    tone: tone,
    size: 72,
    status: status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: "17px",
      letterSpacing: "-.02em",
      marginBottom: "2px"
    }
  }, name), tagline ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-hand)",
      fontSize: "15px",
      color: "var(--blue)",
      marginBottom: "4px"
    }
  }, tagline) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: "var(--subtle)",
      textTransform: "uppercase",
      letterSpacing: ".04em",
      marginBottom: "16px"
    }
  }, role), placements != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--muted)",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink)",
      fontWeight: 700
    }
  }, placements), " plaatsingen dit jaar") : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      width: "100%",
      padding: "10px",
      borderRadius: "var(--r-sm)",
      fontWeight: 700,
      fontSize: "13px",
      fontFamily: "var(--font-display)",
      background: hover ? "var(--wa-deep)" : "var(--wa)",
      color: "#fff",
      border: 0,
      cursor: "pointer",
      transition: "background .14s"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
  })), whatsappLabel || `App ${name.split(" ")[0]} direct`));
}
Object.assign(__ds_scope, { RecruiterCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/recruitment/RecruiterCard.jsx", error: String((e && e.message) || e) }); }

// components/recruitment/SectorCard.jsx
try { (() => {
const SCHEMES = {
  bouw: {
    bg: "var(--ink)",
    fg: "#fff",
    cta: "var(--orange)",
    geo: "var(--orange)"
  },
  tech: {
    bg: "var(--orange)",
    fg: "#fff",
    cta: "rgba(255,255,255,.85)",
    geo: "#fff"
  },
  office: {
    bg: "var(--blue)",
    fg: "#fff",
    cta: "rgba(255,255,255,.75)",
    geo: "#fff"
  }
};

/**
 * Ymatch Sectorblok — the homepage "drie deuren" tiles.
 * Bouw = ink, Techniek = orange, Office = blue. Decorative bolt circles.
 */
function SectorCard({
  title,
  items = [],
  cta = "Bekijk vacatures →",
  scheme = "bouw",
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const s = SCHEMES[scheme] || SCHEMES.bouw;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      overflow: "hidden",
      background: s.bg,
      color: s.fg,
      borderRadius: "var(--r)",
      padding: "32px 28px",
      minHeight: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow)",
      transform: hover ? "translateY(-4px)" : "none",
      transition: "transform .2s, box-shadow .2s",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: "-32px",
      right: "-32px",
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      background: s.geo,
      opacity: 0.07,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: "-8px",
      right: "-8px",
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      border: `1.5px solid ${s.geo}`,
      opacity: 0.12,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 800,
      fontSize: "30px",
      letterSpacing: "-.03em",
      margin: "0 0 8px",
      lineHeight: 1,
      color: s.fg
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      lineHeight: 1.6,
      opacity: 0.7,
      margin: 0
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, it, i < items.length - 1 ? /*#__PURE__*/React.createElement("br", null) : null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontWeight: 700,
      fontSize: "14px",
      marginTop: "24px",
      color: s.cta
    }
  }, cta));
}
Object.assign(__ds_scope, { SectorCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/recruitment/SectorCard.jsx", error: String((e && e.message) || e) }); }

// components/recruitment/VacatureCard.jsx
try { (() => {
/**
 * Ymatch Vacaturekaart (job card). Salary is ALWAYS visible.
 * Hover lifts the card and reveals an orange top-border.
 */
function VacatureCard({
  title,
  location,
  badges = [],
  salaryLabel = "Salaris",
  salary,
  recruiter,
  featured = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const active = hover || featured;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--card)",
      border: `1px solid ${hover ? "rgba(233,78,27,.25)" : "var(--line)"}`,
      borderRadius: "var(--r)",
      padding: "24px",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-3px)" : "none",
      transition: "box-shadow .2s, transform .2s, border-color .2s",
      cursor: onClick ? "pointer" : "default",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "3px",
      background: active ? "var(--orange)" : "var(--line)",
      transition: "background .2s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom: "16px"
    }
  }, badges.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    tone: b.tone
  }, b.label))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 800,
      fontSize: "22px",
      letterSpacing: "-.025em",
      margin: "0 0 6px",
      lineHeight: 1.1
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--muted)",
      margin: "0 0 20px"
    }
  }, location), salary ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "var(--green-tint)",
      border: "1px solid var(--green-soft)",
      borderRadius: "var(--r-sm)",
      padding: "8px 14px",
      marginBottom: "20px",
      alignSelf: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: ".05em",
      textTransform: "uppercase",
      color: "var(--green)"
    }
  }, salaryLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--green-deep)"
    }
  }, salary)) : null, recruiter ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "1px",
      background: "var(--line)",
      margin: "16px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: recruiter.initials,
    tone: recruiter.tone,
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "14px"
    }
  }, recruiter.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--subtle)"
    }
  }, recruiter.role)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: "13px",
      color: "var(--orange)",
      whiteSpace: "nowrap"
    }
  }, "Bekijk \u2192"))) : null);
}
Object.assign(__ds_scope, { VacatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/recruitment/VacatureCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeView.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Ymatch website — Home view: hero search + sector strip + featured jobs + reviews + CTA band.
function Hero({
  onSearch,
  onNavigate
}) {
  const {
    Icons
  } = window;
  const popular = ["Timmerman", "Elektromonteur", "Lasser", "ZZP opdracht", "Werkvoorbereider"];
  const stats = [{
    n: "98",
    suf: "+",
    l: "Actieve vacatures"
  }, {
    n: "4.7",
    suf: "★",
    l: "289 Google-reviews"
  }, {
    n: "12",
    suf: "+",
    l: "Jaar ervaring"
  }, {
    n: "10",
    suf: "+",
    l: "Consultants"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ink)",
      position: "relative",
      overflow: "hidden",
      padding: "72px 52px 92px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-80px",
      right: "-80px",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      border: "1px solid rgba(233,78,27,.12)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-40px",
      right: "-40px",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      border: "1px solid rgba(233,78,27,.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1.2px)",
      backgroundSize: "24px 24px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1080px",
      margin: "0 auto",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--orange)",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "20px",
      height: "1.5px",
      background: "var(--orange)"
    }
  }), "Bouw \xB7 Techniek \xB7 Office \xB7 Rotterdam & omgeving"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(40px,6vw,80px)",
      letterSpacing: "-.045em",
      lineHeight: ".92",
      color: "#fff",
      margin: "0 0 32px",
      maxWidth: "800px"
    }
  }, "Jouw volgende", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      fontWeight: 300
    }
  }, "baan begint hier")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      borderRadius: "var(--r)",
      padding: "8px 8px 8px 20px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      maxWidth: "680px",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement(Icons.search, {
    stroke: "var(--subtle)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Zoek op functie, sector of stad\u2026",
    onKeyDown: e => e.key === "Enter" && onSearch?.(e.target.value),
    style: {
      flex: 1,
      border: 0,
      background: "transparent",
      fontFamily: "var(--font-display)",
      fontSize: "16px",
      fontWeight: 500,
      color: "var(--ink)",
      outline: "none",
      padding: "10px 0",
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "1px",
      height: "32px",
      background: "var(--line-strong)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "0 12px"
    }
  }, /*#__PURE__*/React.createElement(Icons.pin, {
    size: 16,
    stroke: "var(--subtle)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      fontWeight: 500,
      color: "var(--muted)"
    }
  }, "Rotterdam")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSearch?.(""),
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "15px",
      color: "#fff",
      background: "var(--ink)",
      border: 0,
      padding: "13px 22px",
      borderRadius: "10px",
      cursor: "pointer",
      flexShrink: 0
    }
  }, "Zoek vacatures")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginTop: "20px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.4)"
    }
  }, "Populair:"), popular.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => onSearch?.(p),
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "13px",
      fontWeight: 500,
      color: "rgba(255,255,255,.7)",
      background: "rgba(255,255,255,.08)",
      border: "1px solid rgba(255,255,255,.12)",
      borderRadius: "var(--r-pill)",
      padding: "5px 14px",
      cursor: "pointer"
    }
  }, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "40px",
      marginTop: "52px",
      flexWrap: "wrap"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.l
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "1px",
      background: "rgba(255,255,255,.1)",
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "32px",
      letterSpacing: "-.03em",
      color: "#fff"
    }
  }, s.n, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--orange)"
    }
  }, s.suf)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      textTransform: "uppercase",
      letterSpacing: ".05em",
      color: "rgba(255,255,255,.45)",
      marginTop: "4px"
    }
  }, s.l)))))));
}
function SectorStrip({
  onNavigate
}) {
  const {
    Icons
  } = window;
  const items = [{
    t: "Bouw",
    n: "34 vacatures",
    icon: /*#__PURE__*/React.createElement(Icons.home, {
      size: 18,
      stroke: "var(--orange)"
    }),
    tint: "var(--orange-tint)"
  }, {
    t: "Techniek",
    n: "47 vacatures",
    icon: /*#__PURE__*/React.createElement(Icons.wrench, {
      size: 18,
      stroke: "var(--orange)"
    }),
    tint: "var(--orange-tint)"
  }, {
    t: "Office",
    n: "17 vacatures",
    icon: /*#__PURE__*/React.createElement(Icons.monitor, {
      size: 18,
      stroke: "var(--blue)"
    }),
    tint: "var(--blue-tint)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1080px",
      margin: "0 auto",
      padding: "0 52px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "12px",
      marginTop: "-28px",
      position: "relative",
      zIndex: 1
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    onClick: () => onNavigate("vacatures"),
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "var(--orange)";
      e.currentTarget.style.transform = "translateY(-2px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "var(--line)";
      e.currentTarget.style.transform = "none";
    },
    style: {
      background: "var(--card)",
      borderRadius: "var(--r)",
      border: "1px solid var(--line)",
      padding: "20px 24px",
      boxShadow: "var(--shadow)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      transition: "all .18s",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: "18px",
      letterSpacing: "-.02em",
      marginBottom: "2px"
    }
  }, it.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "var(--subtle)"
    }
  }, it.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background: it.tint,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, it.icon)))));
}
function SectionHead({
  eyebrow,
  title,
  em
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "32px",
      maxWidth: "640px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: ".07em",
      textTransform: "uppercase",
      color: "var(--orange)",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "20px",
      height: "1.5px",
      background: "var(--orange)"
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(30px,4vw,46px)",
      letterSpacing: "-.035em",
      lineHeight: ".98",
      margin: 0
    }
  }, title, " ", em ? /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      fontWeight: 300
    }
  }, em) : null));
}
function HomeView({
  onNavigate,
  jobs
}) {
  const {
    VacatureCard
  } = window.YmatchDesignSystem_7d0d09;
  const reviews = [{
    q: "Binnen een week een nieuwe baan. Sander belde dezelfde dag nog terug.",
    a: "— Mevr. de Groot, Lasser"
  }, {
    q: "Geen gedoe, gewoon eerlijk over het salaris. Zo hoort het.",
    a: "— Dhr. Yılmaz, Timmerman"
  }, {
    q: "Eindelijk een bureau dat het vak snapt. Aanrader.",
    a: "— Dhr. Bakker, Monteur"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate,
    onSearch: () => onNavigate("vacatures")
  }), /*#__PURE__*/React.createElement(SectorStrip, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "1080px",
      margin: "0 auto",
      padding: "80px 52px 0"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Uitgelicht",
    title: "Vers van de",
    em: "vacaturebank"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px"
    }
  }, jobs.slice(0, 3).map(j => /*#__PURE__*/React.createElement(VacatureCard, _extends({
    key: j.title
  }, j, {
    onClick: () => onNavigate("vacatures")
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "28px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("vacatures"),
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "16px",
      color: "var(--ink)",
      background: "transparent",
      border: "1.5px solid var(--line-strong)",
      padding: "14px 28px",
      borderRadius: "var(--r-sm)",
      cursor: "pointer"
    }
  }, "Bekijk alle 98 vacatures \u2192"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "1080px",
      margin: "0 auto",
      padding: "80px 52px 0"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Reviews",
    title: "Wat kandidaten",
    em: "zeggen"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px"
    }
  }, reviews.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "var(--card)",
      border: "1px solid var(--line)",
      borderRadius: "var(--r)",
      padding: "28px",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "2px",
      marginBottom: "14px"
    }
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      color: "var(--orange)",
      fontSize: "15px"
    }
  }, "\u2605"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      lineHeight: 1.5,
      color: "var(--ink)",
      margin: "0 0 16px"
    }
  }, r.q), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-hand)",
      fontSize: "20px",
      color: "var(--blue)"
    }
  }, r.a))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "1080px",
      margin: "80px auto 88px",
      padding: "0 52px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ym-blueprint",
    style: {
      background: "var(--ink)",
      borderRadius: "var(--r-lg)",
      padding: "56px 48px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontWeight: 800,
      fontSize: "clamp(28px,4vw,40px)",
      letterSpacing: "-.03em",
      color: "#fff",
      margin: "0 0 12px"
    }
  }, "Klaar voor jouw ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--orange)"
    }
  }, "volgende stap?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      color: "rgba(255,255,255,.6)",
      margin: "0 0 28px"
    }
  }, "Wij bellen je morgen terug. Beloofd."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("vacatures"),
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "16px",
      color: "#fff",
      background: "var(--orange)",
      border: 0,
      padding: "14px 28px",
      borderRadius: "var(--r-sm)",
      cursor: "pointer"
    }
  }, "Solliciteer direct"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("team"),
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "16px",
      color: "#fff",
      background: "transparent",
      border: "1.5px solid rgba(255,255,255,.3)",
      padding: "14px 28px",
      borderRadius: "var(--r-sm)",
      cursor: "pointer"
    }
  }, "Praat met een consultant")))));
}
Object.assign(window, {
  HomeView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
// Ymatch website — shared icon set (Lucide-style, 1.5px stroke) + chrome.
const ic = (paths, props = {}) => /*#__PURE__*/React.createElement("svg", {
  width: props.size || 20,
  height: props.size || 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: props.stroke || "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, paths);
const Icons = {
  search: p => ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.35-4.35"
  })), p),
  pin: p => ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })), p),
  home: p => ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 22 9 12 15 12 15 22"
  })), p),
  wrench: p => ic(/*#__PURE__*/React.createElement("path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
  }), p),
  monitor: p => ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 21h8M12 17v4"
  })), p),
  arrow: p => ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })), p),
  star: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.size || 16,
    height: p?.size || 16,
    viewBox: "0 0 24 24",
    fill: p?.fill || "var(--orange)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 26.8l1.2-6.6L2.5 9l6.6-.9z",
    transform: "scale(0.85) translate(2 -1)"
  }))
};
function WhatsApp({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
  }));
}
function SiteHeader({
  view,
  onNavigate
}) {
  const links = [{
    id: "home",
    label: "Home"
  }, {
    id: "vacatures",
    label: "Vacatures"
  }, {
    id: "team",
    label: "Ons team"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(239,234,224,.86)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--line-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1080px",
      margin: "0 auto",
      padding: "16px 52px",
      display: "flex",
      alignItems: "center",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ymatch-logo.svg",
    alt: "Ymatch",
    style: {
      width: "104px",
      cursor: "pointer"
    },
    onClick: () => onNavigate("home")
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "4px",
      marginLeft: "8px"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNavigate(l.id),
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "14px",
      fontWeight: 600,
      color: view === l.id ? "var(--ink)" : "var(--muted)",
      background: view === l.id ? "var(--bg-2)" : "transparent",
      border: 0,
      padding: "8px 14px",
      borderRadius: "var(--r-sm)",
      cursor: "pointer",
      transition: "all .14s"
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "10px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "14px",
      color: "#fff",
      background: "var(--wa)",
      border: 0,
      padding: "10px 16px",
      borderRadius: "var(--r-sm)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(WhatsApp, null), " WhatsApp"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("vacatures"),
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "14px",
      color: "#fff",
      background: "var(--ink)",
      border: 0,
      padding: "10px 18px",
      borderRadius: "var(--r-sm)",
      cursor: "pointer"
    }
  }, "Solliciteer"))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink)",
      color: "rgba(255,255,255,.6)",
      marginTop: "0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ym-blueprint",
    style: {
      maxWidth: "1080px",
      margin: "0 auto",
      padding: "56px 52px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "32px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "300px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ymatch-logo-light.svg",
    alt: "Ymatch",
    style: {
      width: "120px",
      marginBottom: "16px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-hand)",
      fontSize: "26px",
      color: "var(--orange)",
      margin: 0,
      transform: "rotate(-1.5deg)"
    }
  }, "Vakmanschap verbindt.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "56px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.4)",
      marginBottom: "14px"
    }
  }, "Sectoren"), ["Bouw", "Techniek", "Office", "ZZP opdrachten"].map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      fontSize: "14px",
      marginBottom: "8px",
      color: "rgba(255,255,255,.7)"
    }
  }, x))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.4)",
      marginBottom: "14px"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      marginBottom: "8px",
      color: "rgba(255,255,255,.7)"
    }
  }, "Capelle a/d IJssel"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      marginBottom: "8px",
      color: "rgba(255,255,255,.7)"
    }
  }, "+31 10 123 45 67"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      marginBottom: "8px",
      color: "rgba(255,255,255,.7)"
    }
  }, "hallo@ymatch.nl")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.1)",
      marginTop: "40px",
      paddingTop: "20px",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: "rgba(255,255,255,.35)"
    }
  }, "\xA9 2026 Ymatch Recruitment & Detachering \xB7 Rotterdam & omgeving")));
}
Object.assign(window, {
  Icons,
  WhatsApp,
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TeamView.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Ymatch website — Ons team: recruiter cards + short application form.
function TeamView({
  onNavigate
}) {
  const {
    RecruiterCard,
    TextField,
    Select,
    Textarea,
    Button
  } = window.YmatchDesignSystem_7d0d09;
  const team = [{
    name: "Jan Bakker",
    tagline: "— altijd bereikbaar",
    role: "Consultant Bouw",
    initials: "JB",
    tone: "orange",
    placements: 47,
    status: "online"
  }, {
    name: "Sander Berg",
    tagline: "— kennis van het vak",
    role: "Consultant Techniek",
    initials: "SB",
    tone: "green",
    placements: 62,
    status: "online"
  }, {
    name: "Lisa Visser",
    tagline: "— scherp in Office",
    role: "Consultant Office",
    initials: "LV",
    tone: "blue",
    placements: 38,
    status: "offline"
  }];
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1080px",
      margin: "0 auto",
      padding: "56px 52px 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "32px",
      maxWidth: "640px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: ".07em",
      textTransform: "uppercase",
      color: "var(--orange)",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "20px",
      height: "1.5px",
      background: "var(--orange)"
    }
  }), "Ons team"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(34px,5vw,56px)",
      letterSpacing: "-.04em",
      lineHeight: ".95",
      margin: "0 0 12px"
    }
  }, "Echte mensen, ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      fontWeight: 300
    }
  }, "directe lijn")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      color: "var(--muted)",
      margin: 0
    }
  }, "Geen contactformulier als tussenstap. App je consultant direct \u2014 of laat je nummer achter, dan bellen wij.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px",
      marginBottom: "64px"
    }
  }, team.map(m => /*#__PURE__*/React.createElement(RecruiterCard, _extends({
    key: m.name
  }, m)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "48px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontWeight: 800,
      fontSize: "30px",
      letterSpacing: "-.03em",
      margin: "0 0 8px"
    }
  }, "Liever dat ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      fontWeight: 300
    }
  }, "wij bellen?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      color: "var(--muted)",
      margin: "0 0 24px"
    }
  }, "Laat je gegevens achter. Wij bellen je binnen 24 uur \u2014 geen verkooppraat, gewoon een korte kennismaking."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--green-tint)",
      border: "1px solid var(--green-soft)",
      borderRadius: "var(--r)",
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--green)",
      marginBottom: "8px"
    }
  }, "Verstuurd"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "16px",
      color: "var(--ink)",
      fontWeight: 600
    }
  }, "Top \u2014 we bellen je morgen terug. Beloofd.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      maxWidth: "440px"
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Naam",
    placeholder: "Jan de Vries"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Telefoonnummer",
    hint: "We bellen je binnen 24 uur terug",
    placeholder: "+31 6 12 34 56 78"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Sector",
    options: ["Bouw & Afbouw", "Techniek & Installatie", "Office & Commercie"]
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Korte motivatie (optioneel)",
    placeholder: "Wat zoek je, en waarom Ymatch?"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Verstuur \u2014 wij bellen je"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink)",
      borderRadius: "var(--r-lg)",
      padding: "40px",
      position: "relative",
      overflow: "hidden"
    },
    className: "ym-blueprint"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--orange)",
      marginBottom: "20px"
    }
  }, "Het kantoor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "28px",
      letterSpacing: "-.03em",
      color: "#fff",
      lineHeight: 1.1,
      marginBottom: "20px"
    }
  }, "Loop gerust binnen", /*#__PURE__*/React.createElement("br", null), "in Capelle."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, [["Adres", "Rivium Boulevard 1, Capelle a/d IJssel"], ["Bellen", "+31 10 123 45 67"], ["Mailen", "hallo@ymatch.nl"], ["Open", "Ma–Vr · 08:00 – 18:00"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      gap: "16px",
      alignItems: "baseline",
      borderTop: "1px solid rgba(255,255,255,.1)",
      paddingTop: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      textTransform: "uppercase",
      letterSpacing: ".05em",
      color: "rgba(255,255,255,.4)",
      width: "56px",
      flexShrink: 0
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "15px",
      color: "rgba(255,255,255,.85)"
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-hand)",
      fontSize: "26px",
      color: "var(--orange)",
      marginTop: "28px",
      transform: "rotate(-1.5deg)"
    }
  }, "Koffie staat klaar."))));
}
Object.assign(window, {
  TeamView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TeamView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/VacaturesView.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Ymatch website — Vacaturebank: filter chips + responsive job grid.
function VacaturesView({
  onNavigate,
  jobs
}) {
  const {
    VacatureCard,
    FilterChip
  } = window.YmatchDesignSystem_7d0d09;
  const filters = ["Alle sectoren", "Bouw", "Techniek", "Office", "ZZP", "Rotterdam"];
  const [active, setActive] = React.useState("Alle sectoren");
  const matches = j => {
    if (active === "Alle sectoren") return true;
    if (active === "ZZP") return j.badges.some(b => b.label === "ZZP");
    if (active === "Rotterdam") return j.location.includes("Rotterdam");
    return j.badges.some(b => b.label === active);
  };
  const shown = jobs.filter(matches);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1080px",
      margin: "0 auto",
      padding: "56px 52px 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "28px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: ".07em",
      textTransform: "uppercase",
      color: "var(--orange)",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "20px",
      height: "1.5px",
      background: "var(--orange)"
    }
  }), "Vacaturebank"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(34px,5vw,56px)",
      letterSpacing: "-.04em",
      lineHeight: ".95",
      margin: "0 0 12px"
    }
  }, shown.length, " vacatures ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      fontWeight: 300
    }
  }, "voor jou")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      color: "var(--muted)",
      margin: 0,
      maxWidth: "560px"
    }
  }, "Salaris staat op elke kaart \u2014 geen verrassingen achteraf. Filter op sector of locatie.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "32px"
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(FilterChip, {
    key: f,
    active: active === f,
    onClick: () => setActive(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px"
    }
  }, shown.map(j => /*#__PURE__*/React.createElement(VacatureCard, _extends({
    key: j.title
  }, j, {
    onClick: () => onNavigate("team")
  })))), shown.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      color: "var(--muted)"
    }
  }, "Geen vacatures in dit filter \u2014 bel ons, dan zoeken we mee.") : null);
}
Object.assign(window, {
  VacaturesView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/VacaturesView.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.RecruiterCard = __ds_scope.RecruiterCard;

__ds_ns.SectorCard = __ds_scope.SectorCard;

__ds_ns.VacatureCard = __ds_scope.VacatureCard;

})();
