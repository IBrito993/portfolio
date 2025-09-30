import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";
import { generateSeoText } from "@/ai/flows/generate-seo-text";
import { aboutContent, projectsContent, resumeContent, contactContent } from "@/lib/data";

export default async function Home() {
  const [
    heroSeo,
    aboutSeo,
    projectsSeo,
    resumeSeo,
    contactSeo
  ] = await Promise.all([
    generateSeoText({ 
      sectionName: "Hero", 
      content: "Hi, I’m Ivan Brito. Software Engineer based in Santiago, Chile. I build robust backend systems and scalable web apps. Check out my work & get in touch." 
    }),
    generateSeoText({
      sectionName: "About",
      content: aboutContent,
    }),
    generateSeoText({
      sectionName: "Projects",
      content: projectsContent,
    }),
    generateSeoText({
      sectionName: "Resume",
      content: resumeContent,
    }),
    generateSeoText({
      sectionName: "Contact",
      content: contactContent,
    }),
  ]);

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Hero seoText={heroSeo.seoText} />
      <About seoText={aboutSeo.seoText} />
      <Projects seoText={projectsSeo.seoText} />
      <Resume seoText={resumeSeo.seoText} />
      <Contact seoText={contactSeo.seoText} />
    </div>
  );
}
