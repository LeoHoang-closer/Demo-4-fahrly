"use client";

interface TopbarProps {
  logo: string;
  userInitials: string;
  accentColor: string;
}

export default function Topbar({ logo, userInitials, accentColor }: TopbarProps) {
  return (
    <div className="flex items-center justify-between px-4 h-12 border-b border-border bg-card flex-shrink-0">
      <span className="text-sm font-semibold text-foreground tracking-tight">{logo}</span>
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-card"
        style={{ backgroundColor: accentColor }}
      >
        {userInitials}
      </div>
    </div>
  );
}
