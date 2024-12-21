import Image from "next/image";
import Chat from "../assets/img/chat-teardrop.png";
import Tag from "../assets/img/tag.png";
import Check from "../assets/img/check.png";
import Coin from "../assets/img/coin.png";
import Coins from "../assets/img/coins.png";
import piggyBank from "../assets/img/piggy-bank.png";
import Increase from "../assets/img/Increase.png";
import Decrease from "../assets/img/Decrease.png";
import Product from "../assets/img/product.png";
import Vs from "../assets/img/vs.png";
import Forecast from "../assets/img/forecast.png";
import TrendUp from "../assets/img/trendUp.png";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ChartDesign from "@/components/home/chart-design.tsx";
import VsChartDesign from "@/components/home/vs-chart-design.tsx";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between mb-[32px]">
        <h1 className="text-3xl font-medium	text-[#212636]">At a glance</h1>
        <Select>
          <SelectTrigger className="w-[180px]" defaultValue="7days">
            <SelectValue placeholder="Select Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="yesterday">Yesterday</SelectItem>
            <SelectItem value="3days">3 days</SelectItem>
            <SelectItem value="7days">7 days</SelectItem>
            <SelectItem value="thismonth">This month</SelectItem>
            <SelectItem value="thisyear">This year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 mb-[64px]">
        <div className="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Chat} alt="Chat" />
            Consultations
          </h5>
          <h2 className="text-[32px] font-medium text-[#212636] mb-2">24</h2>
          <p className="font-normal text-[#667085] dark:text-gray-400 flex items-center gap-x-2">
            <Image src={Increase} alt="Increase" />
            <span className="text-[#15B79F] flex items-center gap-x-2">
              15%
            </span>
            increase
          </p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Tag} alt="Tag" />
            Orders Placed
          </h5>
          <h2 className="text-[32px] font-medium text-[#212636] mb-2">12</h2>
          <p className="font-normal text-[#667085] dark:text-gray-400 flex items-center gap-x-2">
            <Image src={Decrease} alt="Decrease" />
            <span className="text-[#F04438]">15%</span> decrease
          </p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Check} alt="Check" />
            Conversion
          </h5>
          <h2 className="text-[32px] font-medium text-[#212636] mb-2">50%</h2>
          <p className="font-normal text-[#667085] dark:text-gray-400 flex items-center gap-x-2">
            <Image src={Decrease} alt="Decrease" />
            <span className="text-[#F04438]">15%</span> decrease
          </p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Coins} alt="Coins" />
            Total Sales Value
          </h5>
          <h2 className="text-[32px] font-medium text-[#212636] mb-2">
            $2,400
          </h2>
          <p className="font-normal text-[#667085] dark:text-gray-400 flex items-center gap-x-2">
            <Image src={Increase} alt="Increase" />
            <span className="text-[#15B79F]">15%</span> Increase
          </p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Coin} alt="Coin" />
            Avg Order Value
          </h5>
          <h2 className="text-[32px] font-medium text-[#212636] mb-2">$240</h2>
          <p className="font-normal text-[#667085] dark:text-gray-400 flex items-center gap-x-2">
            <Image src={Increase} alt="Increase" />
            <span className="text-[#15B79F]">15%</span> Increase
          </p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={piggyBank} alt="piggyBank" />
            Commission Paid
          </h5>
          <h2 className="text-[32px] font-medium text-[#212636] mb-2">$240</h2>
          <p className="font-normal text-[#667085] dark:text-gray-400 flex items-center gap-x-2">
            <Image src={Increase} alt="Increase" />
            <span className="text-[#15B79F]">15%</span> Increase
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-[32px]">
        <h1 className="text-3xl font-medium	text-[#212636]">Insights</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-4 mb-[64px]">
        <div className="md:col-span-2 2xl:col-span-3 p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Chat} alt="Chat" />
            Consultations
          </h5>
          <ChartDesign />
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Vs} alt="Vs" />
            VS PAST PERIOD
          </h5>
          <VsChartDesign />
        </div>
        <div className="p-6 bg-gradient-to-r from-[#15B79F] to-[#0E9382] border-gray-200 rounded-[20px] shadow-custom dark:bg-gradient-to-r from-[#15B79F] to-[#0E9382] dark:border-gray-700">
          <h5 className="mb-2 text-[12px] font-semibold tracking-tight text-[#CCFBEF] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Forecast} alt="Forecast" />
            FORECASTs
          </h5>
          <div className="flex items-center justify-between mb-[12px]">
            <h2 className="text-[56px] font-medium text-[#fff] mb-2">+15%</h2>
            <Image src={TrendUp} alt="TrendUp" />
          </div>
          <p className="font-normal text-[#fff] dark:text-gray-400 mb-6">
            forecasted increase in your sales closed by the end of the current
            month
          </p>
          <div className="flex items-center justify-between mb-[12px]">
            <h2 className="text-[56px] font-medium text-[#fff] mb-2">+20%</h2>
            <Image src={TrendUp} alt="TrendUp" />
          </div>
          <p className="font-normal text-[#fff] dark:text-gray-400 mb-0">
            forecasted increase in consultations by the end of the current month
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-[32px]">
        <h1 className="text-3xl font-medium	text-[#212636]">Orders</h1>
      </div>
      <Table className="border border-gray-200 dark:border-gray-700 rounded-[8px]">
        <TableHeader className="bg-[#F9FAFB] dark:bg-gray-800">
          <TableRow className="text-[#667085] dark:text-gray-400">
            <TableHead className="py-4 w-[208px]">Product</TableHead>
            <TableHead className="py-4 min-w-[180px]">Date</TableHead>
            <TableHead className="py-4 min-w-[110px]">Time spent</TableHead>
            <TableHead className="py-4 min-w-[110px]">Order Value</TableHead>
            <TableHead className="py-4 min-w-[100px]">Commission</TableHead>
            <TableHead className="py-4 min-w-[140px] text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 4 }, (_, i) => (
            <TableRow key={i} className="text-[#212636] dark:text-white">
              <TableCell className="flex items-center gap-x-4">
                <Image src={Product} alt="Product" width={40} height={40} />
                <span className="truncate">Product Name goes here</span>
              </TableCell>
              <TableCell>
                <span>24 Apr ‘2024</span> <br />
                <span>10:24 AM</span>
              </TableCell>
              <TableCell>2h 5m</TableCell>
              <TableCell>$120,21</TableCell>
              <TableCell className="font-bold">$55</TableCell>
              <TableCell className="text-right">
                <Link
                  href="/"
                  className="flex items-center gap-x-2 justify-end"
                >
                  <span>View Chat</span>
                  <ArrowUpRight />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
