import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Star, Clock, Heart, IndianRupee, Award, ArrowUpRight } from "lucide-react";
import { HeroParallax } from "@/components/site/HeroParallax";
import { Reveal, RevealStagger, RevealItem, revealItemVariants } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { ServiceCard } from "@/components/site/ServiceCard";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { MapContact } from "@/components/site/MapContact";
import { SERVICES, BEFORE_AFTER, GALLERY, CLINIC } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshaya Dental Hospital — Premium Family Dentistry in Hyderabad" },
      {
        name: "description",
        content:
          "Boutique family dentistry in Balanagar, Hyderabad. Led by Dr. Hitendra Singh. 4.9★ Google rated. Wisdom tooth, smile correction, restorative & preventive care.",
      },
      { property: "og:title", content: "Akshaya Dental Hospital — Your Smile, Our Passion" },
      {
        property: "og:description",
        content: "Premium family dentistry in Hyderabad, led by Dr. Hitendra Singh.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroParallax />

      {/* Stats strip */}
      <section className="border-y border-blush/40 bg-cream/40">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
            { value: 38, label: "Verified Reviews", suffix: "+" },
            { value: 500, label: "Families Treated", suffix: "+" },
            { value: 100, label: "Transparent Care", suffix: "%" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-charcoal">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-taupe">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="relative">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80"
              alt="Modern dental clinic"
              className="rounded-sm w-full aspect-[4/5] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80"
              alt="Treatment room"
              className="hidden md:block absolute -bottom-12 -right-8 w-64 aspect-square object-cover rounded-sm border-8 border-ivory shadow-xl"
            />
            <div className="absolute -top-6 -left-6 bg-ivory border border-blush/60 rounded-sm px-5 py-4 shadow-sm">
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-1 text-xs text-charcoal font-medium">4.9 Google Rated</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow mb-5">About the Hospital</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                A boutique dental hospital with the{" "}
                <span className="italic text-sage-dark">warmth</span> of a family clinic.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-taupe leading-relaxed">
                For over a decade, Akshaya Dental Hospital has cared for families across Hyderabad
                with one promise — honest, gentle dentistry, explained in full, priced fairly, and
                never rushed.
              </p>
            </Reveal>

            <RevealStagger className="mt-10 grid grid-cols-2 gap-5">
              {[
                {
                  icon: Heart,
                  t: "Full Explanations",
                  d: "We talk through every option, in plain language.",
                },
                {
                  icon: Clock,
                  t: "Flexible Timings",
                  d: "Evening and Saturday slots for working families.",
                },
                { icon: Award, t: "Family Friendly", d: "Calm with kids, patient with seniors." },
                {
                  icon: IndianRupee,
                  t: "Affordable Excellence",
                  d: "Transparent pricing, no upsell.",
                },
              ].map(({ icon: Icon, t, d }) => (
                <RevealItem key={t} variants={revealItemVariants} className="flex gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-sm bg-sage-dark/10 grid place-items-center text-sage-dark">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal">{t}</p>
                    <p className="mt-1 text-xs text-taupe leading-relaxed">{d}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-cream/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-16">
            <Reveal>
              <p className="eyebrow mb-4">What We Do</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Treatments delivered with <span className="italic text-sage-dark">precision</span>,
                paced patiently.
              </h2>
            </Reveal>
          </div>
          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.slice(0, 6).map((s) => (
              <RevealItem key={s.slug} variants={revealItemVariants}>
                <ServiceCard {...s} />
              </RevealItem>
            ))}
          </RevealStagger>
          <Reveal className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-sage-dark hover:text-charcoal"
            >
              View all services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <p className="eyebrow mb-4">Real Results</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl">
                Smiles, <span className="italic text-sage-dark">transformed</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-taupe">
                Drag the slider. Every result, photographed in our chair.
              </p>
            </Reveal>
          </div>
          <RevealStagger className="grid md:grid-cols-2 gap-8">
            {BEFORE_AFTER.map((b, i) => (
              <RevealItem key={i} variants={revealItemVariants}>
                <BeforeAfter {...b} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Doctor */}
      <section className="py-24 md:py-32 bg-cream/30">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow mb-5">Meet Your Dentist</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">{CLINIC.doctor}</h2>
            <p className="mt-2 text-sage-dark italic font-serif text-xl">{CLINIC.doctorTitle}</p>
            <p className="mt-6 text-taupe leading-relaxed">
              Dr. Hitendra Singh founded Akshaya with one principle — to treat every patient the way
              he'd treat his own family. Twelve years of clinical practice, thousands of procedures,
              and an unhurried bedside manner that patients return for, generation after generation.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["BDS, MDS", "Endodontics", "Smile Design", "Implantology", "12+ years"].map((c) => (
                <span
                  key={c}
                  className="text-xs px-3 py-1.5 rounded-full border border-blush bg-ivory text-charcoal/80"
                >
                  {c}
                </span>
              ))}
            </div>
            <Link
              to="/doctor"
              className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-sage-dark hover:text-charcoal"
            >
              Read full profile <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="grid grid-cols-3 gap-3">
              <img
                src="https://images.unsplash.com/photo-1559591935-c6c92c6cdc44?auto=format&fit=crop&w=1000&q=80"
                alt=""
                className="col-span-2 row-span-2 aspect-square object-cover rounded-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80"
                alt=""
                className="aspect-square object-cover rounded-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1581585093487-7a909a76b09b?auto=format&fit=crop&w=600&q=80"
                alt=""
                className="aspect-square object-cover rounded-sm"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Reveal>
                <p className="eyebrow text-gold mb-4">Inside Akshaya</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-4xl md:text-5xl text-ivory">
                  A clinic that puts you <span className="italic text-gold">at ease</span>.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-sm text-ivory/80 hover:text-gold"
              >
                View full gallery <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY.slice(0, 8).map((g) => (
              <RevealItem
                key={g.src}
                variants={revealItemVariants}
                className="overflow-hidden rounded-sm group"
              >
                <img
                  src={g.src}
                  alt={g.cat}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Reveal>
              <p className="eyebrow mb-4">Patient Voices</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl">
                Words from <span className="italic text-sage-dark">our families</span>.
              </h2>
            </Reveal>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      <MapContact />
    </>
  );
}
