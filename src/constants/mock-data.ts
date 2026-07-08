import {
  BarChart3,
  BookOpenText,
  BrainCircuit,
  Building2,
  FileText,
  Image,
  Mail,
  MessageSquareText,
  PenLine,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import type { ActivityItem, AiTool, PricingPlan, StatCard, UsagePoint, UserRecord } from "@/types";

export const stats: StatCard[] = [
  { label: "AI credits used", value: "72.4k", delta: "+18.2%", tone: "blue" },
  { label: "Documents analyzed", value: "1,248", delta: "+11.8%", tone: "cyan" },
  { label: "Team automations", value: "326", delta: "+7.1%", tone: "green" },
  { label: "Saved hours", value: "418", delta: "+22.6%", tone: "slate" },
];

export const usageData: UsagePoint[] = [
  { name: "Mon", tokens: 4200, images: 38, documents: 72 },
  { name: "Tue", tokens: 6100, images: 44, documents: 88 },
  { name: "Wed", tokens: 5300, images: 51, documents: 93 },
  { name: "Thu", tokens: 7600, images: 64, documents: 104 },
  { name: "Fri", tokens: 6900, images: 59, documents: 118 },
  { name: "Sat", tokens: 4300, images: 33, documents: 66 },
  { name: "Sun", tokens: 5200, images: 41, documents: 78 },
];

export const recentActivity: ActivityItem[] = [
  {
    id: "act-1",
    title: "Q3 launch memo summarized",
    detail: "Document Assistant extracted 12 risks and 7 action items.",
    time: "8 min ago",
    type: "document",
  },
  {
    id: "act-2",
    title: "Sales follow-up sequence drafted",
    detail: "AI Writer generated 4 variants using the enterprise tone preset.",
    time: "24 min ago",
    type: "chat",
  },
  {
    id: "act-3",
    title: "Hero visual prompt favorited",
    detail: "Image Generator saved a new product UI prompt to favorites.",
    time: "46 min ago",
    type: "image",
  },
  {
    id: "act-4",
    title: "Usage threshold updated",
    detail: "Admin increased the design team image budget to 9,000 credits.",
    time: "2 hr ago",
    type: "admin",
  },
];

export const aiTools: AiTool[] = [
  {
    id: "chat",
    name: "AI Chat",
    description: "Reason through work, summarize research, and unblock decisions with a context-aware assistant.",
    href: "/chat",
    icon: MessageSquareText,
    tags: ["Research", "Reasoning"],
    favorite: true,
  },
  {
    id: "writer",
    name: "AI Writer",
    description: "Turn briefs into polished product copy, articles, emails, and campaign assets.",
    href: "/content-generator",
    icon: PenLine,
    tags: ["Copy", "Marketing"],
    favorite: true,
  },
  {
    id: "blog",
    name: "Blog Generator",
    description: "Generate outlines, SEO briefs, long-form drafts, and editorial refresh ideas.",
    href: "/content-generator?mode=blog",
    icon: BookOpenText,
    tags: ["SEO", "Editorial"],
    favorite: false,
  },
  {
    id: "email",
    name: "Email Generator",
    description: "Create concise outbound sequences, internal updates, and onboarding messages.",
    href: "/content-generator?mode=email",
    icon: Mail,
    tags: ["Sales", "Lifecycle"],
    favorite: false,
  },
  {
    id: "linkedin",
    name: "LinkedIn Post Generator",
    description: "Shape professional thought leadership posts with hooks and CTA options.",
    href: "/content-generator?mode=linkedin",
    icon: Send,
    tags: ["Social", "B2B"],
    favorite: true,
  },
  {
    id: "instagram",
    name: "Instagram Caption Generator",
    description: "Draft caption sets, hashtag clusters, and campaign variants for visual channels.",
    href: "/content-generator?mode=instagram",
    icon: Image,
    tags: ["Social", "Brand"],
    favorite: false,
  },
  {
    id: "image",
    name: "Image Generator",
    description: "Design prompt boards and generate visual directions for campaigns and product launches.",
    href: "/image-generator",
    icon: Sparkles,
    tags: ["Creative", "Visual"],
    favorite: true,
  },
  {
    id: "docs",
    name: "Document Assistant",
    description: "Extract summaries, tables, risks, and action plans from contracts, reports, and PDFs.",
    href: "/document-assistant",
    icon: FileText,
    tags: ["Legal", "Operations"],
    favorite: false,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$19",
    description: "For solo builders validating an AI workflow.",
    features: ["30k monthly credits", "5 saved workspaces", "Prompt history", "Community support"],
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing teams shipping content and insights faster.",
    features: ["180k monthly credits", "Unlimited projects", "Document intelligence", "Priority support"],
    highlighted: true,
  },
  {
    name: "Business",
    price: "$149",
    description: "For teams that need governance, analytics, and admin controls.",
    features: ["800k monthly credits", "Role based access", "Audit logs", "SAML-ready architecture"],
  },
];

export const benefits = [
  { title: "One workspace", description: "Centralize chat, writing, image ideation, and document workflows." },
  { title: "Governed by default", description: "Usage limits, roles, activity logs, and workspace policies are modeled from day one." },
  { title: "Built for operators", description: "Dashboards, saved prompts, favorites, billing, and notifications feel like a real SaaS product." },
];

export const testimonials = [
  {
    quote: "WorkPilot AI feels like the control plane our GTM team always wanted. It brings creative work and governance into the same flow.",
    name: "Maya Chen",
    role: "VP Marketing, Northstar Labs",
  },
  {
    quote: "The document assistant saves hours every week, but the real value is that usage and quality are visible to leadership.",
    name: "Rohan Mehta",
    role: "Operations Lead, AlloyWorks",
  },
  {
    quote: "It has the polish of a production SaaS app and the information density we need for everyday work.",
    name: "Elena Brooks",
    role: "Founder, Studio Meridian",
  },
];

export const faqItems = [
  {
    question: "Is WorkPilot AI connected to a real model provider?",
    answer: "The portfolio build ships with typed mock services and clear service boundaries so real providers can be added without changing page architecture.",
  },
  {
    question: "Does the app include authentication patterns?",
    answer: "Yes. Clerk is wired at the provider and middleware layers, with graceful local fallbacks when environment keys are not configured.",
  },
  {
    question: "Can this scale beyond static demo data?",
    answer: "Yes. TanStack Query services, feature folders, reusable forms, and typed records are structured for real API integration.",
  },
];

export const users: UserRecord[] = [
  { id: "usr_01", name: "B Chandra Sekhar ", email: "avery@aiworkspace.dev", role: "Owner", status: "Active", usage: "86%" },
  { id: "usr_02", name: "Mina Patel", email: "mina@aiworkspace.dev", role: "Admin", status: "Active", usage: "64%" },
  { id: "usr_03", name: "Jon Bell", email: "jon@aiworkspace.dev", role: "Member", status: "Invited", usage: "0%" },
  { id: "usr_04", name: "Sara Kim", email: "sara@aiworkspace.dev", role: "Member", status: "Active", usage: "42%" },
];

export const adminMetrics = [
  { label: "Active users", value: "2,418", icon: UsersRound },
  { label: "Model uptime", value: "99.98%", icon: BarChart3 },
  { label: "Policy alerts", value: "17", icon: ShieldCheck },
  { label: "Enterprise seats", value: "184", icon: Building2 },
];

export const promptHistory = [
  "Summarize the investor memo and extract action items.",
  "Write three LinkedIn hooks for an AI analytics launch.",
  "Create an image prompt for a calm enterprise dashboard.",
  "Turn this product brief into a launch email sequence.",
  "Compare vendor contract risks in simple language.",
];

export const generatedImages = [
  "Enterprise analytics cockpit with crisp cyan highlights",
  "Minimal AI assistant product scene on a slate workstation",
  "Editorial illustration of document intelligence workflows",
] as const;

export const chatMessages = [
  { role: "assistant", text: "I can help with research, writing, workflow design, and document analysis. What are we building today?" },
  { role: "user", text: "Summarize our weekly AI usage and flag unusual changes." },
  { role: "assistant", text: "Usage is up 18.2%, driven mostly by content generation. Image credits rose on Thursday, but document volume stayed within forecast." },
] as const;

export const featureHighlights = [
  { title: "Unified AI tools", description: "Chat, writing, image, and document intelligence in one production-style workspace.", icon: BrainCircuit },
  { title: "Usage intelligence", description: "Charts, limits, history, and activity logs show how AI work moves through a team.", icon: BarChart3 },
  { title: "Enterprise controls", description: "Role based access, billing readiness, account pages, and admin views for real SaaS expectations.", icon: ShieldCheck },
] as const;
