"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import toast, { Toaster } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";

const FormSchema = z.object({
  message: z
    .string()
    .min(15, {
      message: "Message must be at least 15 characters.",
    })
    .max(1200, {
      message: "Message is too long.",
    }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Write correct email address.",
  }),
});

const ContactForm = () => {
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
    const toastLoadingId = toast.loading("Sending email...");

    try {
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          email: data.email.toLowerCase(),
          message: data.message,
        }),
      });
      setEmailSent(true);
      toast.success("Sent email success", {
        id: toastLoadingId,
        duration: 3500,
      });

      form.reset();
    } catch (error) {
      console.error("Failed to send email: ", error);
      toast.error("Sent email error", {
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
                <FormLabel htmlFor="username">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Write your name..."
                    {...field}
                    id="username"
                    name="username"
                    className="border-main-background/20 capitalize dark:border-main-textDark/10 dark:bg-main-textDark/10"
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
                    placeholder="Write your email..."
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
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormControl>
                  <p className="first-letter:capitalize">
                    <Textarea
                      placeholder="Write your message..."
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
            Submit
          </Button>
          {emailSent && (
            <div className="inline-flex p-4 text-xs text-main-text/60 dark:text-main-textDark/40">
              Email has been sent successfully. Please check your email for
              confirmation.
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
