"use client";

import { DashboardData } from "../../types";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";
import MetricCard from "./MetricCard";
import Chart from "./Chart";
import DataTable from "./DataTable";

interface DashboardMockProps {
  dashboard: DashboardData;
  accentColor: string;
}

export default function DashboardMock({ dashboard, accentColor }: DashboardMockProps) {
  return (
    <div className="rounded-xl border border-border overflow-hidden bg-card shadow-sm">
      <Topbar logo={dashboard.topbar.logo} userInitials={dashboard.topbar.userInitials} accentColor={accentColor} />
      <div className="flex h-[480px] md:h-[600px]">
        <div className="hidden md:block">
          <Sidebar items={dashboard.sidebar.items} accentColor={accentColor} />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-auto p-4 flex flex-col gap-3 bg-dashboard">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {dashboard.cards.map((card, i) => (
                <MetricCard key={i} card={card} accentColor={accentColor} />
              ))}
            </div>
            <Chart title={dashboard.chart.title} type={dashboard.chart.type} data={dashboard.chart.data} accentColor={accentColor} />
            <DataTable columns={dashboard.table.columns} rows={dashboard.table.rows} />
          </div>
          <div className="md:hidden">
            <BottomBar items={dashboard.sidebar.items} accentColor={accentColor} />
          </div>
        </div>
      </div>
    </div>
  );
}
