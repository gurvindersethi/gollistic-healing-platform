import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof Pick<React.JSX.IntrinsicElements, "div" | "section" | "article">;
};

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}>
      {children}
    </Tag>
  );
}
