import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GALLERY } from "@/lib/site-data";

export function GalleryGrid({ filter }: { filter?: string }) {
  const [open, setOpen] = useState(-1);
  const items = filter && filter !== "All" ? GALLERY.filter((g) => g.cat === filter) : GALLERY;

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {items.map((g, idx) => (
          <button
            key={g.src}
            onClick={() => setOpen(idx)}
            className="mb-4 block w-full overflow-hidden rounded-sm group break-inside-avoid"
          >
            <img
              src={g.src}
              alt={g.cat}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              style={{ aspectRatio: `${g.w}/${g.h}` }}
            />
          </button>
        ))}
      </div>
      <Lightbox
        open={open >= 0}
        index={open >= 0 ? open : 0}
        close={() => setOpen(-1)}
        slides={items.map((g) => ({ src: g.src }))}
      />
    </>
  );
}
