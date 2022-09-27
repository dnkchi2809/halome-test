import { useEffect } from "react";
import Header from "./header/header";
import LandingPageContent1 from "./landing-page/landing-page-content1";
import { useTheme } from "next-themes";

function LandingPage1() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <>
      <div>
        <Header />
        <LandingPageContent1 />
      </div>
    </>
  );
}

export default LandingPage1;
