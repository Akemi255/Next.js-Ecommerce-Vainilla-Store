"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { sendContactEmail } from "@/actions/email-actions";
import { useTransition } from "react";

const contactFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {

    const [isPending, startTransition] = useTransition()

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (values: ContactFormValues) => {
        startTransition(async () => {
            try {
                const { success, error } = await sendContactEmail(values.name, values.email, values.message);
                if (success) {
                    toast.success("Message sent successfully!");
                } else {
                    toast.error(error || "Something went wrong.");
                }
            } catch (error) {
                toast.error("Something went wrong.");
            }
        });
    };

    return (

        <div className="mx-auto grid w-full max-w-md gap-6 lg:gap-8">

            <h1 className="text-3xl font-bold mt-7">Contact Us</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        {...field}
                                        disabled={form.formState.isSubmitting}
                                    />
                                </FormControl>
                                <FormDescription>Your full name</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="johndoe@example.com"
                                        {...field}
                                        disabled={form.formState.isSubmitting}
                                    />
                                </FormControl>
                                <FormDescription>Your email address</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        id="message"
                                        placeholder="Your message here..."
                                        {...field}
                                        disabled={form.formState.isSubmitting}
                                    />
                                </FormControl>
                                <FormDescription>Your message to us</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" disabled={isPending}>
                        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    <br />
                </form>
            </Form>
        </div>


    );
}
