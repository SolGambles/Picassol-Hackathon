import clsx from "clsx";
import { Color, colors } from "../lib/colors";

interface Props {
  selectedColor: Color;
  setSelectedColor: (color: Color) => void;
}

export default function ColorSelector({ selectedColor, setSelectedColor }: Props) {
  return (
    <div className="flex items-center justify-center py-4 mx-auto lg:mx-auto">
      {colors.map((color, i) => {
        const isSelected = color === selectedColor;

        return (
          <div
            className={clsx(
              "w-16 h-16 border border-black rounded-full",
              !isSelected && "hover:scale-105",
              isSelected && "border-2 scale-125"
            )}
            style={{
              backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
              marginRight: '16px' // Add some margin between circles
            }}
            onClick={() => setSelectedColor(color)}
            key={i}
          />
        );
      })}
    </div>
  );
}
