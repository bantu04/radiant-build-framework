import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({
  slug,
  title,
  short,
  image,
}: {
  slug: string;
  title: string;
  short: string;
  image: string;
}) {
  return (
    <Link
      to="/services"
      hash={slug}
      className="group relative block overflow-hidden rounded-sm bg-ivory border border-blush/40 transition-all duration-500 hover:shadow-[0_30px_60px_-30px_rgba(46,43,39,0.25)] hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
        <p className="mt-3 text-sm text-taupe leading-relaxed">{short}</p>
        <div className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-sage-dark">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-sage-dark to-gold transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}
