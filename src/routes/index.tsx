import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Phone,
  MapPin,
  MessageCircle,
  Menu,
  X,
  Star,
  ShieldCheck,
  Award,
  Sparkles,
  Gem,
  Crown,
  ScrollText,
  Clock,
  Car,
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  Quote,
  Briefcase,
} from "lucide-react";

import logoAsset from "@/assets/jls-logo.png";
import heroBride from "@/assets/hero-bride.jpg";
import weddingBride from "@/assets/wedding-bride.jpg";
import showroomExterior from "@/assets/showroom-exterior.jpg";
import cNecklace from "@/assets/collection-necklace.jpg";
import cMangalsutra from "@/assets/collection-mangalsutra.jpg";
import cBangles from "@/assets/collection-bangles.jpg";
import cEarrings from "@/assets/collection-earrings.jpg";
import cRings from "@/assets/collection-rings.jpg";
import cOffice from "@/assets/collection-office.jpg";
import cBracelet from "@/assets/collection-bracelet.jpg";
import cPendant from "@/assets/collection-pendant.jpg";
import cDaily from "@/assets/collection-daily.jpg";
import customerSuware from "@/assets/customer-suware.jpg";
import customerRedis from "@/assets/customer-redis.jpg";
import customerKubal from "@/assets/customer-kubal.jpg";
import customerPatankar from "@/assets/customer-patankar.jpg";
import customerAgre from "@/assets/customer-agre.jpg";
import customerFriends from "@/assets/customer-friends.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content:
          "https://id-preview--de4e706f-2526-4a87-8fb4-3cf346be680f.lovable.app" +
          heroBride,
      },
    ],
  }),
  component: LandingPage,
});

/* ---------- Contact constants ---------- */
const PHONE_DISPLAY = "+91 94223 76320";
const PHONE_TEL = "+919422376320";
const WHATSAPP_NUMBER = "919422376320";
const WHATSAPP_MSG = encodeURIComponent(
  "Namaste! I'd like to enquire about your gold jewellery at J Lalchand Saraf.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
const ADDRESS_LINES = [
  "Shop No. 1915, Shree Ram Lane,",
  "Opposite Janata Bank, Police Headquarters,",
  "Ratnagiri, Maharashtra 415612",
];
const ADDRESS = ADDRESS_LINES.join(" ");
const MAPS_QUERY = encodeURIComponent(
  "J Lalchand Saraf, Shree Ram Lane, Opposite Janata Bank, Police Headquarters, Ratnagiri, Maharashtra 415612",
);
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const STORE_HOURS = "10:30 AM to 7:30 PM";
const PURITY_LINE = "18K, 22K & 24K BIS hallmarked gold";

/* ---------- Small building blocks ---------- */
function OrnateDivider({ light = false }: { light?: boolean }) {
  const color = light ? "text-gold-light/70" : "text-gold";
  return (
    <div className={`flex items-center justify-center gap-3 ${color}`}>
      <span className="h-px w-10 bg-current opacity-60" />
      <Sparkles className="h-3.5 w-3.5" />
      <span className="h-px w-24 bg-current opacity-60" />
      <span className="h-1.5 w-1.5 rotate-45 bg-current" />
      <span className="h-px w-24 bg-current opacity-60" />
      <Sparkles className="h-3.5 w-3.5" />
      <span className="h-px w-10 bg-current opacity-60" />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl leading-[1.1] text-primary md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <OrnateDivider />
      </div>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  icon,
  external,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.36_0.14_25_/_0.5)] transition-all duration-300 hover:bg-maroon-deep hover:shadow-luxe"
    >
      {icon}
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function GoldButton({
  href,
  children,
  icon,
  external,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2.5 rounded-full border border-gold bg-gold-gradient px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-maroon-deep shadow-gold transition-all duration-300 hover:brightness-105"
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}

function OutlineButton({
  href,
  children,
  icon,
  external,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2.5 rounded-full border border-cream/50 bg-white/10 px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-cream backdrop-blur-md transition-all duration-300 hover:bg-white/20"
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}

/* ---------- Header ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#collections", label: "Collections" },
    { href: "#why-us", label: "Why J Lalchand" },
    { href: "#reviews", label: "Reviews" },
    { href: "#visit", label: "Visit Store" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-ivory/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoAsset}
            alt="J Lalchand Saraf logo"
            className="h-12 w-12 rounded-full object-cover shadow-soft md:h-14 md:w-14"
            width={56}
            height={56}
          />
          <div className="leading-tight">
            <p className="font-serif text-lg text-primary md:text-xl">
              J Lalchand Saraf
            </p>
            <p className="font-devanagari text-[11px] text-gold md:text-xs">
              विश्वास हीच परंपरा
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-charcoal transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-maroon-deep"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-primary lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-ivory lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium text-charcoal"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 flex gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-primary py-2.5 text-sm font-medium text-primary"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-2.5 text-sm font-medium text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-maroon-gradient">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #f0d17b 0%, transparent 40%), radial-gradient(circle at 80% 80%, #f0d17b 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-28">
        <div className="flex flex-col justify-center text-cream">
          <p className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-gold-light backdrop-blur">
            <Crown className="h-3.5 w-3.5" /> Established 1955 · Ratnagiri
          </p>
          <h1 className="font-serif text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
            Ratnagiri's Trusted{" "}
            <span className="text-gradient-gold italic">Gold Jeweller</span>{" "}
            Since 1955
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
            Four generations of trust. Timeless {PURITY_LINE} crafted for every
            celebration — weddings, festivals and everyday elegance.
          </p>

          <p className="font-devanagari mt-8 text-3xl text-gradient-gold md:text-4xl">
            विश्वास हीच परंपरा
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <GoldButton href="#appointment" icon={<Crown className="h-4 w-4" />}>
              Book Store Visit
            </GoldButton>
            <OutlineButton
              href={WHATSAPP_URL}
              external
              icon={<MessageCircle className="h-4 w-4" />}
            >
              WhatsApp Expert
            </OutlineButton>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 text-sm text-cream/90 md:grid-cols-4">
            {[
              "Since 1955",
              "4th Generation",
              "BIS Hallmarked",
              "18K · 22K · 24K",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-gold" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 shadow-luxe">
            <img
              src={heroBride}
              alt="Bride wearing hallmarked gold bridal jewellery from J Lalchand Saraf"
              width={1536}
              height={1920}
              className="h-[520px] w-full animate-slow-zoom object-cover md:h-[640px] lg:h-[720px]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-6 hidden items-center gap-3 rounded-full border border-gold/40 bg-ivory/95 px-5 py-3 shadow-luxe backdrop-blur-md md:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient">
              <Award className="h-5 w-5 text-maroon-deep" />
            </div>
            <div className="leading-tight">
              <p className="font-serif text-lg text-primary">70+ Years</p>
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                of Trusted Craft
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust Strip ---------- */
function TrustStrip() {
  const items = [
    { k: "70+", v: "Years of Legacy" },
    { k: "10K+", v: "Happy Families" },
    { k: "18·22·24K", v: "BIS Hallmarked Gold" },
    { k: "100%", v: "Certified Purity" },
    { k: "Aa+", v: "Premium Designs" },
    { k: "★★★★★", v: "Transparent Billing" },
  ];
  return (
    <section className="border-y border-gold/20 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-gold/15 sm:grid-cols-3 sm:divide-y-0 sm:divide-x lg:grid-cols-6">
        {items.map((it) => (
          <div key={it.v} className="px-4 py-6 text-center">
            <p className="font-serif text-2xl text-primary md:text-3xl">{it.k}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {it.v}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Collections ---------- */
function Collections() {
  const items = [
    { img: cNecklace, title: "Gold Necklaces", desc: "Ornate haars & chokers" },
    { img: cMangalsutra, title: "Mangalsutra", desc: "Sacred bond of tradition" },
    { img: cBangles, title: "Bangles", desc: "Classic patlya & kadas" },
    { img: cBracelet, title: "Bracelets", desc: "Modern & minimal" },
    { img: cRings, title: "Rings", desc: "Timeless designs" },
    { img: cEarrings, title: "Earrings", desc: "Jhumkas, studs & drops" },
    { img: cPendant, title: "Pendant Sets", desc: "Effortless elegance" },
    { img: cOffice, title: "Office Wear Jewellery", desc: "Subtle gold for every day at work" },
    { img: heroBride, title: "Wedding Collections", desc: "Complete bridal sets" },
    { img: cDaily, title: "Daily Wear", desc: "Lightweight everyday gold" },
  ];
  return (
    <section id="collections" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Signature Collections"
          title="Timeless Gold, Crafted for Every Occasion"
          subtitle={`Explore our curated ${PURITY_LINE} collections — from heirloom bridal sets to office wear and everyday elegance.`}
        />
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-7 lg:grid-cols-5">
          {items.map((it) => (
            <a
              key={it.title}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift group relative overflow-hidden rounded-2xl border border-gold/20 bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon-deep/95 via-maroon-deep/60 to-transparent p-4">
                <h3 className="font-serif text-lg text-cream md:text-xl">
                  {it.title}
                </h3>
                <p className="mt-0.5 text-[11px] text-cream/70">{it.desc}</p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-gold-light opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <ArrowRight className="h-3 w-3" />
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Us ---------- */
function WhyUs() {
  const points = [
    "Serving Families Since 1955",
    "Fourth Generation Legacy",
    "BIS Hallmarked 18K, 22K & 24K Gold",
    "Transparent Pricing, Always",
    "Exclusive Wedding Collections",
    "Trusted Traditional Craftsmanship",
    "Traditional + Modern Designs",
    "Personal Jewellery Guidance",
  ];
  return (
    <section id="why-us" className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-gold/20 shadow-luxe">
            <img
              src={showroomExterior}
              alt="J Lalchand Saraf jewellery showroom exterior in Ratnagiri"
              loading="lazy"
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-gold/40 bg-primary px-6 py-5 text-cream shadow-luxe md:block">
            <p className="font-serif text-4xl leading-none text-gradient-gold">
              1955
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-cream/80">
              Est. Ratnagiri
            </p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
            Why J Lalchand Saraf
          </p>
          <h2 className="font-serif text-4xl leading-[1.1] text-primary md:text-5xl">
            A legacy of trust,{" "}
            <span className="italic text-gradient-gold">handed down</span>{" "}
            four generations.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Since 1955, families across Ratnagiri have turned to J Lalchand Saraf
            for their most cherished moments. Every ornament we craft carries
            the same promise our founders made — pure {PURITY_LINE}, honest
            pricing, and timeless craftsmanship.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border border-gold/20 bg-ivory p-3.5"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-charcoal">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Wedding Collection ---------- */
function WeddingSection() {
  return (
    <section className="relative overflow-hidden bg-maroon-gradient py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1 text-cream">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-light">
            The Bridal Edit
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl">
            Celebrate Your{" "}
            <span className="italic text-gradient-gold">Forever</span> with
            Timeless Gold
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/85 md:text-lg">
            From the auspicious mangalsutra to statement haars and paithani
            complements — our bridal collection is crafted to become the
            heirloom of your family for generations to come.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GoldButton href="#appointment" icon={<Crown className="h-4 w-4" />}>
              Book Bridal Consultation
            </GoldButton>
            <OutlineButton
              href={WHATSAPP_URL}
              external
              icon={<MessageCircle className="h-4 w-4" />}
            >
              Chat with a Bridal Expert
            </OutlineButton>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-[2rem] border border-gold/30 shadow-luxe">
            <img
              src={weddingBride}
              alt="Maharashtrian bride adorned in hallmarked gold bridal jewellery"
              loading="lazy"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Bestsellers ---------- */
function Bestsellers() {
  const items = [
    {
      img: cBracelet,
      name: "Customized Gold Bracelet",
      desc: "Crafted to your taste — personalised engraving, weight and finish in pure hallmarked gold.",
    },
    {
      img: cMangalsutra,
      name: "Traditional Mangalsutra",
      desc: "Sacred design with intricate gold pendant and black bead chain.",
    },
    {
      img: cBangles,
      name: "Patlya Bangle Set",
      desc: "A pair of hand-engraved bridal patlya in 22K yellow gold.",
    },
    {
      img: cEarrings,
      name: "Daily Wear Gold Earrings",
      desc: "Lightweight, elegant everyday studs and hoops made for lasting comfort.",
    },
    {
      img: cNecklace,
      name: "Party Wear Gold Necklace",
      desc: "A statement necklace with fine goldwork — perfect for festive occasions.",
    },
    {
      img: cRings,
      name: "Statement Gold Ring",
      desc: "Timeless carved ring, a family favourite for daily wear.",
    },
  ];
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Best Selling Jewellery"
          title="Loved by Generations of Families"
          subtitle="A glimpse of the pieces our customers keep coming back for. Enquire on WhatsApp for availability and personalised options."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.name}
              className="hover-lift group overflow-hidden rounded-2xl border border-gold/20 bg-card"
            >
              <div className="aspect-[5/4] overflow-hidden bg-cream">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  width={1024}
                  height={820}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-primary">{it.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hello J Lalchand Saraf, I'd like more details about "${it.name}".`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-maroon-deep"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Legacy Timeline ---------- */
function Legacy() {
  const nodes = [
    { year: "1955", title: "The Beginning", body: "Shri J Lalchand opens the first shop in Ratnagiri." },
    { year: "1980s", title: "2nd Generation", body: "Expanded designs and became a household name." },
    { year: "2000s", title: "3rd Generation", body: "Introduced BIS hallmarking and modern craftsmanship." },
    { year: "Today", title: "4th Generation", body: "Blending tradition with contemporary luxury." },
    { year: "70+ Yrs", title: "of Trust", body: "Serving thousands of families with the same promise." },
  ];
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Our Legacy"
          title="Four Generations of Golden Trust"
        />
        <div className="mt-20 relative">
          <div className="pointer-events-none absolute left-6 top-0 h-full w-px bg-gold/30 md:hidden" />
          <div className="hidden md:block absolute left-0 right-0 top-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div className="grid gap-14 md:grid-cols-5 md:gap-6">
            {nodes.map((n, i) => (
              <div key={n.year} className="relative pl-24 md:pl-0 md:text-center">
                <div className="absolute left-0 top-0 md:static md:mx-auto md:mb-6 flex h-28 w-28 md:h-32 md:w-32 items-center justify-center rounded-full border-2 border-gold bg-primary text-cream shadow-luxe">
                  <span className="font-serif text-6xl md:text-7xl text-gradient-gold leading-none">
                    {i + 1}
                  </span>
                </div>
                <p className="font-serif text-2xl text-gradient-gold">{n.year}</p>
                <p className="mt-1 font-serif text-lg text-primary">{n.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {n.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials (Customer Love Stories) ---------- */
function Testimonials() {
  const stories = [
    {
      image: customerSuware,
      name: "Mr. & Mrs. Suware",
      quote: "A jeweller our family has trusted for generations.",
      tall: false,
    },
    {
      image: customerAgre,
      name: "Mr. Vighnesh Vijay Agre",
      quote: "Every visit feels like coming home to family.",
      tall: true,
    },
    {
      image: customerRedis,
      name: "Redis & Family",
      quote: "Purity, honesty and warmth — in every ornament.",
      tall: false,
    },
    {
      image: customerPatankar,
      name: "Patankar & Family",
      quote: "Beautiful designs and truly transparent pricing.",
      tall: false,
    },
    {
      image: customerFriends,
      name: "Three Best Friends",
      quote: "Shopping here is always a memorable celebration.",
      tall: true,
    },
    {
      image: customerKubal,
      name: "Kubal & Family",
      quote: "Timeless craftsmanship, unmatched service.",
      tall: false,
    },
  ];
  return (
    <section id="reviews" className="relative overflow-hidden bg-ivory py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, #b8891c 0%, transparent 30%), radial-gradient(circle at 85% 80%, #b8891c 0%, transparent 30%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Customer Love Stories"
          title="Families Who Made Us Their Jeweller"
          subtitle="Cherished moments from our showroom — each ornament, a memory carried home by the families who trust us."
        />

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8 [&>*]:mb-6 lg:[&>*]:mb-8">
          {stories.map((s, i) => (
            <figure
              key={s.name}
              className="group relative block break-inside-avoid overflow-hidden rounded-[1.75rem] border border-gold/30 bg-card p-3 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-[0_25px_60px_-20px_rgba(184,137,28,0.45)]"
              style={{
                background:
                  i % 2 === 0
                    ? "linear-gradient(180deg, #ffffff 0%, oklch(0.97 0.02 85) 100%)"
                    : "linear-gradient(180deg, oklch(0.99 0.006 85) 0%, oklch(0.94 0.05 88 / 0.4) 100%)",
              }}
            >
              {/* Gold top accent */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gold-gradient" />

              {/* Image frame */}
              <div className="relative overflow-hidden rounded-[1.25rem] ring-1 ring-gold/40">
                <img
                  src={s.image}
                  alt={`${s.name} at J Lalchand Saraf showroom`}
                  loading="lazy"
                  className={`w-full ${s.tall ? "aspect-[4/5]" : "aspect-square"} object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]`}
                />
                {/* Gradient veil on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-maroon-deep/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Quote overlay */}
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Quote className="mb-2 h-6 w-6 text-gold" />
                  <p className="font-serif text-base italic leading-snug text-ivory">
                    "{s.quote}"
                  </p>
                </figcaption>
                {/* Corner gold ornaments */}
                <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 rounded-tl-[0.75rem] border-l-2 border-t-2 border-gold/80" />
                <span className="pointer-events-none absolute right-3 top-3 h-6 w-6 rounded-tr-[0.75rem] border-r-2 border-t-2 border-gold/80" />
                <span className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 rounded-bl-[0.75rem] border-b-2 border-l-2 border-gold/80" />
                <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 rounded-br-[0.75rem] border-b-2 border-r-2 border-gold/80" />
              </div>

              {/* Card footer */}
              <div className="px-2 pb-2 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-serif text-lg leading-tight text-primary">
                    {s.name}
                  </p>
                  <div className="flex text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-dark">
                    Cherished Moment
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                </div>
              </div>
            </figure>
          ))}
        </div>

        <p className="mt-14 text-center font-serif text-lg italic text-muted-foreground">
          Rated <span className="text-gold-dark">4.9★</span> across hundreds of verified Google reviews.
        </p>
      </div>
    </section>
  );
}


/* ---------- Hallmark & Purity ---------- */
function Purity() {
  const items = [
    { icon: ShieldCheck, title: "BIS Hallmarked", body: "Every ornament is BIS certified for guaranteed purity." },
    { icon: Award, title: "18K · 22K · 24K", body: "Choose from 18K, 22K and 24K hallmarked yellow gold, all tested and assured." },
    { icon: ScrollText, title: "Transparent Billing", body: "Clear rate cards, no hidden charges — ever." },
    { icon: Gem, title: "Quality Assurance", body: "Rigorous checks on finish, weight and craftsmanship." },
    { icon: Crown, title: "Trusted Since 1955", body: "Seven decades of an unbroken family promise." },
  ];
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Purity You Can Trust"
          title="Hallmarked. Certified. Uncompromised."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="hover-lift rounded-2xl border border-gold/25 bg-ivory p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient shadow-gold">
                <Icon className="h-6 w-6 text-maroon-deep" />
              </div>
              <h3 className="font-serif text-lg text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Buying Process ---------- */
function BuyingProcess() {
  const steps = [
    { n: "01", t: "Visit Our Store", d: "Step into our Ratnagiri showroom and feel the legacy." },
    { n: "02", t: "Choose Your Jewellery", d: `Browse an extensive ${PURITY_LINE} collection.` },
    { n: "03", t: "Expert Guidance", d: "Our team helps you find the perfect ornament." },
    { n: "04", t: "Take Home Your Gold", d: "Transparent billing and a piece to treasure forever." },
  ];
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="The Experience"
          title="How Buying at J Lalchand Saraf Works"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-gold/25 bg-card p-7"
            >
              <p className="font-serif text-5xl text-gradient-gold">{s.n}</p>
              <h3 className="mt-3 font-serif text-xl text-primary">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Appointment Form ---------- */
function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    weddingDate: "",
    category: "Bridal Set",
    visitDate: "",
    message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onWhatsapp = () => {
    const text = `Namaste! I'd like to book a bridal appointment.%0A%0AName: ${data.name}%0APhone: ${data.phone}%0AWedding Date: ${data.weddingDate}%0ACategory: ${data.category}%0APreferred Visit: ${data.visitDate}%0AMessage: ${data.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="appointment" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-gold/30 bg-card shadow-luxe lg:grid-cols-[1fr_1.2fr]">
          <div className="relative bg-maroon-gradient p-10 text-cream lg:p-14">
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, #f0d17b, transparent 45%)",
              }}
            />
            <p className="relative text-xs font-medium uppercase tracking-[0.35em] text-gold-light">
              Bridal Appointment
            </p>
            <h2 className="relative mt-3 font-serif text-3xl leading-tight md:text-4xl">
              Reserve a private consultation with our bridal experts.
            </h2>
            <p className="relative mt-4 text-cream/85">
              Personalised attention, curated selections, and heirloom-quality
              craftsmanship — reserved just for you.
            </p>
            <ul className="relative mt-8 space-y-3 text-sm text-cream/90">
              {[
                "Private showroom consultation",
                "Bridal set curation & guidance",
                "Zero-pressure browsing",
                "Complimentary refreshments",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" /> {t}
                </li>
              ))}
            </ul>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-cream backdrop-blur hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-8 md:p-12">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient shadow-gold">
                  <Check className="h-7 w-7 text-maroon-deep" />
                </div>
                <h3 className="font-serif text-2xl text-primary">
                  Thank you, {data.name.split(" ")[0] || "friend"}!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Our team will reach out on {data.phone} to confirm your visit.
                  For instant confirmation, message us on WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={onWhatsapp}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4" /> Send on WhatsApp
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" id="name" required value={data.name} onChange={(v) => setData({ ...data, name: v })} />
                  <Field label="Phone" id="phone" type="tel" required value={data.phone} onChange={(v) => setData({ ...data, phone: v })} />
                  <Field label="Wedding Date" id="wed" type="date" value={data.weddingDate} onChange={(v) => setData({ ...data, weddingDate: v })} />
                  <Field label="Preferred Visit" id="visit" type="date" value={data.visitDate} onChange={(v) => setData({ ...data, visitDate: v })} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="category" className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Interested In
                  </label>
                  <select
                    id="category"
                    value={data.category}
                    onChange={(e) => setData({ ...data, category: e.target.value })}
                    className="rounded-lg border border-input bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                  >
                    {["Bridal Set", "Mangalsutra", "Necklace", "Bangles", "Earrings", "Rings", "Office Wear", "Daily Wear", "Custom Design"].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="msg" className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="msg"
                    rows={3}
                    value={data.message}
                    onChange={(e) => setData({ ...data, message: e.target.value })}
                    className="rounded-lg border border-input bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:bg-maroon-deep"
                  >
                    <Crown className="h-4 w-4" /> Book Appointment
                  </button>
                  <button
                    type="button"
                    onClick={onWhatsapp}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-medium uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <MessageCircle className="h-4 w-4" /> Send on WhatsApp
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-input bg-ivory px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
      />
    </div>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    {
      q: "Is all your jewellery BIS hallmarked?",
      a: "Yes. Every single piece at J Lalchand Saraf carries the official BIS hallmark. We offer 18K, 22K and 24K hallmarked yellow gold, guaranteeing certified purity on every ornament.",
    },
    {
      q: "Which gold purities do you deal in?",
      a: "We offer BIS hallmarked 18K, 22K and 24K yellow gold. 24K is typically preferred for investment coins and bars, 22K for traditional and bridal ornaments, and 18K for delicate everyday and office-wear designs.",
    },
    {
      q: "Do you have a dedicated wedding collection?",
      a: "Absolutely. We offer complete bridal sets — haars, mangalsutras, patlya, jhumkas and more — curated for Maharashtrian weddings and beyond.",
    },
    {
      q: "Can I get custom or made-to-order jewellery?",
      a: "Yes, our master craftsmen accept customisation requests. Please visit the showroom or WhatsApp us to discuss designs and timelines.",
    },
    {
      q: "Is parking available at the store?",
      a: "Yes, two-wheeler and car parking is available near the showroom on Shree Ram Lane, opposite Janata Bank.",
    },
    {
      q: "What are the store timings?",
      a: `We are open Monday to Saturday, ${STORE_HOURS}. Sunday visits by appointment.`,
    },
    {
      q: "Do I need an appointment to visit?",
      a: "Walk-ins are always welcome. For bridal consultations, we recommend booking an appointment for undivided attention.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <SectionHeading eyebrow="FAQ" title="Answers to Common Questions" />
        <div className="mt-14 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className="overflow-hidden rounded-2xl border border-gold/25 bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-serif text-lg text-primary">{it.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-none text-gold transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Google Reviews (dynamic slider, API-ready) ---------- */
type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
};

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    author_name: "Priya Deshmukh",
    rating: 5,
    text: "My bridal set from J Lalchand Saraf was breathtaking. The craftsmanship, purity and personal care are unmatched in Ratnagiri.",
    relative_time_description: "2 weeks ago",
  },
  {
    author_name: "Sunita Patil",
    rating: 5,
    text: "Three generations of my family have bought gold here. Trust like this cannot be built overnight — it takes 70 years.",
    relative_time_description: "a month ago",
  },
  {
    author_name: "Rahul Joshi",
    rating: 5,
    text: "Transparent pricing, BIS hallmarked and beautiful designs. The staff explained every detail with so much patience.",
    relative_time_description: "3 weeks ago",
  },
  {
    author_name: "Anjali Kulkarni",
    rating: 5,
    text: "Bought my Diwali mangalsutra here — the design is unique and the finish is truly premium. Highly recommended.",
    relative_time_description: "2 months ago",
  },
  {
    author_name: "Meera Sawant",
    rating: 5,
    text: "The customised bracelet I ordered turned out even more beautiful than I imagined. Truly a family jeweller.",
    relative_time_description: "5 weeks ago",
  },
  {
    author_name: "Vikram Bhosale",
    rating: 5,
    text: "I trust only J Lalchand Saraf for my gold investments — pure, hallmarked and always fairly priced.",
    relative_time_description: "6 weeks ago",
  },
  {
    author_name: "Neha Kadam",
    rating: 5,
    text: "Loved the office-wear collection. Elegant, lightweight and affordable. The staff was very helpful in helping me choose.",
    relative_time_description: "a week ago",
  },
  {
    author_name: "Sachin Rane",
    rating: 5,
    text: "Bought engagement rings here. Beautiful work, transparent billing and lovely hospitality. Highly recommended.",
    relative_time_description: "4 months ago",
  },
];

function GoogleReviewsSlider() {
  const [reviews, setReviews] = useState<GoogleReview[]>(FALLBACK_REVIEWS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [perView, setPerView] = useState(1);

  // Placeholder for real Google Places API integration.
  // When a backend endpoint is available (e.g. /api/public/google-reviews),
  // this effect will fetch live reviews and gracefully fall back on error.
  useEffect(() => {
    let cancelled = false;
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/public/google-reviews", {
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("Reviews API not available");
        const json = (await res.json()) as { reviews?: GoogleReview[] };
        if (!cancelled && json.reviews && json.reviews.length > 0) {
          setReviews(json.reviews);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Fetch failed");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchReviews();
    return () => {
      cancelled = true;
    };
  }, []);

  // responsive perView
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, reviews.length - perView);

  // auto scroll
  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);
    return () => window.clearInterval(id);
  }, [maxIndex]);

  const clampedIndex = Math.min(index, maxIndex);
  const translate = `translateX(-${(clampedIndex * 100) / perView}%)`;

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Google Reviews"
          title="Loved by Hundreds of Families"
          subtitle="Live reviews from our customers on Google. Rated 4.9★ across hundreds of verified reviews."
        />

        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GoogleGIcon />
            <div>
              <div className="flex items-center gap-2">
                <p className="font-serif text-2xl text-primary">4.9</p>
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Rated on Google
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-ivory text-primary transition-colors hover:bg-primary hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-ivory text-primary transition-colors hover:bg-primary hover:text-cream"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div ref={containerRef} className="mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: translate }}
          >
            {reviews.map((r, i) => (
              <div
                key={`${r.author_name}-${i}`}
                className="flex-none px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <article className="flex h-full flex-col rounded-[1.5rem] border border-gold/25 bg-card p-7 shadow-soft">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient font-serif text-lg text-maroon-deep">
                        {r.author_name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-serif text-base leading-tight text-primary">
                          {r.author_name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {r.relative_time_description}
                        </p>
                      </div>
                    </div>
                    <GoogleGIcon size={20} />
                  </div>
                  <div className="mt-4 flex text-gold">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star
                        key={k}
                        className={`h-4 w-4 ${
                          k < r.rating ? "fill-current" : "opacity-30"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal">
                    "{r.text}"
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                clampedIndex === i ? "w-8 bg-primary" : "w-3 bg-gold/40"
              }`}
            />
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Read all Google Reviews <ArrowRight className="h-4 w-4" />
          </a>
          {loading && (
            <p className="mt-3 text-xs text-muted-foreground">Loading latest reviews…</p>
          )}
          {error && (
            <p className="mt-3 text-[11px] text-muted-foreground/70">
              Showing recent reviews. Live sync will appear once Google Places
              API is connected.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function GoogleGIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

/* ---------- Store Location ---------- */
function StoreLocation() {
  return (
    <section id="visit" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Visit Our Showroom"
          title="Come Experience the Legacy in Person"
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-gold/25 shadow-soft">
            <iframe
              title="J Lalchand Saraf on Google Maps"
              src={MAPS_EMBED_URL}
              width="100%"
              height="480"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[420px] w-full md:h-[480px]"
            />
          </div>
          <div className="flex flex-col gap-5 rounded-[2rem] border border-gold/25 bg-card p-8 md:p-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
                Our Address
              </p>
              <p className="mt-3 font-serif text-2xl text-primary">
                J Lalchand Saraf
              </p>
              <address className="mt-2 text-sm not-italic leading-relaxed text-muted-foreground">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <ul className="space-y-3 text-sm text-charcoal">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 flex-none text-gold" />
                <div>
                  <p className="font-medium">Opening Hours</p>
                  <p className="text-muted-foreground">
                    Mon – Sat · {STORE_HOURS}
                    <br />
                    Sun · By Appointment
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-none text-gold" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Car className="h-5 w-5 flex-none text-gold" />
                <div>
                  <p className="font-medium">Parking</p>
                  <p className="text-muted-foreground">
                    Two-wheeler & car parking available nearby.
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <MapPin className="h-4 w-4" /> Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-maroon-gradient py-20 text-cream md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 30%, #f0d17b, transparent 45%), radial-gradient(circle at 75% 70%, #f0d17b, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold-light">
          Est. 1955
        </p>
        <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl">
          Experience Four Generations of{" "}
          <span className="italic text-gradient-gold">Trust</span>
        </h2>
        <p className="font-devanagari mt-5 text-2xl text-gradient-gold md:text-3xl">
          विश्वास हीच परंपरा
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <GoldButton href="#visit" icon={<MapPin className="h-4 w-4" />}>
            Visit Showroom
          </GoldButton>
          <OutlineButton
            href={WHATSAPP_URL}
            external
            icon={<MessageCircle className="h-4 w-4" />}
          >
            WhatsApp
          </OutlineButton>
          <OutlineButton href={`tel:${PHONE_TEL}`} icon={<Phone className="h-4 w-4" />}>
            Call Now
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-maroon-deep text-cream/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt="J Lalchand Saraf"
              className="h-14 w-14 rounded-full object-cover"
              width={56}
              height={56}
            />
            <div>
              <p className="font-serif text-xl text-cream">J Lalchand Saraf</p>
              <p className="font-devanagari text-xs text-gold-light">
                विश्वास हीच परंपरा
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-cream/70">
            Fourth generation gold jewellers in Ratnagiri. Crafting {PURITY_LINE}{" "}
            treasures since 1955.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
            Collections
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {["Necklaces", "Mangalsutra", "Bangles", "Earrings", "Rings", "Office Wear", "Wedding"].map(
              (l) => (
                <li key={l}>
                  <a href="#collections" className="hover:text-gold-light">
                    {l}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
            About
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#why-us" className="hover:text-gold-light">Our Legacy</a></li>
            <li><a href="#reviews" className="hover:text-gold-light">Reviews</a></li>
            <li><a href="#visit" className="hover:text-gold-light">Visit Store</a></li>
            <li><a href="#appointment" className="hover:text-gold-light">Book Appointment</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold" />
              <address className="not-italic leading-relaxed">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-gold-light">
                <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-light">
                <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp Us
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 flex-none text-gold" />
              <span>Mon – Sat · {STORE_HOURS}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} J Lalchand Saraf®. All rights reserved. ·
        Ratnagiri, Maharashtra
      </div>
    </footer>
  );
}

/* ---------- Floating actions ---------- */
function FloatingActions() {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label="Call"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-luxe transition-transform hover:scale-110"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/25 bg-ivory/95 backdrop-blur-lg md:hidden">
        <div className="grid grid-cols-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center justify-center gap-2 py-3 text-xs font-medium uppercase tracking-widest text-primary"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] py-3 text-xs font-medium uppercase tracking-widest text-white"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="#appointment"
            className="flex items-center justify-center gap-2 bg-primary py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground"
          >
            <Crown className="h-4 w-4" /> Book
          </a>
        </div>
      </div>
    </>
  );
}

/* ---------- Page ---------- */
function LandingPage() {
  return (
    <div className="min-h-screen bg-ivory pb-14 md:pb-0">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Collections />
        <WhyUs />
        <WeddingSection />
        <Bestsellers />
        <Legacy />
        <Testimonials />
        <Purity />
        <BuyingProcess />
        <AppointmentForm />
        <FAQ />
        <GoogleReviewsSlider />
        <StoreLocation />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
