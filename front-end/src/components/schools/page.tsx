import { BASE_URL, fetcher } from "@/utils/utils"
import { Combobox } from "../combobox"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { School, SchoolTable, columns, State } from "./columns"
import { DataTable } from "./data-table"
import useSWR from 'swr'
import React, { useContext } from "react"
import { Input } from "../ui/input"
import { InputSearch, InputWithButton } from "../search/search"
import { tt } from "@/App"


function getData(): SchoolTable[] {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            code: "1100015",
            name: "EEEIF Maria",
            adminType: "Municipal",
            local: "Cidade/UF"
        },
        {
            id: "728ed52f",
            code: "1100015",
            name: "EEEIF Maria",
            adminType: "Municipal",
            local: "Cidade/UF"
        },
        {
            id: "728ed52f",
            code: "1100015",
            name: "EEEIF Maria",
            adminType: "Municipal",
            local: "Cidade/UF"
        },
        {
            id: "728ed52f",
            code: "1100015",
            name: "EEEIF Maria",
            adminType: "Municipal",
            local: "Cidade/UF"
        },
        {
            id: "728ed52f",
            code: "1100015",
            name: "EEEIF Maria",
            adminType: "Municipal",
            local: "Cidade/UF"
        },
        // ...
    ]
}

const levelsStrings = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']


const mapSchoolToRow = (schools: School[]) => {
    if (schools) {
        return schools.map((item) => {
            console.log(item)
            return {
                id: item.id,
                code: item.code,
                name: item.name,
                adminType: item.adminType,
                local: item.city.name,
                level: item.indicators.length > 0 ? levelsStrings[item.indicators[0].classification - 1] : 'N/A'
            }
        })
    }
    return []
}

const mapStateToStateCombobox = (states: State[]) => {
    if (states) {
        return states.map((item) => {
            console.log(item)
            return {
                label: item.uf,
                value: item.uf,
            }
        })
    }
    return []
}


export default function SchoolPage() {
    const { fnX } = useContext(tt)
    const [filter, setFilter] = React.useState("")
    const { data: payloadSchools, error: errorSchools, isLoading: isLoadingSchools } = useSWR(`${BASE_URL}schools?take=1`, fetcher)
    const { data: payloadStates } = useSWR(BASE_URL + 'states', fetcher)

    function filteringItemsByUF(value: string) {
        console.log('here:', value)
        setFilter(`findByUF/${value.toUpperCase()}`)
    }

    function filteringItemsByLevel(value: string) {
        setFilter(`findByLevel/${value}`)
    }

    function filteringItemsBySearchName(value: string) {
        if (value === "") return
        setFilter(`findByName/${value}`)
    }

    console.log(filter)

    console.log('data', payloadSchools)
    console.log('err', errorSchools)

    const data = payloadSchools ? payloadSchools : undefined;

    console.log(data)

    if (errorSchools) return <div>falhou ao carregar</div>
    // if (isLoadingSchools) return <div>carregando...</div>

    const dataTable = mapSchoolToRow(data)

    console.log(dataTable)
    const dataStates = mapStateToStateCombobox(payloadStates)


    return (
        <div className="container mx-auto py-10">
            <InputSearch onSearchValue={filteringItemsBySearchName} />
            <Select onValueChange={filteringItemsByLevel}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione um nível" />
                </SelectTrigger>
                <SelectContent className="bg-blue-600">
                    <SelectGroup>
                        <SelectLabel>Níveis</SelectLabel>
                        <SelectItem value="1">I</SelectItem>
                        <SelectItem value="2">II</SelectItem>
                        <SelectItem value="3">III</SelectItem>
                        <SelectItem value="4">IV</SelectItem>
                        <SelectItem value="5">V</SelectItem>
                        <SelectItem value="6">VI</SelectItem>
                        <SelectItem value="7">VII</SelectItem>
                        <SelectItem value="8">VIII</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Combobox data={dataStates} label='Estado' placeholder="Estado" width={2.5} onValueChange={filteringItemsByUF}></Combobox>
            {/* <ComboboxState placeholder="Estado" width={2.5}></ComboboxState> */}
            <DataTable columns={columns} data={dataTable} />
        </div>
    )

}
