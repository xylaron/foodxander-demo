import { type NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import toast from "react-hot-toast";
import MinusIcon from "components/MinusIcon";
import PlusIcon from "components/PlusIcon";
import { useState } from "react";
import { api } from "utils/api";
import { Order } from "types/types";

const Checkout: NextPage = () => {
  const router = useRouter();

  const [brownSugarBobaFreshMilk, setBrownSugarBobaFreshMilk] = useState(
    Number(router.query.item1)
  );
  const [cheeseMango, setCheeseMango] = useState(Number(router.query.item2));
  const [peachWithFourSeasonsTea, setPeachWithFourSeasonsTea] = useState(
    Number(router.query.item3)
  );
  const [pineappleWithJasmineTea, setPineappleWithJasmineTea] = useState(
    Number(router.query.item4)
  );

  const createOrder = api.orders.create.useMutation({
    onSuccess: () => {
      toast.success("Order Confirmed!");
      router.push("/userHome");
    },
  });

  const handleSubmit = () => {
    const orderJson: Order = {
      date: new Date().toLocaleString("en-UK", {
        timeZone: "Asia/Hong_Kong",
      }),
      description: "Order from Example User",
      status: "Pending",
      restaurant: {
        id: 1,
        name: "E Tea",
        address: "Example Address",
        phone: "12345678",
      },
      items: [],
    };

    if (brownSugarBobaFreshMilk > 0) {
      orderJson.items.push({
        id: 1,
        name: "Brown Sugar Boba Fresh Milk",
        price: 37,
        quantity: brownSugarBobaFreshMilk,
      });
    }
    if (cheeseMango > 0) {
      orderJson.items.push({
        id: 2,
        name: "Cheese Mango",
        price: 37,
        quantity: cheeseMango,
      });
    }
    if (peachWithFourSeasonsTea > 0) {
      orderJson.items.push({
        id: 3,
        name: "Peach with Four Seasons Tea",
        price: 37,
        quantity: peachWithFourSeasonsTea,
      });
    }
    if (pineappleWithJasmineTea > 0) {
      orderJson.items.push({
        id: 4,
        name: "Pineapple with Jasmine Tea",
        price: 37,
        quantity: pineappleWithJasmineTea,
      });
    }

    const orderJsonString = JSON.stringify(orderJson);

    createOrder.mutate({ orderData: orderJsonString });
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
          <div>
            <div className="my-4 text-7xl font-extrabold text-white">
              Confirm <span>Order</span>
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
                      <div>Fresh Milk </div>
                      <div className="mt-3 text-left text-lg font-normal">
                        {brownSugarBobaFreshMilk}x HK$ 37
                      </div>
                      <div className="mt-3 text-pink-500">
                        HK$ {37 * brownSugarBobaFreshMilk}
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
                        <div className="mt-9 text-left text-lg font-normal">
                          {cheeseMango}x HK$ 37
                        </div>
                        <div className="mt-3 text-pink-500">
                          HK$ {37 * cheeseMango}
                        </div>
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
                        <div className="mt-3 text-left text-lg font-normal">
                          {peachWithFourSeasonsTea}x HK$ 37
                        </div>
                        <div className="mt-3 text-pink-500">
                          HK$ {37 * peachWithFourSeasonsTea}
                        </div>
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
                        <div className="mt-3 text-left text-lg font-normal">
                          {pineappleWithJasmineTea}x HK$ 37
                        </div>
                        <div className="mt-3 text-pink-500">
                          HK$ {37 * pineappleWithJasmineTea}
                        </div>
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
                </div>
              </div>
            </div>
          </div>
          <div className="text-2xl font-bold">
            Order Total: HKD${" "}
            {brownSugarBobaFreshMilk * 37 +
              cheeseMango * 37 +
              peachWithFourSeasonsTea * 37 +
              pineappleWithJasmineTea * 37}
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <button
              className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => {
                router.push({
                  pathname: "/order",
                  query: {
                    item1: brownSugarBobaFreshMilk,
                    item2: cheeseMango,
                    item3: peachWithFourSeasonsTea,
                    item4: pineappleWithJasmineTea,
                  },
                });
              }}
            >
              Back
            </button>
            <button
              className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit Order
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
