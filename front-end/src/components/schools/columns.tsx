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
import { DropdownMenunActions } from "./row-actions"

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
        accessorKey: "code",
        header: "Código",
    },
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "local",
        header: "Local",
    },
    {
        accessorKey: "level",
        header: "Nível",
    },
    {
        id: "actions",
        cell: ({ row }) => <DropdownMenunActions />,
    },
]
