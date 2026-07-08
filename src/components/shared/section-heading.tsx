type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-primary">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold tracking-normal text-balance text-foreground md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">{description}</p> : null}
    </div>
  );
}
