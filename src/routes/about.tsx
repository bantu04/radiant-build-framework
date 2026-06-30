import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal, RevealStagger, RevealItem, revealItemVariants } from "@/components/site/Reveal";
import { MapContact } from "@/components/site/MapContact";
import { Award, Heart, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Akshaya Dental Hospital" },
      {
        name: "description",
        content: "Our story, values and the team behind Akshaya Dental Hospital in Hyderabad.",
      },
      { property: "og:title", content: "About Akshaya Dental Hospital" },
      {
        property: "og:description",
        content: "A boutique family dental hospital in Balanagar, Hyderabad.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Heart,
    t: "Patient first",
    d: "Every plan starts with what's best for you — not what bills best.",
  },
  {
    icon: ShieldCheck,
    t: "Transparent care",
    d: "Written estimates, alternatives discussed, no hidden charges.",
  },
  {
    icon: Sparkles,
    t: "Quiet luxury",
    d: "Clean rooms, calm staff, considered details — without the markup.",
  },
  {
    icon: Award,
    t: "Clinical rigour",
    d: "Modern sterilisation, evidence-based protocols, continuous training.",
  },
];

const MILESTONES = [
  { year: "2013", t: "Akshaya Dental Hospital founded in Balanagar, Hyderabad." },
  {
    year: "2016",
    t: "Expansion to full-service family dentistry — pediatrics, ortho, endodontics.",
  },
  { year: "2019", t: "Crossed 300 families under continuous care." },
  { year: "2022", t: "Implant & smile design suite added; digital imaging upgrade." },
  { year: "2024", t: "Achieved 4.9★ Google rating across 38+ verified reviews." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Dentistry, the way it should feel."
        subtitle="Akshaya Dental Hospital was founded on a simple belief — that clinical excellence and human warmth are not opposites."
        image="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
              alt="Akshaya clinic"
              className="rounded-sm w-full aspect-[4/5] object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow mb-5">Our Mission</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl">
                To give Hyderabad a dental home worth{" "}
                <span className="italic text-sage-dark">returning to</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-taupe leading-relaxed">
                We treat patients across three generations of the same family — that's the standard
                we hold ourselves to. From a child's first visit to a grandparent's full-arch
                rehabilitation, every appointment is paced patiently, explained fully, and priced
                with respect.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">What We Stand For</p>
            <h2 className="font-serif text-4xl">Four values, every appointment.</h2>
          </Reveal>
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, t, d }) => (
              <RevealItem
                key={t}
                variants={revealItemVariants}
                className="bg-ivory p-7 rounded-sm border border-blush/40"
              >
                <div className="h-11 w-11 rounded-sm bg-sage-dark/10 grid place-items-center text-sage-dark mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl">{t}</h3>
                <p className="mt-2 text-sm text-taupe leading-relaxed">{d}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mb-12">
            <p className="eyebrow mb-4">Milestones</p>
            <h2 className="font-serif text-4xl">
              A decade of <span className="italic text-sage-dark">quiet</span> growth.
            </h2>
          </Reveal>
          <div className="relative pl-8 border-l border-blush">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.05} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-sage-dark border-4 border-ivory" />
                <p className="font-serif text-2xl text-sage-dark">{m.year}</p>
                <p className="mt-2 text-charcoal leading-relaxed">{m.t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow mb-4">The Team</p>
            <h2 className="font-serif text-4xl">Faces you'll see at every visit.</h2>
          </Reveal>
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Hitendra Singh",
                role: "Chief Dental Surgeon",
                img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Dr. Priya Nair",
                role: "Pediatric Dentistry",
                img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Sister Lakshmi",
                role: "Head Nurse & Patient Coordinator",
                img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
              },
            ].map((p) => (
              <RevealItem key={p.name} variants={revealItemVariants} className="text-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full aspect-[4/5] object-cover rounded-sm"
                />
                <h3 className="font-serif text-2xl mt-5">{p.name}</h3>
                <p className="text-sm text-taupe">{p.role}</p>
              </RevealItem>
            ))}
          </RevealStagger>
          <div className="mt-12 text-center">
            <Link
              to="/doctor"
              className="inline-flex items-center gap-2 text-sm text-sage-dark hover:text-charcoal"
            >
              Meet Dr. Hitendra Singh →
            </Link>
          </div>
        </div>
      </section>

      <MapContact />
    </>
  );
}
