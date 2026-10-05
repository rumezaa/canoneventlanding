/**
 * ──────────────────────────────────────────────────────────────
 * The hero has two actions, both outbound:
 *   RSVP          → eventSiteUrl   (the event's wygo page)
 *   Be on stage   → stageFormUrl   (Tally)
 *
 * Supporters are pointed at supportEmail rather than a form.
 * stageFormUrl is overridable per-environment — see .env.local.example.
 * ──────────────────────────────────────────────────────────────
 */
export const site = {
  name: "The Canon Event",
  presenter: "The Archive Fund",
  description:
    "The greatest gathering of builders on earth. November 2026 — Calgary, Alberta.",

  date: "November 2026",
  dateShort: "NOV 2026",
  place: "Calgary, Alberta",

  /** Public origin, used to absolutise the social-card URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  /** The event's page on wygo. */
  eventSiteUrl: "https://wygo.world/the-canon-event",

  /** Tally/Typeform where builders apply to demo on stage. */
  stageFormUrl:
    process.env.NEXT_PUBLIC_STAGE_FORM_URL ?? "https://tally.so/r/b50eYZ",

  /** Where would-be supporters and sponsors are pointed. */
  supportEmail: "thecanonevent2026@gmail.com",

  /**
   * Every organisation named on the page, in one place. These are used
   * both by the "in partnership with" row and by the inline mentions in
   * the Calgary paragraph — change a URL here and both update.
   *
   */
  orgs: {
    archiveFund:   { name: "The Archive Fund",   url: "https://www.jointhearchive.com" },
    ascend:        { name: "Ascend Calgary",     url: "https://www.instagram.com/ascendcalgary/" },
    soSocial:      { name: "So.Social",          url: "https://www.instagram.com/so.socialcollective/" },
    cursorMeetups: { name: "Cursor Meetups YYC", url: "https://www.linkedin.com/feed/update/urn:li:activity:7501231212695523329/" },
  },
} as const;
