import { CircleCheck } from "lucide-react";

export default function ToDoHeader() {
  return (
    <div className="flex justify-between items-center font-bold text-[24px]">
      <div className="flex gap-1">
        <CircleCheck color="var(--color-pending)" size={38} strokeWidth={2} />
        <div>LogoIpsum</div>
      </div>
      <div className="flex gap-[36px] items-center underline underline-offset-4">
        <div>ToDo List</div>
        <div>Perfil</div>
      </div>
    </div>
  );
}
