import type { ServicePageContent } from "@/types/content";

export const gollisticHealingContent: ServicePageContent = {
  metaTitle: "Gollistic Healing & Pain Management",
  metaDescription:
    "A gentle, spiritual approach to relieving pain and restoring balance with Kanwaljit Singh — Sujok, Auricular Therapy, Cupping, Magnet Therapy, and gentle touch. Home visits in Bakersfield, CA.",
  header: {
    eyebrow: "Gollistic Healing & Pain Management",
    title: "A gentle, spiritual approach to relieving pain and restoring balance",
    intro:
      "Gollistic Healing is my personal, integrated approach to pain relief and wellbeing. It combines ancient techniques, modern understanding, and spiritual grounding to bring harmony to the mind, body, and soul.",
  },
  offerings: {
    title: "Conditions I Help With",
    items: [
      "Back pain",
      "Knee pain",
      "Sciatica",
      "Neck and shoulder stiffness",
      "Arthritis discomfort",
      "Muscle tension",
      "Stress-related pain",
      "Headaches",
      "Circulation issues",
      "General body imbalance",
    ],
  },
  whoItHelps: {
    title: "Who This Is For",
    items: [
      "Seniors",
      "Working adults",
      "People recovering from stress",
      "Those who prefer natural healing",
      "Anyone seeking relief without medication",
      "Anyone who wants a healer who listens with heart",
    ],
  },
  approach: {
    title: "How a Session Works",
    steps: [
      {
        title: "Understanding Your Pain",
        description:
          "We begin with a calm conversation about your discomfort, lifestyle, and health history.",
      },
      {
        title: "Choosing the Right Techniques",
        description:
          "Based on your needs, I may use Sujok (hand/foot points), auricular points, cupping, magnet therapy, taping, gentle pressure, and relaxation guidance.",
      },
      {
        title: "Spiritual Grounding",
        description:
          "I work with intention, compassion, and a peaceful mind — because healing flows best through calmness.",
      },
      {
        title: "Aftercare Guidance",
        description: "You receive simple instructions to maintain relief at home.",
      },
    ],
  },
  pricing: {
    title: "Home Visit Service (Bakersfield Area)",
    price: "$60",
    unit: "per home visit ($75 if travel distance is significantly far)",
    duration: "45–60 minutes",
    format: "Home visit, Bakersfield area",
  },
  closingStatement:
    "Healing is not a business for me. It is seva — service to humanity. I will treat you with respect, patience, compassion, sincerity, and spiritual grounding.",
  cta: {
    title: "Book a Healing Session",
    subtitle: "If you are in pain, or simply seeking balance, I am here to help.",
    label: "Book a Home Visit",
  },
};

export const gollisticHealingTherapies = [
  {
    name: "Sujok Therapy",
    description:
      "Sujok works on the principle that the hands and feet are a map of the whole body. By applying gentle pressure — and sometimes small magnets or seeds — to specific points, it helps relieve pain at its source and restore the body's natural balance.",
    helpsWith: "Joint pain, headaches, and general body imbalance.",
  },
  {
    name: "Auricular (Ear) Therapy",
    description:
      "Like Sujok, auricular therapy treats the ear as a reflection of the whole body. Gentle stimulation of specific ear points can ease physical pain, calm the nervous system, and support emotional balance.",
    helpsWith: "Stress, tension, and pain relief alongside other techniques.",
  },
  {
    name: "Cupping",
    description:
      "Cupping uses gentle suction to improve circulation, release deep muscle tension, and draw out stagnation in the tissue. It's especially effective for stiffness and pain that has settled into the back, shoulders, and neck.",
    helpsWith: "Back, shoulder, and neck stiffness; muscle tension.",
  },
  {
    name: "Magnet Therapy",
    description:
      "Small magnets are placed on specific points of the body to support circulation and offer a gentle, non-invasive form of pain relief. It is often used alongside Sujok and auricular work as part of a calm, integrated session.",
    helpsWith: "Ongoing pain management and circulation support.",
  },
  {
    name: "Taping",
    description:
      "Therapeutic taping supports muscles and joints during movement and recovery, helping to reduce swelling and ease strain — without restricting your natural range of motion.",
    helpsWith: "Joint support, swelling, and recovery after strain.",
  },
] as const;
