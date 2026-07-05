// Central place for landing-page constants (copy hrefs, brand strings).
// CTAs point to /entrar today (early-access / login placeholder); this becomes
// the real Auth.js social-login entry point in a later phase.
export const site = {
  name: "Briquebot",
  domain: "briquebot.io",
  url: "https://briquebot.io",
  tagline: "Cobre por anúncios no seu grupo de WhatsApp",
  description:
    "Transforme seu grupo de brique numa fonte de renda. Cobre por anúncio via PIX, aprove com um toque e sem risco de ban. Crie seu grupo grátis.",
} as const;

// Conversion destination. Single audience (group owners), single destination: social login.
export const cta = {
  primary: "/entrar",
  login: "/entrar",
} as const;
