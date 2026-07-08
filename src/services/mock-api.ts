import {
  aiTools,
  promptHistory,
  recentActivity,
  stats,
  usageData,
  users,
} from "@/constants/mock-data";

const delay = (duration = 240) => new Promise((resolve) => setTimeout(resolve, duration));

export async function getDashboardOverview() {
  await delay();
  return { stats, usageData, recentActivity };
}

export async function getAiTools() {
  await delay(180);
  return aiTools;
}

export async function getPromptHistory() {
  await delay(160);
  return promptHistory;
}

export async function getUsers() {
  await delay(220);
  return users;
}
