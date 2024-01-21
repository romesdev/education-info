"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type ComboboxItem = {
    value: string
    label: string
}
type ComboboxProps = {
    data: ComboboxItem[],
    label: string
    placeholder: string
    width?: number
    onValueChange: (value: string) => void
}

export function Combobox({ data, width = 200, placeholder, onValueChange }: ComboboxProps) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={`w-[${width}rem] justify-between`}
                >
                    {value
                        ? data.find((item) => item.value.toLowerCase() === value.toLowerCase())?.label
                        : `${placeholder}`}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`w-[${width}rem] p-0 bg-blue-600`}>
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandEmpty>Nenhum {placeholder.toLowerCase()} encontrado.</CommandEmpty>
                    <CommandGroup>
                        {data.map((item) => (
                            <CommandItem
                                key={item.value}
                                value={item.value}
                                onSelect={(currentValue: string) => {
                                    onValueChange(currentValue)
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === item.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {item.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
