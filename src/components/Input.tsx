type InputProps = React.ComponentProps<"input"> & {
  error?: string;
};

export default function Input({ error, className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`rounded-[49.41px]
        w-full
        px-4  py-[11.25px]
        border-[1.37px] border-border-primary 
        enabled:hover:border-amber-500 enabled:hover:ring-1 enabled:hover:ring-amber-500 
        focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500
        transition-all duration-200
        placeholder-gray-500
        text-gray-800
        ${error ? "border-red-500" : ""}
        ${className}`}
    >
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </input>
  );
}
