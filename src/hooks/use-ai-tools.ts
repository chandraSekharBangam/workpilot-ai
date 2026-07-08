"use client";

import { useQuery } from "@tanstack/react-query";
import { getAiTools, getPromptHistory } from "@/services/mock-api";

export function useAiTools() {
  return useQuery({
    queryKey: ["ai-tools"],
    queryFn: getAiTools,
  });
}

export function usePromptHistory() {
  return useQuery({
    queryKey: ["prompt-history"],
    queryFn: getPromptHistory,
  });
}
