"use client";

import { useQuery } from "@tanstack/react-query";
import { getDashboardOverview } from "@/services/mock-api";

export function useDashboardData() {
  return useQuery({
    queryKey: ["dashboard-overview"],
    queryFn: getDashboardOverview,
  });
}
