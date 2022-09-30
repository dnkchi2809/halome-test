import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useTimeoutFn } from "react-use";
import { useRecoilValue } from "recoil";
import { pageRecoil } from "../recoil/page";
import LandingPageContent1 from "./landing-page/landing-page-content1";

function LandingPage1() {
  const [isShowing, setIsShowing] = useState(false);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 4000);
  const page = useRecoilValue(pageRecoil);

  useEffect(() => {
    if (page == 2) {
      setIsShowing(true);
      resetIsShowing()
    }
  }, [page, resetIsShowing])

  return (
    <>
      <Transition
        show={isShowing}
        enter="duration-500 linear duration-[4000ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-500 linear"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div>
          <LandingPageContent1 />
        </div>
      </Transition>
    </>
  );
}

export default LandingPage1;
