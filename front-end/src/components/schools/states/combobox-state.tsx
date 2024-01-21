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
import useSWR from "swr"
import { BASE_URL, fetcher } from "@/utils/utils"
import { City } from "./schools/columns"

// const frameworks = [
//     {
//         value: "next.js",
//         label: "Next.js",
//     },
//     {
//         value: "sveltekit",
//         label: "SvelteKit",
//     },
//     {
//         value: "nuxt.js",
//         label: "Nuxt.js",
//     },
//     {
//         value: "remix",
//         label: "Remix",
//     },
//     {
//         value: "astro",
//         label: "Astro",
//     },
// ]

type ComboboxProps = {
    placeholder: string
    width?: number
}

export function ComboboxState({ width = 200, placeholder }: ComboboxProps) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [search, setSearch] = React.useState("")
    const [formattedData, setFormattedData] = React.useState([])

    const { data: currentData, isLoading } = useSWR(`${BASE_URL}city/findByName/${search}`, fetcher)
    // console.log(currentData)
    console.log(isLoading)

    console.log(formattedData)

    React.useEffect(() => {
        // console.log('bla')
        // console.log(currentData)
        setFormattedData(currentData ?? [])
    }, [currentData])

    // let data = []
    // if (currentData) {
    //     data = currentData.map((item: City) => {
    //         return {
    //             value: item.id,
    //             label: item.name,
    //         }
    //     })
    // }

    // const teste = () => {
    //     if (currentData) {

    //         return currentData.map((item: City) => {
    //             return {
    //                 value: item.id,
    //                 label: item.name,
    //             }
    //         })
    //     }

    //     return []
    // }

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
                        ? formattedData.find((item) => item.value.toLowerCase() === value.toLowerCase())?.label
                        : `Selecione um ${placeholder.toLowerCase()}`}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={`w-[${width}rem] p-0 bg-blue-600`}>
                <Command>
                    <CommandInput placeholder={placeholder} onValueChange={(currentValue) => setSearch(currentValue)} />
                    <CommandEmpty>Nenhum {placeholder.toLowerCase()} encontrado.</CommandEmpty>
                    <CommandGroup>
                        {formattedData.map((item) => (
                            <CommandItem
                                key={Math.floor(Math.random() * 1280)}
                                value={item.value}
                                onSelect={(currentValue: string) => {
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
                    {/* {isLoading
                        ? (<div>Carregando...</div>)
                        : (<>
                            <CommandEmpty>Nenhum {placeholder.toLowerCase()} encontrado.</CommandEmpty>
                            <CommandGroup>
                                {formattedData.map((item) => (
                                    <CommandItem
                                        key={item.value}
                                        value={item.value}
                                        onSelect={(currentValue: string) => {
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
                        </>)
                    } */}
                </Command>
            </PopoverContent>
        </Popover >
    )
}
