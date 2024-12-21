import Image from 'next/image'
import Chat from '../assets/img/chat-teardrop.png'
import Tag from '../assets/img/tag.png'
import Check from '../assets/img/check.png'
import Coin from "../assets/img/coin.png";
import Coins from "../assets/img/coins.png";
import piggyBank from "../assets/img/piggy-bank.png";
import Increase from "../assets/img/Increase.png"
import Decrease from "../assets/img/Decrease.png"


export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between mb-[32px]">
        <h1 className="text-3xl	text-[#212636]">At a glance</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Chat} />
            Consultations</h5>
          <h2 className="text-[32px] font-medium text-[#212636] mb-2">24</h2>
          <p class="font-normal text-[#667085] dark:text-gray-400 flex items-center gap-x-2">
            <Image src={Increase} />
            <span class="text-[#15B79F] flex items-center gap-x-2">
              15%</span> increase</p>
        </div>
        <div class="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Tag} />
            Orders Placed</h5>
          <h2 className="text-[32px] font-medium text-[#212636] mb-2">12</h2>
          <p class="font-normal text-[#667085] dark:text-gray-400 flex items-center gap-x-2">
            <Image src={Decrease} />
            <span class="text-[#F04438]">15%</span> decrease</p>
        </div>
        <div class="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Check} />
            Conversion</h5>
          <h2 className="text-[32px] font-medium text-[#212636] mb-2">50%</h2>
          <p class="font-normal text-[#667085] dark:text-gray-400 flex items-center gap-x-2">
            <Image src={Decrease} />
            <span class="text-[#F04438]">15%</span> decrease</p>
        </div>
        <div class="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Coins} />
            Total Sales Value</h5>
          <h2 className="text-[32px] font-medium text-[#212636] mb-2">$2,400</h2>
          <p class="font-normal text-[#667085] dark:text-gray-400 flex items-center gap-x-2">
            <Image src={Increase} />
            <span class="text-[#15B79F]">15%</span> Increase</p>
        </div>
        <div class="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={Coin} />
            Avg Order Value</h5>
          <h2 className="text-[32px] font-medium text-[#212636] mb-2">$240</h2>
          <p class="font-normal text-[#667085] dark:text-gray-400 flex items-center gap-x-2">
            <Image src={Increase} />
            <span class="text-[#15B79F]">15%</span> Increase</p>
        </div>
        <div class="p-6 bg-white border border-gray-200 rounded-[20px] shadow-custom dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-[12px] font-semibold tracking-tight text-[#667085] dark:text-white uppercase flex items-center gap-x-2">
            <Image src={piggyBank} />
            Commission Paid</h5>
          <h2 className="text-[32px] font-medium text-[#212636] mb-2">$240</h2>
          <p class="font-normal text-[#667085] dark:text-gray-400 flex items-center gap-x-2">
            <Image src={Increase} />
            <span class="text-[#15B79F]">15%</span> Increase</p>
        </div>
      </div>
    </div>
  );
}
