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
}: {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  className?: string;
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

  return (
    <button className={`${variants[variant]} ${sizes[size]} ${className}`.trim()} onClick={onClick}>
      {Icon && <Icon size={18} className="icon-btn" />}
      {children}
    </button>
  );
}
