const education = [
    {
        name: "Associates of Science in Computer Science",
        startDate: "08/2022",
        endDate: "05/2024",
        description: "This associate's degree provided a strong foundation in computer science principles, including programming fundamentals, data structures, and algorithms.",
        imageUrl: "https://picsum.photos/600/400?random=1",
        classes: ["Programming I & II", "Data Structures", "Discrete Math"],
        skills: ["Java", "Python", "C++", "SQL"],
    },
    {
        name: "Bachelors of Science in Computer Science",
        startDate: "05/2024",
        endDate: "Present",
        description: "Currently pursuing a bachelor's degree, focusing on advanced topics such as artificial intelligence, machine learning, and software engineering.",
        imageUrl: "https://picsum.photos/600/400?random=2",
        classes: ["Algorithms", "Operating Systems", "Database Management"],
        skills: ["Machine Learning", "Cloud Computing", "Software Design"],
    },
    {
        name: "Cybersecurity Certification",
        startDate: "09/2023",
        endDate: "12/2023",
        description: "Completed a certification program in cybersecurity, covering network security, ethical hacking, and incident response.",
        imageUrl: "https://picsum.photos/600/400?random=3",
        classes: ["Network Security", "Ethical Hacking", "Digital Forensics"],
        skills: ["Cybersecurity", "Network Protocols", "Security Auditing"],
    },
    {
        name: "Web Development Bootcamp",
        startDate: "01/2022",
        endDate: "04/2022",
        description: "Intensive bootcamp focused on full-stack web development, building projects using modern web technologies.",
        imageUrl: "https://picsum.photos/600/400?random=4",
        classes: ["Frontend Development", "Backend Development", "Database Integration"],
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
];

const experience = [
    {
        name: "Software Developer Intern",
        startDate: "06/2023",
        endDate: "08/2023",
        description: "Developed and maintained web applications, contributing to both frontend and backend features. Collaborated with a team using Agile methodologies.",
        skills: ["Python", "Django", "JavaScript", "React", "SQL"],
    },
    {
        name: "IT Support Specialist",
        startDate: "01/2022",
        endDate: "05/2023",
        description: "Provided technical support to users, troubleshooting hardware and software issues. Managed network configurations and system updates.",
        skills: ["Windows OS", "Linux OS", "Network Troubleshooting", "Customer Support"],
    },
    {
        name: "Freelance Web Designer",
        startDate: "03/2021",
        endDate: "Present",
        description: "Designed and developed custom websites for clients, focusing on responsive design and user experience. Managed client communication and project timelines.",
        skills: ["HTML", "CSS", "JavaScript", "WordPress", "UI/UX Design"],
    },
];


// Get elements for the lightbox
const lightboxContainer = document.getElementById("lightbox");
const lightboxOverlay = document.getElementById("lightboxOverlay");
const lightboxNameElement = document.querySelector(".lightbox-name");
const lightboxDateElement = document.querySelector(".lightbox-date");
const lightboxDescriptionElement = document.querySelector(".lightbox-description");
const lightboxImageElement = document.querySelector(".lightbox-image");
const lightboxClassesSection = document.querySelector(".lightbox-classes");
const lightboxSkillsSection = document.querySelector(".lightbox-skills");
const lightboxClassesPillContainer = lightboxClassesSection.querySelector(".pill-container");
const lightboxSkillsPillContainer = lightboxSkillsSection.querySelector(".pill-container");



window.openLightbox = function (category, index) {
    let displayedInfo;

    if (category === "education") {
        displayedInfo = education[index];
    } else if (category === "experience") {
        displayedInfo = experience[index];
    } else {
        console.error("Invalid category provided to openLightbox:", category);
        return;
    }

    if (!displayedInfo) {
        console.error("No data found for the given category and index.");
        return;
    }

    // Populate lightbox content
    lightboxNameElement.textContent = displayedInfo.name;
    lightboxDateElement.textContent = `${displayedInfo.startDate} - ${displayedInfo.endDate}`;
    lightboxDescriptionElement.textContent = displayedInfo.description;

    if (displayedInfo.imageUrl) {
        lightboxImageElement.src = displayedInfo.imageUrl;
        lightboxImageElement.alt = displayedInfo.name;
        
        lightboxImageElement.style.display = "block";
        lightboxImageElement.parentElement.style.display = "block";
    } else {
        // If no image, hide the image and its container
        lightboxImageElement.style.display = "none";
        lightboxImageElement.parentElement.style.display = "none";
    }


    // Clear previous pills from containers
    lightboxClassesPillContainer.innerHTML = '';
    lightboxSkillsPillContainer.innerHTML = '';

    // Add relevant classes (if available)
    if (displayedInfo.classes && displayedInfo.classes.length > 0) {
        displayedInfo.classes.forEach((className) => {
            const classPill = document.createElement("span");
            classPill.className = "class-pill"; // Assign specific class-pill class
            classPill.textContent = className;
            lightboxClassesPillContainer.appendChild(classPill);
        });
        lightboxClassesSection.style.display = "block"; // Ensure the section is visible
    } else {
        lightboxClassesSection.style.display = "none"; // Hide the entire section if no classes
    }

    // Add skills
    if (displayedInfo.skills && displayedInfo.skills.length > 0) {
        displayedInfo.skills.forEach((skill) => {
            const skillPill = document.createElement("span");
            skillPill.className = "skill-pill"; // Assign specific skill-pill class
            skillPill.textContent = skill;
            lightboxSkillsPillContainer.appendChild(skillPill);
        });
        lightboxSkillsSection.style.display = "block"; // Ensure the section is visible
    } else {
        lightboxSkillsSection.style.display = "none"; // Hide the entire section if no skills
    }


    // Display the lightbox and overlay
    lightboxContainer.style.display = "block";
    lightboxOverlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling of main page
}

window.closeLightbox = function () {
    // Hide the lightbox and overlay
    lightboxContainer.style.display = "none";
    lightboxOverlay.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling of main page
}