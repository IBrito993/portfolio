"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof formSchema>;

export async function sendMessage(formData: FormData) {
  try {
    const validatedData = formSchema.parse(formData);
    
    // TODO: integrate with an email service or Firebase Firestore
    console.log("New message received:", validatedData);

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending message:", error);
    return { success: false, message: "Failed to send message." };
  }
}
