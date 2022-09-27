import Link from "next/link";
import Image from "next/image";
import DataLeft from "../../public/img/Data_left.svg";
import DataRight from "../../public/img/Data_right.svg";
import Arrow2 from "../../public/img/Arrow 2.svg";
import Arrow1 from "../../public/img/Arrow 1.svg";
import RectangleLeft from "../../public/img/Rectangle_Left.svg";
import ArrowRight from "../../public/img/arrow-right.svg";
import Union from "../../public/img/Union.png"
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";


function LandingPageContent() {
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme("light");
    }, [setTheme]);

    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <>
            <div className="absolute h-screen w-screen">
                <div className="absolute top-[167px] w-screen h-[277px] flex flex-col justify-start items-center ">
                    <p className="relative text-[#1767FD] text-extrabold text-5xl leading-[80px]">ỨNG DỤNG HÀNG ĐẦU VỀ BẢO MẬT</p>
                    <p className="relative w-[673px] h-[159px] text-2xl leading-8 text-center">
                        Với mong muốn trở thành ứng dụng hàng đầu về bảo mật,<br />
                        Halome không ngừng đổi mới và tạo ra những tính năng<br />
                        độc đáo để người dùng có những trải nghiệm tốt nhất.
                    </p>
                    <div className="group relative w-[258px] h-[96px] z-50 flex justify-center items-center hover:bg-gradient-to-r from-cyan-300 to-indigo-300 rounded-[25px]" onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>
                        <div className="relative w-[249px] h-[66px] bg-[#1767FD] bg-gradient-to-r from-blue-800 to-blue-500 rounded-3xl flex flex-row justify-center items-center">
                            <div className="text-white group-hover:text-[#1767FD] w-[143px] h-[27px] font-semibold text-xl z-50">
                                <p>Khám phá ngay</p>
                            </div>
                            <div className="w-[34px] h-[27px] flex items-center ml-1 z-50">
                                {
                                    mouseEnter
                                        ?
                                        <Image src={Arrow2} alt="Arrow2" objectFit="contain" priority />
                                        :
                                        <Image src={Arrow1} alt="Arrow1" objectFit="contain" priority />
                                }
                            </div>
                        </div>

                        <div className="absolute top-[4px] left-[5px] w-0 h-[66px] bg-slate-50 rounded-3xl flex flex-row justify-center items-center group-hover:animate-discover-1" />
                        <div className="absolute top-[4px] left-[5px] w-0 h-[66px] bg-slate-200 rounded-3xl flex flex-row justify-center items-center group-hover:animate-discover-2" />
                    </div>
                </div>

                <div className="absolute left-[-7%] top-[-15%] h-screen flex items-center z-20 -rotate-90">
                    <div className="flex p-0 gap-[60px] font-semibold text-base ">
                        <div className="col-1/3 text-[#7F7F83]">
                            <Link href="#">Tính năng</Link>
                        </div>
                        <div className="col-1/3 text-[#7F7F83]">
                            <Link href="#">Tổng quan</Link>
                        </div>
                        <div className="col-1/3 text-[#7F7F83]">
                            <Link href="/landing-page1">Sứ mệnh</Link>
                        </div>
                    </div>
                </div>

                <div className="w-[35%] fixed bottom-0 left-0">
                    <Image src={DataLeft} alt="DataLeft" objectFit="contain" priority />
                </div>
                <div className="w-[35%] fixed bottom-0 right-0">
                    <Image src={DataRight} alt="DataRight" objectFit="contain" priority />
                </div>

                <div className="absolute right-0 top-[218px] w-[246px] h-auto rounded-l-lg shadow-xl">
                    <div className="relative flex top-[11px] left-[26px] font-semibold text-sm leading-[135%]">
                        <p>TÍNH NĂNG MỚI</p>
                    </div>
                    <div className="relative left-0 w-full mt-[13px] flex flex-grow">
                        <div className="relative left-0">
                            <Image src={RectangleLeft} alt="RectangleLeft" priority />
                        </div>
                        <div className="relative ml-[13px] w-[186px]">
                            <p className="text-[#1767FD] text-sm font-medium">Chặn người dùng</p>
                            <p className="text-[#7F7F83] text-sm font-thin">20 th 7</p>
                        </div>
                        <div className="relative flex items-center">
                            <Image src={ArrowRight} alt="ArrowRight" width="21.5px" height="21.5px" priority />
                        </div>
                    </div>
                    <div className="relative left-0 w-full mt-[12px] mb-[14px] flex flex-grow">
                        <div className="relative left-0">
                            <Image src={RectangleLeft} alt="RectangleLeft" priority />
                        </div>
                        <div className="relative ml-[13px] w-[186px]">
                            <p className="text-[#1767FD] text-sm font-medium">Chế độ tối</p>
                            <p className="text-[#7F7F83] text-sm font-thin">31 th 3</p>
                        </div>
                        <div className="relative flex items-center">
                            <Image src={ArrowRight} alt="ArrowRight" width="21.5px" height="21.5px" priority />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 w-screen h-[552px] flex justify-center">
                <Image src={Union} alt="Union" width="322px" height="512px" priority />
            </div>

            <div className="absolute bottom-0 w-screen h-[552px] flex justify-center">
                <video src={require('../../public/vid/banner-video.mp4')} muted autoPlay={true} preload="auto" width="322px" loop id="banner" />
            </div>
        </>
    )
}

export default LandingPageContent;