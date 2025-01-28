import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {useRouter} from "next/router";
import React, {ReactNode} from "react";
import GlobalLayout from "@/components/layout/global-layout";
import {NextPage} from "next";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactNode) => ReactNode;
}

export default function App({
                                Component,
                                pageProps
}:
                                AppProps & { Component: NextPageWithLayout
}) {
  const router = useRouter();

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
      <GlobalLayout>
        {getLayout(<Component {...pageProps} />)}
      </GlobalLayout>
  );
}
