import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { GalleryGrid } from "@/components/site/GalleryGrid";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Akshaya Dental Hospital" },
      {
        name: "description",
        content: "Photos of our clinic, treatments, team and patient results.",
      },
    ],
  }),
  component: GalleryPage,
});

const FILTERS = ["All", "Clinic", "Treatments", "Before/After", "Team"];

function GalleryPage() {
  const [f, setF] = useState("All");
  return (
    <>
      <PageHeader
        eyebrow="Inside Akshaya"
        title="A look around."
        subtitle="The rooms, the people, the work."
      />
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((x) => (
            <button
              key={x}
              onClick={() => setF(x)}
              className={`text-xs uppercase tracking-[0.18em] px-4 py-2 rounded-sm border transition-colors ${f === x ? "bg-sage-dark text-ivory border-sage-dark" : "border-blush text-charcoal hover:bg-cream"}`}
            >
              {x}
            </button>
          ))}
        </div>
        <GalleryGrid filter={f} />
      </div>
    </>
  );
}
