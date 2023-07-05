"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import toast, { Toaster } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";

const FormSchema = z.object({
  message: z
    .string()
    .min(15, {
      message: "Wiadomość musi mieć przynajmniej 15 znaków.",
    })
    .max(1200, {
      message: "Wiadomość jest za długa.",
    }),
  username: z.string().min(2, {
    message: "Imię musi mieć przynajmniej 2 litery.",
  }),
  email: z.string().email({
    message: "Nieprawidłowy adres email",
  }),
});

const ContactFormPL = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      message: "",
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);

    const toastLoadingId = toast.loading("Wysyłanie wiadomości...");

    try {
      await fetch("/api/sendPL", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          email: data.email.toLowerCase(),
          message: data.message,
        }),
      });
      setEmailSent(true);
      toast.success("Wiadomość została wysłana", {
        id: toastLoadingId,
        duration: 3500,
      });

      form.reset();
    } catch (error) {
      console.error("Failed to send email: ", error);
      toast.error("Błąd podczas wysyłania wiadomości", {
        id: toastLoadingId,
        duration: 3500,
      });
    }

    setLoading(false);
  }

  return (
    <div className="flex w-full flex-col items-center rounded-lg border border-main-text/20 py-4 shadow-2xl dark:border-main-textDark/10 md:items-start xl:mx-12">
      <Toaster position="bottom-right" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6 px-4 caret-main-primary"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="username">Imię</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Podaj swoje imię..."
                    {...field}
                    id="username"
                    name="username"
                    className="border-main-background/20 dark:border-main-textDark/10 dark:bg-main-textDark/10"
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
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Podaj swój adres email..."
                    {...field}
                    id="email"
                    name="email"
                    className="border-main-background/20 dark:border-main-textDark/10 dark:bg-main-textDark/10"
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
                <FormLabel htmlFor="message">Wiadomość</FormLabel>
                <FormControl>
                  <p className="first-letter:capitalize">
                    <Textarea
                      placeholder="Napisz swoją wiadomość..."
                      className="border-main-background/20dark:border-main-textDark/10 dark:bg-main-textDark/10"
                      {...field}
                      id="message"
                      name="message"
                    />
                  </p>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className={buttonVariants()} disabled={loading}>
            Wyślij
          </Button>
          {emailSent && (
            <div className="inline-flex p-4 text-xs text-main-text/60 dark:text-main-textDark/40">
              Wiadomość została wysłana poprawnie. Sprawdź swoją skrzynkę
              pocztową w ramach potwierdzenia.
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default ContactFormPL;
