(function () {
  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("is-visible");
    });
    return;
  }

  const nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length || !("IntersectionObserver" in window)) {
    nodes.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  nodes.forEach((el) => io.observe(el));
})();
