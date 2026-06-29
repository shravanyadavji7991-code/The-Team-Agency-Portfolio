 const teamMembers = [
    {
        name: "Sam Gandhi",
        role: "Frontend Development",
        avatar: "https://www.image2url.com/r2/default/images/1781427333537-6b270593-f951-4c7d-a3b3-8e92046d5091.jpg",
        skills: ["JavaScript", "Java", "Data Structure"],
        github: "https://github.com/CodeBySamGandhi"
    },
    {
        name: "Aparna Vaishnavi",
        role: "Frontend Engineer",
        avatar: "https://www.image2url.com/r2/default/images/1781433285787-7502fd53-eb66-4ed8-b298-959efc9fc5e9.png",
        skills: ["HTML5/CSS3", "UI Layouts", "Responsive Design"],
        github: "https://github.com/aparnavaishnavi"
    },
    {
        name: "Anish Kumar Singh",
        role: "Logic & State Specialist",
        avatar: "https://www.image2url.com/r2/default/images/1781430561507-49f7310b-8700-4e32-b6ef-bf2c4aac7243.jpg",
        skills: ["Algorithms", "Data Flows", "Event Observers"],
        github: "https://github.com/Anishsingh99056"
    },
    {
        name: "Krish",
        role: "API Integration Engineer",
        avatar: "https://www.image2url.com/r2/default/images/1781430112872-e1db27da-11fe-4858-8289-f18731613ab8.png",
        skills: ["Async/Await", "REST Endpoints", "JSON Parsing"],
        github: "https://github.com/krishsharma23032007"
    },
    {
        name: "Shravan Yadav",
        role: "Frontend Devolpment",
        avatar: "https://www.image2url.com/r2/default/images/1781429875883-9751e5db-0521-4f23-83a8-543c12b15f1d.jpg",
        skills: ["JavaScript", "Java Developer", "Database"],
        github: "https://github.com/shravanyadavji7991-code"
    }
];

// The 5 mandatory functional companion applications from your handbook\

const handbookProjects = [
    {
        title: "Interactive Quiz Application",
        badge: "State & Logic",
        desc: "Tracks running scores, controls global indexing, and processes immediate UI feedback using dynamic event patterns.",
        repoLink: "https://github.com/shravanyadavji7991-code/TEAM-9-SAM-ANISH-SHRAVAN-AV-KRISH", 
        demoLink: "https://github.com/Anishsingh99056"
    },
    {
        title: "Expense Tracker Dashboard",
        badge: "CRUD & localStorage",
        desc: "Engineers data insertion, read rendering, array filtering data modification, and JSON serialization state save states.",
        repoLink: "https://github.com/shravanyadavji7991-code/TEAM-9-SAM-ANISH-SHRAVAN-AV-KRISH",
        demoLink: "https://github.com/shravanyadavji7991-code"
    },
    {
        title: "Live News Aggregator",
        badge: "Async API Integration",
        desc: "Integrates asynchronous network requests with async/await blocks to download live feeds via third-party providers with query controls.",
        repoLink: "https://github.com/shravanyadavji7991-code/TEAM-9-SAM-ANISH-SHRAVAN-AV-KRISH",
        demoLink: "https://github.com/CodeBySamGandhi"
    },
    {
        title: "GitHub Developer Explorer",
        badge: "Multi-Endpoint APIs",
        desc: "Connects multiple network requests simultaneously to parse open user parameters and extract graphical usage details dynamically.",
        repoLink: "https://github.com/shravanyadavji7991-code/TEAM-9-SAM-ANISH-SHRAVAN-AV-KRISH",
        demoLink: "https://github.com/krishsharma23032007"
    },
    {
        title: "Kanban Task Board",
        badge: "Drag & Drop Operations",
        desc: "Utilizes native browser interaction mechanics to map tracking tickets visually into processing phases alongside persistent storage.",
        repoLink: "https://github.com/shravanyadavji7991-code/TEAM-9-SAM-ANISH-SHRAVAN-AV-KRISH",
        demoLink: "https://github.com/aparnavaishnavi"
    }
];


const teamGrid = document.getElementById('team-grid');
const projectGrid = document.getElementById('project-grid');


teamMembers.forEach(member => {
    
    const skillsHTML = member.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('');
    
    const teamHTMLCard = `
        <div class="card">
            <div>
                <img src="${member.avatar}" alt="${member.name}" class="avatar">
                <h3>${member.name}</h3>
                <p class="role-tag">${member.role}</p>
                <div class="skills-box">${skillsHTML}</div>
            </div>
            <div class="links-container">
                <a href="${member.github}" target="_blank" aria-label="GitHub Profile"><i class="fab fa-github"></i></a>
            </div>
        </div>
    `;
    teamGrid.innerHTML += teamHTMLCard;
});

// Injecting the 5 Remaining Project Feature Cards
handbookProjects.forEach(project => {
    const projectHTMLCard = `
        <div class="card">
            <div>
                <span class="skill-badge" style="background:var(--accent); color:white; border:none; margin-bottom:12px; display:inline-block;">${project.badge}</span>
                <h3 style="margin-bottom:10px;">${project.title}</h3>
                <p style="color: var(--text-muted); font-size:14px; line-height:1.5; margin-bottom:20px;">${project.desc}</p>
            </div>
            <div class="links-container">
                <a href="${project.repoLink}" target="_blank" title="Repository Pipeline"><i class="fab fa-github"></i></a>
                <a href="${project.demoLink}" target="_blank" title="Launch Active Instance"><i class="fas fa-external-link-alt"></i></a>
            </div>
        </div>
    `;
    projectGrid.innerHTML += projectHTMLCard;
});


// 3. PERSISTENT THEME CONTROL (via localStorage)


const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Read existing system choice configuration from storage on initial page load
const cachedTheme = localStorage.getItem('portfolio-theme') || 'light';
rootElement.setAttribute('data-theme', cachedTheme);
updateThemeButtonUI(cachedTheme);

themeToggleBtn.addEventListener('click', () => {
    const activeTheme = rootElement.getAttribute('data-theme');
    const targetTheme = activeTheme === 'light' ? 'dark' : 'light';
    
    // Process layout reconfiguration shifts
    rootElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('portfolio-theme', targetTheme); // Save theme persistence state
    updateThemeButtonUI(targetTheme);
});

function updateThemeButtonUI(theme) {
    if (theme === 'dark') {
        themeToggleBtn.innerHTML = `<i class="fas fa-sun"></i> Light Mode`;
    } else {
        themeToggleBtn.innerHTML = `<i class="fas fa-moon"></i> Dark Mode`;
    }
}

// 4. CLIENT-SIDE VALIDATION PIPELINE


const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    // Intercept standard submission window reloads
    event.preventDefault();

    // Extract raw form data entries
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Error container references
    const nameErr = document.getElementById('name-error');
    const emailErr = document.getElementById('email-error');
    const messageErr = document.getElementById('message-error');

    // Reset old validation strings
    nameErr.textContent = "";
    emailErr.textContent = "";
    messageErr.textContent = "";

    let formIsValid = true;

    // Field Rule Enforcement: Check Name existence
    if (name === "") {
        nameErr.textContent = "Please provide your name.";
        formIsValid = false;
    }

    // Field Rule Enforcement: Check Email structure with standard RegEx rules
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailErr.textContent = "Please provide your email address.";
        formIsValid = false;
    } else if (!emailRegex.test(email)) {
        emailErr.textContent = "Please enter a correctly structured email address.";
        formIsValid = false;
    }

    // Field Rule Enforcement: Check message length threshold
    if (message === "") {
        messageErr.textContent = "Please input a message description.";
        formIsValid = false;
    } else if (message.length < 15) {
        messageErr.textContent = "Your validation message must be longer than 15 characters.";
        formIsValid = false;
    }

    // If validation tests pass successfully
    if (formIsValid) {
        alert("🎉 Success! Your portfolio contact verification data processed securely.");
        contactForm.reset();
    }
});
