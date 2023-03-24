import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import type { Order, Item } from "types/types";
import type { Orders } from "@prisma/client";
import { api } from "utils/api";

const RestaurantHome: NextPage = () => {
  const router = useRouter();

  const [dataArray, setDataArray] = useState<Orders[]>([]);

  const orders = api.orders.get.useQuery(undefined, {
    onSuccess: (data) => {
      setDataArray(data);
    },
  });

  // const parseData = JSON.parse(processData.orderData.orderData);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
          <div>
            <div className="my-4 text-7xl font-extrabold text-white">
              Recent <span>Orders</span>
            </div>
            <div className="text-center text-lg font-normal">
              Currently Logged in as <b>Example Restaurant</b>.{" "}
              <button className="underline" onClick={() => router.push("/")}>
                Logout
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12">
            {dataArray.map((processData) => {
              const parseData = processData as any;
              const orderData = JSON.parse(parseData.orderData.orderData);
              return (
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
                  <div className="h-96 w-96">
                    <div className="font-bold">Order ID: {parseData.id}</div>
                    <div className="mt-2 font-bold">
                      Order Date:{" "}
                      {orderData.date.toLocaleString("en-UK", {
                        timeZone: "Asia/Hong_Kong",
                      })}
                    </div>
                    <div className="mt-4 font-bold">
                      Status:{" "}
                      <span className="font-normal text-white">
                        {orderData.status}
                      </span>
                    </div>
                    <div className="mt-4 font-bold">Items:</div>
                    <div className="mt-2 flex flex-col gap-2">
                      {orderData.items.map((item: Item) => {
                        return (
                          <div className="">
                            {item.name} x {item.quantity}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default RestaurantHome;
