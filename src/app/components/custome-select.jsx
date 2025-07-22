"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function CustomSelect({
  id,
  value,
  onChange,
  onFocus,
  onBlur,
  options,
  placeholder,
  className,
  ...props
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (selectedValue) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (open) {
      onFocus();
    } else {
      onBlur();
    }
  };

  const displayValue =
    options.find((option) => option.value === value)?.label || placeholder;

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger>
        <Button
          id={id}
          variant="ghost"
          className={cn(
            "w-full justify-between px-2 py-4 form-border text-white focus:outline-none transition-all duration-300 h-auto",
            "hover:bg-transparent hover:text-white", // Keep hover styles consistent
            "active:bg-transparent active:text-white", // Keep active styles consistent
            className
          )}
          {...props}
        >
          <span className={value ? "text-white" : "text-gray-300"}>
            {displayValue}
          </span>
          <ChevronDown
            className={cn(
              "ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] bg-black/80 border border-white/60 text-white rounded-md shadow-lg">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onSelect={() => handleSelect(option.value)}
            className="cursor-pointer hover:bg-white/20 focus:bg-white/20 data-[highlighted]:bg-white/20"
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
