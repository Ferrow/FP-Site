"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Meno musí mať aspoň 2 znaky.",
  }),
  email: z.string().email({
    message: "Prosím, zadajte platnú emailovú adresu.",
  }),
  message: z.string().min(5, {
    message: "Správa musí mať aspoň 5 znakov.",
  }),
});

export default function KontaktPage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsSending(true);

    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        // Optionally, you can show a success message or reset the form
        setIsSending(false);
        setMessage("Správa bola odoslaná");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Optionally, you can show an error message
        setIsSending(false);
        setError("Nepodarilo sa odoslať správu");
      });
  }

  return (
    <div className="container min-h-[calc(100vh-412px)] pt-[70px] sm:w-[500px] flex flex-col">
      <div className="py-32">
        <h1 className="text-3xl font-bold pb-4">Kontakt</h1>
        {message ? (
          <p>{message}</p>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meno</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Meno"
                        {...field}
                        disabled={isSending}
                      />
                    </FormControl>
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
                        placeholder="Email"
                        {...field}
                        disabled={isSending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Správa</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Správa"
                        {...field}
                        disabled={isSending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSending}>
                {isSending ? <span>Odosielam...</span> : <span>Odoslať</span>}
              </Button>
            </form>
          </Form>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
