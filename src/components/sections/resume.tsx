import { Heading } from "@/components/ui/heading";
import { workExperience, education } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

interface ResumeProps {
  seoText: string;
}

export function Resume({ seoText }: ResumeProps) {
  return (
    <section id="resume" className="container mx-auto px-4 md:px-6 py-16">
      <Heading title="Resume" description={seoText} />
      <div className="grid md:grid-cols-2 gap-16 mt-12">
        <div>
          <h3 className="text-3xl font-semibold mb-8 flex items-center gap-4">
            <Briefcase className="w-8 h-8 text-primary" />
            Work Experience
          </h3>
          <div className="relative border-l-2 border-primary/20 pl-8 space-y-12">
            {workExperience.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-primary" />
                <p className="text-sm text-muted-foreground">{item.years}</p>
                <h4 className="text-xl font-semibold mt-1">{item.jobTitle}</h4>
                <p className="text-lg text-muted-foreground font-medium">{item.company}</p>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-8 flex items-center gap-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h3>
          <div className="relative border-l-2 border-primary/20 pl-8 space-y-12">
            {education.map((item, index) => (
               <div key={index} className="relative">
                <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-primary" />
                <p className="text-sm text-muted-foreground">{item.years}</p>
                <h4 className="text-xl font-semibold mt-1">{item.degree}</h4>
                <p className="text-lg text-muted-foreground font-medium">{item.university}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
