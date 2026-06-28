"use client";

import type { CSSProperties, FormEvent, MouseEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import { getGsap } from "@/animations";
import { useLenis } from "@/hooks/use-lenis";

type Language = "en" | "ru";

const content = {
  en: {
    nav: ["Projects", "Studio", "Approach", "Journal", "Contacts"],
    menu: "Menu",
    close: "Close",
    kicker: "Interior Design Studio",
    title: "Wonderoom",
    lead: "We create timeless spaces for living, hospitality and business. Architecture. Interiors. Atmosphere.",
    explore: "Explore projects",
    directions: [
      ["Private Homes", "01"],
      ["Hotels", "02"],
      ["Offices", "03"],
      ["Beauty Salons", "04"],
      ["Commercial Spaces", "05"],
    ],
    featured: {
      eyebrow: "Featured projects",
      title: "Spaces that become part of life",
      action: "View all projects",
      projects: [
        ["Serenity House", "Private Home"],
        ["Cliff Hotel & Spa", "Boutique Hotel"],
        ["Nord Office", "Office"],
        ["Suncrest", "Private Apartment"],
      ],
    },
    studio: {
      eyebrow: "Founder",
      title: "Irina Brodina",
      body: "I create interiors where architecture, light and materials become a calm, precise space. Twelve years of practice help me lead apartments, private homes, beauty salons, offices and hotels from idea to realization.",
      action: "Discuss a project",
      values: [
        ["12 years", "Private and commercial interiors with a complete design process."],
        ["Author vision", "Planning, light, materials and details shaped into one calm space."],
        ["Full cycle", "Concept, drawings, selection, supervision and realization."],
        ["Directions", "Apartments, houses, beauty salons, offices and hotels."],
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "A clear process from idea to reality",
      action: "View process",
      steps: [
        ["01", "Discovery", "We listen, learn and understand your needs and vision."],
        ["02", "Concept", "We create concept and mood to define the direction."],
        ["03", "Design", "We develop the design with attention to every detail."],
        ["04", "Realization", "We implement the project with trusted partners and craftsmanship."],
      ],
    },
    journal: {
      eyebrow: "Journal",
      title: "Thoughts, inspiration and our view on design",
      action: "View journal",
      posts: [
        [
          "May 12, 2026",
          "The Power of Minimalism",
          "Why simplicity is the ultimate luxury in modern interiors.",
        ],
        [
          "Apr 28, 2026",
          "Materials That Age Beautifully",
          "Our favorite natural materials for timeless spaces.",
        ],
        [
          "Apr 10, 2026",
          "Lighting as Architecture",
          "How light shapes the mood and perception of space.",
        ],
      ],
    },
    contact: {
      eyebrow: "Let's create something timeless",
      title: "The first consultation is free",
      body: "Tell us about your space and we will discuss the first direction, timeline and next steps.",
      action: "Send request",
    },
    footer: "All rights reserved.",
  },
  ru: {
    nav: ["Проекты", "Студия", "Подход", "Журнал", "Контакты"],
    menu: "Меню",
    close: "Закрыть",
    kicker: "Студия дизайна интерьеров",
    title: "Wonderoom",
    lead: "Мы создаем вневременные пространства для жизни, гостеприимства и бизнеса. Архитектура. Интерьеры. Атмосфера.",
    explore: "Смотреть проекты",
    directions: [
      ["Частные дома", "01"],
      ["Отели", "02"],
      ["Офисы", "03"],
      ["Салоны красоты", "04"],
      ["Коммерческие пространства", "05"],
    ],
    featured: {
      eyebrow: "Избранные проекты",
      title: "Пространства, которые становятся частью жизни",
      action: "Все проекты",
      projects: [
        ["Serenity House", "Частный дом"],
        ["Cliff Hotel & Spa", "Бутик-отель"],
        ["Nord Office", "Офис"],
        ["Suncrest", "Апартаменты"],
      ],
    },
    studio: {
      eyebrow: "Основатель студии",
      title: "Ирина Бродина",
      body: "Я создаю интерьеры, в которых архитектура, свет и материалы складываются в спокойное, точное пространство. 12 лет практики помогают мне вести квартиры, дома, салоны красоты, офисы и отели от идеи до реализации.",
      action: "Обсудить проект",
      values: [
        ["12 лет опыта", "Частные и коммерческие интерьеры с полным циклом проектирования."],
        [
          "Авторский взгляд",
          "Планировка, свет, материалы и детали собираются в одно спокойное пространство.",
        ],
        ["Полный цикл", "Концепция, чертежи, комплектация, авторский надзор и реализация."],
        ["Направления", "Квартиры, дома, салоны красоты, офисы и отели."],
      ],
    },
    approach: {
      eyebrow: "Наш подход",
      title: "Понятный процесс от идеи до реализации",
      action: "Смотреть процесс",
      steps: [
        ["01", "Исследование", "Мы слушаем, изучаем и понимаем ваши задачи и видение."],
        ["02", "Концепция", "Создаем идею и настроение, которые задают направление."],
        ["03", "Дизайн", "Разрабатываем проект с вниманием к каждой детали."],
        ["04", "Реализация", "Воплощаем проект с надежными партнерами и мастерами."],
      ],
    },
    journal: {
      eyebrow: "Журнал",
      title: "Мысли, вдохновение и наш взгляд на дизайн",
      action: "Читать журнал",
      posts: [
        [
          "12 мая 2026",
          "Сила минимализма",
          "Почему простота становится настоящей роскошью в современных интерьерах.",
        ],
        [
          "28 апреля 2026",
          "Материалы, которые красиво стареют",
          "Наши любимые натуральные материалы для вневременных пространств.",
        ],
        [
          "10 апреля 2026",
          "Свет как архитектура",
          "Как свет формирует настроение и восприятие пространства.",
        ],
      ],
    },
    contact: {
      eyebrow: "Создадим что-то вневременное",
      title: "Первая консультация бесплатно",
      body: "Расскажите о пространстве, и мы обсудим первое направление, сроки и следующие шаги.",
      action: "Отправить заявку",
    },
    footer: "Все права защищены.",
  },
} as const;

const navTargets = ["projects", "studio", "approach", "journal", "contacts"] as const;

const projectImages = [
  [
    "/images/projects/wonderoom-private-home-01.jpg",
    "/images/projects/wonderoom-private-home-02.jpg",
    "/images/projects/wonderoom-private-home-03.jpg",
    "/images/projects/wonderoom-private-home-04.jpg",
    "/images/projects/wonderoom-private-home-05.jpg",
    "/images/projects/wonderoom-private-home-06.jpg",
  ],
  [
    "/images/projects/wonderoom-hotel-01.jpg",
    "/images/projects/wonderoom-hotel-02.jpg",
    "/images/projects/wonderoom-hotel-03.jpg",
    "/images/projects/wonderoom-hotel-04.jpg",
    "/images/projects/wonderoom-hotel-05.jpg",
    "/images/projects/wonderoom-hotel-06.jpg",
  ],
  [
    "/images/projects/wonderoom-office-01.jpg",
    "/images/projects/wonderoom-office-02.jpg",
    "/images/projects/wonderoom-office-03.jpg",
    "/images/projects/wonderoom-office-04.jpg",
    "/images/projects/wonderoom-office-05.jpg",
    "/images/projects/wonderoom-office-06.jpg",
  ],
  [
    "/images/projects/wonderoom-suncrest-01.jpg",
    "/images/projects/wonderoom-suncrest-02.jpg",
    "/images/projects/wonderoom-suncrest-03.jpg",
    "/images/projects/wonderoom-suncrest-04.jpg",
    "/images/projects/wonderoom-suncrest-05.jpg",
    "/images/projects/wonderoom-suncrest-06.jpg",
  ],
] as const;

type ProjectImageStyle = CSSProperties & {
  "--project-image": string;
};

export function IntroHero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const { lenis } = useLenis();
  const [language, setLanguage] = useState<Language>("en");
  const [isLanguageTransitioning, setIsLanguageTransitioning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [lightboxProject, setLightboxProject] = useState<number | null>(null);
  const [isProjectTypeOpen, setIsProjectTypeOpen] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState("");
  const [projectSlideIndexes, setProjectSlideIndexes] = useState(() => projectImages.map(() => 0));
  const t = content[language];
  const projectTypeOptions =
    language === "ru"
      ? ["Квартира", "Дом", "Салон красоты", "Офис", "Отель"]
      : ["Apartment", "Private home", "Beauty salon", "Office", "Hotel"];
  const projectTypePlaceholder = language === "ru" ? "Выберите" : "Choose";

  const activeProjectLabel = useMemo(
    () => t.featured.projects[activeProject]?.[0] ?? t.featured.projects[0][0],
    [activeProject, t.featured.projects],
  );

  const scrollToSection = (section: HTMLElement) => {
    if (lenis) {
      lenis.scrollTo(section, {
        duration: 1.35,
        easing: (value) => Math.min(1, 1.001 - Math.pow(2, -10 * value)),
      });
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getSectionByHash = (hash: string) =>
    hash === "#top" ? document.getElementById("top") : document.querySelector<HTMLElement>(hash);

  const handleMenuNavigation = (hash: string) => {
    const section = getSectionByHash(hash);

    if (!section) {
      return;
    }

    setIsMenuOpen(false);
    setIsNavHidden(false);

    window.setTimeout(() => {
      lenis?.start();
      scrollToSection(section);
    }, 90);
  };

  const handleProjectSlide = (projectIndex: number, direction: -1 | 1) => {
    setActiveProject(projectIndex);
    setProjectSlideIndexes((current) =>
      current.map((slideIndex, index) => {
        if (index !== projectIndex) {
          return slideIndex;
        }

        const total = projectImages[projectIndex].length;
        return (slideIndex + direction + total) % total;
      }),
    );
  };

  const openProjectLightbox = (projectIndex: number) => {
    setActiveProject(projectIndex);
    setLightboxProject(projectIndex);
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const contact = String(formData.get("contact") ?? "");
    const projectType = selectedProjectType || String(formData.get("projectType") ?? "");
    const area = String(formData.get("area") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent("Заявка Wonderoom");
    const body = encodeURIComponent(
      [
        `Имя: ${name}`,
        `Контакт: ${contact}`,
        `Тип объекта: ${projectType}`,
        `Площадь: ${area}`,
        "",
        "Задача:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:borodina7714@mail.ru?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    if (lightboxProject !== null) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setProjectSlideIndexes((current) =>
        current.map((slideIndex, index) => (slideIndex + 1) % projectImages[index].length),
      );
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [lightboxProject]);

  useEffect(() => {
    setSelectedProjectType("");
    setIsProjectTypeOpen(false);
  }, [language]);

  const handleLanguageToggle = () => {
    if (isLanguageTransitioning) {
      return;
    }

    const root = rootRef.current;
    const gsap = getGsap();
    const languageTargets = root
      ? gsap.utils.toArray<HTMLElement>(
          ".hero-copy > *, .hero-direction, .hero-menu a, .site-mobile-menu__nav button, .section-heading > *, .project-meta, .founder-portrait figcaption > *, .value-card > *, .process-step > *, .journal-card > *, .contact-details > *",
          root,
        )
      : [];

    setIsLanguageTransitioning(true);
    gsap.to(languageTargets, {
      autoAlpha: 0.46,
      y: 7,
      filter: "blur(6px)",
      duration: 0.22,
      ease: "power2.out",
      stagger: 0.006,
    });

    window.setTimeout(() => {
      setLanguage((current) => (current === "en" ? "ru" : "en"));
    }, 180);

    window.setTimeout(() => {
      gsap.to(languageTargets, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.52,
        ease: "power3.out",
        stagger: 0.01,
      });
      setIsLanguageTransitioning(false);
    }, 240);
  };

  const handleSiteClick = (event: MouseEvent<HTMLElement>) => {
    if (event.defaultPrevented) {
      return;
    }

    const target = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;

    if (!(target instanceof HTMLAnchorElement)) {
      return;
    }

    const hash = target.getAttribute("href");

    if (!hash || hash === "#") {
      return;
    }

    const section = getSectionByHash(hash);

    if (!section) {
      return;
    }

    event.preventDefault();
    setIsMenuOpen(false);
    setIsNavHidden(false);
    scrollToSection(section);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isTicking = false;

    const updateNavState = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (currentScrollY < 32) {
        setIsNavHidden(false);
      } else if (delta > 8) {
        setIsNavHidden(true);
      } else if (delta < -8) {
        setIsNavHidden(false);
      }

      lastScrollY = currentScrollY;
      isTicking = false;
    };

    const handleScroll = () => {
      if (isTicking) {
        return;
      }

      window.requestAnimationFrame(updateNavState);
      isTicking = true;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen && lightboxProject === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    lenis?.stop();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setLightboxProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      lenis?.start();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, lenis, lightboxProject]);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const gsap = getGsap();
    let revealObserver: IntersectionObserver | null = null;
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(".threshold-frame", { autoAlpha: 0 });
        gsap.set(
          ".hero-visual, .hero-copy, .hero-nav, .hero-directions, .section-heading, .project-card, .founder-portrait, .value-card, .process-step, .journal-card, .contact-details, .site-footer",
          {
            autoAlpha: 1,
            clearProps: "transform,filter",
          },
        );
        gsap.set(".hero-nav > *, .hero-copy > *, .hero-direction", {
          autoAlpha: 1,
          clearProps: "transform,filter",
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "expo.out",
        },
      });

      gsap.set(".threshold-blackout", { autoAlpha: 1 });
      gsap.set(".threshold-line-center", { autoAlpha: 0, scaleY: 0.04 });
      gsap.set(".threshold-aperture", {
        autoAlpha: 0,
        scaleX: 0.012,
        scaleY: 0.82,
        y: 10,
      });
      gsap.set(".threshold-sweep", { autoAlpha: 0, xPercent: -170 });
      gsap.set(".threshold-veil", { autoAlpha: 0 });
      gsap.set(".threshold-frame", {
        autoAlpha: 1,
        scale: 1,
      });
      gsap.set(".hero-visual", {
        scale: 1.1,
        filter: "blur(18px) brightness(0.16) saturate(0.3)",
        backgroundPosition: "50% 50%",
      });
      gsap.set(".hero-copy, .hero-nav, .hero-directions", {
        autoAlpha: 1,
      });
      gsap.set(".hero-nav > *, .hero-copy > *, .hero-direction", {
        autoAlpha: 0,
        y: 34,
        filter: "blur(14px)",
      });

      const revealTargets = gsap.utils.toArray<HTMLElement>(
        ".site-section .section-heading, .project-card, .founder-portrait, .value-card, .process-step, .journal-card, .contact-details, .site-footer",
      );

      gsap.set(revealTargets, {
        autoAlpha: 0,
        y: 64,
        filter: "blur(18px)",
      });

      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            revealObserver?.unobserve(entry.target);
            gsap.to(entry.target, {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.05,
              ease: "power3.out",
              delay: Number((entry.target as HTMLElement).dataset.revealDelay ?? 0),
            });
          });
        },
        {
          rootMargin: "0px 0px -14% 0px",
          threshold: 0.16,
        },
      );

      revealTargets.forEach((target, index) => {
        target.dataset.revealDelay = String(Math.min((index % 4) * 0.08, 0.24));
        revealObserver?.observe(target);
      });

      timeline
        .to(".threshold-line-center", {
          autoAlpha: 1,
          scaleY: 1,
          duration: 0.72,
        })
        .to(
          ".threshold-blackout",
          {
            autoAlpha: 0.82,
            duration: 0.95,
          },
          0.28,
        )
        .to(
          ".threshold-aperture",
          {
            autoAlpha: 1,
            scaleY: 1,
            y: 0,
            duration: 0.82,
          },
          0.62,
        )
        .to(
          ".threshold-line-center",
          {
            autoAlpha: 0,
            scaleY: 0.86,
            duration: 0.52,
          },
          0.96,
        )
        .to(
          ".threshold-aperture",
          {
            scaleX: 0.72,
            duration: 1.42,
          },
          1.05,
        )
        .to(
          ".threshold-sweep",
          {
            autoAlpha: 1,
            xPercent: 170,
            duration: 1.08,
          },
          1.25,
        )
        .to(
          ".threshold-sweep",
          {
            autoAlpha: 0,
            duration: 0.42,
          },
          2.08,
        )
        .to(
          ".threshold-aperture",
          {
            scaleX: 1.08,
            scaleY: 1.08,
            duration: 1.08,
          },
          1.7,
        )
        .to(
          ".threshold-veil",
          {
            autoAlpha: 1,
            duration: 1.1,
          },
          1.18,
        )
        .to(
          ".hero-visual",
          {
            scale: 1.035,
            filter: "blur(7px) brightness(0.42) saturate(0.36)",
            duration: 1.5,
          },
          1.28,
        )
        .to(
          ".threshold-frame",
          {
            autoAlpha: 0,
            scale: 1.035,
            duration: 1.15,
          },
          2.28,
        )
        .to(
          ".hero-visual",
          {
            scale: 1,
            filter: "blur(0px) brightness(0.76) saturate(0.42)",
            duration: 1.45,
          },
          2.42,
        )
        .to(
          ".hero-nav > *",
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.08,
          },
          3.05,
        )
        .to(
          ".hero-copy > *",
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.05,
            stagger: 0.1,
          },
          3.25,
        )
        .to(
          ".hero-direction",
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.95,
            stagger: 0.08,
          },
          3.42,
        );
    }, root);

    return () => {
      revealObserver?.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <main
      ref={rootRef}
      id="top"
      className={`wonderoom-site ${isLanguageTransitioning ? "is-language-transitioning" : ""} ${
        isMenuOpen ? "is-menu-open" : ""
      } ${isNavHidden ? "is-nav-hidden" : ""}`}
      onClick={handleSiteClick}
    >
      <section className="intro-hero" aria-label="Wonderoom interior design studio">
        <div className="hero-visual" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <div className="threshold-frame" aria-hidden="true">
          <div className="threshold-blackout" />
          <div className="threshold-aperture">
            <div className="threshold-sweep" />
          </div>
          <div className="threshold-veil" />
          <span className="threshold-line threshold-line-center" />
        </div>

        <div className="hero-layout">
          <nav className="hero-nav" aria-label="Primary navigation">
            <a href="#top" aria-label="Wonderoom home">
              Wonderoom
            </a>
            <div className="hero-menu">
              {t.nav.map((label, index) => (
                <a key={label} href={`#${navTargets[index]}`}>
                  {label}
                </a>
              ))}
            </div>
            <div className="hero-actions">
              <button
                type="button"
                className="language-toggle"
                onClick={handleLanguageToggle}
                aria-label="Switch language"
              >
                <span className={language === "ru" ? "is-active" : ""}>RU</span>
                <span>/</span>
                <span className={language === "en" ? "is-active" : ""}>EN</span>
              </button>
              <button
                type="button"
                className="hero-menu-button"
                onClick={() => setIsMenuOpen((current) => !current)}
                aria-expanded={isMenuOpen}
              >
                <span className="menu-line" aria-hidden="true" />
                <span>{isMenuOpen ? t.close : t.menu}</span>
              </button>
            </div>
          </nav>

          <div className="hero-copy">
            <p className="hero-kicker">{t.kicker}</p>
            <h1>{t.title}</h1>
            <p>{t.lead}</p>
            <a href="#projects" className="site-link">
              {t.explore}
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>

          <div className="hero-directions" aria-label="Studio directions">
            {t.directions.map(([label, number]) => (
              <a key={label} href="#projects" className="hero-direction">
                <span>{label}</span>
                <span>{number}</span>
              </a>
            ))}
          </div>
        </div>

        <div
          className={`site-mobile-menu ${isMenuOpen ? "is-open" : ""}`}
          aria-hidden={!isMenuOpen}
          aria-label={t.menu}
          aria-modal={isMenuOpen}
          role="dialog"
        >
          <button
            type="button"
            className="site-mobile-menu__close"
            onClick={() => setIsMenuOpen(false)}
            aria-label={t.close}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <nav className="site-mobile-menu__nav" aria-label={t.menu}>
            {t.nav.map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => handleMenuNavigation(`#${navTargets[index]}`)}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <section id="projects" className="site-section featured-section">
        <div className="section-heading">
          <p className="section-eyebrow">{t.featured.eyebrow}</p>
          <h2>{t.featured.title}</h2>
          <a href="#contacts" className="site-link">
            {t.featured.action}
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
        <div className="project-showcase" aria-label={activeProjectLabel}>
          {t.featured.projects.map(([title, type], index) => {
            const slideIndex = projectSlideIndexes[index] ?? 0;
            const totalSlides = projectImages[index].length;
            const count = `${String(slideIndex + 1).padStart(2, "0")} / ${String(
              totalSlides,
            ).padStart(2, "0")}`;
            const imageStyle: ProjectImageStyle = {
              "--project-image": `url("${projectImages[index][slideIndex]}")`,
            };

            return (
              <article
                key={title}
                className={`project-card project-card-${index + 1} ${
                  activeProject === index ? "is-active" : ""
                }`}
              >
                <button
                  type="button"
                  className="project-card__preview"
                  onClick={() => openProjectLightbox(index)}
                  aria-label={`${title}: ${type}`}
                >
                  <span
                    key={`${index}-${slideIndex}`}
                    className="project-image"
                    style={imageStyle}
                    aria-hidden="true"
                  />
                  <span className="project-meta">
                    <span>
                      <strong>{title}</strong>
                      <small>{type}</small>
                    </span>
                    <span>{count}</span>
                  </span>
                </button>
                <span className="project-controls" aria-label={title}>
                  <button
                    type="button"
                    onClick={() => handleProjectSlide(index, -1)}
                    aria-label={`${title} previous image`}
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => handleProjectSlide(index, 1)}
                    aria-label={`${title} next image`}
                  >
                    →
                  </button>
                </span>
              </article>
            );
          })}
        </div>
      </section>

      {lightboxProject !== null ? (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t.featured.projects[lightboxProject][0]}
        >
          {(() => {
            const [title, type] = t.featured.projects[lightboxProject];
            const slideIndex = projectSlideIndexes[lightboxProject] ?? 0;
            const imageStyle: ProjectImageStyle = {
              "--project-image": `url("${projectImages[lightboxProject][slideIndex]}")`,
            };

            return (
              <>
                <button
                  type="button"
                  className="project-lightbox__close"
                  onClick={() => setLightboxProject(null)}
                  aria-label={t.close}
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="project-lightbox__arrow project-lightbox__arrow--prev"
                  onClick={() => handleProjectSlide(lightboxProject, -1)}
                  aria-label={`${title} previous image`}
                >
                  ←
                </button>
                <figure className="project-lightbox__figure">
                  <span
                    key={`${lightboxProject}-${slideIndex}`}
                    className="project-lightbox__image"
                    style={imageStyle}
                    aria-hidden="true"
                  />
                  <figcaption>
                    <span>
                      <strong>{title}</strong>
                      <small>{type}</small>
                    </span>
                    <span>{`${String(slideIndex + 1).padStart(2, "0")} / ${String(
                      projectImages[lightboxProject].length,
                    ).padStart(2, "0")}`}</span>
                  </figcaption>
                </figure>
                <button
                  type="button"
                  className="project-lightbox__arrow project-lightbox__arrow--next"
                  onClick={() => handleProjectSlide(lightboxProject, 1)}
                  aria-label={`${title} next image`}
                >
                  →
                </button>
              </>
            );
          })()}
        </div>
      ) : null}

      <section id="studio" className="site-section studio-section">
        <div className="section-heading">
          <p className="section-eyebrow">{t.studio.eyebrow}</p>
          <h2>{t.studio.title}</h2>
          <p>{t.studio.body}</p>
          <a href="#contacts" className="site-link">
            {t.studio.action}
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
        <div className="studio-values studio-founder-grid">
          <figure className="founder-portrait" aria-label={t.studio.title}>
            <span className="founder-portrait__image" aria-hidden="true" />
            <figcaption>
              <span>Wonderoom</span>
              <strong>{t.studio.title}</strong>
            </figcaption>
          </figure>
          {t.studio.values.map(([title, body], index) => (
            <article key={title} className="value-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="site-section approach-section">
        <div className="section-heading">
          <p className="section-eyebrow">{t.approach.eyebrow}</p>
          <h2>{t.approach.title}</h2>
          <a href="#contacts" className="site-link">
            {t.approach.action}
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
        <div className="process-grid">
          {t.approach.steps.map(([number, title, body]) => (
            <article key={number} className="process-step">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="site-section journal-section">
        <div className="section-heading">
          <p className="section-eyebrow">{t.journal.eyebrow}</p>
          <h2>{t.journal.title}</h2>
          <a href="#contacts" className="site-link">
            {t.journal.action}
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
        <div className="journal-grid">
          {t.journal.posts.map(([date, title, body], index) => (
            <article key={title} className={`journal-card journal-card-${index + 1}`}>
              <span className="journal-image" aria-hidden="true" />
              <time>{date}</time>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacts" className="site-section contact-section">
        <div className="section-heading">
          <p className="section-eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
        </div>
        <div className="contact-details">
          <div className="contact-copy">
            <p>{t.contact.body}</p>
            <address>
              <a href="mailto:borodina7714@mail.ru">borodina7714@mail.ru</a>
              <a href="tel:+79012993687">+7 901 299 36 87</a>
            </address>
            <div className="social-links">
              <a href="https://t.me/Amaya_weekday">Telegram</a>
              <a href="https://vk.com/borodina7714">VK</a>
              <a href="https://instagram.com/Amaya_weekday">Instagram</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>
              <span>{language === "ru" ? "Имя" : "Name"}</span>
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              <span>{language === "ru" ? "Телефон или Telegram" : "Phone or Telegram"}</span>
              <input name="contact" autoComplete="tel" required />
            </label>
            <label>
              <span>{language === "ru" ? "Тип объекта" : "Project type"}</span>
              <input name="projectType" type="hidden" value={selectedProjectType} required />
              <div className={`contact-select ${isProjectTypeOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="contact-select__trigger"
                  onClick={() => setIsProjectTypeOpen((current) => !current)}
                  aria-expanded={isProjectTypeOpen}
                >
                  <span>{selectedProjectType || projectTypePlaceholder}</span>
                  <span aria-hidden="true">⌄</span>
                </button>
                <div className="contact-select__options">
                  {projectTypeOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSelectedProjectType(option);
                        setIsProjectTypeOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </label>
            <label>
              <span>{language === "ru" ? "Площадь" : "Area"}</span>
              <input
                name="area"
                placeholder={language === "ru" ? "Например, 120 м2" : "e.g. 120 m2"}
              />
            </label>
            <label className="contact-form__message">
              <span>{language === "ru" ? "Коротко о задаче" : "Short brief"}</span>
              <textarea name="message" rows={4} required />
            </label>
            <button type="submit" className="site-link contact-form__submit">
              {t.contact.action}
              <span aria-hidden="true">-&gt;</span>
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#top">Wonderoom</a>
        <span>© 2026 Wonderoom Studio. {t.footer}</span>
        <a href="#top">Privacy policy</a>
      </footer>
    </main>
  );
}
