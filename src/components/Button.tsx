const variants = {
  active: "bg-active text-background",
  pending: "bg-pending text-background",
  closed: "bg-closed text-background",
  add: "bg-add text-background",
  update: "bg-add hover:bg-add/90 text-background font-bold text-[18px]",
  default: "",
};

const sizes = {
  default: "px-[22.51px] py-[11.25px]",
  small: "px-4 py-2",
  icon: "p-0 hover:scale-110",
};

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export default function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center
        rounded-[1406.64px] 
        font-bold
        hover:cursor-pointer
        disabled:cursor-not-allowed 
       disabled:bg-gray-300 
       disabled:text-gray-500
        ${variants[variant]}
        ${sizes[size]}
        ${className}`}
    >
      {children}
    </button>
  );
}
