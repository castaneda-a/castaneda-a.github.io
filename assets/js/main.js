(function () {
  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const particleFrames = [
    "url('assets/8bit/celeste/particles/01a.png')",
    "url('assets/8bit/celeste/particles/01b.png')",
    "url('assets/8bit/celeste/particles/01c.png')",
  ];

  const starsNode = document.querySelector(".bg-stars");
  const starLayerA = document.querySelector(".bg-stars__layer--a");
  const starLayerB = document.querySelector(".bg-stars__layer--b");
  let frameIndex = 0;
  let useLayerB = false;

  if (starLayerA && starLayerB) {
    starLayerA.style.backgroundImage = particleFrames[0];
    starLayerB.style.backgroundImage = particleFrames[0];
  }

  const updateStarFrame = () => {
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );
    const ratio = Math.min(window.scrollY / maxScroll, 1);
    const nextIndex = Math.min(
      particleFrames.length - 1,
      Math.floor(ratio * particleFrames.length)
    );
    if (
      nextIndex === frameIndex ||
      !starsNode ||
      !starLayerA ||
      !starLayerB ||
      prefersReduced
    ) {
      frameIndex = nextIndex;
      return;
    }

    frameIndex = nextIndex;
    if (useLayerB) {
      starLayerA.style.backgroundImage = particleFrames[frameIndex];
      starsNode.classList.remove("is-swapped");
    } else {
      starLayerB.style.backgroundImage = particleFrames[frameIndex];
      starsNode.classList.add("is-swapped");
    }
    useLayerB = !useLayerB;
  };

  updateStarFrame();
  window.addEventListener("scroll", updateStarFrame, { passive: true });

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
