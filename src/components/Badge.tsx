const variants = {
  active: "bg-active text-background",
  pending: "bg-pending text-background",
  closed: "bg-closed text-background",
  add: "bg-add text-background font-bold text-[22.51px]",
};
type BadgeProps = React.ComponentProps<"div"> & {
  variant: "active" | "pending" | "closed";
};

export default function Badge({
  children,
  className = "",
  variant,
}: BadgeProps) {
  return (
    <div
      className={`rounded-[1187.5px] px-4.75 py-2.5 
        text-center font-bold text-background text-[19px] 
        ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
