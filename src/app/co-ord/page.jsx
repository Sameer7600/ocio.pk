import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="mb-10">
      <div className="px-8 py-10 mx-24">
        <h1 className="text-4xl font-bold mb-8">Co-ord Sets</h1>

        <div className="flex flex-wrap justify-between mb-6">
          <div className="flex gap-4">
            <div>
              <label className="text-sm font-medium mr-2">Filter:</label>
              <select className=" px-3 py-1 rounded">
                <option>Availability</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mr-2">Price:</label>
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
      <div className="grid grid-cols-4 gap-2 mx-24">
        {/* first */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-[270px] h-[336px] mx-auto overflow-hidden">
            <Image
              src="/images/co-ord-suit-first.webp"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>

          <p className="mt-4 text-sm font-medium hover:underline">
            Solid Maroon -CS32
          </p>
          <div className="mt-2 flex gap-6 text-sm">
            <span className="inline-block line-through">Rs.3,400 PKR</span>
            <span className="inline-block">Rs.2,999 PKR</span>
          </div>
        </div>

        {/* second */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-[270px] h-[336px] mx-auto overflow-hidden">
            <Image
              src="/images/co-ord-suit-sec.webp"
              alt="Hero image"
              width={270}
              height={336}
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>

          <p className="mt-4 text-sm font-medium hover:underline">
            Solid Dark Green -CS13
          </p>
          <div className="mt-2 flex gap-6 text-sm">
            <span className="inline-block line-through">Rs.3,400 PKR</span>
            <span className="inline-block">Rs.2,999 PKR</span>
          </div>
        </div>

        {/* third */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-[270px] h-[336px] mx-auto overflow-hidden">
            <Image
              src="/images/co-ord-suit-third.webp"
              alt="Hero image"
              width={270} 
              height={336}
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>

          <p className="mt-4 text-sm font-medium hover:underline">
            Solid Black -CS5
          </p>
          <div className="mt-2 flex gap-6 text-sm">
            <span className="inline-block line-through">Rs.3,400 PKR</span>
            <span className="inline-block">Rs.2,999 PKR</span>
          </div>
        </div>

        {/* four */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-[270px] h-[336px] mx-auto overflow-hidden">
            <Image
              src="/images/co-ord-suit-four.webp"
              alt="Hero image"
              width={270} 
              height={336}
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>

          <p className="mt-4 text-sm font-medium hover:underline">
            Solid Navy -CS32
          </p>
          <div className="mt-2 flex gap-6 text-sm">
            <span className="inline-block line-through">Rs.3,400 PKR</span>
            <span className="inline-block">Rs.2,999 PKR</span>
          </div>
        </div>

        {/* five */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-[270px] h-[336px] mx-auto overflow-hidden">
            <Image
              src="/images/co-ord-suit-five.webp"
              alt="Hero image"
              width={270} 
              height={336}
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>

          <p className="mt-4 text-sm font-medium hover:underline">
            Wrinkled Beigh -CS52
          </p>
          <div className="mt-2 flex gap-6 text-sm">
            <span className="inline-block line-through">Rs.3,400 PKR</span>
            <span className="inline-block">Rs.2,999 PKR</span>
          </div>
        </div>

        {/* six */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-[270px] h-[336px] mx-auto overflow-hidden">
            <Image
              src="/images/co-ord-suit-six.webp"
              alt="Hero image"
              width={270} 
              height={336}
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>

          <p className="mt-4 text-sm font-medium hover:underline">
            Solid Orange  -CS19
          </p>
          <div className="mt-2 flex gap-6 text-sm">
            <span className="inline-block line-through">Rs.3,400 PKR</span>
            <span className="inline-block">Rs.2,999 PKR</span>
          </div>
        </div>

        {/* seven */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-[270px] h-[336px] mx-auto overflow-hidden">
            <Image
              src="/images/co-ord-suit-seven.webp"
              alt="Hero image"
              width={270} 
              height={336}
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>

          <p className="mt-4 text-sm font-medium hover:underline">
            Solid Red -CS23
          </p>
          <div className="mt-2 flex gap-6 text-sm">
            <span className="inline-block line-through">Rs.3,400 PKR</span>
            <span className="inline-block">Rs.2,999 PKR</span>
          </div>
        </div>

        {/* eight */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-[270px] h-[336px] mx-auto overflow-hidden">
            <Image
              src="/images/co-ord-suit-eight.webp"
              alt="Hero image"
              width={270} 
              height={336}
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>

          <p className="mt-4 text-sm font-medium hover:underline">
            Solid beige -CS1
          </p>
          <div className="mt-2 flex gap-6 text-sm">
            <span className="inline-block line-through">Rs.3,400 PKR</span>
            <span className="inline-block">Rs.2,999 PKR</span>
          </div>
        </div>

        {/* nine */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-[270px] h-[336px] mx-auto overflow-hidden">
            <Image
              src="/images/co-ord-suit-nine.jpg"
              alt="Hero image"
              width={270} 
              height={336}
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>

          <p className="mt-4 text-sm font-medium hover:underline">
            Wrinkled Royal blue -CS49
          </p>
          <div className="mt-2 flex gap-6 text-sm">
            <span className="inline-block line-through">Rs.3,400 PKR</span>
            <span className="inline-block">Rs.2,999 PKR</span>
          </div>
        </div>

        {/* ten */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-[270px] h-[336px] mx-auto overflow-hidden">
            <Image
              src="/images/co-ord-suit-ten.webp"
              alt="Hero image"
              width={270} 
              height={336}
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>

          <p className="mt-4 text-sm font-medium hover:underline">
            Wrinkled Cream -CS40
          </p>
          <div className="mt-2 flex gap-6 text-sm">
            <span className="inline-block line-through">Rs.3,400 PKR</span>
            <span className="inline-block">Rs.2,999 PKR</span>
          </div>
        </div>

        {/* eleven */}
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-[270px] h-[336px] mx-auto overflow-hidden">
            <Image
              src="/images/co-ord-suit-eleven.webp"
              alt="Hero image"
              width={270} 
              height={336}
              className="object-contain object-center w-full h-full"
              priority
            />
          </div>

          <p className="mt-4 text-sm font-medium hover:underline">
            Solid Charcoal -CS9
          </p>
          <div className="mt-2 flex gap-6 text-sm">
            <span className="inline-block line-through">Rs.3,400 PKR</span>
            <span className="inline-block">Rs.2,999 PKR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
