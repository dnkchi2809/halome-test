import Footer from "./footer/footer";
import Header from "./header/header";
import DownloadPageContent from "./download-page/download-page-content";
import { useTheme } from "next-themes";
import { useEffect } from "react";

function DownloadPage() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <>
      <Header />
      <DownloadPageContent />
      <Footer />
    </>
  );
}

export default DownloadPage;
