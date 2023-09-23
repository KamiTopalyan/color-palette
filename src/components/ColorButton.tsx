interface ColorButtonProps {
  color: string;
  onClick: (e: any) => void;
}


const ColorButton = ({color, onClick}: ColorButtonProps) => {
    const boxStyle = {
        background: color,
        border: "1px solid black",
        width: "25px",
        height: "25px",
    }

    const ContainerStyle = {
        display: "flex",
    }
    return (
      <div style={ContainerStyle}>
        <div style={boxStyle} key={color} onClick={onClick}/>
        <span>{color}</span>
      </div>
    );
}

export default ColorButton