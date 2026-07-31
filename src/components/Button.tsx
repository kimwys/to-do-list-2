const variants = {
  active: "bg-active text-background",
  pending: "bg-pending text-background",
  closed: "bg-closed text-background",
  add: "bg-add text-background sm:text-[22.51px]",
  update: "bg-add hover:bg-add/90 text-background font-bold text-[18px]",
};
type ButtonProps = React.ComponentProps<"button"> & {
  variant: "active" | "pending" | "closed" | "add" | "update";
};

export default function Button({
  children,
  className = "",
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center
        rounded-[1406.64px] 
        px-[22.51px] py-[11.25px] 
        font-bold
        hover:cursor-pointer
        disabled:cursor-not-allowed 
       disabled:bg-gray-300 
       disabled:text-gray-500
        ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
