import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-cream hover:bg-primary-dark focus-visible:bg-primary-dark",
  secondary:
    "bg-secondary text-cream hover:bg-secondary-dark focus-visible:bg-secondary-dark",
  ghost:
    "bg-transparent text-ink hover:bg-surface-muted focus-visible:bg-surface-muted",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-sans font-bold transition-colors duration-150";

type ButtonOwnProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = ButtonOwnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonOwnProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsLink;
    return <Link href={href} className={classes} {...anchorProps} />;
  }

  const buttonProps = props as ButtonAsButton;
  return <button className={classes} {...buttonProps} />;
}
