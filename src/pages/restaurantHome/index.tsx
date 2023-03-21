import { type NextPage } from "next";
import { useRouter } from "next/router";

const RestaurantHome: NextPage = () => {
  const router = useRouter();
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
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="h-96 w-96"></div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="h-96 w-96"></div>
            </div>
            <div className="flex  flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="h-96 w-96"></div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <div className="h-96 w-96"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RestaurantHome;
