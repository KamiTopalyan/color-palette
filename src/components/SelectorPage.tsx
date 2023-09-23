import { useState } from "react";
import ColorButton from "./ColorButton";
import { rgbaToHex } from "@uiw/color-convert";
import {COLORS} from "./colors";
const SelectorPage = () => {
    const [rgba, setRgba] = useState("black")

    return (
      <div className="WheelPage">
        <div className="ScrollField">
        {COLORS.map((color) => {
            return <ColorButton onClick={(e: any) => setRgba(e.currentTarget.style.background)} color={color}/>
        })}

        </div>
        <div className="OutputColor">
          <div
            id="color"
            style={{
              width: "50px",
              height: "50px",
              background: rgba,
            }}
          />
          <span>{`Color: ${rgba} `}</span>
        </div>
      </div>
    );
}

export default SelectorPage;
