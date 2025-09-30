'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate SEO-optimized text for the portfolio website.
 *
 * The flow takes a section name and content as input and returns SEO-optimized text for that section.
 * - generateSeoText - A function that generates SEO text for a given section.
 * - GenerateSeoTextInput - The input type for the generateSeoText function.
 * - GenerateSeoTextOutput - The return type for the generateSeoText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoTextInputSchema = z.object({
  sectionName: z.string().describe('The name of the section to generate SEO text for.'),
  content: z.string().describe('The content of the section.'),
});
export type GenerateSeoTextInput = z.infer<typeof GenerateSeoTextInputSchema>;

const GenerateSeoTextOutputSchema = z.object({
  seoText: z.string().describe('The SEO-optimized text for the section.'),
});
export type GenerateSeoTextOutput = z.infer<typeof GenerateSeoTextOutputSchema>;

export async function generateSeoText(input: GenerateSeoTextInput): Promise<GenerateSeoTextOutput> {
  return generateSeoTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSeoTextPrompt',
  input: {schema: GenerateSeoTextInputSchema},
  output: {schema: GenerateSeoTextOutputSchema},
  prompt: `You are an SEO expert tasked with generating optimized text for a software engineer's portfolio website. The goal is to improve search engine rankings and attract more visitors.

  Section Name: {{{sectionName}}}
  Content: {{{content}}}

  Instructions:
  1. Analyze the section name and content to identify relevant keywords.
  2. Write compelling, SEO-optimized text that incorporates those keywords naturally.
  3. The text should be concise, informative, and engaging to potential visitors.
  4. Focus on highlighting the key aspects of the section and its value proposition.
  5. The text should be no more than 150 words.
  `, // Added instructions to limit the text length
});

const generateSeoTextFlow = ai.defineFlow(
  {
    name: 'generateSeoTextFlow',
    inputSchema: GenerateSeoTextInputSchema,
    outputSchema: GenerateSeoTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
