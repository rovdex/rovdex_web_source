const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

document
  .querySelectorAll(
    ".announcement-bar, .hero-copy, .hero-stage, .trust-strip, .section-heading, .system-grid > *, .capability-grid article, .use-case-grid > *, .proof-grid article, .workflow-shell, .workflow-list article, .faq-grid details, .quote, .footer"
  )
  .forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });