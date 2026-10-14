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
  primary:
    "btn-primary bg-field text-paper shadow-sm hover:bg-ink hover:shadow-md active:shadow-sm",
  secondary:
    "btn-secondary bg-paper border border-field text-field hover:bg-field hover:text-paper hover:shadow-md active:shadow-sm",
  ghost:
    "btn-ghost bg-transparent text-field hover:bg-field/10 active:bg-field/15",
  whatsapp:
    "btn-whatsapp bg-[#25D366] text-white shadow-md hover:bg-[#1da851] hover:shadow-lg active:shadow-md"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-[36px] px-4 py-2 text-xs",
  md: "min-h-[44px] px-6 py-3 text-sm",
  lg: "min-h-[48px] px-8 py-3.5 text-base"
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
    "btn-micro group inline-flex items-center justify-center gap-2 rounded-sm font-medium select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-harvest";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="btn-icon shrink-0">{icon}</span>
      )}
      <span className="btn-label">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="btn-icon shrink-0">{icon}</span>
      )}
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
