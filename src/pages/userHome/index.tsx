import { type NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import toast from "react-hot-toast";

const UserHome: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
          <div>
            <div className="my-4 text-7xl font-extrabold text-white">
              Nearby <span>Restaurants</span>
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
              <div className="h-96 w-96">
                <div className="flex flex-col gap-4">
                  <Image
                    src="/img/etea_banner.jpg"
                    alt="etea_banner"
                    className="rounded-xl"
                    width={400}
                    height={200}
                  />
                  <div className="grid grid-cols-2 px-2 text-xl">
                    <div className="text-left font-bold">E.Tea</div>
                    <div className="text-right font-bold">⭐ 4.5/5</div>
                  </div>
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {
                      router.push("/order");
                    }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="h-96 w-96">
                <div className="flex flex-col gap-4">
                  <Image
                    src="/img/mcdonalds_banner.jpg"
                    alt="mcdonalds_banner"
                    className="rounded-xl"
                    width={400}
                    height={200}
                  />
                  <div className="grid grid-cols-2 px-2 text-xl">
                    <div className="text-left font-bold">McDonald's</div>
                    <div className="text-right font-bold">⭐ 3.8/5</div>
                  </div>
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {
                      toast.error("This restaurant is currently unavailable.");
                    }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="flex  flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="h-96 w-96">
                <div className="flex flex-col gap-4">
                  <Image
                    src="/img/bbeggwaffle_banner.jpg"
                    alt="bbeggwaffle_banner"
                    className="rounded-xl"
                    width={400}
                    height={200}
                  />
                  <div className="grid grid-cols-2 px-2 text-xl">
                    <div className="text-left font-bold">BB Egg Waffle</div>
                    <div className="text-right font-bold">⭐ 4.4/5</div>
                  </div>
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {
                      toast.error("This restaurant is currently unavailable.");
                    }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="h-96 w-96">
                <div className="flex flex-col gap-4">
                  <Image
                    src="/img/mongchacha_banner.jpg"
                    alt="mongchacha_banner"
                    className="rounded-xl"
                    width={400}
                    height={200}
                  />
                  <div className="grid grid-cols-2 px-2 text-xl">
                    <div className="text-left font-bold">Mong Cha Cha</div>
                    <div className="text-right font-bold">⭐ 3.5/5</div>
                  </div>
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-pink-700 px-4 py-2 font-medium text-white transition-colors hover:bg-pink-800 focus:outline-none active:scale-95 active:bg-pink-900 disabled:pointer-events-none disabled:opacity-50"
                    onClick={() => {
                      toast.error("This restaurant is currently unavailable.");
                    }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserHome;
