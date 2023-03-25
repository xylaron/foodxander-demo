import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import type { Order, Item } from "types/types";
import type { Orders } from "@prisma/client";
import { api } from "utils/api";
import { toast } from "react-hot-toast";

const RestaurantHome: NextPage = () => {
  const router = useRouter();

  const [dataArray, setDataArray] = useState<Orders[]>([]);
  const [viewHistory, setViewHistory] = useState(false);

  const orders = api.orders.get.useQuery(undefined, {
    onSuccess: (data) => {
      setDataArray(data);
    },
  });

  const editOrder = api.orders.update.useMutation({
    onSuccess: () => {
      orders.refetch();
      toast.success("Order Delivered!");
    },
  });

  const handleSubmit = (id: number, array: Orders[]) => {
    const findData = array.find((data) => data.id === id) as any;
    const parsedOrderData = JSON.parse(findData.orderData.orderData);
    const orderJson: Order = {
      date: parsedOrderData.date,
      description: parsedOrderData.description,
      status: "Delivered",
      restaurant: parsedOrderData.restaurant,
      items: parsedOrderData.items,
    };
    editOrder.mutate({ id, orderData: JSON.stringify(orderJson) });
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
          <div>
            <div className="my-4 text-7xl font-extrabold text-white">
              {viewHistory ? "Past" : "Recent"} <span>Orders</span>
            </div>
            <div className="mt-8 text-center text-lg font-normal">
              Currently Logged in as <b>Example Restaurant</b>.{" "}
              <button className="underline" onClick={() => router.push("/")}>
                Logout
              </button>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center">
              <button
                className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                onClick={() => {
                  setViewHistory(!viewHistory);
                }}
              >
                View {viewHistory ? "Recent" : "Past"} Orders
              </button>
            </div>
          </div>
          {orders.isLoading ? (
            <div className="text-white">Loading...</div>
          ) : (
            <div>
              {viewHistory ? (
                <DisplayHistory dataArray={dataArray} />
              ) : (
                <DisplayOrder
                  dataArray={dataArray}
                  handleSubmit={handleSubmit}
                />
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

const DisplayOrder: React.FC<{
  dataArray: Orders[];
  handleSubmit: (id: number, array: Orders[]) => void;
}> = ({ dataArray, handleSubmit }) => {
  const sortedDataArray = dataArray.sort((a, b) => {
    return a.id - b.id;
  });
  const filterDataArray = sortedDataArray.filter((data) => {
    const parseData = data as any;
    const orderData = JSON.parse(parseData.orderData.orderData);
    return orderData.status !== "Delivered";
  });
  if (filterDataArray.length === 0) {
    return (
      <div className="text-2xl font-bold text-white">
        There are no new orders.
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-12">
      {filterDataArray.map((processData) => {
        const parseData = processData as any;
        const orderData = JSON.parse(parseData.orderData.orderData);
        return (
          <div className="flex h-96 w-96 flex-col justify-between rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
            <div>
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
            <button
              className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => {
                handleSubmit(parseData.id, dataArray);
              }}
            >
              Deliver Order
            </button>
          </div>
        );
      })}
    </div>
  );
};

const DisplayHistory: React.FC<{ dataArray: Orders[] }> = ({ dataArray }) => {
  const sortedDataArray = dataArray.sort((a, b) => {
    return b.id - a.id;
  });
  const filterDataArray = sortedDataArray.filter((data) => {
    const parseData = data as any;
    const orderData = JSON.parse(parseData.orderData.orderData);
    return orderData.status !== "Pending";
  });
  if (filterDataArray.length === 0) {
    return (
      <div className="text-2xl font-bold text-white">
        There are no new orders.
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-12">
      {filterDataArray.map((processData) => {
        const parseData = processData as any;
        const orderData = JSON.parse(parseData.orderData.orderData);
        return (
          <div className="flex h-96 w-96 flex-col justify-between rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
            <div>
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
  );
};

export default RestaurantHome;
