import { cn } from "@/lib/utils";

type AccentCircle = {
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  color: "primary" | "secondary";
};

type AccentShapesProps = {
  circles: AccentCircle[];
};

const colorClasses: Record<AccentCircle["color"], string> = {
  primary: "bg-primary/15",
  secondary: "bg-secondary/15",
};

export function AccentShapes({ circles }: AccentShapesProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {circles.map((circle, index) => (
        <div
          key={index}
          className={cn("absolute rounded-full", colorClasses[circle.color])}
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            bottom: circle.bottom,
            left: circle.left,
            right: circle.right,
          }}
        />
      ))}
    </div>
  );
}
