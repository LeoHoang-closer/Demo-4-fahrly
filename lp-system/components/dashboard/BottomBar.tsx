"use client";

import {
  LayoutDashboard, Users, FileText, Settings, Truck, Receipt,
  Bell, BarChart2, MapPin, Zap, Shield, Home, Package, CreditCard,
  Calendar, Folder, MessageSquare, HelpCircle, Star, TrendingUp,
} from "lucide-react";
import { SidebarItem } from "../../types";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  LayoutDashboard, Users, FileText, Settings, Truck, Receipt,
  Bell, BarChart2, MapPin, Zap, Shield, Home, Package, CreditCard,
  Calendar, Folder, MessageSquare, HelpCircle, Star, TrendingUp,
};

interface BottomBarProps {
  items: SidebarItem[];
  accentColor: string;
}

export default function BottomBar({ items, accentColor }: BottomBarProps) {
  return (
    <div className="flex border-t border-border bg-card">
      {items.map((item) => {
        const Icon = iconMap[item.icon] ?? LayoutDashboard;
        return (
          <div
            key={item.label}
            className="flex-1 flex flex-col items-center justify-center py-2 gap-0.5 cursor-default"
            style={{ color: item.active ? accentColor : undefined }}
          >
            <Icon size={15} className={item.active ? "" : "text-placeholder"} />
            <span className={`text-[9px] font-medium ${item.active ? "" : "text-placeholder"}`}>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
