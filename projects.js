const projects = [
    {
        id: "flowstock",
        number: "01",
        field: "Tech + Data Product",
        title: "FlowStock",
        subtitle: "Inventory analytics for stock decisions",
        image: "images/flowstock.png",
        fit: "plain",
        role: "Product logic, data storytelling",
        timeline: "Course project, 2025",
        tools: ["React", "TypeScript", "Supabase", "Recharts", "Leaflet"],
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                body: [
                    "FlowStock is an inventory analytics web app designed to help small businesses understand stock movement, location performance, and replenishment needs from one dashboard.",
                    "The project gave me space to connect product thinking with data-heavy software, especially around how raw operational data can become decisions that feel immediate and usable."
                ]
            },
            {
                id: "problem",
                title: "Problem",
                body: [
                    "Small inventory teams often know that stock problems exist, but the warning signs are scattered across tables, transactions, locations, and manual notes.",
                    "The challenge was to make inventory signals easier to scan without overwhelming users with a technical analytics interface."
                ]
            },
            {
                id: "approach",
                title: "Approach",
                body: [
                    "I focused on how the product could communicate the most useful signals first: what is moving, what is running low, and where action should happen.",
                    "The interface combines analytics, map-based location context, and business logic so the user can move from observation to action quickly."
                ]
            },
            {
                id: "build",
                title: "Build",
                body: [
                    "The web app used a modern React and TypeScript stack, with Supabase for backend data and charting/map components for the main dashboard experience.",
                    "I learned to balance feature ambition with clarity, especially when presenting several types of business data in one screen."
                ]
            },
            {
                id: "takeaways",
                title: "Takeaways",
                body: [
                    "The biggest takeaway was that useful analytics is not just about showing numbers. It is about deciding which numbers deserve attention and what action they imply.",
                    "FlowStock strengthened my interest in product-minded data tools, where engineering, interface design, and decision support meet."
                ]
            }
        ]
    },
    {
        id: "gawein",
        number: "02",
        field: "Product Design",
        title: "GaweIn",
        subtitle: "Digital access for informal workers",
        image: "images/gawein.png",
        fit: "plain",
        role: "Research, product flow, case study",
        timeline: "Human-computer interaction project, 2025",
        tools: ["Figma", "UX Research", "Service Design"],
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                body: [
                    "GaweIn is a platform concept created to help informal workers become easier to discover, while helping customers find trusted help for everyday service needs.",
                    "The project pushed me to think beyond interface screens and consider trust, access, visibility, and the social context behind the product."
                ]
            },
            {
                id: "empathize",
                title: "Empathize",
                body: [
                    "We started from the reality that many informal workers depend on word-of-mouth and local networks. That makes their work valuable but often difficult to scale or verify.",
                    "The design question became: how can a digital platform create visibility without making the experience feel complicated or intimidating?"
                ]
            },
            {
                id: "define",
                title: "Define",
                body: [
                    "The main pain points were discoverability, trust, and matching. Customers need confidence before choosing a worker, and workers need a simple way to present their service.",
                    "We framed the product around clear worker profiles, accessible search, and service categories that reflect real customer needs."
                ]
            },
            {
                id: "prototype",
                title: "Prototype",
                body: [
                    "The prototype focused on simple flows: finding a service, viewing a worker profile, understanding availability, and starting a booking or contact process.",
                    "I helped shape the story of the case study so the solution felt grounded in the user's context, not only in the screen design."
                ]
            },
            {
                id: "takeaways",
                title: "Takeaways",
                body: [
                    "GaweIn taught me that social problems require careful product framing. A feature can be technically possible but still fail if it ignores trust and behavior.",
                    "The project strengthened my interest in building technology that respects the people and habits around it."
                ]
            }
        ]
    },
    {
        id: "colokin",
        number: "03",
        field: "Entrepreneurial Product",
        title: "Colok.in",
        subtitle: "Cable rental through lockers and QR access",
        image: "images/colokin-logo.png",
        fit: "plain",
        role: "Website, product journey, presentation",
        timeline: "Entrepreneurship project, 2025",
        tools: ["HTML", "CSS", "Product Concept", "Vercel"],
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                body: [
                    "Colok.in is a rental concept for extension cables in places where charging demand is high, such as cafes, campuses, and public study areas.",
                    "The idea combines physical lockers, QR-based access, and a web presence so users can understand the service quickly."
                ]
            },
            {
                id: "context",
                title: "Context",
                body: [
                    "Charging problems are small but frequent. People need power access, but venues cannot always provide enough cables safely and neatly.",
                    "The product needed to feel simple: find a cable, rent it, use it, and return it without needing a complicated explanation."
                ]
            },
            {
                id: "solution",
                title: "Solution",
                body: [
                    "We framed the service around rental lockers and clear user steps. The website helped explain the hardware, cable options, and app-like access flow.",
                    "I worked on turning the product idea into a credible web experience that could support pitching and storytelling."
                ]
            },
            {
                id: "build",
                title: "Build",
                body: [
                    "The web interface was built as a static site with multiple pages explaining how the service works, what users rent, and how the locker flow is imagined.",
                    "The project helped me practice product communication: a good idea needs a clear situation, a clear user behavior, and a clear reason to exist."
                ]
            },
            {
                id: "takeaways",
                title: "Takeaways",
                body: [
                    "Colok.in taught me to connect digital design with a physical service journey. The website was not just a page; it was part of making the business idea understandable.",
                    "It also helped me see how product design, operations, and communication depend on each other."
                ]
            }
        ]
    },
    {
        id: "moosic",
        number: "04",
        field: "Software Engineering",
        title: "Moosic",
        subtitle: "Desktop music store management app",
        image: "images/moosic.png",
        fit: "contain",
        role: "Application structure, interface flow",
        timeline: "Software engineering project, 2025",
        tools: ["Java", "JavaFX", "SQLite", "JDBC"],
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                body: [
                    "Moosic is a music store management application for browsing albums, cassettes, and vinyl products through account, cart, checkout, and review flows.",
                    "The project was a practical exercise in building a complete application with coordinated interface screens and persistent data."
                ]
            },
            {
                id: "requirements",
                title: "Requirements",
                body: [
                    "The application needed to support everyday store interactions: registration, login, product browsing, product detail pages, search, cart, checkout, and reviews.",
                    "Because the app had several connected workflows, the main challenge was keeping the data flow and user states consistent."
                ]
            },
            {
                id: "architecture",
                title: "Architecture",
                body: [
                    "We built the app with Java and JavaFX, using SQLite and JDBC for local data management.",
                    "I learned how important it is to separate responsibilities across screens, controllers, and data access logic so the app remains understandable as it grows."
                ]
            },
            {
                id: "experience",
                title: "Experience",
                body: [
                    "The interface needed to feel like a store rather than a database assignment. That meant organizing products visually and making core actions easy to follow.",
                    "Small user-facing details, such as search behavior and checkout states, helped make the system feel more complete."
                ]
            },
            {
                id: "takeaways",
                title: "Takeaways",
                body: [
                    "Moosic taught me that software engineering is not only about implementing features, but also about coordinating team decisions and maintaining structure.",
                    "It strengthened my appreciation for readable architecture and predictable user flows."
                ]
            }
        ]
    },
    {
        id: "csidentify",
        number: "05",
        field: "Algorithmic System",
        title: "CSIdentify",
        subtitle: "Forensic DNA identification workflow",
        image: "images/csidentify.png",
        fit: "plain",
        logoText: "CSI",
        logoTextAccent: "dentify",
        role: "Algorithm workflow, testing, explanation",
        timeline: "Algorithm project, 2025",
        tools: ["Python", "Regex", "CSV", "JSON", "Testing"],
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                body: [
                    "CSIdentify is a forensic DNA identification program that compares STR patterns and local alignment results against a suspect database.",
                    "The project turned biological-style sequence input into structured computational evidence."
                ]
            },
            {
                id: "problem",
                title: "Problem",
                body: [
                    "The challenge was to design a workflow that could read DNA-like inputs, extract useful markers, compare them with records, and present the result in a clear format.",
                    "Because the subject sounds complex, the explanation of the process mattered almost as much as the implementation."
                ]
            },
            {
                id: "algorithm",
                title: "Algorithm",
                body: [
                    "The system combined pattern matching for STR analysis with local sequence alignment using a Smith-Waterman-style approach.",
                    "This helped compare evidence against suspect profiles while keeping the output structured enough for review."
                ]
            },
            {
                id: "validation",
                title: "Validation",
                body: [
                    "Testing was important because small parsing or alignment mistakes could change the identification result.",
                    "The project helped me practice building technical systems where correctness, traceability, and presentation all matter."
                ]
            },
            {
                id: "takeaways",
                title: "Takeaways",
                body: [
                    "CSIdentify taught me how to make algorithmic work understandable to someone who only sees the final result.",
                    "I learned to treat the output as part of the system design, not just a leftover from the computation."
                ]
            }
        ]
    },
    {
        id: "spakbor-hills",
        number: "06",
        field: "Game Development",
        title: "Spakbor Hills",
        subtitle: "Java-based role-playing game",
        image: "images/spakborhills.png",
        fit: "contain",
        role: "Gameplay logic, OOP structure",
        timeline: "Object-oriented programming project, 2025",
        tools: ["Java", "JavaFX", "MySQL"],
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                body: [
                    "Spakbor Hills is a Java-based role-playing game created for an object-oriented programming course.",
                    "The project gave me a hands-on way to understand how software objects, states, and interactions shape a playable experience."
                ]
            },
            {
                id: "system",
                title: "System",
                body: [
                    "The game required multiple connected systems: character behavior, map movement, interface screens, item logic, and persistence.",
                    "Because games expose state changes directly to the player, small inconsistencies become easy to notice."
                ]
            },
            {
                id: "implementation",
                title: "Implementation",
                body: [
                    "We used Java and JavaFX to build the main desktop experience, with database support for data that needed to persist.",
                    "The object-oriented approach helped divide the game into manageable parts while keeping the overall gameplay loop connected."
                ]
            },
            {
                id: "learning",
                title: "Learning",
                body: [
                    "The project helped me understand inheritance, encapsulation, and state management through something more tangible than a normal assignment.",
                    "It also showed that technical structure affects how smooth and believable an interaction feels."
                ]
            },
            {
                id: "takeaways",
                title: "Takeaways",
                body: [
                    "Spakbor Hills made software design feel visible. Every class and state decision had an effect on what the player experienced.",
                    "That lesson still helps me when building apps with many moving parts."
                ]
            }
        ]
    },
    {
        id: "amanlansia",
        number: "07",
        field: "IoT + Health",
        title: "AmanLansia",
        subtitle: "Wearable emergency monitoring concept",
        image: "images/amanlansia.png",
        fit: "contain",
        role: "Concept flow, safety use case",
        timeline: "IoT product concept, 2025",
        tools: ["C++", "HTML/CSS", "SQL"],
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                body: [
                    "AmanLansia is a wearable smart band concept designed to support elderly safety through monitoring and emergency response.",
                    "The project explored how simple technology can help families and caregivers respond faster when an older adult needs help."
                ]
            },
            {
                id: "context",
                title: "Context",
                body: [
                    "Elderly care involves trust, reliability, and urgency. A device in this space cannot feel complicated because it may be needed during stressful moments.",
                    "The challenge was to imagine a system that feels simple for users while still supporting useful monitoring behind the scenes."
                ]
            },
            {
                id: "concept",
                title: "Concept",
                body: [
                    "The concept centered on a wearable device that could communicate emergency signals and support basic monitoring through a connected system.",
                    "The design needed to make the main action obvious: when help is needed, the system should reduce friction rather than add steps."
                ]
            },
            {
                id: "prototype",
                title: "Prototype",
                body: [
                    "The project combined embedded-style thinking with web and database components, connecting hardware ideas with a supporting digital interface.",
                    "I helped clarify the safety use case so the technical pieces had a clear human reason behind them."
                ]
            },
            {
                id: "takeaways",
                title: "Takeaways",
                body: [
                    "AmanLansia taught me that health-related technology should be calm, dependable, and easy to understand.",
                    "It also reminded me that technical ideas become stronger when they are grounded in real human vulnerability."
                ]
            }
        ]
    },
    {
        id: "nfl-draft",
        number: "08",
        field: "Machine Learning",
        title: "NFL Draft Prediction",
        subtitle: "Competition-style predictive modeling",
        visual: "nfl",
        role: "Feature engineering, model iteration",
        timeline: "Data competition project, 2025",
        tools: ["Python", "LightGBM", "Random Forest", "Target Encoding"],
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                body: [
                    "NFL Draft Prediction was a competition-style machine learning project focused on predicting draft outcomes from structured player data.",
                    "The project started with baseline experiments and moved toward stronger models through feature engineering and validation."
                ]
            },
            {
                id: "baseline",
                title: "Baseline",
                body: [
                    "I began with a Random Forest baseline to establish a reference point before introducing more complex modeling choices.",
                    "This made improvement measurable instead of relying on intuition."
                ]
            },
            {
                id: "modeling",
                title: "Modeling",
                body: [
                    "The stronger solution used LightGBM, target encoding, and engineered features to capture patterns in the available data.",
                    "The project reached an out-of-fold AUC of 0.82264, which became a useful benchmark for evaluating model quality."
                ]
            },
            {
                id: "iteration",
                title: "Iteration",
                body: [
                    "The most valuable part of the process was not just changing models, but learning how to run controlled experiments.",
                    "Each change needed a reason, a validation strategy, and a comparison against the previous result."
                ]
            },
            {
                id: "takeaways",
                title: "Takeaways",
                body: [
                    "This project taught me that better models come from disciplined iteration, not only from using more advanced algorithms.",
                    "It also strengthened my understanding of how feature design can shape prediction quality."
                ]
            }
        ]
    },
    {
        id: "clustering",
        number: "09",
        field: "Data Analysis",
        title: "Clustering Analysis",
        subtitle: "Unsupervised segmentation study",
        visual: "cluster",
        role: "Exploration, metric interpretation",
        timeline: "Data mining assignment, 2025",
        tools: ["Python", "K-Means", "Hierarchical Clustering", "EDA"],
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                body: [
                    "This clustering project explored unsupervised learning by comparing K-Means and hierarchical clustering approaches.",
                    "The goal was to find meaningful groups in the data and explain the segmentation clearly."
                ]
            },
            {
                id: "exploration",
                title: "Exploration",
                body: [
                    "The work began with exploratory analysis to understand distributions, possible patterns, and preprocessing needs.",
                    "Because clustering does not have a direct target label, interpretation became a key part of the analysis."
                ]
            },
            {
                id: "comparison",
                title: "Comparison",
                body: [
                    "I compared clustering methods and evaluated candidate cluster counts before selecting a four-cluster K-Means result.",
                    "The decision was based on both metrics and whether the final groups could be explained in a useful way."
                ]
            },
            {
                id: "interpretation",
                title: "Interpretation",
                body: [
                    "The analysis focused on translating cluster results into understandable segment characteristics.",
                    "This made the project less about running an algorithm and more about making patterns readable."
                ]
            },
            {
                id: "takeaways",
                title: "Takeaways",
                body: [
                    "The project taught me that unsupervised learning needs strong storytelling. A cluster is only useful when people can understand what it represents.",
                    "It helped me become more careful in connecting metrics with interpretation."
                ]
            }
        ]
    },
    {
        id: "explainable-ai",
        number: "10",
        field: "Explainable AI",
        title: "Explainable AI with SHAP",
        subtitle: "Computer vision model interpretation",
        visual: "xai",
        role: "Model comparison, explainability framing",
        timeline: "AI for Business practicum, 2025",
        tools: ["Python", "ResNet50", "CLIP", "SHAP"],
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                body: [
                    "This project compared computer vision models and used SHAP to inspect which visual features influenced predictions.",
                    "The experiment used animal image classification as a setting to explore both model performance and explainability."
                ]
            },
            {
                id: "modeling",
                title: "Modeling",
                body: [
                    "The work compared ResNet50 and CLIP ViT-B/32, looking at how different model architectures behave on the same classification task.",
                    "This helped me understand model performance as more than a single accuracy number."
                ]
            },
            {
                id: "explainability",
                title: "Explainability",
                body: [
                    "SHAP was used to make prediction behavior easier to inspect. Instead of only asking whether the prediction was correct, the project asked what the model seemed to rely on.",
                    "That shift made the work more relevant for communicating AI behavior to people who need to trust or question it."
                ]
            },
            {
                id: "reflection",
                title: "Reflection",
                body: [
                    "The project showed me how interpretability can reveal hidden assumptions and potential weaknesses in model behavior.",
                    "It also helped me practice explaining AI results in a way that connects technical output with decision-making."
                ]
            },
            {
                id: "takeaways",
                title: "Takeaways",
                body: [
                    "Explainable AI taught me that model results need context. A prediction becomes more useful when we can inspect the evidence behind it.",
                    "This project strengthened my interest in responsible and communicable AI systems."
                ]
            }
        ]
    }
];

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function renderVisual(project, variant = "card") {
    const frameClass = variant === "detail" ? "detail-visual" : "folder-visual";
    const visualClass = project.visual ? `${project.visual}-visual` : "";
    const fitClass = project.fit === "contain" || project.fit === "plain" ? "fit-contain" : "";
    const plainClass = project.fit === "plain" ? "fit-plain" : "";
    const label = escapeHTML(project.title);

    if (project.image) {
        const dashboard = project.visual === "flowstock"
            ? '<div class="mini-dashboard" aria-hidden="true"><span></span><span></span><span></span></div>'
            : "";
        const logoText = project.logoText
            ? `<span class="visual-wordmark">${escapeHTML(project.logoText)}${project.logoTextAccent ? `<span>${escapeHTML(project.logoTextAccent)}</span>` : ""}</span>`
            : "";

        if (logoText) {
            return `
                <div class="${frameClass} ${visualClass} ${fitClass} ${plainClass}">
                    <div class="visual-logo-lockup">
                        <img src="${escapeHTML(project.image)}" alt="${label} logo">
                        ${logoText}
                    </div>
                </div>
            `;
        }

        return `
            <div class="${frameClass} ${visualClass} ${fitClass} ${plainClass}">
                <img src="${escapeHTML(project.image)}" alt="${label} visual">
                ${dashboard}
            </div>
        `;
    }

    if (project.visual === "nfl") {
        return `
            <div class="${frameClass} visual-card data-visual" aria-label="${label} model visual">
                <div>
                    <span class="visual-kicker">Prediction</span>
                    <strong>0.82264</strong>
                    <small>OOF AUC</small>
                </div>
            </div>
        `;
    }

    if (project.visual === "cluster") {
        return `
            <div class="${frameClass} visual-card cluster-visual" aria-label="${label} analysis visual">
                <div class="cluster-map" aria-hidden="true">
                    <span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span>
                </div>
            </div>
        `;
    }

    if (project.visual === "xai") {
        return `
            <div class="${frameClass} visual-card ai-visual" aria-label="${label} explainability visual">
                <div class="heat-bars" aria-hidden="true">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
            </div>
        `;
    }

    return `
        <div class="${frameClass} visual-card portfolio-visual" aria-label="${label} website visual">
            <div class="browser-mock" aria-hidden="true">
                <span></span><span></span><span></span>
                <strong>Portfolio</strong>
            </div>
        </div>
    `;
}

function renderProjectCards() {
    const container = document.getElementById("projectCards");
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <a class="folder-card" href="project.html?project=${encodeURIComponent(project.id)}" aria-label="Open ${escapeHTML(project.title)} project detail">
            <div class="folder-tab">
                <strong>${escapeHTML(project.number)}</strong>
                <span>${escapeHTML(project.field)}</span>
            </div>
            ${renderVisual(project)}
            <div class="folder-copy">
                <h3>${escapeHTML(project.title)}</h3>
                <p>${escapeHTML(project.subtitle)}</p>
            </div>
        </a>
    `).join("");
}

function renderProjectDetail() {
    const detail = document.getElementById("projectDetail");
    if (!detail) return;

    const params = new URLSearchParams(window.location.search);
    const selectedId = params.get("project");
    const project = projects.find(item => item.id === selectedId) || projects[0];
    const nav = document.getElementById("detailNav");
    const facts = document.getElementById("detailFacts");

    document.title = `${project.title} | Muhammad Refino Ramadhan`;

    if (nav) {
        nav.innerHTML = project.sections.map(section => `
            <a href="#${escapeHTML(section.id)}">${escapeHTML(section.title)}</a>
        `).join("");
    }

    if (facts) {
        facts.innerHTML = `
            <div>
                <h2>Role</h2>
                <p>${escapeHTML(project.role)}</p>
            </div>
            <div>
                <h2>Timeline</h2>
                <p>${escapeHTML(project.timeline)}</p>
            </div>
            <div>
                <h2>Tools</h2>
                <p>${project.tools.map(escapeHTML).join(", ")}</p>
            </div>
        `;
    }

    detail.innerHTML = `
        <header class="detail-hero">
            <p class="eyebrow">${escapeHTML(project.number)} ${escapeHTML(project.field)}</p>
            <h1>${escapeHTML(project.title)}</h1>
            <p>${escapeHTML(project.subtitle)}</p>
        </header>
        ${renderVisual(project, "detail")}
        <div class="detail-content">
            ${project.sections.map(section => `
                <section class="detail-section" id="${escapeHTML(section.id)}">
                    <h2>${escapeHTML(section.title)}</h2>
                    ${section.body.map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join("")}
                </section>
            `).join("")}
        </div>
    `;
}

renderProjectCards();
renderProjectDetail();
