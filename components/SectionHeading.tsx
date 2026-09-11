export default function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-sm text-clay">{eyebrow}</p>
      )}
      <h2 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-stone">{description}</p>
      )}
    </div>
  );
}
