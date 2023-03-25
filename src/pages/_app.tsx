import { type AppType } from "next/app";
import Head from "next/head";
import { api } from "utils/api";

import "styles/globals.css";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Login from "components/Login";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <title>foodXander</title>
      </Head>
      {isAuthenticated ? (
        <div className="">
          <Toaster />
          <Component {...pageProps} />
        </div>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
};

export default api.withTRPC(MyApp);
