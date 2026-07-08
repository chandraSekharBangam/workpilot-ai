import type { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  adminOnly?: boolean;
};

export type StatCard = {
  label: string;
  value: string;
  delta: string;
  tone: "blue" | "cyan" | "slate" | "green";
};

export type ActivityItem = {
  id: string;
  title: string;
  detail: string;
  time: string;
  type: "chat" | "image" | "document" | "billing" | "admin";
};

export type AiTool = {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tags: string[];
  favorite: boolean;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type UsagePoint = {
  name: string;
  tokens: number;
  images: number;
  documents: number;
};

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Member";
  status: "Active" | "Invited" | "Suspended";
  usage: string;
};
