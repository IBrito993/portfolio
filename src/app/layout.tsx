import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { generateSeoTags } from "@/ai/flows/generate-seo-tags";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata(): Promise<Metadata> {
  const seoTags = await generateSeoTags({
    pageName: "Ivan Brito Portfolio",
    keywords: "Software Engineer, Backend Developer, Java, Spring Boot, Microservices, Cloud, Full-Stack, Ivan Brito, Portfolio",
  });

  return {
    title: seoTags.title,
    description: seoTags.description,
    keywords: "Software Engineer, Backend Developer, Java, Spring Boot, Microservices, Cloud, Full-Stack, Ivan Brito, Portfolio",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
