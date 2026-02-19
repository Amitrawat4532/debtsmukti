"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const reasons = [
  {
    title: "Real Solutions, Not Empty Promises",
    description:
      "We negotiate directly with creditors to reduce what you owe — no fake guarantees, no pressure tactics, just results that actually move the needle.",
    image: "/aboutus-1.png",
  },
  {
    title: "Built Around You, Not Your Credit Score",
    description:
      "Every plan is tailored to your situation. One size fits no one, and we don't treat people like numbers on a spreadsheet.",
    image: "/aboutus-2.png",
  },
  {
    title: "Transparent, Ethical, and Straight-Up",
    description:
      "No hidden fees. No fine-print tricks. You'll always know what's happening, why it's happening, and what comes next.",
    image: "/aboutus-3.png",
  },
];

const SCROLL_PER_STEP_VH = 60;

export default function WhyDebtMukti() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fillHeight, setFillHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const outerRef = useRef<HTMLDivElement>(null); // desktop outer wrapper
  const mobileCardsRef = useRef<HTMLDivElement>(null); // mobile cards container

  // ── Mobile detection ───────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Progress rail fill ─────────────────────────────────────────
  const updateFill = (index: number) => {
    if (!railRef.current || !cardRefs.current[index]) return;
    const railRect = railRef.current.getBoundingClientRect();
    const cardRect = cardRefs.current[index]!.getBoundingClientRect();
    setFillHeight(cardRect.bottom - railRect.top);
  };

  useEffect(() => {
    const raf = requestAnimationFrame(() => updateFill(activeIndex));
    return () => cancelAnimationFrame(raf);
  }, [activeIndex]);

  useEffect(() => {
    const onResize = () => updateFill(activeIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex]);

  // ── Desktop: scroll → active index (pinned scroll-jacking) ─────
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!outerRef.current) return;
      const outerTop = outerRef.current.offsetTop;
      const scrollPerStep = (SCROLL_PER_STEP_VH / 100) * window.innerHeight;
      const scrolledIn = window.scrollY - outerTop;

      if (scrolledIn < 0) { setActiveIndex(0); return; }

      const newIndex = Math.min(
        reasons.length - 1,
        Math.floor(scrolledIn / scrollPerStep)
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // ── Mobile: scroll → active index via IntersectionObserver ─────
  // Each card gets observed; the one most visible in the viewport wins.
  useEffect(() => {
    if (!isMobile) return;

    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When a card crosses 50% visibility, make it active
            if (entry.isIntersecting) {
              setActiveIndex(i);
            }
          });
        },
        {
          // Trigger when the card hits the middle third of the viewport
          rootMargin: "-25% 0px -25% 0px",
          threshold: 0,
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isMobile]);

  // ── Card click ─────────────────────────────────────────────────
  const handleClick = (index: number) => {
    if (isMobile) {
      // On mobile just scroll the card into view
      cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (!outerRef.current) return;
    const scrollPerStep = (SCROLL_PER_STEP_VH / 100) * window.innerHeight;
    const targetScrollY =
      outerRef.current.offsetTop + index * scrollPerStep + scrollPerStep * 0.1;
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  const outerHeight = `calc(100vh + ${SCROLL_PER_STEP_VH * reasons.length}vh)`;

  // ── Shared: progress rail + cards ─────────────────────────────
  const CardList = () => (
    <div className="flex gap-0 mt-1">
      <div
        ref={railRef}
        className="shrink-0 w-[11px] bg-[#D9D9D9] rounded-full mr-3.5 relative self-stretch"
      >
        <div
          className="absolute top-0 left-0 w-full bg-[#204E8C] rounded-full transition-[height] duration-500 ease-in-out"
          style={{ height: `${fillHeight}px` }}
        />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        {reasons.map((reason, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            onClick={() => handleClick(i)}
            className={`rounded-[20px] border px-[24px] py-[20px] cursor-pointer transition-all duration-200 ${
              activeIndex === i
                ? "bg-primary-light-blue border-primary-light-blue"
                : "bg-[#E5E5E5] border-[#e5e7eb] hover:border-[#c5d0ea]"
            }`}
          >
            <p className="text-[20px] font-bold text-[#111] mb-[5px]">
              {reason.title}
            </p>
            <p className="text-[16px] text-[#000000] leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  // ── Mobile layout: normal scroll, cards tracked via observer ──
  if (isMobile) {
    return (
      <section className="bg-white mt-[100px]">
        <div className="mx-auto flex flex-col items-center gap-12">

          {/* Image — stays at top, updates as user scrolls down */}
          <div className="w-full shrink-0">
            <div className="flex justify-center">
              <span className="text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit">
                About Us
              </span>
            </div>
            <h2 className="text-[32px] mt-5 mb-10 text-center font-medium text-[#111] leading-[1.1]">
              Why Debt Mukti?
            </h2>

            {/* Sticky image on mobile — sticks near top as user scrolls through cards */}
            <div className="sticky top-4 z-10">
              <div className="bg-[#F5F5F5] rounded-[22px] p-5 shadow-sm">
                <div className="relative rounded-xl overflow-hidden aspect-[1/1.06] w-full">
                  {reasons.map((reason, i) => (
                    <Image
                      key={i}
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className={`object-cover rounded-[10px] transition-opacity duration-500 ${
                        activeIndex === i ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cards scroll normally — observer tracks which is in view */}
          <div ref={mobileCardsRef} className="w-full flex flex-col gap-4">
            <CardList />
          </div>

        </div>
      </section>
    );
  }

  // ── Desktop layout: full scroll-pinned section ─────────────────
  return (
    <div ref={outerRef} style={{ height: outerHeight, marginTop: "100px" }}>
      <div
        className="sticky top-0 bg-white"
        style={{ height: "100vh", display: "flex", alignItems: "center" }}
      >
        <section className="w-full">
          <div className="mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-30">

            <div className="w-full md:w-[40%] shrink-0">
              <div className="bg-[#F5F5F5] rounded-[22px] p-5 md:p-[50px] shadow-sm">
                <div className="relative rounded-xl overflow-hidden aspect-[1/1.06] w-full">
                  {reasons.map((reason, i) => (
                    <Image
                      key={i}
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className={`object-cover rounded-[10px] transition-opacity duration-500 w-full h-full max-w-[450px] max-h-[450px] ${
                        activeIndex === i ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:flex-1 flex flex-col gap-4 mt-0 md:-mt-[70px]">
              <span className="md:inline-block hidden text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit">
                About Us
              </span>
              <h2 className="text-[48px] md:block hidden font-medium text-[#111] leading-[1.1]">
                Why Debt Mukti?
              </h2>
              <CardList />
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
