import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { MapContact } from "@/components/site/MapContact";
import { CLINIC, REVIEWS } from "@/lib/site-data";
import { Star } from "lucide-react";

export const Route = createFileRoute("/doctor")({
  head: () => ({
    meta: [
      { title: "Dr. Hitendra Singh — Akshaya Dental Hospital" },
      { name: "description", content: "Meet Dr. Hitendra Singh, Chief Dental Surgeon at Akshaya Dental Hospital, Hyderabad." },
    ],
  }),
  component: DoctorPage,
});

function DoctorPage() {
  return (
    <>
      <PageHeader eyebrow="Your Dentist" title="Dr. Hitendra Singh" subtitle="Chief Dental Surgeon · Akshaya Dental Hospital, Hyderabad" />

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12 items-start">
          <Reveal className="lg:col-span-2">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80" alt={CLINIC.doctor} className="w-full aspect-[4/5] object-cover rounded-sm" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <p className="eyebrow mb-4">Biography</p>
            <h2 className="font-serif text-3xl leading-snug">A clinician known for <span className="italic text-sage-dark">listening</span> first.</h2>
            <div className="mt-6 space-y-5 text-taupe leading-relaxed">
              <p>Dr. Hitendra Singh founded Akshaya Dental Hospital in 2013 with a vision of creating a clinic where families could feel as comfortable as they would in their own home — without compromising on clinical standards.</p>
              <p>With over 12 years of practice across general dentistry, endodontics, smile design and implantology, his work spans from a child's first filling to complex full-arch rehabilitations. Patients return for his calm pace, clear explanations, and a refusal to recommend treatment that isn't strictly needed.</p>
              <p>He maintains active memberships with the Indian Dental Association and continues training across digital smile design and implant prosthodontics each year.</p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Qualifications", d: "BDS, MDS — General & Restorative Dentistry" },
                { t: "Experience", d: "12+ years in private practice" },
                { t: "Specialisations", d: "Endodontics, Smile Design, Implantology" },
                { t: "Languages", d: "English, Hindi, Telugu, Marathi" },
              ].map(b => (
                <div key={b.t} className="border border-blush/50 rounded-sm p-5">
                  <p className="eyebrow mb-2">{b.t}</p>
                  <p className="text-sm text-charcoal">{b.d}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-8 inline-block rounded-sm bg-sage-dark px-6 py-3 text-xs uppercase tracking-[0.18em] text-ivory hover:bg-charcoal transition-colors">Book a consultation</Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-cream/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-4">What patients say</p>
            <h2 className="font-serif text-4xl">In their <span className="italic text-sage-dark">words</span>.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.slice(0,3).map(r => (
              <Reveal key={r.name} className="bg-ivory rounded-sm p-7 border border-blush/40">
                <div className="flex gap-0.5 mb-4">{[1,2,3,4,5].map(s=> <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />)}</div>
                <p className="font-serif italic text-lg text-charcoal leading-relaxed">"{r.body}"</p>
                <p className="mt-5 text-sm font-medium text-charcoal">{r.name}</p>
                <p className="text-xs text-taupe">{r.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MapContact />
    </>
  );
}