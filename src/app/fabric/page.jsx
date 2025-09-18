import Image from "next/image";
import React from "react";

const Fabric = () => {
  return (
    <div>
      {/* hero image */}
      <section className="w-full min-h-screen my-8">
        <Image
          src="/images/fabri-hero.webp"
          alt="Fabric Hero"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority
        />
      </section>

      {/* sec */}
      <section className="flex flex-col items-center justify-center py-10 px-4 text-center">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-6">ADULTS MASKS</h1>

        {/* Prices */}
        <div className="space-y-3 mb-6 font-bold">
          <p className="text-lg text-[#121212BF]">Pack of 4 = Rs 499/-</p>
          <p className="text-lg text-[#121212BF]">Pack of 6 = 799/-</p>
          <p className="text-lg text-[#121212BF]">Pack of 10 = 1199/-</p>
        </div>

        {/* Instructions */}
        <div className="text-lg text-[#121212BF] space-y-2 max-w-md">
          <div className="flex gap-20 font-bold">
            1:{" "}
            <p className="font-bold ">
              Select any 4/6/10 Masks of your choice.
            </p>{" "}
          </div>
          <div className="flex gap-20 font-bold">
            2: <p className="font-bold ">Press "Add bundle to cart" button.</p>{" "}
          </div>
          <div className="flex gap-16 font-bold">
            3:{" "}
            <p className="font-bold ">
              Go to Checkout and add your information
            </p>{" "}
          </div>
        </div>
      </section>

      {/* products */}

      <div className="grid grid-cols-5 gap-5 mx-4 mb-6">
        {/* first */}
        <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/fabric-sun-mask-first.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="mt-2 text-center font-semibold text-lg">
          Sunflower Yellow-M26
          </p>
          <button className="mt-2 w-full bg-black text-white text-sm py-2">
            Add
          </button>
        </div>

        {/* sec */}
        <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/fabric-easter-mask-sec.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="mt-2 text-center font-semibold text-lg">
          Easter Egg-M215
          </p>
          <button className="mt-2 w-full bg-black text-white text-sm py-2">
            Add
          </button>
        </div>

         {/* third */}
         <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/fabric-mermaid-mask-third.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="mt-2 text-center font-semibold text-lg">
          Mermaid-M210
          </p>
          <button className="mt-2 w-full bg-black text-white text-sm py-2">
            Add
          </button>
        </div>

         {/* four */}
         <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/fabric-snakes-mask-four.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="mt-2 text-center font-semibold text-lg">
          Snakes-M216
          </p>
          <button className="mt-2 w-full bg-black text-white text-sm py-2">
            Add
          </button>
        </div>

         {/* five */}
        <div className="h-[200px] border border-gray-400 rounded-sm text-center content-center font-semibold text-[#121212BF]">
            <p>Bundle price</p>
            <p>Rs.0</p>
            <p>No products have been added to the bundle yet</p>
        </div>

         {/* six */}
         <div className="h-[350px] flex flex-col p-3">
          <div className="flex-grow w-full relative">
            <Image
              src="/images/fabric-springtime-mask-five.webp"
              alt="Sample"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="mt-2 text-center font-semibold text-lg">
          Springtime Hops-M219
          </p>
          <button className="mt-2 w-full bg-black text-white text-sm py-2">
            Add
          </button>
        </div>




      </div>
    </div>
  );
};

export default Fabric;
