import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);
  return (
    <div>
      <Head>
        <title>Halome</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-52">
        {/* <ThemeToggler /> */}
        <br />
        <Link href="/landing-page">
          <p className="hover:text-blue-500">Landing Page</p>
        </Link>
        <br />
        <Link href="/landing-page1">
          <p className="hover:text-blue-500">Landing Page 1</p>
        </Link>
        <br />
        <Link href="/download-page">
          <p className="hover:text-blue-500">Download Page</p>
        </Link>
      </main>
    </div>
  );
};

export default Home;
