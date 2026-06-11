"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MetricCard as MetricCardType } from "../../types";

interface MetricCardProps {
  card: MetricCardType;
  accentColor: string;
}

export default function MetricCard({ card, accentColor }: MetricCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{card.label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xl font-bold text-foreground mb-1 text-right font-numeric">{card.value}</div>
        <div
          className="text-xs font-medium text-right font-numeric"
          style={{ color: card.deltaPositive ? "#16a34a" : "#ea580c" }}
        >
          {card.delta}
        </div>
      </CardContent>
    </Card>
  );
}
