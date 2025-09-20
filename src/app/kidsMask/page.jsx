import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="px-8 py-10 mx-24">
        <h1 className="text-4xl font-bold mb-8">Kids Mask</h1>

        <div className="flex flex-wrap justify-between mb-6">
          <div className="flex gap-4">
            <div>
              <label className="text-sm font-medium mr-2">Filter:</label>
              <select className=" px-3 py-1 rounded hover:underline">
                <option>Availability</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mr-2 hover:underline">
                Price:
              </label>
              <select className=" px-3 py-1 rounded">
                {/* <option>Availability</option> */}
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mr-2">Sort by:</label>
            <select className=" px-3 py-1 rounded">
              <option>Best selling</option>
            </select>
            <span className="ml-4 text-sm">11 products</span>
          </div>
        </div>
      </div>

      {/* products */}
      <div className="grid grid-cols-4 mx-8">
        {/* 1 */}
        <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/mask-first.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md hover:scale-105"
            />
          </div>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            POLKA DOT RED-KM3
          </p>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Rs.150 PKR
          </p>
        </div>

        {/* 2 */}
        <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/mask-sec.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md hover:scale-105"
            />
          </div>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            AJRAK-KM55
          </p>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Rs.150 PKR
          </p>
        </div>

        {/* 3 */}
        <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/mask-third.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md hover:scale-105"
            />
          </div>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Cerulean Pettle-KM75
          </p>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Rs.150 PKR
          </p>
        </div>

        {/* 4 */}
        <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/mask-four.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md hover:scale-105"
            />
          </div>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Insecta-KM70
          </p>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Rs.150 PKR
          </p>
        </div>

        {/* 5 */}
        <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/mask-five.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md hover:scale-105"
            />
          </div>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Red Line-KM77
          </p>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Rs.150 PKR
          </p>
        </div>

        {/* 6 */}
        <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/mask-six.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md hover:scale-105"
            />
          </div>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            POLKA DOT BLUE-KM2
          </p>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Rs.150 PKR
          </p>
        </div>

        {/* 7 */}
        <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/mask-seven.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md hover:scale-105"
            />
          </div>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Bow Tie Black-KM72
          </p>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Rs.150 PKR
          </p>
        </div>

        {/* 8 */}
        <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/mask-eight.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md hover:scale-105"
            />
          </div>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Navy Polka-KM71
          </p>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Rs.150 PKR
          </p>
        </div>

        {/* 9 */}
        <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/mask-nine.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md hover:scale-105"
            />
          </div>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Meadows-KM79
          </p>
          <p className="mt-2 hover:underline font-semibold text-[14px]">
            Rs.150 PKR
          </p>
        </div>

        {/* 10 */}
        <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/mask-ten.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md hover:scale-105"
            />
          </div>
          <p className="mt-2 font-semibold text-[14px] hover:underline">
            Rust Print-KM76
          </p>
          <p className="mt-2 font-semibold text-[14px] hover:underline">
            Rs.150 PKR
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
