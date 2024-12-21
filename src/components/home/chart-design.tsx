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
  { month: "Mon", incoming: 35, answered: 26, experts: 25 },
  { month: "Tue", incoming: 37, answered: 27, experts: 26 },
  { month: "Wed", incoming: 47, answered: 34, experts: 33 },
  { month: "Thu", incoming: 35, answered: 52, experts: 55 },
  { month: "Fri", incoming: 45, answered: 32, experts: 31 },
  { month: "Sat", incoming: 50, answered: 33, experts: 37 },
  { month: "Sun", incoming: 55, answered: 34, experts: 33 },
];

const chartConfig = {
  incoming: {
    label: "Incoming",
    color: "#8A94A6",
  },
  answered: {
    label: "Answered",
    color: "#15B79F",
  },
  experts: {
    label: "Experts online",
    color: "#FFE587",
  },
} as ChartConfig;

export default function ChartDesign() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full lg:max-h-[380px]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={5}
          axisLine={false}
          tickFormatter={(value) => value}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="incoming" fill="var(--color-incoming)" radius={4} />
        <Bar dataKey="answered" fill="var(--color-answered)" radius={4} />
        <Bar dataKey="experts" fill="var(--color-experts)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
