import { CircleCheck } from "lucide-react";

export default function ToDoHeader() {
  return (
    <div className="flex gap-2 items-center font-bold text-[20px] sm:text-[24px]">
      <CircleCheck
        color="var(--color-pending)"
        className="size-8 sm:size-10"
        strokeWidth={2}
      />
      <div>LogoIpsum</div>
    </div>
  );
}
