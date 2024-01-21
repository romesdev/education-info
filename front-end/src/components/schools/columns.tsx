"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { School } from "@/utils/types"
import { levelsStrings } from "@/utils/utils"

export const columns: ColumnDef<School>[] = [
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
        accessorKey: "classification",
        header: "Nível",
    },
    {
        id: "actions",
        cell: ({ row }) => {

            const school = row.original
            return (
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className=" bg-blue-600" variant="outline">Ver</Button>
                    </DialogTrigger >
                    <DialogContent className="sm:max-w-[425px] bg-blue-400 ml-14 content-center ">
                        <DialogHeader>
                            <DialogTitle>{school.name}</DialogTitle>
                            <DialogDescription className="">
                                <div className="flex flex-wrap gap-16">
                                    <Label className="text-right">
                                        {school.code}
                                    </Label>
                                    <Label className="text-right">
                                        Administração {school.adminType}
                                    </Label>
                                </div>

                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="my-4">
                                <Label className="text-right text-lg">
                                    Localização
                                </Label>
                                <div className="flex gap-8">
                                    <Label className="text-right">
                                        {school.local}
                                    </Label>
                                    <Label className="text-right">
                                        {school.city.area}
                                    </Label>
                                    <Label className="text-right">
                                        {school.localType}
                                    </Label>
                                </div>
                            </div>
                            <div className="">
                                <Label className="text-right text-lg">
                                    INSE {school.indicators[0]?.year}
                                </Label>
                            </div>
                            <div>
                                <Label className="text-right text-lg">
                                    Indicadores
                                </Label>
                            </div>
                            <div className="flex gap-8">
                                <Label className="text-right">
                                    Nível
                                </Label>
                                <Label className="text-right">
                                    Média
                                </Label>
                                <Label className="text-right">
                                    Quantidade de alunos
                                </Label>
                            </div>
                            <div className="flex gap-16 ">
                                <Label className="text-right ml-1">
                                    {levelsStrings[school.indicators[0]?.classification - 1] ?? "N/A"}
                                </Label>
                                <Label className="text-right">
                                    {school.indicators[0]?.average}
                                </Label>
                                <Label className="text-right">
                                    {school.indicators[0]?.quantity}
                                </Label>
                            </div>
                            <div>
                                <Label className="text-right text-lg">
                                    Alunos por nível
                                </Label>
                            </div>
                            <div className="flex gap-8">
                                <Label className="text-right">
                                    Nível I
                                </Label>
                                <Label className="text-right">
                                    Nível II
                                </Label>
                                <Label className="text-right">
                                    Nível III
                                </Label>
                                <Label className="text-right">
                                    Nível IV
                                </Label>
                            </div>
                            <div className="flex gap-12">
                                <Label className="text-right ml-1">
                                    {school.indicators[0]?.levelOne}%
                                </Label>
                                <Label className="text-right">
                                    {school.indicators[0]?.levelTwo}%
                                </Label>
                                <Label className="text-right">
                                    {school.indicators[0]?.levelThree}%
                                </Label>
                                <Label className="text-right">
                                    {school.indicators[0]?.levelFour}%
                                </Label>
                            </div>
                            <div className="flex gap-8">
                                <Label className="text-right">
                                    Nível V
                                </Label>
                                <Label className="text-right">
                                    Nível VI
                                </Label>
                                <Label className="text-right">
                                    Nível VII
                                </Label>
                                <Label className="text-right">
                                    Nível VIII
                                </Label>
                            </div>
                            <div className="flex gap-14">
                                <Label className="text-right">
                                    {school.indicators[0]?.levelFive}%
                                </Label>
                                <Label className="text-right">
                                    {school.indicators[0]?.levelSix}%
                                </Label>
                                <Label className="text-right">
                                    {school.indicators[0]?.levelSeven}%
                                </Label>
                                <Label className="text-right">
                                    {school.indicators[0]?.levelEight}%
                                </Label>
                            </div>
                        </div>
                        <DialogFooter>
                        </DialogFooter>
                    </DialogContent>
                </Dialog >
            )
        }
    },
]
