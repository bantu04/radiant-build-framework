import { useRef, useState, useCallback, useEffect } from "react";

export function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      update(x);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, [update]);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-sm select-none cursor-ew-resize bg-cream"
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        update(e.touches[0].clientX);
      }}
    >
      <img
        src={after}
        alt="After"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={before} alt="Before" className="h-full w-full object-cover" draggable={false} />
      </div>
      <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-ivory bg-charcoal/70 backdrop-blur px-2 py-1 rounded-sm">
        Before
      </div>
      <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.2em] text-charcoal bg-ivory/80 backdrop-blur px-2 py-1 rounded-sm">
        After
      </div>
      {label && (
        <div className="absolute bottom-4 left-4 font-serif italic text-ivory text-lg drop-shadow">
          {label}
        </div>
      )}
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -translate-x-1/2 w-px bg-ivory/80" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-ivory border border-charcoal/20 shadow-lg flex items-center justify-center text-charcoal text-xs">
          ◂▸
        </div>
      </div>
    </div>
  );
}
