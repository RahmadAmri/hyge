"use client";

import Image from "next/image";
import { useEffect } from "react";
import KitchenIcon from "@/src/assets/kitchen.svg";
import LoftIcon from "@/src/assets/loft-conversions.svg";
import BathroomIcon from "@/src/assets/bathroom.svg";
import ExtensionIcon from "@/src/assets/extension.svg";
import ExternalWorksIcon from "@/src/assets/external-works.svg";
import RestorationIcon from "@/src/assets/restoration.svg";

type Stat = { label: string; value: string; note?: string };
type Service = { key: string; title: string; icon: string; content: string };

const stats: Stat[] = [
  { label: "Years experience", value: "8" },
  { label: "Projects completed", value: "26" },
  { label: "Skilled Tradespeople", value: "30" },
  { label: "Client satisfaction", value: "100%" },
];

const services: Service[] = [
  {
    key: "kitchen",
    title: "Kitchens",
    icon: "/assets/kitchen.svg",
    content:
      "We design and build tailored kitchens, from sleek modern spaces to classic, timeless looks—crafted with quality materials and optimized for everyday living.",
  },
  {
    key: "loft",
    title: "Loft Conversions",
    icon: "/assets/Loft Conversions.svg",
    content:
      "Turn unused attic space into beautiful, functional rooms. We handle design, structure, insulation, and finishing for a seamless result.",
  },
  {
    key: "bathroom",
    title: "Bathrooms",
    icon: "/assets/bathroom.svg",
    content:
      "From compact ensuites to spa-like retreats, we fit high‑quality fixtures and finishes with precision waterproofing and ventilation.",
  },
  {
    key: "extension",
    title: "Extensions",
    icon: "/assets/extension.svg",
    content:
      "Bright, open extensions that add space and value—built with care, planning guidance, and coordination from start to finish.",
  },
  {
    key: "external",
    title: "External Works",
    icon: "/assets/External Works.svg",
    content:
      "From paths and patios to garden structures, we create durable and attractive outdoor improvements.",
  },
  {
    key: "restoration",
    title: "Restorations",
    icon: "/assets/restoration.svg",
    content:
      "Careful restoration work that respects original character while improving longevity and function.",
  },
];

function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.show = "true";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  useRevealOnScroll();
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* NAV + HERO */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="reveal" data-show>
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              <span className="size-2 rounded-full bg-emerald-400"></span>
              LifetimeArt
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Our work", "#work"],
              ["FAQs", "#faqs"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="underline-hover opacity-90 hover:opacity-100"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 py-16 md:py-24 items-center">
          <div className="space-y-6">
            <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="size-1.5 rounded-full bg-emerald-400"></span>
              Available for work
            </span>
            <h1 className="reveal text-4xl md:text-5xl font-semibold leading-tight">
              Your trusted partner for quality home improvement
            </h1>
            <p className="reveal text-white/80 max-w-prose">
              LifetimeArt delivers expert home improvements, creating beautiful
              and functional spaces with quality craftsmanship.
            </p>
            <div className="reveal">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium shadow hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
              >
                Get in touch
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <div className="reveal md:justify-self-end">
            <div className="relative rounded-lg overflow-hidden ring-1 ring-white/15 bg-white/5 p-6">
              <Image
                src="/window.svg"
                alt="Home interior"
                width={520}
                height={420}
                className="mx-auto h-auto w-full max-w-[520px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="reveal text-xs text-neutral-500">About us</span>
            <h2 className="reveal text-3xl md:text-4xl font-semibold mt-2">
              Home Improvement Specialists
            </h2>
          </div>
          <p className="reveal text-neutral-600 leading-relaxed">
            Welcome to LifetimeArt, your trusted home improvement experts,
            dedicated to transforming homes with precision and care. With years
            of experience in building kitchens, bathrooms, garages, and more, we
            pride ourselves on delivering top‑quality craftsmanship and a
            seamless customer experience.
          </p>
        </div>

        {/* Image strip to mirror the design */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["/file.svg", "/window.svg", "/file.svg", "/window.svg"].map(
            (src, i) => (
              <div
                key={i}
                className="reveal rounded-xl overflow-hidden border bg-neutral-50"
              >
                <Image
                  src={src}
                  alt="About preview"
                  width={320}
                  height={240}
                  className="w-full h-auto"
                />
              </div>
            )
          )}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="reveal rounded-lg border p-4 text-center"
            >
              <div className="text-3xl font-semibold">{s.value}</div>
              <div className="mt-1 text-xs text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="reveal text-xs text-neutral-500">Services</span>
            <h2 className="reveal text-3xl md:text-4xl font-semibold mt-2">
              What we do
            </h2>
            <p className="reveal text-neutral-600 mt-2">
              Find out which one of our services fits your project needs.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div className="reveal rounded-xl overflow-hidden border bg-white">
              <Image
                src="/assets/Kitchen.svg"
                alt="Decor"
                width={640}
                height={480}
                className="w-full h-auto"
              />
            </div>

            <ul className="space-y-4">
              {services.map((s) => (
                <li key={s.key} className="reveal">
                  <details className="group rounded-lg border bg-white p-4 open:shadow">
                    <summary className="flex cursor-pointer list-none items-center gap-3">
                      <Image src={s.icon} alt="" width={28} height={28} />
                      <span className="font-medium">{s.title}</span>
                      <span className="ml-auto text-neutral-400 group-open:hidden">
                        +
                      </span>
                      <span className="ml-auto text-neutral-400 hidden group-open:inline">
                        ×
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-neutral-600">{s.content}</p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OUR WORK - wide cards */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <span className="reveal text-xs text-neutral-500">Our work</span>
          <h2 className="reveal text-3xl md:text-4xl font-semibold mt-2">
            Get inspired by our work
          </h2>
          <p className="reveal text-neutral-600 mt-2">
            See how we transform homes with craftsmanship and care.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {[
            {
              img: "/window.svg",
              title: "Modern kitchen refit",
              tags: ["Kitchen", "4 weeks"],
              text: "This kitchen transformation brought sleek design and enhanced functionality with high‑quality finishes and practical layout.",
              quote:
                "LifetimeArt completely transformed our kitchen—beautiful and highly functional. Excellent communication throughout.",
              author: "Rachel Morgan",
            },
            {
              img: "/file.svg",
              title: "External garden path build",
              tags: ["External Works", "6 weeks"],
              text: "A durable, attractive path and outdoor space. We handled from groundworks to finishing details.",
              quote:
                "The team did an amazing job—looks fantastic and exactly what we wanted.",
              author: "Michael Turner",
            },
            {
              img: "/window.svg",
              title: "Bathroom renovation",
              tags: ["Bathroom", "4 weeks"],
              text: "A modern bathroom with clean lines, efficient layout and relaxing atmosphere.",
              quote:
                "Outstanding craftsmanship—professional and communicative throughout.",
              author: "Laura Davies",
            },
          ].map((item, i) => (
            <article
              key={i}
              className="reveal grid md:grid-cols-[1.2fr,2fr] gap-6 rounded-xl overflow-hidden border bg-white"
            >
              <div className="bg-neutral-50">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={640}
                  height={420}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.text}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-neutral-100 text-neutral-700 px-2.5 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-neutral-700">“{item.quote}”</p>
                <div className="mt-2 text-xs text-neutral-500">
                  — {item.author}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="reveal text-xs text-neutral-500">
              Testimonials
            </span>
            <h2 className="reveal text-3xl md:text-4xl font-semibold mt-2">
              Hear from our clients
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="reveal rounded-xl border bg-white p-5">
                <div className="text-amber-500">★★★★★</div>
                <p className="mt-3 text-sm text-neutral-700">
                  The team were professional, communicative, and the quality of
                  work outstanding. Highly recommend!
                </p>
                <div className="mt-4 text-xs text-neutral-500">
                  — Happy Client
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CONTACT */}
      <section id="faqs" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <span className="reveal text-xs text-neutral-500">FAQs</span>
            <h2 className="reveal text-3xl md:text-4xl font-semibold mt-2">
              Answering Your Questions
            </h2>
            <p className="reveal text-neutral-600 mt-2">
              Got more questions? Send us your enquiry below.
            </p>
            <a
              href="#contact"
              className="reveal inline-block mt-6 rounded-md border px-4 py-2 text-sm"
            >
              Get in touch →
            </a>
          </div>

          <div className="space-y-3">
            {[
              [
                "What area are you based in?",
                "We primarily serve London and surrounding areas. Depending on the project, we may be able to travel further—get in touch to discuss.",
              ],
              [
                "How long does a typical project take?",
                "Timelines vary by scope, but we provide a clear schedule before we begin and keep you updated.",
              ],
              [
                "Do you offer free quotes?",
                "Yes—book a visit and we’ll provide a detailed quote free of charge.",
              ],
            ].map(([q, a], i) => (
              <details key={i} className="reveal rounded-lg border p-4">
                <summary className="cursor-pointer list-none font-medium">
                  {q}
                </summary>
                <p className="mt-2 text-sm text-neutral-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-neutral-900 text-white py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10">
          <div>
            <span className="reveal text-xs text-white/70">Contact</span>
            <h2 className="reveal text-3xl md:text-4xl font-semibold mt-2">
              Get in touch
            </h2>
            <p className="reveal text-white/70 mt-2 max-w-prose">
              For enquiries or to explore your vision further, contact our team
              using the details or form.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>Office: 150 Old Park Ln, London W1K 1QZ</li>
              <li>Email: hello@refit.com</li>
              <li>Telephone: 07716 534 984</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t py-8 text-sm text-neutral-600">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <div>© 2025 LifetimeArt</div>
          <div className="hidden md:flex gap-6">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Our work</a>
            <a href="#faqs">FAQs</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ContactForm() {
  async function action(formData: FormData) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
    });
    const data = await res.json();
    alert(data?.message ?? "Thanks! We'll be in touch.");
  }

  return (
    <form
      className="reveal grid gap-3 bg-white/5 p-5 rounded-lg ring-1 ring-white/15"
      action={action}
    >
      <label className="text-sm text-white/80">
        Name
        <input
          name="name"
          required
          className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
        />
      </label>
      <label className="text-sm text-white/80">
        Email
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
        />
      </label>
      <label className="text-sm text-white/80">
        Phone Number
        <input
          name="phone"
          className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
        />
      </label>
      <label className="text-sm text-white/80">
        Message
        <textarea
          name="message"
          rows={5}
          className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
        />
      </label>
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
      >
        Send message
      </button>
    </form>
  );
}
