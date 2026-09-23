import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Layout,
  Mail,
  Image as ImageIcon,
  MessageCircle,
  MonitorPlay,
  HeartPulse,
  MousePointerClick,
  User,
  Palette,
  Users,
  UserCheck,
  ScrollText,
  BadgeCheck,
  Wallet,
  GitBranch,
  Figma,
  Code2,
  Bot,
  Notebook,
  MessageSquare,
  FileSignature,
  Kanban,
  Search,
  Linkedin,
  Send,
  Handshake,
  UsersRound,
  Megaphone,
  CalendarCheck,
  Recycle,
  Link2,
  Database,
  ShieldCheck,
  RefreshCw,
  LayoutGrid,
} from "lucide-react";

/* ---------- Hero chain ---------- */
export interface ChainStep {
  label: string;
  detail: string;
}
export const chainSteps: ChainStep[] = [
  {
    label: "Client",
    detail:
      "We start as a lean freelance team, pitching self-built showcase assets. Once trust is earned, a pharma brand or agency brings us a real project.",
  },
  {
    label: "Brief",
    detail:
      "Objectives, audience, required assets, approved source material and mandatory messaging.",
  },
  {
    label: "Medical",
    detail:
      "Medical writers review source material and draft content with claims and references.",
  },
  {
    label: "Creative",
    detail:
      "Design and UX shape the medical content into a coherent digital experience.",
  },
  {
    label: "MLR / PRC",
    detail:
      "The client's Medical, Legal, Regulatory and Promotional Review process approves the asset.",
  },
  {
    label: "Technology",
    detail:
      "Approved content becomes a website, IVA, emailer or other digital asset.",
  },
  {
    label: "Deployment",
    detail:
      "The finished experience goes live, with analytics and ongoing maintenance.",
  },
];

/* ---------- Problem: deliverable types ---------- */
export interface IconItem {
  icon: LucideIcon;
  label: string;
}
export const deliverables: IconItem[] = [
  { icon: Globe, label: "HCP websites" },
  { icon: Layout, label: "Landing pages" },
  { icon: Mail, label: "Emailers" },
  { icon: ImageIcon, label: "Banners" },
  { icon: MessageCircle, label: "IVAs" },
  { icon: MonitorPlay, label: "E-detailers" },
  { icon: HeartPulse, label: "Patient resources" },
  { icon: MousePointerClick, label: "Interactive content" },
];

/* ---------- Phase 0: how we start ---------- */
export const startingTeam: IconItem[] = [
  { icon: User, label: "1–2 medical writers, for credible pharma content" },
  { icon: Palette, label: "Stitch, for fast creative & UI generation" },
  { icon: Users, label: "UI/UX designers from our network, brought in as needed" },
  { icon: UserCheck, label: "Founder(s) running account, project management & build" },
];

export const showcaseAssets = ["A basic pharma website", "A basic emailer", "A basic IVA"];

export const phase0Loop = [
  "Build showcase assets",
  "Pitch to prospects",
  "Win first client",
  "Deliver as freelancers",
  "Build trust & case studies",
  "Extend team & capabilities",
];

export const phase0Additions: IconItem[] = [
  { icon: ScrollText, label: "A simple freelancer/agency contract & NDA template, ready before the first pitch" },
  { icon: BadgeCheck, label: "One named case study per early client — the fastest way to earn the next one" },
  { icon: Wallet, label: "A simple pricing model (day rate or per-asset) before quoting the first client" },
  { icon: GitBranch, label: "A lightweight review checklist for ourselves, so early work is MLR-ready by habit" },
];

/* ---------- Tools, outreach & pitching ---------- */
export interface ToolItem {
  icon: LucideIcon;
  label: string;
  detail: string;
}
export const buildTools: ToolItem[] = [
  { icon: Palette, label: "Stitch", detail: "creative concepts & UI generation" },
  { icon: Figma, label: "Figma", detail: "refining designs with freelance UI/UX help" },
  { icon: Code2, label: "Next.js + Vercel", detail: "website build & hosting" },
  { icon: Bot, label: "Voiceflow / custom LLM + RAG", detail: "IVA prototyping" },
  { icon: Mail, label: "HTML + Brevo or Mailchimp", detail: "emailer build & sends" },
];
export const businessTools: ToolItem[] = [
  { icon: Notebook, label: "Notion", detail: "briefs, content and project tracking" },
  { icon: MessageSquare, label: "Slack or WhatsApp", detail: "client & team communication" },
  { icon: FileSignature, label: "PandaDoc or a simple PDF", detail: "proposals & contracts" },
  { icon: Kanban, label: "A free CRM or spreadsheet", detail: "pipeline tracking" },
  { icon: Search, label: "LinkedIn Sales Navigator", detail: "finding the right contacts" },
];

export interface ChannelItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}
export const outreachChannels: ChannelItem[] = [
  {
    icon: Linkedin,
    title: "LinkedIn outreach",
    desc: "Direct, personalized messages to brand digital/marketing leads and agency production or creative directors",
  },
  {
    icon: Send,
    title: "Short cold email",
    desc: "Three sentences and a link to the live demo, not an attached deck",
  },
  {
    icon: Handshake,
    title: "Warm referrals",
    desc: "Through the medical writers' and designers' existing pharma and agency contacts",
  },
  {
    icon: UsersRound,
    title: "Industry communities",
    desc: "Pharma marketing and MedComms groups, regional healthcare-marketing meetups",
  },
  {
    icon: Megaphone,
    title: "Content marketing",
    desc: "Sharing the build process and workflow thinking publicly, to attract inbound interest",
  },
  {
    icon: CalendarCheck,
    title: "Conferences & events",
    desc: "Pharma marketing summits and local MedComms meetups, where budget holders already are",
  },
];

export const pitchSteps: string[] = [
  "Pick one specific brand or agency team — not a generic list",
  "Personalize the opener around their actual product or recent campaign",
  "Lead with the live demo link, not a deck",
  "Offer one small, scoped deliverable as a pilot — not the whole engagement",
  "Close by asking for a 15-minute call, not a hard sell",
];

/* ---------- Client brief ---------- */
export interface BriefInput {
  label: string;
  detail: string;
}
export const briefInputs: BriefInput[] = [
  {
    label: "Approved product information",
    detail: "The core, client-approved reference document all content must align with.",
  },
  {
    label: "Clinical data",
    detail: "Study results and efficacy data supporting any claims made in the assets.",
  },
  {
    label: "Safety information",
    detail: "Adverse events, warnings and precautions required in every asset.",
  },
  {
    label: "References",
    detail: "Source citations that back every claim, mapped during content development.",
  },
  {
    label: "Brand guidelines",
    detail: "Visual identity rules: color, type, logo usage and tone of voice.",
  },
  {
    label: "Mandatory messaging",
    detail: "Legally or medically required statements that must appear as specified.",
  },
];
export const briefAssets = [
  "HCP landing page",
  "Emailer",
  "Digital banners",
  "IVA",
  "Educational resources",
];

/* ---------- Medical + creative tracks ---------- */
export const medicalTrack = [
  "Brief",
  "Review source material",
  "Develop medical content",
  "Claims + references",
  "Medical content draft",
];
export const creativeTrack = [
  "Brief",
  "UX / visual concept",
  "Design",
  "Brand alignment",
  "Digital asset design",
];
export const mergedAssets = ["Emailer", "Banner", "Website", "IVA", "E-detailer"];

/* ---------- AI before / after ---------- */
export const traditionalSteps = [
  "Source documents",
  "Manual reading",
  "Manual extraction",
  "Manual content creation",
  "Manual adaptation",
  "Manual QA",
  "Revision",
];
export const aiAssistedSteps = [
  "Source documents",
  "AI extraction",
  "Structured knowledge",
  "AI-assisted generation",
  "Source / claim mapping",
  "Human review",
  "MLR / PRC",
];

/* ---------- AI automation feature cards ---------- */
export interface AIFeature {
  icon: LucideIcon;
  title: string;
  flow: string[];
}
export const aiFeatures: AIFeature[] = [
  {
    icon: Recycle,
    title: "Content repurposing",
    flow: ["One approved source", "Website copy", "Email draft", "FAQ", "IVA Q&A", "Banner messaging"],
  },
  {
    icon: Link2,
    title: "Claim + reference mapping",
    flow: ["Claim", "Source document", "Relevant section", "Reference"],
  },
  {
    icon: Database,
    title: "IVA knowledge base",
    flow: ["Approved documents", "Chunking", "Retrieval", "Grounded response", "Citation"],
  },
  {
    icon: ShieldCheck,
    title: "Content QA",
    flow: ["Asset", "AI checks", "Potential unsupported claims", "Missing references", "Inconsistent information"],
  },
  {
    icon: RefreshCw,
    title: "Change impact",
    flow: [
      "Updated product information",
      "Find affected content",
      "Identify affected assets",
      "Generate suggested updates",
      "Human review",
    ],
  },
];

/* ---------- Technology outputs ---------- */
export interface TechOutput {
  icon: LucideIcon;
  title: string;
  items: string[];
}
export const techOutputs: TechOutput[] = [
  { icon: Globe, title: "Website", items: ["Next.js", "React", "APIs"] },
  { icon: Bot, title: "IVA", items: ["LLM", "RAG", "Knowledge base", "Conversation UI"] },
  { icon: Mail, title: "Emailer", items: ["HTML", "Responsive layouts", "Tracking"] },
  {
    icon: LayoutGrid,
    title: "Digital assets",
    items: ["Responsive variants", "Landing pages", "Banners", "Interactive components"],
  },
];

/* ---------- Future platform stages ---------- */
export const platformStages = [
  { label: "Freelance & showcase", tone: "teal" as const },
  { label: "Digital production services", tone: "plain" as const },
  { label: "AI-assisted production", tone: "plain" as const },
  { label: "Reusable internal AI tools", tone: "plain" as const },
  { label: "Pharma content intelligence platform", tone: "indigo" as const },
];

/* ---------- End-to-end timeline ---------- */
export interface TimelineStage {
  num: string;
  label: string;
  desc: string;
  deliv: string[];
}
export const timelineStages: TimelineStage[] = [
  {
    num: "00",
    label: "Freelance & showcase",
    desc: "We build self-funded demo assets with 1–2 medical writers and Stitch, then pitch them directly to prospects as a lean freelance team.",
    deliv: ["Demo website", "Demo emailer", "Demo IVA"],
  },
  {
    num: "01",
    label: "Client acquisition",
    desc: "A pharma brand or agency reaches out through direct contact or partnership.",
    deliv: ["Discovery call", "Proposal"],
  },
  {
    num: "02",
    label: "Brief",
    desc: "The client shares objectives, audience, required assets and source material.",
    deliv: ["Approved product info", "Brand guidelines"],
  },
  {
    num: "03",
    label: "Medical + creative",
    desc: "Parallel tracks develop medical content and creative design, then merge.",
    deliv: ["Medical draft", "Design concept"],
  },
  {
    num: "04",
    label: "AI-assisted production",
    desc: "AI extracts, structures and drafts content for human review.",
    deliv: ["Draft copy", "Claim map"],
  },
  {
    num: "05",
    label: "Tech development",
    desc: "Approved content becomes a working website, IVA or other asset.",
    deliv: ["Staging build"],
  },
  {
    num: "06",
    label: "Client MLR / PRC",
    desc: "The asset is submitted for Medical, Legal, Regulatory and Promotional review.",
    deliv: ["Review comments"],
  },
  {
    num: "07",
    label: "Revision / approval",
    desc: "Our team revises based on feedback until the asset is approved.",
    deliv: ["Approved version"],
  },
  {
    num: "08",
    label: "Deployment",
    desc: "The approved experience is published live.",
    deliv: ["Live website", "Live IVA"],
  },
  {
    num: "09",
    label: "Analytics + maintenance",
    desc: "Usage is monitored and content is kept up to date over time.",
    deliv: ["Analytics dashboard"],
  },
];
