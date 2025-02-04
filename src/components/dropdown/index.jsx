import {React, useState} from "react";
import '../dropdown/index.css'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
const DropDown = ['btn--sidenavdropdown', 'btn--mainnavdropdown'] 

function dropdown({ButtonName, ContentList, buttonStyle, buttonSize, dropDownStyle}){

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkDropDown = DropDown.includes(dropDownStyle) ? dropDownStyle : DropDown[0];

    return(
        <>
            <div className="relative">
              <button
                onClick={()=>setDropdownOpen(!dropdownOpen)}
                className={`${checkButtonStyle}`}
              >
                {ButtonName}
              </button>
              {dropdownOpen && (<div className={`${checkDropDown}`}>
                  <ul>
                    {
                        ContentList.map(item =><li key={item.id}>{item.Name}</li>)
                    }
                  </ul>
                </div>)}
                
            </div>
        </>
    );
}

export default dropdown;