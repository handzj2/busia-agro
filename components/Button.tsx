import Link from "next/link";
import { ButtonVariant, ButtonSize } from "@/lib/types";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-field text-paper hover:bg-ink hover:shadow-lg",
  secondary: "bg-paper border border-field text-field hover:bg-field hover:text-paper",
  ghost: "bg-transparent text-field hover:underline underline-offset-4",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1da851] shadow-md"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base"
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "left",
  fullWidth = false,
  children,
  className = "",
  onClick,
  type = "button",
  target,
  rel
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-harvest";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
