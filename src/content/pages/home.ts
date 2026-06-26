export const homeContent = {
  hero: {
    eyebrow: "A Sanctuary for Mind, Body & Soul",
    heading: "Welcome to Gollistic Healing by Kanwaljit",
    body: "You have reached a space created with one purpose: to serve, to guide, and to heal. My name is Kanwaljit Singh, and for over seven decades life has shaped me through music, spirituality, service, and deep human connection.",
    primaryCta: { label: "Book a Session", href: "/contact" },
    secondaryCta: { label: "About Kanwaljit", href: "/about" },
  },
  services: [
    {
      title: "Gollistic Healing",
      description:
        "A unique blend of Sujok, Auricular Therapy, Cupping, Magnet Therapy, and gentle touch — delivered with care, respect, and spiritual grounding.",
      href: "/gollistic-healing",
    },
    {
      title: "Life Coaching",
      description:
        "Compassionate guidance for emotional clarity, inner balance, and personal growth — rooted in lived experience, not theory.",
      href: "/life-coaching",
    },
    {
      title: "Gurbani Teaching",
      description:
        "A gentle, soulful approach to learning Shabad, Sur, and Raag-based Kirtan — suitable for all ages and skill levels.",
      href: "/gurbani-teaching",
    },
  ],
  philosophy: {
    eyebrow: "My Approach",
    title: "Mind, Body & Soul in Harmony",
    quote:
      "Healing is not only physical. Guidance is not only mental. Music is not only sound. True transformation happens when mind, body, and soul come into harmony.",
    grounding: [
      "Gurbani wisdom",
      "Compassionate listening",
      "Holistic techniques",
      "A lifetime of lived experience",
      "A sincere desire to serve humanity",
    ],
  },
  whoIServe: {
    title: "Who I Serve",
    items: [
      "Seniors seeking relief and companionship",
      "Adults navigating stress, pain, or emotional challenges",
      "Children and youth learning Gurbani or Kirtan",
      "Anyone seeking peace, clarity, or healing",
    ],
  },
  closingCta: {
    title: "Begin Your Journey",
    subtitle:
      "Whether you want to learn, heal, or simply talk to someone who listens with heart — you are welcome here.",
    links: [
      { label: "Book a Session", href: "/contact" },
      { label: "Contact Me", href: "/contact", variant: "secondary" as const },
    ],
  },
} as const;
