import { Suspense } from "react";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";
import { generateSeoText } from "@/ai/flows/generate-seo-text";
import { heroContent, aboutContent, projectsContent, resumeContent, contactContent } from "@/lib/data";

export const revalidate = 86400;

async function HeroSection() {
  const { seoText } = await generateSeoText({ sectionName: "Hero", content: heroContent });
  return <Hero seoText={seoText} />;
}

async function AboutSection() {
  const { seoText } = await generateSeoText({ sectionName: "About", content: aboutContent });
  return <About seoText={seoText} />;
}

async function ProjectsSection() {
  const { seoText } = await generateSeoText({ sectionName: "Projects", content: projectsContent });
  return <Projects seoText={seoText} />;
}

async function ResumeSection() {
  const { seoText } = await generateSeoText({ sectionName: "Resume", content: resumeContent });
  return <Resume seoText={seoText} />;
}

async function ContactSection() {
  const { seoText } = await generateSeoText({ sectionName: "Contact", content: contactContent });
  return <Contact seoText={seoText} />;
}

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Suspense>
        <HeroSection />
      </Suspense>
      <Suspense>
        <AboutSection />
      </Suspense>
      <Suspense>
        <ProjectsSection />
      </Suspense>
      <Suspense>
        <ResumeSection />
      </Suspense>
      <Suspense>
        <ContactSection />
      </Suspense>
    </div>
  );
}
