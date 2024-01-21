import { BASE_URL, fetcher } from "@/utils/utils"
import { Combobox } from "../combobox"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { School, SchoolTable, columns, State } from "./columns"
import { DataTable } from "./data-table"
import useSWR from 'swr'
import React, { useContext } from "react"
import { InputSearch } from "../search/search"
import { tt } from "@/App"
import { useSearchParams } from 'react-router-dom';
import { Button } from "../ui/button"

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


const mapSchoolToRow = (data: any) => {
    if (data) {
        return data.data.map((item) => {
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
            return {
                label: item.uf,
                value: item.uf,
            }
        })
    }
    return []
}

const initialParams = { page: "1", perPage: "5" };


export default function SchoolPage() {
    const [searchParams, setSearchParams] = useSearchParams(new URLSearchParams(initialParams));

    // const { fnX } = useContext(tt)
    // const [filter, setFilter] = React.useState("")
    const { data: payloadSchools, error: errorSchools, isLoading: isLoadingSchools } = useSWR(`${BASE_URL}schools/filter?${searchParams.toString()}`, fetcher)
    const { data: payloadStates } = useSWR(BASE_URL + 'states', fetcher)

    function filteringItemsByUF(value: string) {
        searchParams.set("state", value)
        setSearchParams(searchParams)
    }

    function filteringItemsByLevel(value: string) {
        searchParams.set("level", value)
        setSearchParams(searchParams)
    }

    function filteringItemsBySearchName(value: string) {
        searchParams.set("search", value)
        setSearchParams(searchParams)
    }

    function nextPage(value: string) {
        searchParams.set("page", value)
        setSearchParams(searchParams)
    }

    console.log(searchParams.toString())

    console.log('data', payloadSchools)
    console.log('err', errorSchools)

    const data = payloadSchools ? payloadSchools : undefined;

    console.log(data)

    const dataTable = mapSchoolToRow(data)

    console.log(dataTable)
    const dataStates = mapStateToStateCombobox(payloadStates)


    return (
        <div className="container mx-auto py-10">
            <h1>Indicadores das escolas INSE</h1>
            <InputSearch onSearchValue={filteringItemsBySearchName} />
            <div className="flex-auto w-64"> </div>
            <Select onValueChange={filteringItemsByLevel}>
                <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Nível" />
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
            <Button type="button" onClick={(e) => {
                e.preventDefault()
                setSearchParams("")
            }}>Limpar busca</Button>
            {/* <ComboboxState placeholder="Estado" width={2.5}></ComboboxState> */}
            <DataTable columns={columns} data={dataTable} />
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => nextPage(data.meta.prev)}
                    disabled={data?.meta.prev == null ? true : false}
                >
                    Anterior
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => nextPage(data.meta.next)}
                    disabled={data?.meta.next == null ? true : false}
                >
                    Próxima
                </Button>
            </div >
        </div>
    )

}
