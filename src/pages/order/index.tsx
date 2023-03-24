import { type NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import toast from "react-hot-toast";
import MinusIcon from "components/MinusIcon";
import PlusIcon from "components/PlusIcon";
import { useState } from "react";

const Order: NextPage = () => {
  const router = useRouter();

  const [brownSugarBobaFreshMilk, setBrownSugarBobaFreshMilk] = useState(
    Number(router.query.item1) || 0
  );
  const [cheeseMango, setCheeseMango] = useState(
    Number(router.query.item2) || 0
  );
  const [peachWithFourSeasonsTea, setPeachWithFourSeasonsTea] = useState(
    Number(router.query.item3) || 0
  );
  const [pineappleWithJasmineTea, setPineappleWithJasmineTea] = useState(
    Number(router.query.item4) || 0
  );

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
              <div className="w-128 h-36">
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 px-2 text-xl">
                    <div className="text-left font-bold">
                      <div>Brown Sugar Boba</div>
                      <div>
                        Fresh Milk{" "}
                        <span className="ml-1 text-base font-normal text-neutral-400">
                          HK$ 37
                        </span>
                      </div>
                      <div className="mt-3 text-pink-500">
                        HK$ {37 * brownSugarBobaFreshMilk}
                      </div>
                      <div className="mt-3 flex flex-row items-start justify-start gap-3">
                        <button
                          className="rounded-full transition-colors hover:bg-pink-800/50 active:scale-95"
                          onClick={() => {
                            if (brownSugarBobaFreshMilk == 50) {
                              toast.error("Cannot have more than 50 items");
                              return;
                            }
                            setBrownSugarBobaFreshMilk(
                              brownSugarBobaFreshMilk + 1
                            );
                          }}
                        >
                          <PlusIcon />
                        </button>
                        <div className="px-1 text-left text-lg">
                          {brownSugarBobaFreshMilk}
                        </div>
                        <button
                          className="rounded-full transition-colors hover:bg-pink-800/50 active:scale-95"
                          onClick={() => {
                            if (brownSugarBobaFreshMilk < 1) {
                              toast.error("Cannot have less than 0 items");
                              return;
                            }
                            setBrownSugarBobaFreshMilk(
                              brownSugarBobaFreshMilk - 1
                            );
                          }}
                        >
                          <MinusIcon />
                        </button>
                      </div>
                    </div>
                    <Image
                      src="/img/drinks/BrownSugarBobaFreshMilk.jpg"
                      alt="BrownSugarBobaFreshMilk"
                      className="rounded-xl"
                      width={192}
                      height={0}
                    />
                  </div>
                  {/* <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {}}
                  >
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="w-128 h-36">
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 px-2 text-xl">
                    <div className="text-left font-bold">
                      <div>
                        Cheese Mango
                        <div>
                          <span className="text-base font-normal text-neutral-400">
                            HK$ 37
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 text-pink-500">
                        HK$ {37 * cheeseMango}
                      </div>
                      <div className="mt-3 flex flex-row items-start justify-start gap-3">
                        <button
                          className="rounded-full transition-colors hover:bg-pink-800/50 active:scale-95"
                          onClick={() => {
                            if (cheeseMango == 50) {
                              toast.error("Cannot have more than 50 items");
                              return;
                            }
                            setCheeseMango(cheeseMango + 1);
                          }}
                        >
                          <PlusIcon />
                        </button>
                        <div className="px-1 text-left text-lg">
                          {cheeseMango}
                        </div>
                        <button
                          className="rounded-full transition-colors hover:bg-pink-800/50 active:scale-95"
                          onClick={() => {
                            if (cheeseMango < 1) {
                              toast.error("Cannot have less than 0 items");
                              return;
                            }
                            setCheeseMango(cheeseMango - 1);
                          }}
                        >
                          <MinusIcon />
                        </button>
                      </div>
                    </div>
                    <Image
                      src="/img/drinks/CheeseMango.jpg"
                      alt="CheeseMango"
                      className="rounded-xl"
                      width={192}
                      height={0}
                    />
                  </div>
                  {/* <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {}}
                  >
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
            <div className="flex  flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="w-128 h-36">
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 px-2 text-xl">
                    <div className="text-left font-bold">
                      <div>Peach with Four</div>
                      <div>
                        Seasons Tea
                        <span className="ml-2 text-base font-normal text-neutral-400">
                          HK$ 37
                        </span>
                      </div>
                      <div className="mt-3 text-pink-500">
                        HK$ {37 * peachWithFourSeasonsTea}
                      </div>
                      <div className="mt-3 flex flex-row items-start justify-start gap-3">
                        <button
                          className="rounded-full transition-colors hover:bg-pink-800/50 active:scale-95"
                          onClick={() => {
                            if (peachWithFourSeasonsTea == 50) {
                              toast.error("Cannot have more than 50 items");
                              return;
                            }
                            setPeachWithFourSeasonsTea(
                              peachWithFourSeasonsTea + 1
                            );
                          }}
                        >
                          <PlusIcon />
                        </button>
                        <div className="px-1 text-left text-lg">
                          {peachWithFourSeasonsTea}
                        </div>
                        <button
                          className="rounded-full transition-colors hover:bg-pink-800/50 active:scale-95"
                          onClick={() => {
                            if (peachWithFourSeasonsTea < 1) {
                              toast.error("Cannot have less than 0 items");
                              return;
                            }
                            setPeachWithFourSeasonsTea(
                              peachWithFourSeasonsTea - 1
                            );
                          }}
                        >
                          <MinusIcon />
                        </button>
                      </div>
                    </div>
                    <Image
                      src="/img/drinks/PeachWithFourSeasonsTea.jpg"
                      alt="PeachWithFourSeasonsTea"
                      className="rounded-xl"
                      width={192}
                      height={0}
                    />
                  </div>
                  {/* <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {}}
                  >
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="w-128 h-36">
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 px-2 text-xl">
                    <div className="text-left font-bold">
                      <div>Pineapple with</div>
                      <div>
                        Jasmine Tea
                        <span className="ml-2 text-base font-normal text-neutral-400">
                          HK$ 37
                        </span>
                      </div>
                      <div className="mt-3 text-pink-500">
                        HK$ {37 * pineappleWithJasmineTea}
                      </div>
                      <div className="mt-3 flex flex-row items-start justify-start gap-3">
                        <button
                          className="rounded-full transition-colors hover:bg-pink-800/50 active:scale-95"
                          onClick={() => {
                            if (pineappleWithJasmineTea == 50) {
                              toast.error("Cannot have more than 50 items");
                              return;
                            }
                            setPineappleWithJasmineTea(
                              pineappleWithJasmineTea + 1
                            );
                          }}
                        >
                          <PlusIcon />
                        </button>
                        <div className="px-1 text-left text-lg">
                          {pineappleWithJasmineTea}
                        </div>
                        <button
                          className="rounded-full transition-colors hover:bg-pink-800/50 active:scale-95"
                          onClick={() => {
                            if (pineappleWithJasmineTea < 1) {
                              toast.error("Cannot have less than 0 items");
                              return;
                            }
                            setPineappleWithJasmineTea(
                              pineappleWithJasmineTea - 1
                            );
                          }}
                        >
                          <MinusIcon />
                        </button>
                      </div>
                    </div>
                    <Image
                      src="/img/drinks/PineappleWithJasmineTea.jpg"
                      alt="PineappleWithJasmineTea"
                      className="rounded-xl"
                      width={192}
                      height={0}
                    />
                  </div>
                  {/* <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {}}
                  >
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <button
              className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => {
                router.push("/userHome");
              }}
            >
              Back
            </button>
            <button
              className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => {
                if (
                  brownSugarBobaFreshMilk == 0 &&
                  cheeseMango == 0 &&
                  peachWithFourSeasonsTea == 0 &&
                  pineappleWithJasmineTea == 0
                ) {
                  toast.error("Please select at least one item");
                  return;
                }
                router.push({
                  pathname: "/checkout",
                  query: {
                    item1: brownSugarBobaFreshMilk,
                    item2: cheeseMango,
                    item3: peachWithFourSeasonsTea,
                    item4: pineappleWithJasmineTea,
                  },
                });
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Order;
