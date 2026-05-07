(function () {
  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const starFrames = [
    "url('assets/8bit/celeste/Gameplay/bgs/02/stars/a00.png'), url('assets/8bit/celeste/Gameplay/bgs/02/stars/b00.png'), url('assets/8bit/celeste/Gameplay/bgs/02/stars/c00.png')",
    "url('assets/8bit/celeste/Gameplay/bgs/02/stars/a01.png'), url('assets/8bit/celeste/Gameplay/bgs/02/stars/b01.png'), url('assets/8bit/celeste/Gameplay/bgs/02/stars/c01.png')",
    "url('assets/8bit/celeste/Gameplay/bgs/02/stars/a02.png'), url('assets/8bit/celeste/Gameplay/bgs/02/stars/b02.png'), url('assets/8bit/celeste/Gameplay/bgs/02/stars/c02.png')",
    "url('assets/8bit/celeste/Gameplay/bgs/02/stars/a03.png'), url('assets/8bit/celeste/Gameplay/bgs/02/stars/b03.png'), url('assets/8bit/celeste/Gameplay/bgs/02/stars/c03.png')",
  ];
  const starsNode = document.querySelector(".bg-stars");
  const starLayerA = document.querySelector(".bg-stars__layer--a");
  const starLayerB = document.querySelector(".bg-stars__layer--b");
  let frameIndex = 0;
  let useLayerB = false;

  const buildStarBackground = (frameLayers) =>
    `${frameLayers}, radial-gradient(circle at 18% 22%, rgba(255, 255, 255, 0.95) 1px, transparent 2px), radial-gradient(circle at 74% 38%, rgba(171, 237, 255, 0.88) 1px, transparent 2px), radial-gradient(circle at 58% 72%, rgba(255, 141, 220, 0.78) 1px, transparent 2px), radial-gradient(circle at 36% 60%, rgba(255, 210, 110, 0.64) 1px, transparent 2px)`;

  if (starLayerA && starLayerB) {
    const initialBackground = buildStarBackground(starFrames[0]);
    starLayerA.style.backgroundImage = initialBackground;
    starLayerB.style.backgroundImage = initialBackground;
  }

  const updateStarFrame = () => {
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );
    const ratio = Math.min(window.scrollY / maxScroll, 1);
    const nextIndex = Math.min(
      starFrames.length - 1,
      Math.floor(ratio * starFrames.length)
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
    const nextBackground = buildStarBackground(starFrames[frameIndex]);
    if (useLayerB) {
      starLayerA.style.backgroundImage = nextBackground;
      starsNode.classList.remove("is-swapped");
    } else {
      starLayerB.style.backgroundImage = nextBackground;
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
