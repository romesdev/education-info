import { SchoolTable, columns } from "./columns"
import { DataTable } from "./data-table"

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

export default function School() {
    const data = getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
