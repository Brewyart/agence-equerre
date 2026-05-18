/**
 * Brewyart Token Schema
 * ----------------------
 * The contract every visual mode must fulfill, and the project-level
 * shape that combines a mode with project-specific overrides.
 *
 * Lives in: lib/tokens.types.ts of every Next.js project.
 * Loaded once per project, never modified.
 *
 * Three-layer merge order (right wins):
 *   brewyart-core defaults  →  visual mode  →  project overrides
 */

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

/** A CSS color value: hex, rgb, rgba, hsl, or color() function. */
export type CssColor = string;

/** A CSS length: px, rem, em, %, vw, vh, or clamp(). */
export type CssLength = string;

/** A CSS shadow value (single or comma-separated stack). */
export type CssShadow = string;

/** A CSS easing function. */
export type CssEasing = string;

/** A duration in ms or s. */
export type CssDuration = string;

// ---------------------------------------------------------------------------
// Typography scale step
// ---------------------------------------------------------------------------

export type ScaleStep = {
  size: CssLength;
  lineHeight: number | string;
  weight: number;
  tracking?: string;     // letter-spacing
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
};

export type TypographyScale = {
  display: ScaleStep;
  h1: ScaleStep;
  h2: ScaleStep;
  h3: ScaleStep;
  lead: ScaleStep;
  body: ScaleStep;
  small: ScaleStep;
  eyebrow: ScaleStep;
};

// ---------------------------------------------------------------------------
// Visual Mode
// The full skin definition. Every entry in /visual-modes/ exports one.
// ---------------------------------------------------------------------------

export type SignatureElement =
  | 'glass'           // glassmorphism, blur, translucent surfaces
  | 'gradient'        // bold gradients as primary visual driver
  | '3d-reactive'     // 3D elements responding to scroll/mouse
  | 'editorial'       // print-inspired, generous whitespace, large type
  | 'brutalist'       // raw, high-contrast, intentional roughness
  | 'illustrated'     // hand-drawn or vector illustrations as anchor
  | 'photographic'    // full-bleed photography as primary medium
  | 'monolithic'      // single dominant block, minimal decoration
  | 'organic';        // natural shapes, earthy textures, hand-feel

export type MotionIntensity = 'minimal' | 'moderate' | 'cinematic';

export type BackgroundTreatment = {
  type: 'flat' | 'gradient' | 'mesh' | 'grain' | 'image' | 'noise';
  /** CSS value matching the type: a color for flat, a linear-gradient for gradient, etc. */
  value: string;
  /** Optional overlay applied on top (e.g. a noise PNG at 4% opacity). */
  overlay?: string;
};

export type VisualMode = {
  // --- identity --------------------------------------------------------
  name: string;
  description: string;
  /** Industries this mode suits naturally. Used by the orchestrator to suggest. */
  industryFit: string[];
  motionIntensity: MotionIntensity;
  signature: SignatureElement;

  // --- palette ---------------------------------------------------------
  palette: {
    background: CssColor;
    surface: CssColor;          // cards, elevated panels
    surfaceAlt: CssColor;       // alternative surface for variety
    textPrimary: CssColor;
    textSecondary: CssColor;
    textMuted: CssColor;
    border: CssColor;           // low-contrast separator
    borderStrong: CssColor;     // higher-contrast separator
    accent: CssColor;           // primary brand color
    accentHover: CssColor;
    accentMuted: CssColor;      // translucent/light variant of accent
    signalSuccess?: CssColor;
    signalDanger?: CssColor;
    signalWarning?: CssColor;
  };

  // --- typography ------------------------------------------------------
  typography: {
    /** CSS font stack or Google Font family for display/headings. */
    fontFamilyDisplay: string;
    /** CSS font stack or Google Font family for body text. */
    fontFamilyText: string;
    /** Optional monospace for code or numerics. */
    fontFamilyMono?: string;
    /** Optional overrides on the core typography scale. */
    scaleOverrides?: Partial<TypographyScale>;
  };

  // --- radius (no defaults in core — modes own this completely) -------
  radius: {
    sm: CssLength;   // chips, inputs, small UI
    md: CssLength;   // cards
    lg: CssLength;   // large cards, modals
    xl: CssLength;   // hero stage, signature blocks
    pill: CssLength; // buttons, tags (typically 999px)
  };

  // --- shadow (no defaults in core — modes own this completely) -------
  shadow: {
    sm: CssShadow;
    md: CssShadow;
    lg: CssShadow;
    xl: CssShadow;
    /** Optional inset shadow for inputs or pressed states. */
    inset?: CssShadow;
  };

  // --- background treatment -------------------------------------------
  background: BackgroundTreatment;

  // --- motion overrides (optional — core defaults apply otherwise) ----
  motionOverrides?: {
    revealDuration?: CssDuration;
    hoverDuration?: CssDuration;
    stagger?: CssDuration;
    easing?: CssEasing;
  };

  // --- container overrides (optional) ---------------------------------
  containerOverrides?: {
    maxWidth?: CssLength;
  };
};

// ---------------------------------------------------------------------------
// Project Tokens
// The per-project merge: visual mode + project-specific data.
// Lives in: /project/tokens.json of each client project.
// ---------------------------------------------------------------------------

export type ProjectTokens = {
  /** Slug of the visual mode to load from /visual-modes/. */
  mode: string;

  /** Project-specific overrides. Applied last, win over the mode. */
  modeOverrides?: DeepPartial<VisualMode>;

  /** Brand assets. */
  brand: {
    logo: string;              // path or URL
    logoDark?: string;         // optional dark-bg variant
    favicon: string;
    socialImage?: string;      // OpenGraph 1200×630
  };

  /** Site-level content metadata. */
  site: {
    name: string;
    tagline: string;
    locale: string;            // 'fr-BE', 'en-NZ', etc.
    url: string;               // canonical URL
  };
};

// ---------------------------------------------------------------------------
// Utility
// ---------------------------------------------------------------------------

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// ---------------------------------------------------------------------------
// Validation helper
// Throws at build time if a mode is missing required fields.
// ---------------------------------------------------------------------------

export function assertCompleteMode(mode: Partial<VisualMode>): asserts mode is VisualMode {
  const requiredTopLevel: (keyof VisualMode)[] = [
    'name', 'description', 'industryFit', 'motionIntensity', 'signature',
    'palette', 'typography', 'radius', 'shadow', 'background',
  ];
  for (const key of requiredTopLevel) {
    if (mode[key] === undefined) {
      throw new Error(`[brewyart-core] Visual mode is missing required field: ${key}`);
    }
  }

  const requiredPalette: (keyof VisualMode['palette'])[] = [
    'background', 'surface', 'surfaceAlt',
    'textPrimary', 'textSecondary', 'textMuted',
    'border', 'borderStrong',
    'accent', 'accentHover', 'accentMuted',
  ];
  for (const key of requiredPalette) {
    if (mode.palette?.[key] === undefined) {
      throw new Error(`[brewyart-core] Visual mode palette is missing: ${key}`);
    }
  }

  const requiredRadius: (keyof VisualMode['radius'])[] = ['sm', 'md', 'lg', 'xl', 'pill'];
  for (const key of requiredRadius) {
    if (mode.radius?.[key] === undefined) {
      throw new Error(`[brewyart-core] Visual mode radius is missing: ${key}`);
    }
  }

  const requiredShadow: (keyof VisualMode['shadow'])[] = ['sm', 'md', 'lg', 'xl'];
  for (const key of requiredShadow) {
    if (mode.shadow?.[key] === undefined) {
      throw new Error(`[brewyart-core] Visual mode shadow is missing: ${key}`);
    }
  }
}
