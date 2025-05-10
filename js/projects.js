const projects = [
    {
        name: "Project 1",
        date: "2023-01-15",
        description: "Description for Project 1. This project was about...",
        imageUrl: "https://placehold.co/600x400/EEE/31343C",
        skills: ["HTML", "CSS", "JavaScript"],
    },
    {
        name: "Project 2",
        date: "2023-02-20",
        description: "Description for Project 2.  A very interesting project...",
        imageUrl: "https://placehold.co/600x400/EEE/800080",
        skills: ["React", "Tailwind CSS", "Node.js"],
    },
    {
        name: "Project 3",
        date: "2023-03-25",
        description: "Description for Project 3.  This one had some challenges...",
        imageUrl: "https://placehold.co/600x400/EEE/008000",
        skills: ["Vue", "Firebase", "GraphQL"],
    },
    {
        name: "Project 4",
        date: "2023-04-25",
        description: "Description for Project 4.  This is the last project in the array...",
        imageUrl: "https://placehold.co/600x400/EEE/	0000FF",
        skills: ["Python", "Django", "PostgreSQL"],
    },
];

let currentProjectIndex = 0;

function updateProject(index) {
    const project = projects[index];
    if (!project) return;

    document.querySelector(".project-name").textContent = project.name;
    document.querySelector(".date-worked").textContent = `Date Worked: ${project.date}`;
    document.querySelector(".project-description").textContent = project.description;
    document.querySelector(".project-image").src = project.imageUrl;
    document.querySelector(".project-image").alt = project.name;

    const skillsContainer = document.querySelector(".skills-used");
    skillsContainer.innerHTML = ""; // Clear previous skills

    project.skills.forEach((skill) => {
        const skillPill = document.createElement("span");
        skillPill.className = "skill-pill";
        skillPill.textContent = skill;
        skillsContainer.appendChild(skillPill);
    });
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProject(currentProjectIndex);
}

function prevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProject(currentProjectIndex);
}

document.getElementById("next-project").addEventListener("click", nextProject);
document.getElementById("prev-project").addEventListener("click", prevProject);

updateProject(currentProjectIndex);