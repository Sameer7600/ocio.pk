import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <section className="w-full min-h-screen mb-6">
        <Image
          src="/images/silk-hero-img.webp"
          alt="hero images"
          width={1920}
          height={950}
        />
      </section>

      {/* sec */}
      <section className="flex flex-col items-center justify-center py-10 px-4 text-center">
        <h1 className="text-[40px] font-bold mb-2">Silk Scrunchies Deals</h1>
        <div className="space-y-3 mb-6 font-bold">
          <p className="text-[24px]">Pack Of 3 = Rs 399/-</p>
          <p className="text-[24px]">Pack Of 5 = Rs 599/-</p>
          <p className="text-[24px]">Pack Of 8 = Rs 899/</p>
          <p className="text-[24px]">Pack Of 12 = Rs 1099/-</p>
        </div>

        <div className="text-lg space-y-2 max-w-md">
          <div>
            <p className="text-[16px] font-semibold">Add Any 3/5/8/10</p>
          </div>
          <div>
            <p className="text-[16px] font-semibold">
              Press "Add bundle to cart" button.
            </p>
          </div>
          <div>
            <p className="text-[16px] font-semibold">
              Go to Checkout and add your information.
            </p>
          </div>
        </div>
      </section>

      {/* sec3 */}
      <div className="grid grid-cols-4 gap-10 mx-12">
        {/* first */}
        <div className="h-[400px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/silk-brown-first.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="mt-2 text-center font-semibold text-lg">
          HAZEL BROWN-SS4
          </p>
          <button className="mt-2 w-full bg-black text-white text-sm py-1">
            Add
          </button>
        </div>

        {/* sec           */}
        <div className="h-[400px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/silk-bronze-sec.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="mt-2 text-center font-semibold text-lg">
          BRONZE-SS22
          </p>
          <button className="mt-2 w-full bg-black text-white text-sm py-1">
            Add
          </button>
        </div>

        {/* third */}
        <div className="h-[400px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/silk-burgundy-third.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="mt-2 text-center font-semibold text-lg">
          BURGUNDY-SS12
          </p>
          <button className="mt-2 w-full bg-black text-white text-sm py-1">
            Add
          </button>
        </div>

        {/* four */}
        <div className="h-[400px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/silk-pink-four.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="mt-2 text-center font-semibold text-lg">
          BABY PINK-SS9
          </p>
          <button className="mt-2 w-full bg-black text-white text-sm py-1">
            Add
          </button>
        </div>

        {/* five */}
        <div className="h-[400px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/silk-pinken-five.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="mt-2 text-center font-semibold text-lg">
          PINKEN-SS25
          </p>
          <button className="mt-2 w-full bg-black text-white text-sm py-1">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
