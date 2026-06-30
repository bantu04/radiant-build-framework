import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/site-data";

export function ReviewsCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const next = () => setI((v) => (v + 1) % REVIEWS.length);
  const prev = () => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
          {REVIEWS.map((r, idx) => (
            <div key={idx} className="w-full shrink-0 px-4">
              <div className="mx-auto max-w-3xl bg-ivory rounded-sm border border-blush/40 p-10 md:p-14 text-center">
                <Quote className="mx-auto h-8 w-8 text-gold mb-6" />
                <p className="font-serif text-2xl md:text-3xl leading-relaxed text-charcoal italic">
                  "{r.body}"
                </p>
                <div className="mt-8 flex items-center justify-center gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="mt-5 text-sm text-charcoal font-medium">{r.name}</p>
                <p className="text-xs text-taupe">{r.role} · {r.when}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-6">
        <button onClick={prev} aria-label="Previous" className="p-2 text-charcoal/60 hover:text-sage-dark">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {REVIEWS.map((_, idx) => (
            <button key={idx} aria-label={`Go to review ${idx+1}`} onClick={() => setI(idx)} className={`h-1.5 rounded-full transition-all ${idx === i ? 'bg-sage-dark w-8' : 'bg-blush w-2'}`} />
          ))}
        </div>
        <button onClick={next} aria-label="Next" className="p-2 text-charcoal/60 hover:text-sage-dark">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}