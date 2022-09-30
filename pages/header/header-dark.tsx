import Link from "next/link";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { openMenuRecoil } from "../../recoil/open-menu";
import MenuContent from "../menu/menu-content";

function HeaderDark() {
  const language = ["Tiếng Việt", "English", "Deutsch", "Espanol", "Italiano"];

  const [openLanguage, setOpenLanguage] = useState(false);

  const [openMenu, setOpenMenu] = useRecoilState(openMenuRecoil);

  const [languageSelect, setLanguageSelect] = useState(language[0]);

  return (
    <>
      <div className="w-screen h-20 flex flex-row items-center justify-between px-80 absolute top-0 left-0 shadow-md shadow-none bg-landing-page z-[996]">
        <div className="col-1/3 w-full">
          <Link href="/landing-page"><div className="w-[169px] h-[48.85px] bg-cover bg-halome-light bg-halome-dark" /></Link>
        </div>
        <div className="col-1/3 w-full flex justify-center">
          <div
            className="w-[28px] h-[28px] bg-[length:28px_28px] bg-center bg-no-repeat bg-menu-light bg-menu-dark"
            onClick={() => setOpenMenu(true)}
          />
        </div>
        <div className="col-1/3 w-full flex justify-end">
          <div className="relative flex flex-row items-center p-0 ">
            <div className="languageP">
              <p className=" text-white">{languageSelect}</p>
            </div>
            <div
              className="w-[14.45px] h-[7.16px] bg-[length:14.45px_7.16px] bg-cursor-light bg-cursor-dark"
              onClick={() => setOpenLanguage(!openLanguage)}
            />
          </div>
        </div>
      </div>
      {openLanguage ? (
        <>
          <div className="absolute right-[310px] top-[80px] w-[120px] h-[150px] bg-[#012765] text-white text-xs z-[997] flex flex-col justify-center pl-4 gap-[11px] rounded-xl shadow-xl">
            {language.map((lang: string, index) => {
              return (
                <>
                  <p
                    key={index}
                    className="hover:text-[#2DFCFC]"
                    onClick={() => setLanguageSelect(lang)}
                  >
                    {lang}
                  </p>
                </>
              );
            })}
          </div>
        </>
      ) : null}

      {openMenu ? <MenuContent /> : null}
    </>
  );
}

export default HeaderDark;
