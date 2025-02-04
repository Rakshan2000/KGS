import { FaRegUser } from "react-icons/fa";
import { useState, useEffect} from "react";
import Dropdown from "../../dropdown";
import { KnowMoreList, Events, Language } from "@/Config/DropDownList";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import SideNav from "../sidenav";

function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [MenuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleScreenWidth);

    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, [screenWidth]);

  return (
    <>
      <nav
        className="mt-5"
        style={{ display: screenWidth <= 768 ? "none" : null }}
      >
        <div className="flex">
          <div className="absolute left-10 flex gap-5 md:gap-4 sm:gap-2">
            {/* <img src="" alt="kgs" className="content-center " /> */}
            <h1 className="mt-2">KGS</h1>
          </div>

          <div className="absolute left-0 right-0 flex items-center justify-center gap-5 md:gap-4 sm:gap-2 md:text-sm">
            <button>Home</button>
            <Dropdown ButtonName={"Events"} ContentList={Events} buttonStyle={"btn--main"} dropDownStyle={"btn--mainnavdropdown"} />
            <button>Mission</button>
            <Dropdown ButtonName={"Know More"} ContentList={KnowMoreList} buttonStyle={"btn--main"} dropDownStyle={"btn--mainnavdropdown"} />
          </div>

          <div className="absolute flex right-4 md:gap-15 sm:gap-2">
            {screenWidth <= 800 ? (
              <Dropdown ButtonName={"ಕಕಾ/Aa"} ContentList={Language} buttonStyle={"btn--outline"} dropDownStyle={"btn--mainnavdropdown"} />
            ) : (
              <div>
                <button>ENG</button>
                <button>KAN</button>
              </div>
            )}

            <button>
              <FaRegUser />
            </button>
          </div>
        </div>
      </nav>
      <nav
        className=" top-0 grid grid-flow-col mt-3 items-center" style={{ display: screenWidth > 768 ? "none" : null }}>
        <div className="absolute left-5 justify-start">
          <h1 className=" text-[18px] font-bold">KGS</h1>
        </div>
        <div className="flex justify-end">
          <Dropdown ButtonName={"ಕಕಾ/Aa"} ContentList={Language} buttonStyle={"btn--outline"} dropDownStyle={"btn--mainnavdropdown"}/>
          <button>
            <FaRegUser />
          </button>
          <button onClick={() => setMenuActive(!MenuActive)}>
            {
              MenuActive ? <IoMdClose/> : <IoMenu /> 
            }
          </button>
        </div>
      </nav>
      {
        MenuActive && screenWidth <= 768 ? <SideNav isOpen={true}/> : null
      }
    </>
  );
}

export default Navbar;
