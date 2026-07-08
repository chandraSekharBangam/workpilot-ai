import {
  Bell,
  Bot,
  CreditCard,
  FileClock,
  FileText,
  HelpCircle,
  Image,
  LayoutDashboard,
  MessageSquareText,
  Settings,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import type { NavItem } from "@/types";

export const workspaceNavItems: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "AI Chat", href: "/chat", icon: MessageSquareText },
  { title: "Content Generator", href: "/content-generator", icon: Sparkles },
  { title: "Image Generator", href: "/image-generator", icon: Image },
  { title: "Document Assistant", href: "/document-assistant", icon: FileText },
  { title: "History", href: "/history", icon: FileClock },
  { title: "Notifications", href: "/notifications", icon: Bell, badge: "4" },
  { title: "Billing", href: "/billing", icon: CreditCard },
  { title: "Profile", href: "/profile", icon: UserRound },
  { title: "Settings", href: "/settings", icon: Settings },
  { title: "Admin", href: "/admin", icon: ShieldCheck, adminOnly: true },
  { title: "Help Center", href: "/help-center", icon: HelpCircle },
];

export const marketingNavItems = [
  { title: "Features", href: "/#features" },
  { title: "Tools", href: "/#tools" },
  { title: "Pricing", href: "/pricing" },
  { title: "Help", href: "/help-center" },
] as const;

export const quickActions = [
  { title: "Start chat", href: "/chat", icon: Bot },
  { title: "Draft content", href: "/content-generator", icon: Sparkles },
  { title: "Generate image", href: "/image-generator", icon: Image },
  { title: "Analyze doc", href: "/document-assistant", icon: FileText },
] as const;
