import Dropdown from "@/components/dropdown"
import { KnowMoreList, Events} from "@/Config/DropDownList";

function sideNav(){
    return(<>
        <div className="bg-black h-[1000px] w-[100%]">
            <div className="p-4 grid grid-flow-row gap-4 content-center ">
            <button className="text-white hover:bg-slate-700">Home</button>
            <Dropdown ButtonName={"Events"} ContentList={Events} buttonStyle={"btn--primary"} />
            <button className="text-white hover:bg-slate-700">Mission</button>
            <Dropdown ButtonName={"Know More"} ContentList={KnowMoreList} buttonStyle={"btn--primary"} dropDownStyle={"btn--sideavnavdropdown"} />
            <button className="text-white hover:bg-slate-700">
              Login
            </button>
            </div>
            
          </div>
    </>);
}

export default sideNav;