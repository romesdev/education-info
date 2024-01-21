"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useLocation, useNavigate } from "react-router-dom"
import { Label } from "@/components/ui/label"

const MIN_REQUIRED_DEFAULT = 2
const MAX_REQUIRED_DEFAULT = 255

const formSchema = z.object({
    name: z.string().min(MIN_REQUIRED_DEFAULT, {
        message: `Nome tem que pelo menos ${MIN_REQUIRED_DEFAULT} caracteres`
    },).max(MAX_REQUIRED_DEFAULT, {
        message: `Nome tem que ter no máximo ${MIN_REQUIRED_DEFAULT} caracteres`
    })


})

export default function SchoolForm() {
    const location = useLocation()
    const navigate = useNavigate()


    function navigation() {
        const params = location.state.filter

        navigate('/', {
            replace: true, state: {
                filter: params,
            }
        })
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })


    return (
        <>
            <Button
                variant="outline"
                size="sm"
                onClick={navigation}
            >
                VOLTAR
            </Button>
            <Form {...form}>
                <form className="space-y-8">
                    <Label className='text-right text-xl'>
                        Identificação
                    </Label>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome da Escola</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nome" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Código da escola</FormLabel>
                                <FormControl>
                                    <Input placeholder="Código" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rede</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Label className='text-right text-xl'>
                        Localização
                    </Label>

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Área</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nome" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome da Escola</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nomo" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome da Escola</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nomo" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}

