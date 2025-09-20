import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="px-8 py-10 mx-16">
        <h1 className="text-4xl font-bold mb-8">Trousers</h1>

        {/* Filters and Sorting */}
        <div className="flex flex-wrap justify-between mb-6">
          <div className="flex gap-4">
            <div>
              <label className="text-sm font-medium mr-2">Filter:</label>
              <select className="px-3 py-1 rounded">
                <option>Availability</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mr-2">Price:</label>
              <select className="px-3 py-1 rounded"></select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mr-2">Sort by:</label>
            <select className="px-3 py-1 rounded">
              <option>Best selling</option>
            </select>
            <span className="ml-4 text-sm">11 products</span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4  mx-8">
        {/* first */}
        <div className="w-full mb-6 px-2">
          <div className="w-[270px] h-[336px] overflow-hidden">
            <Image
              src="/images/trouser-first.webp"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full hover:scale-105"
              priority
            />
          </div>
          <p className="mt-3 text-sm font-semibold hover:underline">
            Coloured Stripes -T11
          </p>
          <div className="mt-1 gap-6 text-sm">
            <p className="line-through text-[12px] mb-1">Rs.2,000 PKR</p>
            <p className="text-[15px] font-semibold">From Rs.1,299 PKR</p>
          </div>
        </div>

        {/* sec */}
        <div className="w-full mb-6 px-2">
          <div className="w-[270px] h-[336px] overflow-hidden">
            <Image
              src="/images/trouser-sec.jpg"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full hover:scale-105"
              priority
            />
          </div>
          <p className="mt-3 text-sm font-medium hover:underline">
            Nightglow -T4
          </p>
          <div className="mt-1 gap-6 text-sm">
            <p className="line-through mb-1">Rs.2,000 PKR</p>
            <p className="text-[15px] font-semibold">From Rs.1,299 PKR</p>
          </div>
        </div>

        {/* third */}
        <div className="w-full mb-6 px-2">
          <div className="w-[270px] h-[336px] overflow-hidden">
            <Image
              src="/images/trouser-third.jpeg"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full hover:scale-105"
              priority
            />
          </div>
          <p className="mt-3 text-sm font-medium hover:underline">Moonlit -T3</p>
          <div className="mt-1 gap-6 text-sm">
            <p className="line-through mb-1">Rs.2,000 PKR</p>
            <p className="text-[15px] font-semibold">From Rs.1,299 PKR</p>
          </div>
        </div>

        {/* four */}
        <div className="w-full mb-6 px-2">
          <div className="w-[270px] h-[336px] overflow-hidden">
            <Image
              src="/images/trouser-four-img.jpeg"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full hover:scale-105"
              priority
            />
          </div>
          <p className="mt-3 text-sm font-medium hover:underline">
            Hot Pink Polka -T8
          </p>
          <div className="mt-1 gap-6 text-sm">
            <p className="line-through mb-1">Rs.2,000 PKR</p>
            <p className="text-[15px] font-semibold">From Rs.1,299 PKR</p>
          </div>
        </div>

        {/* five */}
        <div className="w-full mb-6 px-2">
          <div className="w-[270px] h-[336px] overflow-hidden">
            <Image
              src="/images/trouser-five.jpeg"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full hover:scale-105"
              priority
            />
          </div>
          <p className="mt-3 text-sm font-medium hover:underline">Moonqlit -T3</p>
          <div className="mt-1 gap-6 text-sm">
            <p className="line-through mb-1">Rs.2,000 PKR</p>
            <p className="text-[15px] font-semibold">From Rs.1,299 PKR</p>
          </div>
        </div>

        {/* six */}
        <div className="w-full mb-6 px-2">
          <div className="w-[270px] h-[336px] overflow-hidden">
            <Image
              src="/images/trouser-six.webp"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full hover:scale-105"
              priority
            />
          </div>
          <p className="mt-3 text-sm font-medium hover:underline">
            Hot Pink Polka -T8
          </p>
          <div className="mt-1 gap-6 text-sm">
            <p className="line-through mb-1">Rs.2,000 PKR</p>
            <p className="text-[15px] font-semibold">From Rs.1,299 PKR</p>
          </div>
        </div>

        {/* seven */}
        <div className="w-full mb-6 px-2">
          <div className="w-[270px] h-[336px] overflow-hidden">
            <Image
              src="/images/trouser-seven.webp"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full hover:scale-105"
              priority
            />
          </div>
          <p className="mt-3 text-sm font-medium hover:underline">
            Pitch Black -T7
          </p>
          <div className="mt-1 gap-6 text-sm">
            <p className="line-through mb-1">Rs.2,000 PKR</p>
            <p className="text-[15px] font-semibold">From Rs.1,299 PKR</p>
          </div>
        </div>

        {/* eight */}
        <div className="w-full mb-6 px-2">
          <div className="w-[270px] h-[336px] overflow-hidden">
            <Image
              src="/images/trouser-eight.webp"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full hover:scale-105"
              priority
            />
          </div>
          <p className="mt-3 text-sm font-medium hover:underline">
            Orange Chequered -T2
          </p>
          <div className="mt-1 gap-6 text-sm">
            <p className="line-through mb-1">Rs.2,000 PKR</p>
            <p className="text-[15px] font-semibold">Rs.1,299 PKR</p>
          </div>
        </div>

        {/* nine */}
        <div className="w-full mb-6 px-2">
          <div className="w-[270px] h-[336px] overflow-hidden">
            <Image
              src="/images/trouser-nine.jpg"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full hover:scale-105"
              priority
            />
          </div>
          <p className="mt-3 text-sm font-medium hover:underline">
            Violet Chequered -T9
          </p>
          <div className="mt-1 gap-6 text-sm">
            <p className="line-through mb-1">Rs.2,000 PKR</p>
            <p className="text-[15px] font-semibold">From Rs.1,299 PKR</p>
          </div>
        </div>

        {/* ten */}
        <div className="w-full mb-6 px-2">
          <div className="w-[270px] h-[336px] overflow-hidden">
            <Image
              src="/images/trouser-ten.webp"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full hover:scale-105"
              priority
            />
          </div>
          <p className="mt-3 text-sm font-medium hover:underline">
            Neon Chequered -T5
          </p>
          <div className="mt-1 gap-6 text-sm">
            <p className="line-through mb-1">Rs.2,000 PKR</p>
            <p className="text-[15px] font-semibold">From Rs.1,299 PKR</p>
          </div>
        </div>

        {/* eleven */}
        <div className="w-full mb-6 px-2">
          <div className="w-[270px] h-[336px] overflow-hidden">
            <Image
              src="/images/trouser-eleven.jpg"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full hover:scale-105"
              priority
            />
          </div>
          <p className="mt-3 text-sm font-medium hover:underline">
            Cherry Red -T1
          </p>
          <div className="mt-1 gap-6 text-sm">
            <p className="line-through mb-1">Rs.2,000 PKR</p>
            <p className="text-[15px] font-semibold">Rs.1,299 PKR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
