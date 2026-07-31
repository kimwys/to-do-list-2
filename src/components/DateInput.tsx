"use client";

import DatePicker from "react-datepicker";
import { format } from "date-fns";

type DateInputProps = {
  value?: string;
  onChange: (value: string) => void;
};

export default function DateInput({ value, onChange }: DateInputProps) {
  function parseDate(value: string) {
    const [day, month, year] = value.split(" - ");
    return new Date(`${year}-${month}-${day}`);
  }
  const selectedDate = value ? parseDate(value) : null;

  return (
    <DatePicker
      className="rounded-[49.41px]
        w-full
        p-4
        border-[1.37px] border-border-primary 
        hover:border-amber-500
        hover:border-2
        focus:outline-none
        focus:border-amber-600
        focus:border-2
        placeholder-gray-500
        text-gray-800"
      selected={selectedDate}
      onChange={(date: Date | null) => {
        if (!date) {
          onChange("");
          return;
        }

        onChange(format(date, "dd - MM - yyyy"));
      }}
      dateFormat="dd - MM - yyyy"
      placeholderText="DD - MM - YYYY"
    />
  );
}
