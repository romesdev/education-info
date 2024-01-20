"use client"

import { ColumnDef } from "@tanstack/react-table"

import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type School = {
    id: string
    code: string
    name: string
    city: City
    adminType: "Federal" | "Estadual" | "Municipal"
    localType: "Urbana" | "Rural"
    indicators: Indicator[]
}

export type SchoolTable = {
    id: string
    code: string
    name: string
    local: string
    adminType: "Federal" | "Estadual" | "Municipal"
}

export type City = {
    id: string
    code: string
    name: string
    state: State
    area: "Capital" | "Interior"
}

export type State = {
    id: string
    code: number
    name: string
    uf: string
    region: "Norte" | "Nordeste" | "Sudeste" | "Sul" | "Centro-Oeste",
}

export type Indicator = {
    id: string
    average: number
    quantity: number
    classification: number
    year: number
    school: School
    levelOne: number
    levelTwo: number
    levelThree: number
    levelFour: number
    levelFive: number
    levelSix: number
    levelSeven: number
    levelEight: number
}

export const columns: ColumnDef<SchoolTable>[] = [
    {
        id: "actions",
        cell: ({ row }) => {
            const school = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(school.id)}
                        >
                            Copy school ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View school details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
    {
        accessorKey: "code",
        header: "Código",
    },
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "city.name",
        header: "local",
    },

]
