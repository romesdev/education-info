import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type DropdownMenunActionsProps = {
    onEdit?: () => void
    onDelete?: () => void
}

export function DropdownMenunActions({ onEdit, onDelete }: DropdownMenunActionsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-gray-200">
                <DropdownMenuItem onClick={() => onEdit}>
                    <span>Editar</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onDelete}>
                    <span className="text-black">Deletar</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
