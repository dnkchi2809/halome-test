import Image from "next/image";
import HalomeLogoWhite from "../../public/img/Halome_logo_white.png";
import GooglePlayWhite from "../../public/img/Google_Play_White.png";
import AppStoreWhite from "../../public/img/App_Store_White.png";
import Facebook from "../../public/img/Facebook.png";
import Youtube from "../../public/img/Youtube.png";
import Twitter from "../../public/img/Twitter.png";
import Instagram from "../../public/img/Instagram.png";

function Footer() {
  return (
    <>
      <div className="absolute w-screen h-[456px] left-0 top-[931px] bg-[#012765]">
        <div className="footerFrame">
          <div className="buttonFooter">
            <Image
              src={HalomeLogoWhite}
              alt="HalomeLogoWhite"
              width="193px"
              height="55.79px"
            />
            <Image
              src={GooglePlayWhite}
              alt="GooglePlayWhite"
              width="193px"
              height="60px"
            />
            <Image
              src={AppStoreWhite}
              alt="AppStoreWhite"
              width="193px"
              height="60px"
            />
            <div className="social">
              <Image
                src={Facebook}
                alt="Facebook"
                width="25.83px"
                height="25.83px"
              />
              <Image
                src={Youtube}
                alt="Youtube"
                width="25.83px"
                height="25.83px"
              />
              <Image
                src={Twitter}
                alt="Twitter"
                width="25.83px"
                height="25.83px"
              />
              <Image
                src={Instagram}
                alt="Instagram"
                width="25.83px"
                height="25.83px"
              />
            </div>
          </div>
          <div className="connect">
            <p className="titleFooter">Connect us</p>
            <p>0766 96 56 86</p>
            <p>halome.com</p>
            <p>
              STS Tower, 11B Hoa Binh Avenue,
              <br />
              Tan An Ward, Ninh Kieu Dist, Can Tho City.
            </p>
          </div>
          <div className="discover">
            <p className="titleFooter">Discover</p>
            <p>Home</p>
            <p>About us</p>
            <p>Career</p>
            <p>Download</p>
          </div>
          <div className="helpCenter">
            <p className="titleFooter">Help center</p>
            <p>Policies</p>
            <p>Community standards</p>
            <p>Privacy</p>
            <p>Term</p>
          </div>
        </div>
        <div className="coppyRight">
          <p>© copyright 2021 by Halome.com</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
