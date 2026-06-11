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

interface SidebarProps {
  items: SidebarItem[];
  accentColor: string;
}

export default function Sidebar({ items, accentColor }: SidebarProps) {
  return (
    <div className="w-40 flex-shrink-0 border-r border-border bg-dashboard flex flex-col py-3 gap-1 h-full">
      {items.map((item) => {
        const Icon = iconMap[item.icon] ?? LayoutDashboard;
        return (
          <div
            key={item.label}
            className="flex items-center gap-2 px-3 py-2 mx-2 rounded-md text-xs cursor-default"
            style={
              item.active
                ? { backgroundColor: `${accentColor}18`, color: accentColor }
                : undefined
            }
          >
            <Icon size={14} className={item.active ? "" : "text-muted"} />
            <span className={`font-medium ${item.active ? "" : "text-muted"}`}>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
