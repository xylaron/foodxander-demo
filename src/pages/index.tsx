import { type NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-7xl font-extrabold text-white">
            food<span>Xander</span> Demo
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 px-8 py-4 text-white hover:bg-white/20"
              onClick={() => router.push("/userHome")}
            >
              <h3 className="text-2xl font-bold">
                Login as Example User <span>→</span>
              </h3>
            </button>
            <button
              className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/10 px-8 py-4 text-white hover:bg-white/20"
              onClick={() => router.push("/restaurantHome")}
            >
              <h3 className="text-2xl font-bold">
                Login as Example Restaurant <span>→</span>
              </h3>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
