import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type InputSearchProps = {
    label: string
    onSearchValue: (value: string) => void
}

export function InputSearch({ onSearchValue, label }: InputSearchProps) {
    const [value, setValue] = React.useState("")

    console.log(value)

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder={`Buscar por ${label}...`} onChange={(e) => {
                e.preventDefault()
                setValue(e.target.value)
            }} />
            <Button type="button" onClick={(e) => {
                e.preventDefault()
                onSearchValue(value)
            }}>Pesquisar</Button>
        </div>
    )
}