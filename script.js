/* ============================================================================
   OMAR SHAWQI — Portfolio 2.0
   script.js — data + interactions
   ============================================================================ */

/* ---------------------------------------------------------------------------
   0. CONTENT DATA
   Edit these arrays to add new projects or certificates — no HTML editing
   needed. Categories for projects: "business", "tech", "marketing", "social".
--------------------------------------------------------------------------- */
const projectsData = [
  {
    id: "elite-vibes",
    categories: ["business"],
    tag: "E-Commerce · Digital Services · Entrepreneurship",
    title: "Elite Vibes",
    desc: "A digital services business focused on online services, subscriptions, social media services, and digital solutions.",
    role: "Founder",
    status: "Active",
    tech: ["Odoo", "E-Commerce", "Digital Services", "Marketing"],
    live: "https://anedstore.odoo.com",
    github: "https://github.com/omarshawqi7722",
    case: {
      overview: "A digital services and e-commerce business selling online subscriptions, social media services, and digital solutions through a custom Odoo storefront.",
      problem: "Many people needed reliable access to digital subscriptions and online services but lacked a trustworthy, easy-to-use local seller.",
      idea: "Build a digital storefront offering a curated catalog of digital services and subscriptions, with fast, direct customer support.",
      role: "Founder — responsible for store setup, product listings, customer communication, and marketing.",
      technologies: "Odoo, E-commerce workflows, Social Media Marketing, Meta Ads.",
      process: "Set up and customized the Odoo platform end-to-end, listed services, established payment and delivery workflows, and promoted the store through social channels.",
      strategy: "Focused on the digital-services niche with recurring-purchase potential, using social media as the primary acquisition channel.",
      challenges: "Managing customer trust and delivery consistency for digital products without a large existing brand.",
      solution: "Direct, responsive customer communication and consistent fulfillment to build repeat customers.",
      outcome: "Current Status — Active. Operating storefront.",
      learned: "How to run a digital storefront end-to-end — from platform setup to customer service and marketing."
    }
  },
  {
    id: "ozo-store",
    categories: ["business"],
    tag: "E-Commerce · Entrepreneurship",
    title: "OZO Store",
    desc: "An online watch business focused on product presentation, digital marketing, customer communication, and online sales.",
    role: "Founder",
    status: "Active",
    tech: ["Odoo", "E-Commerce", "Branding", "Sales"],
    live: "https://ozostore.odoo.com",
    github: "https://github.com/omarshawqi7722",
    case: {
      overview: "An online luxury watch store focused on product presentation and a smooth shopping experience.",
      problem: "Watch buyers wanted a clean, trustworthy place to browse and purchase without visiting physical retailers.",
      idea: "A dedicated Odoo-based storefront with elegant product presentation and direct customer support.",
      role: "Founder — product management, branding, customer relations, and sales.",
      technologies: "Odoo, E-commerce, Branding, Social Media Marketing.",
      process: "Selected and listed products, designed the storefront presentation, and built a promotion routine on social media.",
      strategy: "Position around product quality and presentation rather than price competition.",
      challenges: "Standing out in a competitive e-commerce space with limited brand history.",
      solution: "Emphasis on clean visuals, responsive service, and consistent social proof through direct customer interaction.",
      outcome: "Current Status — Active. Storefront live.",
      learned: "Practical e-commerce operations — product management, storefront design, and direct sales."
    }
  },
  {
    id: "next-stack",
    categories: ["tech", "social"],
    tag: "Technology · Education · Community",
    title: "Next Stack",
    desc: "Bridging the Gap Between Academia and the Real Job Market — a student-led technology initiative at Albukhary International University.",
    role: "Founder",
    status: "In Development",
    tech: ["HTML", "CSS", "JavaScript", "Community"],
    live: "https://omarshawqi7722.github.io/next-stack-website/",
    github: "https://github.com/OMARSHAWQI7722/next-stack-website",
    case: {
      overview: "A student-led technology community and website at Albukhary International University, built to bridge the gap between academia and the real job market.",
      problem: "Many CS students graduate with strong theory but limited exposure to practical, industry-relevant skills.",
      idea: "Create a community and platform offering workshops, real-world projects, and career-development resources for students.",
      role: "Founder — concept, website development, and community organizing.",
      technologies: "HTML, CSS, JavaScript, GitHub Pages.",
      process: "Designed and built the Next Stack website, defined the initiative's mission and programs, and began organizing the founding community.",
      strategy: "Position Next Stack as a peer-led supplement to formal coursework, focused on practical skills and career readiness.",
      challenges: "Building initial momentum and consistent participation as a new student-led initiative.",
      solution: "Starting with a clear website and mission statement, then growing through workshops and word-of-mouth within the university.",
      outcome: "Current Status — In Development. Website live; community activities growing.",
      learned: "How to lead a community initiative from concept to public launch, including web development and organizing."
    }
  },
  {
    id: "smart-refill",
    categories: ["business", "social"],
    tag: "Innovation · Sustainability · Business",
    title: "Smart Refill Station",
    desc: "An eco-friendly campus solution designed around refill stations for everyday liquid products.",
    role: "Concept Developer",
    status: "Concept · Academic Project",
    tech: ["Business Model", "Market Analysis", "Sustainability"],
    live: null,
    github: null,
    case: {
      overview: "An eco-friendly campus solution concept centered on refill stations for everyday liquid products, reducing single-use packaging.",
      problem: "Campus communities generate significant single-use packaging waste from everyday liquid products.",
      idea: "Refill stations placed around campus that let students refill containers instead of buying new packaged products each time.",
      role: "Concept development and business/market analysis (academic project).",
      technologies: "Business model design, market analysis, sustainability research.",
      process: "Researched the problem, analyzed potential campus demand, and drafted a business model around the refill-station concept.",
      strategy: "Combine sustainability messaging with cost savings for students to drive adoption.",
      challenges: "Estimating realistic operating costs and adoption without a live pilot.",
      solution: "A phased rollout model starting with a single pilot station, informed by market research.",
      outcome: "Current Status — Concept / Academic Project. No pilot deployed yet.",
      learned: "How to evaluate a sustainability-driven business idea using market analysis and business-model thinking."
    }
  },
  {
    id: "vlan-network",
    categories: ["tech"],
    tag: "Networking · Computer Science",
    title: "Multi-VLAN Campus Network",
    desc: "A campus networking project involving network design and implementation — VLANs, IP addressing, routing, and network infrastructure.",
    role: "Network Designer",
    status: "Academic Project",
    tech: ["VLANs", "IP Addressing", "Routing"],
    live: null,
    github: null,
    case: {
      overview: "A campus networking project involving the design and implementation of a multi-VLAN network architecture.",
      problem: "Campus networks need segmented, secure, and well-structured infrastructure to separate traffic and manage access.",
      idea: "Design a network topology using VLANs, structured IP addressing, and routing to reflect a realistic campus environment.",
      role: "Network design and implementation (academic project).",
      technologies: "VLANs, IP addressing, routing, network infrastructure.",
      process: "Designed the network topology, configured VLAN segmentation, assigned IP addressing schemes, and configured inter-VLAN routing.",
      strategy: "Apply structured network segmentation principles to reflect real-world enterprise/campus network design.",
      challenges: "Ensuring correct inter-VLAN routing and IP planning without conflicts.",
      solution: "Careful topology planning and systematic testing of VLAN and routing configurations.",
      outcome: "Current Status — Academic Project (completed as coursework).",
      learned: "Practical networking concepts — VLAN segmentation, IP addressing, and routing design."
    }
  },
  {
    id: "car-supplier",
    categories: ["tech"],
    tag: "Desktop Software · Java",
    title: "Car Supplier Management System",
    desc: "A Java Swing desktop application for browsing vehicle brands, exploring car details, reading customer reviews, and submitting purchase requests.",
    role: "Developer",
    status: "Completed",
    tech: ["Java", "Java Swing", "OOP"],
    live: null,
    github: "https://github.com/OMARSHAWQI7722/car-supplier-management-system",
    case: {
      overview: "A Java Swing desktop application for browsing vehicle brands, exploring car details, reading customer reviews, and submitting purchase requests through an interactive multi-screen interface.",
      problem: "Car suppliers needed a structured desktop interface to present vehicles and manage customer purchase requests.",
      idea: "Build a multi-screen Java desktop application simulating a car supplier's product and request management system.",
      role: "Developer — designed and built the full application.",
      technologies: "Java, Java Swing, object-oriented design, desktop UI design.",
      process: "Designed the multi-screen interface, implemented navigation between brand, detail, review, and request screens, and structured the underlying data handling.",
      strategy: "Not applicable — academic / portfolio software project.",
      challenges: "Structuring a multi-screen Swing UI with clean navigation and data flow.",
      solution: "Modular screen-based architecture with clear navigation logic.",
      outcome: "Current Status — Completed. Source available on GitHub.",
      learned: "Desktop application development and UI design using Java Swing."
    }
  },
  {
    id: "cpp-console",
    categories: ["tech"],
    tag: "C++ Multi-Functional Toolkit",
    title: "C++ Console Application",
    desc: "A comprehensive C++ application featuring 35+ modules including mathematical calculations, string processing, data manipulation, algorithms, and interactive menu-driven navigation.",
    role: "Developer",
    status: "Completed",
    tech: ["C++", "Algorithms", "Data Structures"],
    live: null,
    github: "https://github.com/OMARSHAWQI7722/Final-project",
    case: {
      overview: "A comprehensive C++ console application featuring 35+ modules covering mathematical calculations, string processing, data manipulation, and algorithms.",
      problem: "Needed a single project to consolidate and demonstrate a broad range of core C++ programming concepts.",
      idea: "Build a menu-driven console toolkit combining many independent functional modules.",
      role: "Developer — designed and implemented all modules.",
      technologies: "C++, algorithms, data structures, menu-driven program design.",
      process: "Implemented and tested each module independently, then integrated them into an interactive menu-driven navigation system.",
      strategy: "Not applicable — academic / portfolio software project.",
      challenges: "Keeping 35+ modules organized and consistent within a single console application.",
      solution: "A structured, modular codebase with a unified navigation menu.",
      outcome: "Current Status — Completed. Source available on GitHub.",
      learned: "Core C++ programming fundamentals across math, strings, data handling, and algorithms."
    }
  },
  {
    id: "portfolio-v1",
    categories: ["tech"],
    tag: "Web Development · Personal",
    title: "Portfolio Website — v1.0",
    desc: "My original personal portfolio, built with HTML, CSS, and JavaScript — the direct predecessor to this Portfolio 2.0 redesign.",
    role: "Designer &amp; Developer",
    status: "Superseded by v2.0",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    live: "https://omarshawqi7722.github.io/omar-portfolio/",
    github: "https://github.com/OMARSHAWQI7722/omar-portfolio",
    case: {
      overview: "My first personal portfolio website, built with HTML, CSS, and JavaScript to showcase projects, skills, and professional journey.",
      problem: "Needed an online presence to present my projects and background to recruiters and collaborators.",
      idea: "A responsive personal portfolio site with animated sections, built from scratch.",
      role: "Designer & Developer — full build.",
      technologies: "HTML, CSS, JavaScript, GitHub Pages.",
      process: "Designed and coded the site from scratch, iterated on animations and responsiveness, and deployed it via GitHub Pages.",
      strategy: "Not applicable — personal branding project.",
      challenges: "Balancing visual richness with performance on mobile devices.",
      solution: "Iteratively optimized animations and layout for smoother mobile performance.",
      outcome: "Current Status — Completed. Superseded by this Portfolio 2.0 redesign.",
      learned: "End-to-end personal website development — the direct foundation for this redesign."
    }
  }
];

const certsData = [
  {
    id: "web-dev-jhu",
    category: "technology",
    name: "HTML, CSS, and JavaScript for Web Developers",
    org: "Johns Hopkins University (Coursera)",
    year: "2025",
    link: "https://coursera.org/verify/HDDPVY1H7BAQ",
    placeholder: false
  },
  {
    id: "elements-of-ai",
    category: "technology",
    name: "Elements of AI",
    org: "University of Helsinki & MinnaLearn",
    year: "2023",
    link: "https://certificates.mooc.fi/validate/yid06540yfl",
    placeholder: false
  },
  {
    id: "ai-for-everyone",
    category: "technology",
    name: "AI For Everyone",
    org: "DeepLearning.AI (Coursera)",
    year: "2023",
    link: "https://coursera.org/verify/AB5LYS8RSVNR",
    placeholder: false
  },
  {
    id: "icdl",
    category: "technology",
    name: "International Computer Driving License (ICDL v6)",
    org: "New Horizons Learning Centers",
    year: "2023",
    link: "certificates/icdl.jpg",
    placeholder: false
  },
  {
    id: "programming-camp",
    category: "technology",
    name: "Beginner Programming Camp",
    org: "Third Eye",
    year: "2023–2024",
    link: "certificates/programming-camp.jpg",
    placeholder: false
  },
  {
    id: "excel-microsoft",
    category: "data",
    name: "Work Smarter with Microsoft Excel",
    org: "Microsoft (Coursera)",
    year: "2023",
    link: "https://coursera.org/verify/JHPTBDTLMZKX",
    placeholder: false
  },
  {
    id: "unicef-data-analysis",
    category: "data",
    name: "Data Analysis",
    org: "UNICEF (Agora)",
    year: "2026",
    link: "certificates/unicef-data-analysis.jpg",
    placeholder: false
  },
  {
    id: "google-digital-marketing",
    category: "marketing",
    name: "Digital Marketing Basics",
    org: "Google Skills / IAB Europe",
    year: "2023",
    link: "https://learndigital.withgoogle.com/link/1g13k7gbvgg",
    placeholder: false
  },
  {
    id: "unicef-training",
    category: "other",
    name: "UNICEF Training Programs",
    org: "Community & Child Protection",
    year: "2023",
    link: "certificates/unicef-child-protection.jpg",
    placeholder: false
  }
];

/* ---------------------------------------------------------------------------
   1. LOADER
--------------------------------------------------------------------------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader && loader.classList.add("hidden"), 400);
});

/* ---------------------------------------------------------------------------
   2. NAVBAR — scroll state, mobile menu, scroll-spy
--------------------------------------------------------------------------- */
(function nav() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const overlay = document.getElementById("nav-overlay");
  const navLinks = document.querySelectorAll("[data-nav]");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });

  function closeMenu() {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
    overlay.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  function openMenu() {
    hamburger.classList.add("open");
    navMenu.classList.add("open");
    overlay.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  hamburger.addEventListener("click", () => {
    hamburger.classList.contains("open") ? closeMenu() : openMenu();
  });
  overlay.addEventListener("click", closeMenu);
  navMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

  // Scroll-spy
  const sections = Array.from(navLinks)
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = "#" + entry.target.id;
        navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

  sections.forEach(s => spy.observe(s));
})();

/* ---------------------------------------------------------------------------
   3. THEME TOGGLE
--------------------------------------------------------------------------- */
(function theme() {
  const toggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("omar-theme");
  if (saved === "light") document.documentElement.setAttribute("data-theme", "light");

  toggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("omar-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("omar-theme", "light");
    }
  });
})();

/* ---------------------------------------------------------------------------
   4. SCROLL REVEAL
--------------------------------------------------------------------------- */
(function reveal() {
  const els = document.querySelectorAll(".reveal, .reveal-stagger, .timeline-item, .road-item");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
})();

/* ---------------------------------------------------------------------------
   5. ANIMATED COUNTERS
--------------------------------------------------------------------------- */
(function counters() {
  const nums = document.querySelectorAll("[data-counter]");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.counter, 10);
      let current = 0;
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        current = Math.round(progress * target);
        el.textContent = current;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(el => io.observe(el));
})();

/* ---------------------------------------------------------------------------
   6. PROJECTS — render, filter, modal case studies
--------------------------------------------------------------------------- */
(function projects() {
  const grid = document.getElementById("projects-grid");
  const modalRoot = document.getElementById("modal-root");

  function statusIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
  }

  /* Project images — each project gets its own folder at
     images/projects/<project-id>/ . Drop a "cover.jpg" (or .jpeg/.png/.webp)
     in there for the card thumbnail, and optional "1.jpg", "2.jpg", "3.jpg",
     "4.jpg" (any of the same formats) for a small gallery inside the case
     study. Nothing needs to be edited here — missing images are skipped
     automatically. */
  const IMG_EXTS = ["jpg", "jpeg", "png", "webp"];

  function tryImageSources(sources, cb) {
    let i = 0;
    (function next() {
      if (i >= sources.length) { cb(null); return; }
      const url = sources[i++];
      const img = new Image();
      img.onload = () => cb(url);
      img.onerror = next;
      img.src = url;
    })();
  }

  function coverCandidates(id) {
    return IMG_EXTS.map(ext => `images/projects/${id}/cover.${ext}`);
  }

  function galleryCandidates(id, n) {
    return IMG_EXTS.map(ext => `images/projects/${id}/${n}.${ext}`);
  }

  function loadCardImage(id) {
    const visual = grid.querySelector(`.project-card[data-id="${id}"] .pc-visual`);
    if (!visual) return;
    tryImageSources(coverCandidates(id), (url) => {
      if (!url || !visual.isConnected) return;
      visual.classList.add("has-image");
      const img = document.createElement("img");
      img.src = url;
      img.alt = "";
      img.loading = "lazy";
      img.className = "pc-img";
      visual.prepend(img);
    });
  }

  function renderCards(list) {
    grid.innerHTML = list.map(p => `
      <article class="project-card" data-id="${p.id}">
        <div class="pc-visual">
          <span class="pc-status">${p.status}</span>
          <span class="pc-role">${p.role}</span>
          ${statusIcon().replace('<svg', '<svg class="pc-icon"')}
        </div>
        <div class="pc-body">
          <span class="pc-cat">${p.tag}</span>
          <h3 class="pc-title">${p.title}</h3>
          <p class="pc-desc">${p.desc}</p>
          <div class="pc-tech">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>
          <div class="pc-actions">
            <button class="btn btn-outline btn-sm case-study-btn" data-id="${p.id}">View Case Study</button>
            ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">Live</a>` : ""}
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">GitHub</a>` : ""}
          </div>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".case-study-btn").forEach(btn => {
      btn.addEventListener("click", () => openModal(btn.dataset.id));
    });

    list.forEach(p => loadCardImage(p.id));
  }

  renderCards(projectsData);

  // Filters
  document.querySelectorAll(".filter-btn[data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn[data-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      const filtered = f === "all" ? projectsData : projectsData.filter(p => p.categories.includes(f));
      renderCards(filtered);
    });
  });

  // Modal
  function openModal(id) {
    const p = projectsData.find(x => x.id === id);
    if (!p) return;
    const c = p.case;
    modalRoot.innerHTML = `
      <div class="modal-overlay" id="active-modal">
        <div class="modal-box" role="dialog" aria-modal="true" aria-label="${p.title} case study">
          <div class="modal-head">
            <div>
              <span class="pc-cat">${p.tag}</span>
              <h2>${p.title}</h2>
            </div>
            <button class="modal-close" id="modal-close-btn" aria-label="Close case study">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="modal-body">
            <div class="cs-gallery" id="cs-gallery"></div>
            <div class="cs-block"><h4>Overview</h4><p>${c.overview}</p></div>
            <div class="cs-grid">
              <div class="cs-block"><h4>Problem</h4><p>${c.problem}</p></div>
              <div class="cs-block"><h4>Idea</h4><p>${c.idea}</p></div>
            </div>
            <div class="cs-block"><h4>My Role</h4><p>${c.role}</p></div>
            <div class="cs-block"><h4>Technologies</h4><div class="cs-tags">${p.tech.map(t => `<span>${t}</span>`).join("")}</div></div>
            <div class="cs-block"><h4>Process</h4><p>${c.process}</p></div>
            <div class="cs-block"><h4>Business / Technical Strategy</h4><p>${c.strategy}</p></div>
            <div class="cs-grid">
              <div class="cs-block"><h4>Challenges</h4><p>${c.challenges}</p></div>
              <div class="cs-block"><h4>Solution</h4><p>${c.solution}</p></div>
            </div>
            <div class="cs-block"><h4>Outcome</h4><p>${c.outcome}</p></div>
            <div class="cs-block"><h4>What I Learned</h4><p>${c.learned}</p></div>
          </div>
          <div class="modal-foot">
            ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Visit Live Project</a>` : ""}
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">View on GitHub</a>` : ""}
            <button class="btn btn-ghost btn-sm" id="modal-close-btn2">Close</button>
          </div>
        </div>
      </div>
    `;
    const overlay = document.getElementById("active-modal");
    requestAnimationFrame(() => overlay.classList.add("open"));
    document.body.style.overflow = "hidden";

    // Optional gallery: images/projects/<id>/1.*, 2.*, 3.*, 4.* — any found are shown.
    const galleryEl = document.getElementById("cs-gallery");
    const found = [];
    (function checkNext(n) {
      if (n > 4) {
        if (found.length && galleryEl) {
          galleryEl.innerHTML = found.map(src =>
            `<img src="${src}" alt="${p.title}" loading="lazy" onclick="window.open('${src}','_blank')">`
          ).join("");
        }
        return;
      }
      tryImageSources(galleryCandidates(p.id, n), (url) => {
        if (url) found.push(url);
        checkNext(n + 1);
      });
    })(1);

    function close() {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
      setTimeout(() => { modalRoot.innerHTML = ""; }, 250);
    }
    document.getElementById("modal-close-btn").addEventListener("click", close);
    document.getElementById("modal-close-btn2").addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", function esc(e) {
      if (e.key === "Escape") { close(); document.removeEventListener("keydown", esc); }
    });
  }
})();

/* ---------------------------------------------------------------------------
   7. CERTIFICATIONS — render + filter
--------------------------------------------------------------------------- */
(function certifications() {
  const grid = document.getElementById("cert-grid");
  if (!grid) return;

  function certIcon() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="8" r="6"/><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"/></svg>`;
  }

  function render(list) {
    grid.innerHTML = list.map(c => `
      <div class="cert-card ${c.placeholder ? "placeholder" : ""}">
        <div class="cert-top">
          <div class="cert-icon">${certIcon()}</div>
          <span class="cert-cat">${c.category}</span>
        </div>
        <h3>${c.name}</h3>
        <p class="cert-org">${c.org}</p>
        <span class="cert-year">${c.year}</span>
        ${c.link
          ? `<a href="${c.link}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">View Certificate</a>`
          : `<span class="btn btn-disabled btn-sm">${c.placeholder ? "Add Certificate" : "Certificate Pending Link"}</span>`}
      </div>
    `).join("");
  }

  render(certsData);

  document.querySelectorAll(".filter-btn[data-cert-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn[data-cert-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.certFilter;
      render(f === "all" ? certsData : certsData.filter(c => c.category === f));
    });
  });
})();

/* ---------------------------------------------------------------------------
   8. MAGNETIC BUTTONS
--------------------------------------------------------------------------- */
(function magnetic() {
  if (window.matchMedia("(hover: none)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll(".magnetic").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.12}px, ${y * 0.3}px)`;
    });
    btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
  });
})();

/* ---------------------------------------------------------------------------
   9. BACK TO TOP
--------------------------------------------------------------------------- */
(function backToTop() {
  const btn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();

/* ---------------------------------------------------------------------------
   10. BACKGROUND PARTICLES (subtle, respects reduced motion)
--------------------------------------------------------------------------- */
(function particles() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  let W, H, points = [];
  const isMobile = window.innerWidth <= 768;
  const COUNT = isMobile ? 32 : 70;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function make() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.4,
      dx: (Math.random() - 0.5) * 0.25,
      dy: -(Math.random() * 0.3 + 0.08),
      a: Math.random() * 0.4 + 0.12
    };
  }

  function init() {
    resize();
    points = Array.from({ length: COUNT }, make);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    points.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(63,208,255,${p.a})`;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
      if (p.x < -5) p.x = W + 5;
      if (p.x > W + 5) p.x = -5;
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  init();
  draw();
})();

/* ---------------------------------------------------------------------------
   11. CONTACT FORM — validation + EmailJS + mailto fallback
--------------------------------------------------------------------------- */
(function contactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = {
    name: document.getElementById("cf-name"),
    email: document.getElementById("cf-email"),
    subject: document.getElementById("cf-subject"),
    message: document.getElementById("cf-message")
  };
  const errors = {
    name: document.getElementById("err-name"),
    email: document.getElementById("err-email"),
    subject: document.getElementById("err-subject"),
    message: document.getElementById("err-message")
  };
  const status = document.getElementById("cf-status");
  const submitBtn = document.getElementById("cf-submit");
  const btnText = document.getElementById("cf-btn-text");

  function validate() {
    let ok = true;
    Object.values(errors).forEach(e => e.textContent = "");

    if (!fields.name.value.trim()) { errors.name.textContent = "Please enter your name."; ok = false; }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(fields.email.value.trim())) { errors.email.textContent = "Please enter a valid email."; ok = false; }
    if (!fields.subject.value.trim()) { errors.subject.textContent = "Please add a subject."; ok = false; }
    if (!fields.message.value.trim() || fields.message.value.trim().length < 10) { errors.message.textContent = "Message should be at least 10 characters."; ok = false; }
    return ok;
  }

  function showStatus(type, msg) {
    status.className = "form-status show " + type;
    status.textContent = msg;
    status.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setTimeout(() => { status.className = "form-status"; }, 7000);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) return;

    submitBtn.disabled = true;
    btnText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    const payload = {
      from_name: fields.name.value.trim(),
      from_email: fields.email.value.trim(),
      subject: fields.subject.value.trim(),
      message: fields.message.value.trim(),
      to_email: "7omarshawqi7@gmail.com"
    };

    function fallback() {
      const mailto = `mailto:7omarshawqi7@gmail.com?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent("Name: " + payload.from_name + "\nEmail: " + payload.from_email + "\n\n" + payload.message)}`;
      window.open(mailto, "_blank");
      showStatus("success", "Your mail client has been opened — please send the email from there.");
      submitBtn.disabled = false;
      btnText.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    }

    if (typeof emailjs !== "undefined") {
      // NOTE: replace with your real EmailJS service/template/public key.
      emailjs.send("service_omar", "template_omar", payload).then(() => {
        showStatus("success", "Message sent successfully — I'll get back to you soon.");
        form.reset();
        submitBtn.disabled = false;
        btnText.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      }).catch(fallback);
    } else {
      fallback();
    }
  });
})();

/* ---------------------------------------------------------------------------
   12. OMAR.OS — interactive terminal easter egg
--------------------------------------------------------------------------- */
(function omarOS() {
  const toggle = document.getElementById("omaros-toggle");
  const win = document.getElementById("omaros-window");
  const closeBtn = document.getElementById("omaros-close");
  const body = document.getElementById("omaros-body");
  const input = document.getElementById("omaros-input");
  if (!toggle || !win) return;

  function open() { win.classList.add("open"); input.focus(); }
  function close() { win.classList.remove("open"); }

  toggle.addEventListener("click", () => win.classList.contains("open") ? close() : open());
  closeBtn.addEventListener("click", close);

  document.querySelectorAll(".omaros-cmd").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.data-goto);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      close();
    });
  });

  function print(text) {
    const line = document.createElement("div");
    line.className = "omaros-line";
    line.textContent = text;
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
  }

  const routes = { home: "#home", about: "#about", projects: "#projects", experience: "#experience", skills: "#skills", ventures: "#ventures", contact: "#contact" };

  input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const raw = input.value.trim();
    input.value = "";
    if (!raw) return;
    print("omar@os ~ % " + raw);

    const cmd = raw.replace(/^\//, "").toLowerCase();
    if (cmd === "help") {
      print("Commands: home, about, projects, experience, ventures, contact, clear, whoami");
    } else if (cmd === "whoami") {
      print("Omar Shawqi — CS Student · Entrepreneur · Builder");
    } else if (cmd === "clear") {
      body.innerHTML = "";
    } else if (routes[cmd]) {
      const target = document.querySelector(routes[cmd]);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      print("→ navigating to " + cmd);
      setTimeout(close, 500);
    } else {
      print(`command not found: ${cmd}  (try "help")`);
    }
  });
})();
