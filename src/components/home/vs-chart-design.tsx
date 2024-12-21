'use client';
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "This week", consultations: 65, orders: 55 },
  { month: "Last week", consultations: 53, orders: 51 },
];

const chartConfig = {
  consultations: {
    label: "Consultations",
    color: "#CCFBEF",
  },
  orders: {
    label: "Orders closed",
    color: "#134E48",
  },
} as ChartConfig;

export default function VsChartDesign() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="consultations" fill="var(--color-consultations)" radius={4} />
        <Bar dataKey="orders" fill="var(--color-orders)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
