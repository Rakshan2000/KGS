import Dropdown from "@/components/dropdown"
import { KnowMoreList, Events } from "@/Config/DropDownList";
import { useEffect, useState } from "react";

function sideNav({ isOpen }) {
    const [visible, setVisible] = useState(isOpen);

    useEffect(() => {
        setVisible(isOpen);
    }, [isOpen]);

    return (
        <div className={` fixed z-50 bg-black h-[1000px] w-[100%] transition-transform duration-300 ${visible ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-4 grid grid-flow-row gap-4 content-center">
                <button className="text-white hover:bg-slate-700">Home</button>
                <Dropdown ButtonName={"Events"} ContentList={Events} buttonStyle={"btn--primary"} dropDownStyle={"btn--sideavnavdropdown"} />
                <button className="text-white hover:bg-slate-700">Mission</button>
                <Dropdown ButtonName={"Know More"} ContentList={KnowMoreList} buttonStyle={"btn--primary"} dropDownStyle={"btn--sideavnavdropdown"} />
                <button className="text-white hover:bg-slate-700">Login</button>
            </div>
        </div>
    );
}

export default sideNav;