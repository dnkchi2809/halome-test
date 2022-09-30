import Image from "next/image";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { openMenuRecoil } from "../../recoil/open-menu";
import NightSky from "../../public/img/Night Sky.png";
import NightSkyBackground from "../../public/img/Night Sky Background.png";

function MenuContent() {
  const language = ["Tiếng Việt", "English", "Deutsch", "Espanol", "Italiano"];

  const [openLanguage, setOpenLanguage] = useState(false);

  const setOpenMenu = useSetRecoilState(openMenuRecoil);

  return (
    <>
      <div className="relative w-full flex flex-row justify-center z-[2000]">
        <div className="bg-[#012765] absolute top-0 w-[1384px] h-[258px] rounded-bl-3xl rounded-br-3xl text-white z-[1999]">
          <div className="relative top-[32px] left-[52px] bg-cover bg-halome-dark w-[169px] h-[48.85px]" />
          <div className="absolute top-[34px] left-[371px] w-[172px] h-[43px] bg-gradient-to-r from-purple-500 to-green-500 rounded-3xl">
            <div className="relative top-[1px] left-[1px] w-[170px] h-[41px] rounded-3xl flex items-center justify-center bg-[#012765]">
              <div className="text-center">
                <p className="p-0">Về chúng tôi</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[99px] left-[421px] w-[80px] h-[86px] flex flex-col text-center text-base leading-7">
            <p className="font-semibold ">Sứ mệnh</p>
            <p className="font-thin">Tổng quan</p>
            <p className="font-thin">Tính năng</p>
          </div>

          <div className="absolute top-[48px] left-[633px] w-[121px] h-[16px] flex items-center justify-center text-center text-xl">
            <p>Tuyển dụng</p>
          </div>
          <div className="absolute top-[99px] left-[623px] w-[150px] h-[57px] text-center font-light text-base leading-[28.5px]">
            <p>Thông tin tuyển dụng</p>
            <p>Các vị trí tuyển dụng</p>
          </div>

          <div className="absolute top-[48px] left-[881px] w-[122.67px] h-[16.24px] flex items-center justify-center text-center text-xl">
            <p>Tải App</p>
          </div>
          <div className="absolute top-[99px] left-[900px] w-[85px] h-[114px] text-center font-light text-base leading-[28.5px]">
            <p>Halome Web</p>
            <p>Android</p>
            <p>iOS</p>
            <p>Desktop</p>
          </div>

          <div className="absolute top-[48px] right-[90px] flex flex-row items-center p-0 ">
            <div className="relative w-[122.67px] h-[16.24px] flex items-center justify-center text-center text-xl">
              <p>Tiếng Việt</p>
            </div>
            <div
              className="w-[14.45px] h-[7.16px] bg-[length:14.45px_7.16px] bg-cursor-dark"
              onClick={() => setOpenLanguage(!openLanguage)}
            />
          </div>

          <div
            className="absolute bottom-[18px] w-full h-[24px] flex flex-col justify-center items-center"
            onClick={() => setOpenMenu(false)}
          >
            <div className="w-[15.5px] h-[8.91px] bg-contain bg-repeat-y bg-up-cursor-dark z-[1999]" />
            <div className="w-[15.5px] h-[8.91px] bg-contain bg-repeat-y bg-up-cursor-dark z-[1999]" />
          </div>

          {openLanguage ? (
            <>
              <div className="absolute right-[90px] top-[70px] w-[120px] h-[180px] bg-[#012765] font-light text-base leading-[28.5px] z-[999] flex flex-col justify-center pl-4  rounded-xl shadow-xl">
                {language.map((lang: string, index) => {
                  return (
                    <>
                      <p key={index} className="hover:text-[#2DFCFC]">
                        {lang}
                      </p>
                    </>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div className="absolute w-screen h-screen z-[1998] animate-night-sky">
        <Image
          src={NightSkyBackground}
          alt="NightSkyBackground"
          layout="fill"
          objectFit="cover"
        />
        <Image src={NightSky} alt="NightSky" layout="fill" objectFit="cover" />
      </div>
    </>
  );
}

export default MenuContent;
