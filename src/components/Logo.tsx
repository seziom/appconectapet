import { PawPrint } from "lucide-react";

export function Logo({ variant = "dark", size = "md" }: { variant?: "dark" | "light"; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { icon: "h-7 w-7", text: "text-lg", iconInner: "h-4 w-4" },
    md: { icon: "h-9 w-9", text: "text-xl", iconInner: "h-5 w-5" },
    lg: { icon: "h-12 w-12", text: "text-3xl", iconInner: "h-7 w-7" },
  }[size];

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${sizes.icon} rounded-xl flex items-center justify-center shadow-[var(--shadow-brand)]`}
        style={{ background: "var(--gradient-brand)" }}
      >
        <PawPrint className={`${sizes.iconInner} text-white`} strokeWidth={2.5} />
      </div>
      <span
        className={`${sizes.text} font-bold tracking-tight ${variant === "light" ? "text-white" : "text-foreground"}`}
      >
        Conecta<span style={{ color: "var(--turquoise)" }}>Pet</span>
      </span>
    </div>
  );
}