import { type NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import toast from "react-hot-toast";

const Order: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
          <div>
            <div className="my-4 text-7xl font-extrabold text-white">
              Order <span>E.Tea</span>
            </div>
            <div className="text-center text-lg font-normal">
              Currently Logged in as <b>Example User</b>.{" "}
              <button className="underline" onClick={() => router.push("/")}>
                Logout
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="w-128 h-48">
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 px-2 text-xl">
                    <div className="text-left font-bold">
                      <div>Brown Sugar Boba</div>
                      <div>Fresh Milk</div>
                      <div className="mt-3 text-pink-500">HK$ 37</div>
                    </div>
                    <Image
                      src="/img/drinks/BrownSugarBobaFreshMilk.jpg"
                      alt="BrownSugarBobaFreshMilk"
                      className="rounded-xl"
                      width={192}
                      height={0}
                    />
                  </div>
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {}}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="w-128 h-48">
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 px-2 text-xl">
                    <div className="text-left font-bold">
                      <div>Cheese Mango</div>
                      <div className="mt-9 text-pink-500">HK$ 37</div>
                    </div>
                    <Image
                      src="/img/drinks/CheeseMango.jpg"
                      alt="CheeseMango"
                      className="rounded-xl"
                      width={192}
                      height={0}
                    />
                  </div>
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {}}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="flex  flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="w-128 h-48">
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 px-2 text-xl">
                    <div className="text-left font-bold">
                      <div>Peach with Four</div>
                      <div>Seasons Tea</div>
                      <div className="mt-3 text-pink-500">HK$ 37</div>
                    </div>
                    <Image
                      src="/img/drinks/PeachWithFourSeasonsTea.jpg"
                      alt="PeachWithFourSeasonsTea"
                      className="rounded-xl"
                      width={192}
                      height={0}
                    />
                  </div>
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {}}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="w-128 h-48">
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 px-2 text-xl">
                    <div className="text-left font-bold">
                      <div>Pineapple with</div>
                      <div>Jasmine Tea</div>
                      <div className="mt-3 text-pink-500">HK$ 37</div>
                    </div>
                    <Image
                      src="/img/drinks/PineappleWithJasmineTea.jpg"
                      alt="PineappleWithJasmineTea"
                      className="rounded-xl"
                      width={192}
                      height={0}
                    />
                  </div>
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {}}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
            onClick={() => {
              router.push("/userHome");
            }}
          >
            Back
          </button>
        </div>
      </main>
    </>
  );
};

export default Order;
