import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  function onClickButton() {
    router.push("/test");
  }

  useEffect(() => {
    router.prefetch("/test");
  }, [])

  return (<>
    <header>
      <Link href={"/"}>index</Link>
      &nbsp;
      <Link href={"/search/book/1"}>book</Link>
      &nbsp;
      <Link href={"/search"} prefetch={false}>
        search
      </Link>
      &nbsp;
      <div>
        <button onClick={onClickButton}>test</button>
      </div>
    </header>
    <Component {...pageProps} />
  </>);
}
