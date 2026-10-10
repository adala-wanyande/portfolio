// Theme is applied before first paint by the inline snippet in each page's
// <head>; this only wires up the toggle button.
(function () {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  function setLabel() {
    const dark = root.dataset.theme === "dark";
    toggle.setAttribute(
      "aria-label",
      dark ? "Switch to light theme" : "Switch to dark theme",
    );
  }

  setLabel();

  toggle.addEventListener("click", function () {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    setLabel();
  });
})();

// Header border once the page has scrolled.
(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;

  function update() {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
})();

// Fade sections in as they enter the viewport.
(function () {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px" },
  );

  items.forEach((el) => observer.observe(el));
})();

// Footer year.
document.querySelectorAll("[data-year-now]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Project archive filters (projects.html only).
(function () {
  const grid = document.querySelector("[data-project-grid]");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".project"));
  const count = document.querySelector("[data-result-count]");
  const empty = document.querySelector("[data-empty]");
  const state = { category: "all", year: "all" };

  const labels = {
    "data-science": "data science",
    web: "web",
    mobile: "mobile",
    web3: "Web3",
  };

  function render() {
    let visible = 0;

    cards.forEach((card) => {
      const match =
        (state.category === "all" ||
          card.dataset.category === state.category) &&
        (state.year === "all" || card.dataset.year === state.year);
      card.hidden = !match;
      if (match) visible++;
    });

    count.textContent =
      visible === 1 ? "1 project" : visible + " projects";
    empty.hidden = visible > 0;

    if (visible === 0) {
      const what =
        state.category === "all"
          ? "projects"
          : labels[state.category] + " projects";
      const when = state.year === "all" ? "yet" : "in " + state.year;
      empty.querySelector("p").textContent =
        "No " + what + " " + when + ". Try a different filter.";
    }
  }

  document.querySelectorAll("[data-filter]").forEach((group) => {
    const key = group.dataset.filter;

    group.addEventListener("click", (event) => {
      const chip = event.target.closest(".chip");
      if (!chip) return;

      group
        .querySelectorAll(".chip")
        .forEach((c) => c.setAttribute("aria-pressed", "false"));
      chip.setAttribute("aria-pressed", "true");
      state[key] = chip.dataset.value;
      render();
    });
  });

  render();
})();
