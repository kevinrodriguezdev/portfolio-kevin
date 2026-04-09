export const translations = {
  es: {
    // Meta
    "meta.title": "Kevin Rodríguez — Backend Lead & Desarrollador FullStack",
    "meta.description": "Backend Lead con +5 años de experiencia. Especializado en Laravel, PHP y arquitectura de software.",

    // Nav
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",

    // Hero
    "hero.badge": "Backend Lead en Degestec",
    "hero.name": "Kevin Rodríguez",
    "hero.role": "Backend Lead",
    "hero.description": "+5 años de experiencia construyendo software robusto y escalable. Especializado en Laravel, PHP y arquitectura backend.",
    "hero.cta.contact": "Contacto",
    "hero.cta.linkedin": "LinkedIn",
    "hero.cta.cv": "Descargar CV",

    // Experience
    "experience.title": "Experiencia",
    "experience.1.date": "Enero 2025 — Actualidad",
    "experience.1.role": "Backend Lead",
    "experience.1.company": "Degestec Games",
    "experience.1.description": "Liderazgo técnico del equipo backend. Diseño de arquitectura de servicios, code reviews, y desarrollo de herramientas internas de gestión con Laravel, Vue y MySQL. Definición de estándares de código y buenas prácticas del equipo.",
    "experience.2.date": "Mayo 2021 — Septiembre 2024",
    "experience.2.role": "Desarrollador FullStack",
    "experience.2.company": "Sodecia Automotive",
    "experience.2.description": "Desarrollo y mantenimiento de aplicaciones web internas. Digitalización de procesos de planta, creación de soluciones para usuarios internos y desarrollo de nuevas funcionalidades con tecnologías modernas.",
    "experience.3.date": "Enero 2021 — Marzo 2021",
    "experience.3.role": "Desarrollador Frontend",
    "experience.3.company": "La Cruz Azul",
    "experience.3.description": "Prácticas profesionales en desarrollo frontend. Trabajo colaborativo en equipo, gestión de tareas y mantenimiento de la interfaz de usuario del proyecto.",

    // Projects
    "projects.title": "Proyectos",
    "projects.1.title": "Dossier — Landing Page",
    "projects.1.description": "Landing page para la venta de un dosier para la prueba de acceso de grados medios en España. Diseñada y desarrollada desde cero con Astro y Tailwind CSS.",

    // About
    "about.title": "Sobre mí",
    "about.p1": "Soy Kevin, Backend Lead con más de 5 años de experiencia diseñando y construyendo aplicaciones web escalables.",
    "about.p2": "Mi stack principal gira en torno a Laravel y PHP, aunque también trabajo con Vue, React y otras tecnologías del ecosistema frontend. Me apasiona la arquitectura limpia, los sistemas bien diseñados y liderar equipos técnicos.",
    "about.p3": "Actualmente lidero el equipo backend en Degestec Games, donde diseño la arquitectura de nuestros servicios y establezco los estándares de desarrollo del equipo.",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.about": "Sobre mí",
    "footer.contact": "Contacto",

    // Link buttons
    "link.code": "Código",
    "link.preview": "Vista previa",
    "link.more": "Saber más",
  },
  en: {
    // Meta
    "meta.title": "Kevin Rodríguez — Backend Lead & FullStack Developer",
    "meta.description": "Backend Lead with 5+ years of experience. Specialized in Laravel, PHP and software architecture.",

    // Nav
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Backend Lead at Degestec",
    "hero.name": "Kevin Rodríguez",
    "hero.role": "Backend Lead",
    "hero.description": "5+ years of experience building robust and scalable software. Specialized in Laravel, PHP and backend architecture.",
    "hero.cta.contact": "Contact",
    "hero.cta.linkedin": "LinkedIn",
    "hero.cta.cv": "Download CV",

    // Experience
    "experience.title": "Experience",
    "experience.1.date": "January 2025 — Present",
    "experience.1.role": "Backend Lead",
    "experience.1.company": "Degestec Games",
    "experience.1.description": "Technical leadership of the backend team. Service architecture design, code reviews, and development of internal management tools with Laravel, Vue and MySQL. Definition of coding standards and team best practices.",
    "experience.2.date": "May 2021 — September 2024",
    "experience.2.role": "FullStack Developer",
    "experience.2.company": "Sodecia Automotive",
    "experience.2.description": "Development and maintenance of internal web applications. Digitalization of plant processes, creation of solutions for internal users and development of new features with modern technologies.",
    "experience.3.date": "January 2021 — March 2021",
    "experience.3.role": "Frontend Developer",
    "experience.3.company": "La Cruz Azul",
    "experience.3.description": "Professional internship in frontend development. Collaborative teamwork, task management and maintenance of the project's user interface.",

    // Projects
    "projects.title": "Projects",
    "projects.1.title": "Dossier — Landing Page",
    "projects.1.description": "Landing page for selling a dossier for the middle school access exam in Spain. Designed and developed from scratch with Astro and Tailwind CSS.",

    // About
    "about.title": "About me",
    "about.p1": "I'm Kevin, a Backend Lead with over 5 years of experience designing and building scalable web applications.",
    "about.p2": "My core stack revolves around Laravel and PHP, though I also work with Vue, React and other frontend ecosystem technologies. I'm passionate about clean architecture, well-designed systems and leading technical teams.",
    "about.p3": "I currently lead the backend team at Degestec Games, where I design our service architecture and establish the team's development standards.",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.about": "About",
    "footer.contact": "Contact",

    // Link buttons
    "link.code": "Code",
    "link.preview": "Preview",
    "link.more": "Learn more",
  },
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;
