import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  title: string;
  description?: string;
}

export const Heading: FC<HeadingProps> = ({ title, description, children, className, ...props }) => {
  return (
    <div className={cn("flex flex-col items-center text-center gap-4", className)} {...props}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      )}
      {children}
    </div>
  );
};
