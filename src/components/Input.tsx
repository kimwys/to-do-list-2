type InputProps = React.ComponentProps<"input"> & {
  error?: string;
};

export default function Input({ error, className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`rounded-[49.41px]
        w-full
        p-4
        border-[1.37px] border-border-primary 
        enabled:hover:border-amber-500
        enabled:hover:border-2
        focus:outline-none
        focus:border-amber-600
        focus:border-2
        placeholder-gray-500
        text-gray-800
        ${error ? "border-red-500" : "border-gray-300"}
        ${className}`}
    >
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </input>
  );
}
