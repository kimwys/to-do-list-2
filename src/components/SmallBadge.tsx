const variants = {
  active: "bg-active text-background",
  overdue: "bg-overdue text-background",
  completed: "bg-completed text-background",
};
type SmallBadgeProps = React.ComponentProps<"div"> & {
  variant: "active" | "overdue" | "completed";
};

export default function SmallBadge({
  variant,
  className = "",
  children,
}: SmallBadgeProps) {
  return (
    <div
      className={`rounded-[1000px] px-4 py-2
        font-bold text-background text-center 
        ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
