const projects = [
    {
        name: "Project 1",
        date: "2023-01-15",
        description: "Description for Project 1. This project was about...",
        imageUrl: "https://picsum.photos/600/400?random=1",
        skills: ["HTML", "CSS", "JavaScript", "UI Design"],
    },
    {
        name: "Project 2",
        date: "2023-02-20",
        description: "Description for Project 2. A very interesting project...",
        imageUrl: "https://picsum.photos/600/400?random=2",
        skills: ["React", "Tailwind CSS", "Node.js", "Frontend"],
    },
    {
        name: "Project 3",
        date: "2023-03-25",
        description: "Description for Project 3. This one had some challenges...",
        imageUrl: "https://picsum.photos/600/400?random=3",
        skills: ["Vue", "Firebase", "GraphQL", "Backend"],
    },
    {
        name: "Project 4",
        date: "2023-04-25",
        description:
            "Description for Project 4. This is the last project in the array...",
        imageUrl: "https://picsum.photos/600/400?random=4",
        skills: ["Python", "Django", "PostgreSQL", "Fullstack"],
    },
];

let currentProjectIndex = 0;

const projectContainer = document.querySelector(".project-container");
const projectNameElement = document.querySelector(".project-name");
const dateWorkedElement = document.querySelector(".date-worked");
const projectDescriptionElement = document.querySelector(".project-description");

const projectImageElement = document.querySelector(".project-image");
const skillsUsedElement = document.querySelector(".skills-used");
const projectIndicator = document.querySelector(".project-indicator");


function updateProject(index) {
    const project = projects[index];
    if (!project) return;

    projectNameElement.textContent = project.name;
    dateWorkedElement.textContent = `${project.date}`;
    projectDescriptionElement.textContent = project.description;
    projectImageElement.src = project.imageUrl;
    projectImageElement.alt = project.name;

    skillsUsedElement.innerHTML = "";

    project.skills.forEach((skill) => {
        const skillPill = document.createElement("span");
        skillPill.className = "skill-pill";
        skillPill.textContent = skill;
        skillsUsedElement.appendChild(skillPill);
    });

    // Update the project indicator
    updateProjectIndicator(index);
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProject(currentProjectIndex);
}

function prevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProject(currentProjectIndex);
}

function updateProjectIndicator(index) {
    let indicatorHTML = "";
    for (let i = 0; i < projects.length; i++) {
        if (i === index) {
            indicatorHTML += `<span class="active"><p>${i + 1}</p></span>`; // Highlight the current project
        } else {
            indicatorHTML += `<span data-index="${i}"><p>${i + 1}</p></span>`; // clickable
        }
    }

    indicatorHTML = `<span class="nav-arrow-indicator" data-direction="prev"><p>&#10094; Previous</p></span>` + indicatorHTML + `<span class="nav-arrow-indicator" data-direction="next"><p>Next &#10095;</p></span>`;
    projectIndicator.innerHTML = indicatorHTML;

    // Attach event listeners to the spans
    const spans = projectIndicator.querySelectorAll('span:not(.active)');
    spans.forEach(span => {
        if (span.dataset.index) { // number spans
            span.addEventListener('click', () => {
                const clickedIndex = parseInt(span.dataset.index);
                updateProject(clickedIndex);
                currentProjectIndex = clickedIndex;
            });
        }
    });

    // Event listeners for the arrow icons
    const prevArrow = projectIndicator.querySelector('[data-direction="prev"]');
    const nextArrow = projectIndicator.querySelector('[data-direction="next"]');

    if (prevArrow) {
        prevArrow.addEventListener('click', () => {
            prevProject();
        });
    }
    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            nextProject();
        });
    }
}

updateProject(currentProjectIndex);