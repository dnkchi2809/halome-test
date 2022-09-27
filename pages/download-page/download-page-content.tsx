import Image from "next/image";
import Illustration from "../../public/img/Illustration.png";
import DownCursorWhite from "../../public/img/Down_Cursor_White.png";
import UpCursorWhite from "../../public/img/Up_Cursor_White.png";
import { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";

const version = [
  "MacOS chip Intel (.dmg)",
  "Mac OS Apple Silicon (.dmg)",
  "Windows X64 (.exe)",
  "Windows X32 (.exe)",
  "Linux X64 (.rpm)",
  "Linux X64 (.deb)",
  "Linux X64 (.AppImage)",
  "Linux X64 (.snap)",
];

function DownloadPageContent() {
  const versionDiv = useRef<HTMLDivElement>(null);
  const downloadWindowButton = useRef<HTMLDivElement>(null);
  const cursorGroup = useRef<HTMLDivElement>(null);

  const [openVersion, setOpenVersion] = useState(false);

  const [openVersionTransition, setOpenVersionTransition] = useState(false);
  const [, , resetOpenVersionTransition] = useTimeoutFn(
    () => setOpenVersionTransition(false),
    700
  );

  const onDownloadWindowPClick = () => {};

  const onCursorGroupClick = () => {
    setOpenVersion(!openVersion);
  };

  useEffect(() => {
    if (openVersion) {
      versionDiv.current!.style.display = "flex";
      versionDiv.current!.style.flexDirection = "column";
      versionDiv.current!.style.gap = "11px";

      downloadWindowButton.current!.style.borderRadius = "15px 15px 0 0";

      cursorGroup.current!.style.borderRadius = "0 15px 0 0";

      setOpenVersionTransition(true);
      resetOpenVersionTransition();
    } else {
      versionDiv.current!.style.display = "none";

      downloadWindowButton.current!.style.borderRadius = "15px";

      cursorGroup.current!.style.borderRadius = "0 15px 15px 0";
    }
  }, [openVersion, resetOpenVersionTransition]);

  return (
    <>
      <div className="main">
        <div className="getHalomeP">
          <p>Get Halome For Any Device</p>
        </div>
        <div className="flex flex-wrap">
          <div>
            <div className="halomeConnect">
              <p>
                Halome - Connect you to the world in the simplest way!
                <br />
                Halome is a cross- platform messaging app that helps people chat
                with each other anytime, anywhere.
              </p>
            </div>
            <div ref={downloadWindowButton} className="downloadWindowButton">
              <div className="downloadWindowP" onClick={onDownloadWindowPClick}>
                <p className="text-xl">Download Halome for Windows</p>
                <p className="text-xs">Windows X64 (.exe)</p>
              </div>
              <div
                ref={cursorGroup}
                className="cursorGroup"
                onClick={onCursorGroupClick}
              >
                <div>
                  <Transition
                    show={openVersion}
                    enter="duration-500 linear"
                    enterFrom="opacity-0  opacity-25 opacity-50 opacity-75"
                    enterTo="opacity-100"
                    leave="duration-500 linear"
                    leaveFrom="opacity-100 opacity-75 opacity-50 opacity-25"
                    leaveTo="opacity-0"
                    className="cursor"
                  >
                    <Image
                      src={UpCursorWhite}
                      alt="UpCursorWhite"
                      width="30px"
                      height="18px"
                    />
                  </Transition>
                  <Transition
                    show={!openVersion}
                    enter="duration-500 linear"
                    enterFrom="opacity-0  opacity-25 opacity-50 opacity-75"
                    enterTo="opacity-100"
                    leave="duration-500 linear"
                    leaveFrom="opacity-100 opacity-75 opacity-50 opacity-25"
                    leaveTo="opacity-0"
                    className="cursor"
                  >
                    <Image
                      src={DownCursorWhite}
                      alt="DownCursorWhite"
                      width="30px"
                      height="18px"
                    />
                  </Transition>
                </div>
              </div>
              <div ref={versionDiv} className="version py-5 shadow-lg">
                {version.map((item: string, index) => {
                  return (
                    <>
                      <p className="versionP" key={index}>
                        {item}
                      </p>
                    </>
                  );
                })}
              </div>
              <Transition
                show={openVersionTransition}
                enter="transition ease-in-out duration-300 transform origin-top"
                enterFrom="scale-y-0"
                enterTo="scale-y-100"
                leave="transition ease-in-out duration-300 transform origin-top"
                leaveFrom="scale-y-100"
                leaveTo="scale-y-0"
                className="versionTransition"
              />
            </div>
            <div className="lastestVersion">
              <p>Lastest vesion : v2.1.0-9/3/2022</p>
            </div>
            <div className="downloadMobileP">
              <p>Download Halome for mobile</p>
            </div>
            <div className="flex flex-wrap">
              <div className="getOnGooglePlay" />
              <div className="downloadOnAppStore" />
            </div>
          </div>
          <div className="illustration">
            <Image
              src={Illustration}
              alt="Illustration"
              width="418.86px"
              height="296px"
            />
          </div>
        </div>
      </div>
      <div className="imageGroup" />
    </>
  );
}

export default DownloadPageContent;
