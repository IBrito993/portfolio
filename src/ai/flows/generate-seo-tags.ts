'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate SEO-optimized title and description meta tags for the portfolio website.
 *
 * The flow takes a page name and keywords as input and returns SEO-optimized title and description meta tags for that page.
 * - generateSeoTags - A function that generates SEO tags for a given page.
 * - GenerateSeoTagsInput - The input type for the generateSeoTags function.
 * - GenerateSeoTagsOutput - The return type for the generateSeoTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoTagsInputSchema = z.object({
  pageName: z.string().describe('The name of the page to generate SEO tags for.'),
  keywords: z.string().describe('A comma-separated list of keywords related to the page content.'),
});
export type GenerateSeoTagsInput = z.infer<typeof GenerateSeoTagsInputSchema>;

const GenerateSeoTagsOutputSchema = z.object({
  title: z.string().describe('The SEO-optimized title tag for the page.'),
  description: z.string().describe('The SEO-optimized description tag for the page.'),
});
export type GenerateSeoTagsOutput = z.infer<typeof GenerateSeoTagsOutputSchema>;

export async function generateSeoTags(input: GenerateSeoTagsInput): Promise<GenerateSeoTagsOutput> {
  try {
    return await generateSeoTagsFlow(input);
  } catch (error) {
    console.error('Error generating SEO tags:', error);
    // Return a default value in case of an error
    return {
      title: input.pageName,
      description: `Portfolio of ${input.pageName}`,
    };
  }
}

const prompt = ai.definePrompt({
  name: 'generateSeoTagsPrompt',
  input: {schema: GenerateSeoTagsInputSchema},
  output: {schema: GenerateSeoTagsOutputSchema},
  prompt: `You are an SEO expert tasked with generating optimized title and description meta tags for a software engineer's portfolio website. The goal is to improve search engine rankings and attract more visitors.

  Page Name: {{{pageName}}}
  Keywords: {{{keywords}}}

  Instructions:
  1. Analyze the page name and keywords to identify the main topic and target audience.
  2. Write a compelling and SEO-friendly title tag that includes relevant keywords.
  3. Write a concise and informative description tag that summarizes the page content and entices users to click.
  4. The title tag should be no more than 60 characters.
  5. The description tag should be no more than 160 characters.
  `,
});

const generateSeoTagsFlow = ai.defineFlow(
  {
    name: 'generateSeoTagsFlow',
    inputSchema: GenerateSeoTagsInputSchema,
    outputSchema: GenerateSeoTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
