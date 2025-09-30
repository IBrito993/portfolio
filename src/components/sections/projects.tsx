import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface ProjectsProps {
  seoText: string;
}

export function Projects({ seoText }: ProjectsProps) {
  return (
    <section id="projects" className="container mx-auto px-4 md:px-6 py-16">
      <Heading title="My Projects" description={seoText} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-xl">{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-4">
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank">
                  View Code
                </Link>
              </Button>
              {project.demoUrl && (
                <Button asChild>
                  <Link href={project.demoUrl} target="_blank">
                    Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
