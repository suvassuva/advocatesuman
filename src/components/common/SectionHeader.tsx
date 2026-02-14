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
                "mb-12 flex flex-col gap-2",
                centered ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            {subtitle && (
                <span className={cn(
                    "text-sm font-semibold uppercase tracking-wider",
                    className?.includes("text-white") ? "text-amber-500" : "text-primary"
                )}>
                    {subtitle}
                </span>
            )}
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="max-w-2xl text-lg opacity-90">{description}</p>
            )}
            <div className={cn("h-1 w-20 rounded-full bg-primary mt-2", centered ? "mx-auto" : "")} />
        </div>
    );
}
