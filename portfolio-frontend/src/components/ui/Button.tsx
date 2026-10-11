import type { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

export function Button({
  onClick = () => {},
  children = "",
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  href,
}: {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  className?: string;
  href?: string;
}) {
  const variants: Record<ButtonVariant, string> = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  const classes = `${variants[variant]} ${sizes[size]} ${className}`.trim();
  const content = (
    <>
      {Icon && <Icon size={18} className="icon-btn" />}
      {children}
    </>
  );

  return href ? (
    <a className={classes} href={href}>
      {content}
    </a>
  ) : (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
