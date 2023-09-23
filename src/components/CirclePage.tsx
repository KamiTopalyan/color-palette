import { useState } from "react";
import Wheel from "@uiw/react-color-wheel";
import { hsvaToHex, hsvaToRgba } from "@uiw/color-convert";
import Slider from "./Slider";
const Circle = () => {
    const [hsva, setHsva] = useState({
      h: 214,
      s: 43,
      v: 90,
      a: 1
    });

    return (
      <div className="WheelPage">
        <div>
          <Wheel
            color={hsva}
            onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
          />
        </div>
        <div className="ColorRange">
          <Slider
            color={hsva}
            changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
              setHsva({ ...hsva, v: e.target.valueAsNumber}); // No way they dare use v as the brightness value

            }}
          />
        </div>
        <div className="OutputColor">
          <div
          id="color"
            style={{
              width: "50px",
              height: "50px",
              background: hsvaToHex(hsva),
            }}
          />
          <span>{`R: ${hsvaToRgba(hsva).r} G: ${hsvaToRgba(hsva).g} B: ${
            hsvaToRgba(hsva).b
          } `}</span>
        </div>
      </div>
    );
}

export default Circle