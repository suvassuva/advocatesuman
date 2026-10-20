import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: LucideIcon;
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
    ({ className, variant = "primary", size = "md", icon: Icon, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-primary-foreground hover:bg-primary/90": variant === "primary",
                        "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
                        "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
                        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
                        "h-8 sm:h-9 px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-lg": size === "sm",
                        "h-10 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-xl": size === "md",
                        "h-11 sm:h-12 px-5 sm:px-8 text-sm sm:text-base font-bold rounded-xl shadow-md active:scale-95 transition-all": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                {children}
                {Icon && <Icon className="ml-2 h-4 w-4" />}
            </button>
        );
    }
);
CTAButton.displayName = "CTAButton";

export { CTAButton };
