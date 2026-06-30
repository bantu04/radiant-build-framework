import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { MapContact } from "@/components/site/MapContact";
import { SERVICES } from "@/lib/site-data";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Akshaya Dental Hospital" },
      { name: "description", content: "Full-service dentistry in Hyderabad — extractions, smile correction, implants, orthodontics, restorative & family care." },
      { property: "og:title", content: "Services — Akshaya Dental Hospital" },
      { property: "og:description", content: "Every treatment we offer, explained clearly." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="What We Do" title="Treatments, explained in full." subtitle="Every service below comes with an unhurried consultation, a written plan, and honest pricing — before anything starts." />

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 space-y-24">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug}>
              <div id={s.slug} className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-32 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <img src={s.image} alt={s.title} className="w-full aspect-[4/3] object-cover rounded-sm" />
                <div>
                  <p className="eyebrow mb-4">Service · 0{(i % 9) + 1}</p>
                  <h2 className="font-serif text-4xl">{s.title}</h2>
                  <p className="mt-5 text-taupe leading-relaxed">{s.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {["Unhurried consultation", "Written treatment plan", "Transparent pricing"].map(b => (
                      <li key={b} className="flex items-center gap-3 text-sm text-charcoal">
                        <Check className="h-4 w-4 text-sage-dark shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <MapContact />
    </>
  );
}