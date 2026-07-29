const variants = {
  active: "bg-active text-background",
  pending: "bg-pending text-background",
  closed: "bg-closed text-background",
  add: "bg-add text-background font-bold text-[22.51px]",
};
type BadgeProps = {
  variant: "active" | "pending" | "closed";
};

export default function Badge({ variant }: BadgeProps) {
  return (
    <div
      className={`rounded-[1187.5px] px-[19px] py-[9.5px] h-[42px] min-w-[94.91px]
        text-center font-bold text-background text-[19px]] ${variants[variant]}`}
    >
      {variant}
    </div>
  );
}
