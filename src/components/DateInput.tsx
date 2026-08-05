"use client";
import { parse, format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DateInputProps = {
  placeHolder?: string;
  value?: string;
  wrapperClassName?: string;
  minDate?: Date;
  onChange: (value: string) => void;
};

export default function DateInput({
  placeHolder,
  value,
  wrapperClassName = "",
  minDate,
  onChange,
}: DateInputProps) {
  const selectedDate = value
    ? parse(value, "dd - MM - yyyy", new Date())
    : null;

  return (
    <Popover>
      <PopoverTrigger
        className={`${wrapperClassName} 
        relative
        flex
        w-full
        rounded-[49.41px]
        px-4 py-[11.25px]
        border-[1.37px] border-border-primary
        enabled:hover:border-amber-500 enabled:hover:ring-1 enabled:hover:ring-amber-500 
        focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500
        transition-all duration-200`}
      >
        <div
          className={`justify-self-start ${selectedDate ? "text-gray-800" : "text-gray-500"}`}
        >
          {selectedDate
            ? format(selectedDate, "dd - MM - yyyy")
            : placeHolder || "DD - MM - YYYY"}
        </div>
        <CalendarDays
          size={20}
          color="var(--color-border-primary)"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate ?? undefined}
          onSelect={(date: Date | undefined) => {
            if (!date) {
              onChange("");
              return;
            }

            onChange(format(date, "dd - MM - yyyy"));
          }}
          defaultMonth={selectedDate ?? undefined}
          disabled={minDate ? { before: minDate } : undefined}
        />
      </PopoverContent>
    </Popover>
  );
}
