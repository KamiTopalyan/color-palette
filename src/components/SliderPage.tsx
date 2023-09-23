import { useState } from "react";
import { rgbaToHex } from "@uiw/color-convert";
const SliderPage = () => {

    const [rgba, setRgba] = useState({
        r: 0,
        g: 0,
        b: 0,
        a: 1,
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.id) {
            case "red":
                setRgba({ ...rgba, r: e.target.valueAsNumber });
                break;
            case "green":
                setRgba({ ...rgba, g: e.target.valueAsNumber });
                break;
            case "blue":
                setRgba({ ...rgba, b: e.target.valueAsNumber });
                break;
            default:
                break;
    }

    };
    return (
      <div className="WheelPage">
        <style
          dangerouslySetInnerHTML={{
            __html: [
              `#red[type=\"range\"]::-moz-range-progress {`,
              `  background: linear-gradient(to right, rgba(0,${rgba.g},${rgba.b},${rgba.a}) 0%, rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a}));`,
              `}`,
              `#green[type=\"range\"]::-moz-range-progress {`,
              `  background: linear-gradient(to right, rgba(${rgba.r},0,${rgba.b},${rgba.a}) 0%, rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a}));`,
              `}`,
              `#blue[type=\"range\"]::-moz-range-progress {`,
              `  background: linear-gradient(to right, rgba(${rgba.r}, ${rgba.g},0,${rgba.a}) 0%, rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a}));`,
              `}`,
            ].join("\n"),
          }}
        ></style>
        <input
          className="slider"
          type="range"
          id="red"
          step={1}
          min="0"
          max="255"
          onChange={changeHandler}
        />
        <input
          className="slider"
          type="range"
          id="green"
          step={1}
          min="0"
          max="255"
          onChange={changeHandler}
        />
        <input
          className="slider"
          type="range"
          id="blue"
          step={1}
          min="0"
          max="255"
          onChange={changeHandler}
        />
        <div className="OutputColor">
          <div
            id="color"
            style={{
              width: "50px",
              height: "50px",
              background: rgbaToHex(rgba),
            }}
          />
          <span>{`Hex Color: ${rgbaToHex(rgba)} `}</span>
        </div>
      </div>
    );
}

export default SliderPage;