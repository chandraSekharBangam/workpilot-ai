"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";
import { adminMetrics, usageData, users } from "@/constants/mock-data";

export function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Admin" title="Admin Dashboard" description="Manage users, analytics, reports, system settings, and activity logs from a single operations view." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader>
              <metric.icon className="mb-3 size-5 text-primary" aria-hidden />
              <CardTitle className="text-sm text-muted-foreground">{metric.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#dbe4ee" />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Bar dataKey="images" fill="#06b6d4" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="documents" fill="#0284c7" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead className="text-left text-muted-foreground">
                <tr>
                  <th className="pb-3 font-medium">User</th>
                  <th className="pb-3 font-medium">Role</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="py-3">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-muted-foreground">{user.email}</p>
                    </td>
                    <td className="py-3">{user.role}</td>
                    <td className="py-3">
                      <Badge variant={user.status === "Active" ? "cyan" : "slate"}>{user.status}</Badge>
                    </td>
                    <td className="py-3">{user.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>System settings and reports</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {["Role policy review", "Weekly executive report", "Model routing audit"].map((item) => (
            <div key={item} className="rounded-md border bg-background p-4">
              <p className="font-medium">{item}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Ready for admin review with export-safe summaries.</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
