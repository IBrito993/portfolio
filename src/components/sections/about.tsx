import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { skills } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface AboutProps {
  seoText: string;
}

export function About({ seoText }: AboutProps) {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6 py-16">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-primary">
            <Image
              src="https://picsum.photos/seed/ivan-brito/300/300"
              alt="Ivan Brito"
              fill
              className="object-cover"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
        <div className="md:col-span-3 space-y-6">
          <Heading title="About Me" className="items-start text-left" />
          <p className="text-lg text-muted-foreground">
            {seoText}
          </p>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills & Technologies</h3>
            <TooltipProvider>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                   <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <Card className="p-4 hover:bg-accent transition-colors cursor-pointer">
                        <CardContent className="p-0 flex items-center justify-center">
                          <skill.icon className="w-8 h-8 text-muted-foreground group-hover:text-foreground" />
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
