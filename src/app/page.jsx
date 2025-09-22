import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative w-full h-screen my-0">
        <Image
          src="/images/home-banner-hero.webp"
          alt="Fabric Hero"
          fill
          priority
          className="object-cover object-center"
        />
      </section>

      <main>
        <h2 className="text-4xl font-bold ml-12 mt-6">Shop By Category</h2>

        {/* Shop by Category */}
        <div className="grid grid-cols-3 gap-5 mx-12 mt-10">
          <div>
            <Image
              src="/images/stage-first.webp"
              alt="Co-ord Sets"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg hover:scale-105"
            />
            <p className="text-xl font-bold mt-2 ">
              Co-ord Sets{" "}
              <ArrowRight className="w-4 h-4 inline-block hover:scale-125" />{" "}
            </p>
          </div>

          <div>
            <Image
              src="/images/stage-sec.webp"
              alt="Night Suits"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg hover:scale-105"
            />
            <p className="text-xl font-bold mt-2">
              Night Suits{" "}
              <ArrowRight className="w-4 h-4 inline-block hover:scale-125" />{" "}
            </p>
          </div>

          <div>
            <Image
              src="/images/stage-third.webp"
              alt="Kids Night Suits"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg hover:scale-105"
            />
            <p className="text-xl font-bold mt-2">
              Kids Night-Suits{" "}
              <ArrowRight className="w-4 h-4 inline-block hover:scale-125" />{" "}
            </p>
          </div>

          <div>
            <Image
              src="/images/stage-four.webp"
              alt="Fabric Mask"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg hover:scale-105"
            />
            <p className="text-xl font-bold mt-2">
              Fabric Mask{" "}
              <ArrowRight className="w-4 h-4 inline-block hover:scale-125" />{" "}
            </p>
          </div>

          <div>
            <Image
              src="/images/stage-five.webp"
              alt="Silk Scrunchies"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg hover:scale-105"
            />
            <p className="text-xl font-bold mt-2">
              Silk Scrunchies{" "}
              <ArrowRight className="w-4 h-4 inline-block hover:scale-125" />{" "}
            </p>
          </div>

          <div>
            <Image
              src="/images/stage-six.webp"
              alt="Unstitched Fabric"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg hover:scale-105"
            />
            <p className="text-xl font-bold mt-2">
              Unstitched Fabric{" "}
              <ArrowRight className="w-4 h-4 inline-block hover:scale-125" />{" "}
            </p>
          </div>
        </div>

        {/* Second Grid */}
        <div className="grid grid-cols-3 gap-5 mx-12 mt-10">
          <div>
            <Image
              src="/images/stage-seven.webp"
              alt="Kids Mask"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg hover:scale-105"
            />
            <p className="text-xl font-bold mt-5 mb-5">
              Kids Mask{" "}
              <ArrowRight className="w-4 h-4 inline-block hover:scale-125" />{" "}
            </p>
          </div>

          <div>
            <Image
              src="/images/stage-eight.webp"
              alt="Embroidered Masks"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-lg hover:scale-105"
            />
            <p className="text-xl font-bold mt-5 mb-5">
              Embroidered Masks{" "}
              <ArrowRight className="w-4 h-4 inline-block hover:scale-125" />{" "}
            </p>
          </div>
        </div>
      </main>

      {/* Bundles */}
      <section>
        <h2 className="ml-12 mb-10 text-4xl font-bold">Bundles</h2>
        <div className="grid grid-cols-2 gap-10 mx-12">
          <div>
            <Image
              src="/images/bundle-first.webp"
              alt="Adults Masks"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="m-2 font-bold">ADULTS Masks</div>
            <div className="m-2 font-bold">Rs.0 PKR</div>
          </div>

          <div>
            <Image
              src="/images/bundle-sec.jpg"
              alt="Silk Scrunchies Deals"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="m-2 font-bold">Silk Scrunchies Deals</div>
            <div className="m-2 font-bold">Rs.0 PKR</div>
          </div>

          <div>
            <Image
              src="/images/bundle-third.webp"
              alt="Night Suits Bundle"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="m-2 font-bold">Night Suits Bundle</div>
            <div className="m-2 font-bold">Rs.0 PKR</div>
          </div>

          <div>
            <Image
              src="/images/bundle-four.webp"
              alt="Barbie Bundle"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="m-2 font-bold">Barbie Bundle</div>
            <div className="m-2 font-bold">From Rs4,700 PKR</div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="h-10 px-8 bg-black text-white font-bold">
            View all
          </button>
        </div>
      </section>

      {/* Best Seller */}
      <section>
        <strong className="text-4xl font-bold m-10">Best Seller</strong>
        <div className="grid grid-cols-4 gap-5 mt-8 mx-12">
          <div>
            <Image
              src="/images/best-sellar-first.webp"
              alt="Pink suit"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg hover:scale-105"
            />
            <div className="m-5 font-bold mb-3">Pink Polka-WPJ50</div>
            <span className="line-through ml-5 text-gray-300">
              Rs.3,000 PKR
            </span>
            <span className="ml-2 font-bold">Rs.1,996 PKR</span>
          </div>

          <div>
            <Image
              src="/images/best-sellar-sec.jpg"
              alt="Yellow suit"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg hover:scale-105"
            />
            <div className="m-5 font-bold mb-3">Yellow Dalsy-WPJ70</div>
            <span className="line-through ml-5 text-gray-300">
              Rs.3,000 PKR
            </span>
            <span className="ml-2 font-bold">Rs.1,996 PKR</span>
          </div>

          <div>
            <Image
              src="/images/best-sellar-third.webp"
              alt="Sky suit"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg hover:scale-105"
            />
            <div className="m-5 font-bold mb-3">Dalsy Blue - WPJS10</div>
            <span className="line-through ml-5 text-gray-300">
              Rs.3,000 PKR
            </span>
            <span className="ml-2 font-bold">Rs.1,996 PKR</span>
          </div>

          <div>
            <Image
              src="/images/best-sellar-four.webp"
              alt="Purple suit"
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg hover:scale-105"
            />
            <div className="m-5 font-bold mb-3">Lllac Wines-WPJ70</div>
            <span className="line-through ml-5 text-gray-300">
              Rs.3,000 PKR
            </span>
            <span className="ml-2 font-bold">Rs.1,996 PKR</span>
          </div>
        </div>
        <div className="flex justify-center mt-8 mb-5">
          <button className="h-10 px-8 bg-black text-white font-bold">
            View all
          </button>
        </div>
      </section>

      {/* Top Black Section */}
      <div className="h-60 w-full bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-10">
        <div className="space-y-3 md:ml-72">
          <p className="font-bold text-lg">Nationwide Delivery</p>
          <p>199/- Delivery All Over Pakistan</p>
        </div>

        <div className="space-y-3 md:mr-32">
          <p className="font-bold text-lg">Get In Touch</p>
          <p>Contact Us : 0328-0572497</p>
          <p>Address : AB Exports Near Bagdadi House Lahore Pakistan.</p>
          <p>Email : Ocio.exports@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
