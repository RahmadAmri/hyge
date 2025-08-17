# hyge

## Mobile animation approach

- IntersectionObserver drives animations: elements marked with `.reveal` are observed and revealed once (`data-show="true"`), avoiding scroll listeners and minimizing main‑thread work on mobile.
- CSS‑only transitions for performance: animate `opacity` and GPU‑friendly transforms (`translate/scale`) to avoid layout/paint; short durations (220–360ms) with gentle easing for a responsive feel.
- Stagger and batching: small stagger via transition delays; observer threshold (~0.2) and a modest `rootMargin` pre‑trigger just before items enter, reducing jank while scrolling.
- Accessibility and user settings: respects `prefers-reduced-motion` (content appears instantly with no motion) and preserves focus/reading order.
- Mobile safety: limit simultaneous animated elements, avoid heavy shadows/filters, and drop `will-change` after completion to keep memory usage in check.
