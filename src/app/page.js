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

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
        <h1 className="text-3xl	text-[#212636]">At a glance</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[64px]">
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
        <h1 className="text-3xl	text-[#212636]">Orders</h1>
      </div>
      <Table className="border border-gray-200 dark:border-gray-700 rounded-[8px]">
        <TableHeader className="bg-[#F9FAFB] dark:bg-gray-800">
          <TableRow className="text-[#667085] dark:text-gray-400">
            <TableHead className="w-[208px] rounded-[8px]">Product</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time spent</TableHead>
            <TableHead>Order Value</TableHead>
            <TableHead>Commission</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 4 }, (_, i) => (
            <TableRow key={i}>
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
