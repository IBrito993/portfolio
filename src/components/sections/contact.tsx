"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin } from "lucide-react";
import { sendMessage } from "@/actions/send-message";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

interface ContactProps {
  seoText: string;
}

export function Contact({ seoText }: ContactProps) {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(data: FormData) {
    const result = await sendMessage(data);
    if (result.success) {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you as soon as possible.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Failed to Send Message",
        description: "There was a problem with your request. Please try again later.",
      });
    }
  }

  return (
    <section id="contact" className="container mx-auto px-4 md:px-6 py-16">
      <Heading title="Get In Touch" description={seoText} />
      <div className="mt-12 max-w-lg mx-auto">
        <div className="flex justify-center gap-6 mb-8">
            <Link href="https://github.com/IBrito993" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="w-12 h-12">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/ibrito93/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="w-12 h-12">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
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
                    <Input placeholder="your.email@example.com" {...field} />
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your message..." {...field} rows={5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
