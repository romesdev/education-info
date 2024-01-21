import { BASE_URL, fetcher, mapSchoolToRow, mapStateToStateCombobox } from "@/utils/utils"
import { Combobox } from "./combobox/combobox"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import useSWR from 'swr'
import { Label } from "@/components/ui/label"
import { InputSearch } from "../search/search"
import { useSearchParams } from 'react-router-dom';
import { Button } from "../ui/button"



const initialParams = { page: "1", perPage: "5" };


export default function SchoolPage() {
    const [searchParams, setSearchParams] = useSearchParams(new URLSearchParams(initialParams));
    const { data: payloadSchools } = useSWR(`${BASE_URL}schools/filter?${searchParams.toString()}`, fetcher)
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

    function filteringItemsByCityName(value: string) {
        searchParams.set("city", value)
        setSearchParams(searchParams)
    }

    function nextPage(value: string) {
        searchParams.set("page", value)
        setSearchParams(searchParams)
    }

    function changeSort(value: string) {
        searchParams.set("direction", value)
        setSearchParams(searchParams)
    }

    const data = payloadSchools ? payloadSchools : undefined;

    const dataTable = mapSchoolToRow(data, payloadStates)

    const dataStates = mapStateToStateCombobox(payloadStates)

    return (
        <div className="container mx-auto py-10">
            <Label className="text-right text-xl py-12">INSE | Indicadores das escolas</Label>
            <div className="flex flex-wrap gap-8 py-10">
                <div className="">
                    <InputSearch label={"nome"} onSearchValue={filteringItemsBySearchName} />
                </div>
                <Select onValueChange={filteringItemsByLevel}>
                    <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Nível" />
                    </SelectTrigger>
                    <SelectContent className="bg-blue-600 overflow-y-auto max-h-48">
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

                <Select onValueChange={changeSort}>
                    <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Ordem" />
                    </SelectTrigger>
                    <SelectContent className="bg-blue-600">
                        <SelectGroup>
                            <SelectLabel>Ordem</SelectLabel>
                            <SelectItem value="asc">ASC</SelectItem>
                            <SelectItem value="desc">DESC</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <InputSearch label={"cidade"} onSearchValue={filteringItemsByCityName} />
                <Combobox data={dataStates} label='Estado' placeholder="Estado" width={2.5} onValueChange={filteringItemsByUF}></Combobox>
                <Button type="button" className="bg-zinc-500" onClick={(e) => {
                    e.preventDefault()
                    setSearchParams({})
                }}>Limpar busca</Button>
            </div>

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
        </div >
    )

}
