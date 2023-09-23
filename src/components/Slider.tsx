import { hsvaToHex, hsvaToRgba } from "@uiw/color-convert";
import { useState } from "react";

interface SliderProps {
  color: { h: number; s: number; v: number; a: number };
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider = ({ color, changeHandler }: SliderProps) => {
  const [rgba, setRgba] = useState(hsvaToRgba(color));

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: [
            `input[type=\"range\"]::-moz-range-progress {`,
            `  background: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a}));`,
            `}`,
          ].join("\n"),
        }}
      ></style>
      <input
        className="slider"
        type="range"
        min="0"
        max="100"
        onChange={changeHandler}
      />
    </div>
  );
};

export default Slider;
