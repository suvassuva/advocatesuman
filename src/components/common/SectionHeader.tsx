import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    centered?: boolean;
    className?: string;
}

export function SectionHeader({
    title,
    subtitle,
    description,
    centered = true,
    className,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "mb-6 sm:mb-10 flex flex-col gap-1.5 sm:gap-2",
                centered ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            {subtitle && (
                <span className={cn(
                    "text-xs sm:text-sm font-semibold uppercase tracking-wider",
                    className?.includes("text-white") ? "text-amber-400" : "text-primary"
                )}>
                    {subtitle}
                </span>
            )}
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
                {title}
            </h2>
            <div className={cn(
                "h-1 w-12 sm:w-16 rounded-full mt-1 mb-2",
                className?.includes("text-white") ? "bg-amber-400" : "bg-primary",
                centered ? "mx-auto" : ""
            )} />
            {description && (
                <p className="max-w-2xl text-xs sm:text-sm md:text-base text-muted-foreground opacity-90 leading-relaxed text-pretty">
                    {description}
                </p>
            )}
        </div>
    );
}
