import { Reveal } from "./Reveal";

export function PageHeader({ eyebrow, title, subtitle, image }: { eyebrow?: string; title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/80 to-ivory" />
        </>
      )}
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {eyebrow && <Reveal><p className="eyebrow mb-5">{eyebrow}</p></Reveal>}
        <Reveal delay={0.1}>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-charcoal">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-taupe leading-relaxed">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}