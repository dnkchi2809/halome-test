import Image from "next/image";
import TextHalomeGlitch from "../../public/img/Text_Halome_glitch.png";
import BgDots1 from "../../public/img/Bg_dots.svg";
import Purple from "../../public/img/Purple.png";
import Red from "../../public/img/Red.png";
import Blue from "../../public/img/Blue.png";
import Sao1 from "../../public/img/Sao 1.svg";
import Sao2 from "../../public/img/Sao 2.png";
import Sao3 from "../../public/img/Sao 3.png";
import Sao4 from "../../public/img/Sao 4.png";
import Sao5 from "../../public/img/Sao 5.png";
import Eclipse from "../../public/img/Eclipse.png";
import EclipseMain from "../../public/img/Eclipse_Main.png";
import FallingStar from "../../public/img/FallingStar.png";
import Link from "next/link";

function LandingPageContent() {
  return (
    <>
      <div className="bg-landing-page h-screen">
        <div className="absolute top-[185px] left-[706px]">
          <Image
            src={TextHalomeGlitch}
            width="507px"
            height="127px"
            alt="TextHalomeGlitch"
            priority
          />
        </div>
        <div className="absolute top-[238px] left-[536px] w-[848px] h-[291px] text-white flex flex-col justify-center items-center">
          <div className="absolute w-[848px] h-[145px] font-semibold text-5xl leading-[120%] text-center tracking-[.005em]">
            <p>ĐỊNH NGHĨA MỚI VỀ BẢO MẬT</p>
          </div>
          <div className="absolute top-[132px] left-[86px] w-[676px] h-[159px] text-[22px] leading-[147%] flex items-center text-center tracking-[.005em] font-light">
            <p>
              Halome mang sứ mệnh cao nhất là bảo mật tối đa sự riêng tư của
              người dùng bằng cách mã hóa End To End và không cung cấp cho bất
              kỳ bên thứ ba nào quyền truy cập vào dữ liệu của bạn.
            </p>
          </div>
        </div>
        <div className="absolute left-[-7%] h-screen flex items-center z-20 -rotate-90">
          <div className="flex p-0 gap-[60px] font-semibold text-base ">
            <div className="col-1/3 text-[#7F7F83]">
              <Link href="#">Tính năng</Link>
            </div>
            <div className="col-1/3 text-[#7F7F83]">
              <Link href="#">Tổng quan</Link>
            </div>
            <div className="col-1/3">
              <Link href="#">Sứ mệnh</Link>
            </div>
          </div>
        </div>
        <div className="absolute top-[132px] left-0 w-[328px] h-[328px] z-10">
          <Image src={Purple} alt="Purple" priority />
        </div>
        <div className="absolute bottom-0 left-0 w-[1035px] h-[519px] z-10">
          <Image src={Red} alt="Red" priority />
        </div>
        <div className="absolute bottom-0 right-0 w-[328px] h-[328px] z-10">
          <Image src={Blue} alt="Blue" priority />
        </div>
        <div className="absolute left-[13%] bottom-[5%] w-[298px] h-[301.98px] z-20 animate-translate-1">
          <Image src={Sao1} alt="Sao1" priority />
        </div>
        <div className="absolute right-[25%] bottom-[20%] w-[140.97px] h-[140.97px] z-20 animate-translate-2">
          <Image src={Sao2} alt="Sao2" priority />
        </div>
        <div className="absolute right-[7%] bottom-[15%] w-[192px] h-[212px] z-20 animate-translate-3">
          <Image src={Sao3} alt="Sao3" priority />
        </div>
        <div className="absolute left-[25%] bottom-[48.56%] w-[98px] h-[92px] mix-blend-exclusion animate-translate-4">
          <Image src={Sao4} alt="Sao4" priority />
        </div>
        <div className="absolute right-[19%] bottom-[48.56%] w-[106px] h-[106px] mix-blend-exclusion animate-translate-2">
          <Image src={Sao5} alt="Sao5" priority />
        </div>
        <div className="absolute left-[35%] bottom-[15%] w-[592px] h-[297px]">
          <Image src={Eclipse} alt="Eclipse" priority />
        </div>
        <div className="absolute left-[44.5%] bottom-[5%] w-[200px] h-[200px] z-20">
          <Image src={EclipseMain} alt="EclipseMain" priority />
        </div>
        <div className="absolute left-[455.8px] top-[300.22px] w-[52.66px] h-[32.24px] mix-blend-screen animate-star-1">
          <Image src={FallingStar} alt="FallingStar1" priority />
        </div>
        <div className="absolute right-[555.8px] top-[250.22px] w-[52.66px] h-[32.24px] mix-blend-screen animate-star-2">
          <Image src={FallingStar} alt="FallingStar2" priority />
        </div>
        <div className="absolute right-[11px] top-[250.22px] w-[52.66px] h-[32.24px] mix-blend-screen animate-star-3">
          <Image src={FallingStar} alt="FallingStar3" priority />
        </div>
        <div className="absolute bottom-0 w-[100̀%] h-[100̀%] z-0">
          <Image src={BgDots1} alt="BgDots" priority />
        </div>
      </div>
    </>
  );
}

export default LandingPageContent;
