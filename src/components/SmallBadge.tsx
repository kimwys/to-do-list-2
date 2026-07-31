const variants = {
  active: "bg-active text-background",
  pending: "bg-pending text-background",
  closed: "bg-closed text-background",
};
type SmallBadgeProps = React.ComponentProps<"div"> & {
  variant: "active" | "pending" | "closed";
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
