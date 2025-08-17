"use client";

import Image from "next/image";
import React, { useEffect } from "react";

type Stat = { label: string; value: string; note?: string };
type Service = { key: string; title: string; icon: string; content: string };
const authorAvatars: Record<string, string> = {
  "Rachel Morgan": "/assets/rachel.png",
  "Michael Turner": "/assets/michael.png",
  "Laura Davies": "/assets/laura.png",
};

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
    icon: "/assets/kitchen-icon.png",
    content:
      "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you prefer sleek modern lines or a timeless, classic look, our team delivers premium craftsmanship, functional layouts, and meticulous attention to detail—creating a kitchen you’ll love to cook and gather in",
  },
  {
    key: "loft",
    title: "Loft Conversions",
    icon: "/assets/loft-icon.png",
    content:
      "Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home.",
  },
  {
    key: "bathroom",
    title: "Bathrooms",
    icon: "/assets/bathroom-icon.png",
    content:
      "We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come.",
  },
  {
    key: "extension",
    title: "Extensions",
    icon: "/assets/extensions-icon.png",
    content:
      " Expand your living space without compromising on style. Whether it’s a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value.",
  },
  {
    key: "restoration",
    title: "Restorations",
    icon: "/assets/restorations-icon.png",
    content:
      "Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces.",
  },
  {
    key: "external",
    title: "External Works",
    icon: "/assets/external-icon.png",
    content:
      "Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature.",
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

  const testimonials = [
    {
      name: "Emily Carter",
      text: "I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress‑free!",
    },
    {
      name: "Emily Carter",
      text: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!",
    },
    {
      name: "Emily Carter",
      text: "I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress‑free!",
    },
    {
      name: "Emily Carter",
      text: "I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress‑free!",
    },
    {
      name: "Emily Carter",
      text: "They listened to my vision and delivered exactly what I wanted—highly recommended!",
    },
    {
      name: "Emily Carter",
      text: "Superb attention to detail and a friendly team. Would definitely use again.",
    },
  ];
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="relative bg-neutral-900 text-white">
        {/* Header (overlay on top of hero) */}
        <div className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto max-w-[1060px] px-6 py-5 flex items-center justify-between">
            <div className="reveal" data-show>
              <p className="inline-flex items-center">
                <Image
                  src="/assets/Logo.svg"
                  alt="LifetimeArt logo"
                  width={150}
                  height={28}
                  priority
                  className="h-7 mr-2 w-auto"
                />
                LifetimeArt
              </p>
            </div>
            <nav className="hidden md:flex gap-6 text-sm">
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
                  className="underline-hover text-white/80 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Hero */}
        <div className="mx-auto max-w-[1060px] px-6 grid md:grid-cols-2 gap-12 pt-24 md:pt-28 pb-16 md:pb-24 items-center">
          <div className="space-y-8">
            <span className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 text-xs text-white/85">
              <span className="size-2 rounded-full bg-white ring-2 ring-black/30" />
              Available for work
            </span>

            {/* Big headline (no underline) */}
            <h1 className="reveal tracking-tight leading-tight text-3xl md:text-5xl">
              Your trusted partner
              <br />
              for quality home
              <br />
              improvement
            </h1>

            <p className="reveal text-white/80 text-lg leading-relaxed max-w-[55ch]">
              LifetimeArt delivers expert home improvements, creating beautiful
              and functional spaces with quality craftsmanship.
            </p>

            <div className="reveal">
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 rounded-full bg-white/10 ring-1 ring-white/15 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base text-white hover:bg-white/15 transition-colors"
              >
                <span className="font-medium">Work with us</span>
                <span className="inline-flex items-center justify-center rounded-full bg-white size-9 md:size-10 shadow-sm overflow-hidden transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <Image
                    src="/assets/Arrow.png"
                    alt=""
                    width={20}
                    height={20}
                    className="w-10 h-10"
                    priority
                  />
                </span>
              </a>
            </div>
          </div>

          {/* Lift the image up so it reaches the very top behind the navbar */}
          <div className="reveal md:justify-self-end -mt-24 md:-mt-28">
            <div className="relative rounded-lg ring-white/15 p-6">
              <Image
                src="/assets/Image.svg"
                alt="Home interior"
                width={520}
                height={420}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent z-10"
        />
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="reveal inline-flex items-center rounded-full bg-black px-3 py-1 text-xs text-white ring-1 ring-black/15">
              About us
            </span>
            <h2 className="reveal mt-2 text-[40px] sm:text-5xl md:text-6xl lg:text-5xl leading-[0.95] tracking-tight">
              <span className="block">Home</span>
              <span className="block">Improvement</span>
              <span className="block">Specialists</span>
            </h2>
          </div>
          <p className="reveal text-neutral-600 leading-relaxed">
            Welcome to LifetimeArt , your trusted home improvement experts,
            dedicated to transforming homes with precision and care. With years
            of experience in building kitchens, bathrooms, garages, and more, we
            take pride in delivering top-quality craftsmanship and a seamless
            customer experience. Our mission is to bring your vision to life
            while ensuring clear communication and expert guidance at every
            step. Let’s create a home you’ll love!
          </p>
        </div>

        {/* Image strip to mirror the design */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="reveal rounded-xl overflow-hidden border bg-neutral-50">
            <div className="relative h-48 sm:h-56 md:h-60 lg:h-64">
              <Image
                src="/assets/item.png"
                alt="Living room artwork"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 50vw"
              />
            </div>
          </div>
          <div className="reveal rounded-xl overflow-hidden border bg-neutral-50">
            <div className="relative h-48 sm:h-56 md:h-60 lg:h-64">
              <Image
                src="/assets/item2.png"
                alt="Cozy armchair"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 50vw"
              />
            </div>
          </div>
          <div className="reveal rounded-xl overflow-hidden border bg-neutral-50">
            <div className="relative h-48 sm:h-56 md:h-60 lg:h-64">
              <Image
                src="/assets/item3.png"
                alt="Garden cabin"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 50vw"
              />
            </div>
          </div>
          <div className="reveal rounded-xl overflow-hidden border bg-neutral-50">
            <div className="relative h-48 sm:h-56 md:h-60 lg:h-64">
              <Image
                src="/assets/item5.png"
                alt="Modern kitchen shelves"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 50vw"
              />
            </div>
          </div>
          <div className="reveal rounded-xl overflow-hidden border bg-neutral-50">
            <div className="relative h-48 sm:h-56 md:h-60 lg:h-64">
              <Image
                src="/assets/item4.png"
                alt="Loft bedroom"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="reveal text-center">
              <div className="text-4xl md:text-5xl tracking-tight">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium">{s.label}</div>
              {s.note && (
                <p className="mt-1 text-xs text-neutral-500 max-w-[28ch] mx-auto">
                  {s.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="reveal inline-flex items-center rounded-full bg-black px-3 py-1 text-xs text-white ring-1 ring-black/15">
              Services
            </span>
            <h2 className="reveal text-3xl md:text-4xl mt-2">What we do</h2>
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
          <span className="reveal inline-flex items-center rounded-full bg-black px-3 py-1 text-xs text-white ring-1 ring-black/15">
            Our work
          </span>
          <h2 className="reveal text-3xl md:text-4xl mt-2">
            Get inspired by our work
          </h2>
          <p className="reveal text-neutral-600 mt-2">
            See how we transform homes with craftsmanship and care.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {[
            {
              img: "/assets/kitchen.png",
              title: "Modern kitchen refit",
              tags: ["Kitchen", "4 weeks"],
              text: "This kitchen transformation brought sleek, modern design and enhanced  functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
              quote:
                "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
              author: "Rachel Morgan",
            },
            {
              img: "/assets/garden.png",
              title: "External garden path build",
              tags: ["External Works", "6 weeks"],
              text: "Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm. The result is a stylish, well-crafted path that elevates the overall garden design.",
              quote:
                "The team at LifetimeArt did an amazing job on our garden path. It’s sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted—highly recommended!",
              author: "Michael Turner",
            },
            {
              img: "/assets/bathroom.png",
              title: "Bathroom renovation",
              tags: ["Bathroom", "4 weeks"],
              text: "We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.",
              quote:
                "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
              author: "Laura Davies",
            },
          ].map((item, i) => {
            const isDark = i === 1;
            return (
              <article
                key={i}
                className={`reveal rounded-2xl p-4 md:p-6 shadow-sm ${
                  isDark
                    ? "bg-neutral-900 text-white ring-1 ring-white/10"
                    : "bg-[#E9EEF5]"
                }`}
              >
                <div className="grid md:grid-cols-[minmax(320px,520px)_1fr] gap-5 md:gap-8 items-start">
                  {/* Image */}
                  <div
                    className={`overflow-hidden rounded-xl ${
                      isDark ? "bg-white/5" : "bg-neutral-200"
                    }`}
                  >
                    <div className="relative w-full md:h-[360px] lg:h-[420px] aspect-[16/11]">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(min-width:1024px) 520px, 100vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isDark ? "text-white" : "text-neutral-900"}>
                    <h3 className="text-[28px] md:text-3xl tracking-tight">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed max-w-[62ch] ${
                        isDark ? "text-white/80" : "text-neutral-700"
                      }`}
                    >
                      {item.text}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className={`rounded-full px-3 py-1 text-xs ${
                            isDark
                              ? "bg-white/10 text-white ring-1 ring-white/10"
                              : "bg-neutral-900 text-white"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Quote + author */}
                    <div className="mt-5 space-y-3">
                      <div
                        className={`flex items-start gap-3 text-sm ${
                          isDark ? "text-white/85" : "text-neutral-800"
                        }`}
                      >
                        <span
                          className={
                            isDark
                              ? "mt-0.5 text-white/70"
                              : "mt-0.5 text-neutral-500"
                          }
                        >
                          ❝
                        </span>
                        <p className="leading-relaxed">{item.quote}</p>
                      </div>

                      <div
                        className={`flex items-center gap-3 text-xs ${
                          isDark ? "text-white/80" : "text-neutral-700"
                        }`}
                      >
                        {authorAvatars[item.author] ? (
                          <Image
                            src={authorAvatars[item.author]}
                            alt={item.author}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full object-cover shadow-md"
                          />
                        ) : (
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-300 text-[11px] ring-2 ring-white shadow-md">
                            {item.author
                              .split(" ")
                              .map((x) => x[0])
                              .join("")}
                          </span>
                        )}
                        <span>{item.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-neutral-50 py-20">
        {/* Header remains constrained */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="reveal inline-flex items-center rounded-full bg-black px-3 py-1 text-xs text-white ring-1 ring-black/15">
              Testimonials
            </span>
            <h2 className="reveal text-3xl md:text-4xl font-semibold mt-2">
              Hear from our clients
            </h2>
          </div>
        </div>

        {/* Full‑bleed grid to screen edges */}
        <div className="mt-10 w-screen relative left-1/2 right-1/2 -mx-[50vw] px-4 sm:px-6">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {testimonials.map((t, i) => {
              const altBg = i % 3 === 1;
              return (
                <div
                  key={i}
                  className={`reveal rounded-xl p-5 ring-1 ${
                    altBg
                      ? "bg-[#E9EEF5] ring-neutral-200"
                      : "bg-white ring-neutral-200"
                  }`}
                >
                  <div
                    className="text-neutral-900 text-sm tracking-tight"
                    role="img"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </div>

                  <p className="mt-3 text-sm text-neutral-700">{t.text}</p>

                  <div className="mt-4 flex items-center gap-3">
                    <Image
                      src="/assets/rachel.png"
                      alt={`${t.name} avatar`}
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-md"
                    />
                    <span className="text-xs text-neutral-600">{t.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ + CONTACT */}
      <section id="faqs" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left intro */}
          <div>
            <span className="reveal inline-flex items-center rounded-full bg-black px-3 py-1 text-xs text-white ring-1 ring-black/15">
              FAQs
            </span>
            <h2 className="reveal mt-3 text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Answering Your
              <br /> Questions
            </h2>
            <p className="reveal mt-4 text-neutral-600 max-w-[36ch]">
              Got more questions? Send us your enquiry below
            </p>
            <a
              href="#contact"
              className="reveal mt-8 inline-flex items-center gap-4 rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-900 ring-1 ring-black/10 hover:bg-neutral-200 transition"
            >
              <span className="font-medium">Get in touch</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 shadow-sm">
                <Image
                  src="/assets/Arrow.png"
                  alt=""
                  width={18}
                  height={18}
                  className="invert h-8 w-8"
                  priority
                />
              </span>
            </a>
          </div>

          {/* Right list */}
          <div className="space-y-4">
            {[
              [
                "What area are you based in?",
                "We primarily serve London and the surrounding areas, but depending on the project, we can travel further. Contact us to discuss your location and requirements.",
              ],
              [
                "How long does a typical project take?",
                " Project timelines vary depending on size and complexity. We’ll provide an estimated schedule during your consultation and keep you updated throughout the process.",
              ],
              [
                "Do you offer free quotes?",
                "Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown.",
              ],
              [
                "Will I need planning permission for my project?",
                "This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed.",
              ],
              [
                "Do you provide a guarantee for your work?",
                "Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind.",
              ],
              [
                "Can I stay in my home while the work is being done?",
                "In most cases, yes—though it may depend on the scope of work and areas affected. We’ll discuss options to minimise disruption.",
              ],
              [
                "How do I get started with a project?",
                "Simply get in touch with our team. We’ll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote.",
              ],
            ].map(([q, a], i) => (
              <details
                key={i}
                open={i === 0}
                className="reveal group rounded-2xl bg-neutral-50 p-4 md:p-5 ring-1 ring-neutral-200 open:ring-neutral-300"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 text-[17px] md:text-lg font-medium text-neutral-900">
                  <span className="flex-1">{q}</span>
                  <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-neutral-200 text-neutral-400 group-open:hidden">
                    +
                  </span>
                  <span className="ml-4 hidden h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-neutral-200 text-neutral-400 group-open:inline-flex">
                    ×
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-neutral-900 text-white py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10">
          <div>
            <span className="reveal inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white font-semibold ring-1 ring-white/15">
              Contact
            </span>
            <h2 className="reveal text-3xl md:text-4xl font-semibold mt-3">
              Get in touch
            </h2>
            <p className="reveal text-white/70 mt-2 max-w-prose">
              For any inquiries or to explore your vision further, we invite you
              to contact our professional team using the details provided below.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>Office 150 Old Park Ln, London W1K 1QZ</li>
              <li>Email hello@refit.com</li>
              <li>Telephone 07716 534 984</li>
            </ul>

            {/* Follow us (moved here under Telephone) */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-sm text-white">Follow us</div>
              <div className="mt-3 flex items-center gap-5">
                {/* Instagram */}
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/90 hover:text-white"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
                  </svg>
                </a>
                {/* TikTok */}
                <a
                  href="https://tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-white/90 hover:text-white"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M14.5 3c.6 2.2 2.1 3.9 4.5 4.3v3.1c-1.8.1-3.4-.5-4.5-1.5v6.1c0 3-2.4 5.5-5.5 5.5S3.5 18.9 3.5 15.8 5.9 10.3 9 10.3c.7 0 1.4.1 2 .3v3.2c-.6-.3-1.2-.4-2-.4-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9V3h2.6Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                {/* X */}
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="text-white/90 hover:text-white"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 4h3.1l5 6.7L15.8 4H20l-6.2 8.4L20 20h-3.1l-5.3-7.1L8.2 20H4l6.5-8.7L4 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-2xl ring-1 ring-white/10 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="reveal" data-show>
                <p className="inline-flex items-center">
                  <Image
                    src="/assets/Logo.svg"
                    alt="LifetimeArt logo"
                    width={150}
                    height={28}
                    priority
                    className="h-7 mr-2 w-auto"
                  />
                  LifetimeArt
                </p>
              </div>
              {/* Quick links (right) */}
              <div className="min-w-[260px]">
                <div className="text-2xl text-white">Quick links</div>
                <div className="mt-3 grid grid-cols-2 gap-8 text-sm">
                  <ul className="space-y-2">
                    <li>
                      <a href="#about" className="opacity-90 hover:opacity-100">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#work" className="opacity-90 hover:opacity-100">
                        Our work
                      </a>
                    </li>
                    <li>
                      <a
                        href="#services"
                        className="opacity-90 hover:opacity-100"
                      >
                        Services
                      </a>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#testimonials"
                        className="opacity-90 hover:opacity-100"
                      >
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="#faqs" className="opacity-90 hover:opacity-100">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="opacity-90 hover:opacity-100"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white">
              © 2025 LifetimeArt. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ContactForm() {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

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

    const data = await res.json().catch(() => null);
    alert(data?.message ?? "Thanks! We'll be in touch.");
    form.reset();
  }

  return (
    <form
      className="reveal grid gap-4 bg-white text-neutral-900 p-6 rounded-xl border border-neutral-200 shadow-sm"
      onSubmit={onSubmit}
    >
      <label className="text-sm font-medium text-neutral-800">
        Name<span className="text-rose-500">*</span>
        <input
          name="name"
          required
          placeholder="John Smith"
          className="mt-1 h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-[15px] placeholder:text-neutral-400 outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-900/10"
        />
      </label>

      <label className="text-sm font-medium text-neutral-800">
        Email<span className="text-rose-500">*</span>
        <input
          type="email"
          name="email"
          required
          placeholder="johnsmith@gmail.com"
          className="mt-1 h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-[15px] placeholder:text-neutral-400 outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-900/10"
        />
      </label>

      <label className="text-sm font-medium text-neutral-800">
        Phone Number
        <input
          name="phone"
          placeholder="+44789 123456"
          className="mt-1 h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-[15px] placeholder:text-neutral-400 outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-900/10"
        />
      </label>

      <label className="text-sm font-medium text-neutral-800">
        Message<span className="text-rose-500">*</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Hello, I'd like to enquire about..."
          className="mt-1 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-[15px] placeholder:text-neutral-400 outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-900/10"
          required
        />
      </label>

      <button
        type="submit"
        className="mt-1 h-11 w-full rounded-md bg-neutral-700 text-white text-sm font-medium border border-neutral-600 hover:bg-neutral-600 active:bg-neutral-700 transition-colors"
      >
        Send message
      </button>
    </form>
  );
}
