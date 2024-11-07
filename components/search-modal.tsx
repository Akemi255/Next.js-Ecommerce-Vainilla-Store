"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

const searchSchema = z.object({
    query: z.string().min(1, { message: "Search query is required" }),
});

type SearchFormValues = z.infer<typeof searchSchema>;

export default function SearchModal() {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const form = useForm<SearchFormValues>({
        resolver: zodResolver(searchSchema),
        defaultValues: {
            query: "",
        },
    });

    const onSubmit = async (values: SearchFormValues) => {
        toast.success(`Searching for "${values.query}"`);
        form.reset();
        router.push(`/search?q=${encodeURIComponent(values.query)}`);
    };

    return (
        <>
            {mounted && (
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="border-none relative left-5 hover:bg-inherit">
                            <Search className="h-6 w-6" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Busca un producto</DialogTitle>
                            <DialogDescription>
                                Introduce el nombre del producto a buscar
                            </DialogDescription>
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                                <FormField
                                    control={form.control}
                                    name="query"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    id="search"
                                                    placeholder="Escriba aquí el nombre del producto..."
                                                    {...field}
                                                    disabled={form.formState.isSubmitting}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <DialogFooter className="sm:justify-end">
                                    <DialogClose asChild>
                                        <Button type="submit" className="ml-2">
                                            Search
                                        </Button>
                                    </DialogClose>

                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}
