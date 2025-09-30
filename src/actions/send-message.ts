"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export async function sendMessage(formData: FormData) {
  try {
    const validatedData = formSchema.parse(formData);
    
    // In a real application, you would integrate with an email service
    // or save the message to a database (e.g., Firebase Firestore).
    console.log("New message received:");
    console.log("Name:", validatedData.name);
    console.log("Email:", validatedData.email);
    console.log("Message:", validatedData.message);

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending message:", error);
    return { success: false, message: "Failed to send message." };
  }
}
