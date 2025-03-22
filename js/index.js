console.log("Loading Index JavaScript");

// Function to navigate to a new section
const navigateTo = url => {
    history.pushState(null, null, "#" + url); 
    router();
};

// Routing Function
const router = async () => {
    const hash = location.hash.slice(1) || "about";

    const routes = {
        "about": { view: "/view/about.html" }, 
        "timeline": { view: "/view/timeline.html" },
        "projects": { view: "/view/projects.html" },
        "contact-me": { view: "/view/contact.html" }
    };

    let match = routes[hash] || routes["about"];

    fetch(match.view)
        .then(response => {
            if (!response.ok) throw new Error("404 PAGE NOT FOUND");
            return response.text();
        })
        .then(html => {
            document.getElementById("content-area").innerHTML = html;
            setupPage(hash); // Call function to set up specific page interactions
        })
        .catch(error => {
            console.error("Error loading content:", error);
            document.getElementById("content-area").innerHTML = "<p>Error loading page.</p>";
        });
};

// Ensure routing works when URL hash changes
window.addEventListener("hashchange", router);
window.addEventListener("load", router);

// Global Event Delegation for Navigation
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.getAttribute("href").substring(1));
        }
    });
});

// ----------------------------------------------------> About JavaScript Functions and Dinamically Loded Conent
const setupPage = (page) => {
    if (page === "about") {
        console.log("Setting up About page interactions.");

        // Ensure elements exist before attaching event listeners
        const buttonsContainer = document.querySelector(".buttons-container");
        const contentDisplay = document.getElementById("content-display");
        const backButton = document.getElementById("back-btn");

        if (!buttonsContainer || !contentDisplay || !backButton) return;

        // Event Listeners
        function showSection(id) {
            contentDisplay.innerHTML = contentData[id];
            contentDisplay.style.display = "block";
            buttonsContainer.style.display = "none";
            backButton.style.display = "block";
        }

        function goBack() {
            contentDisplay.innerHTML = "";
            contentDisplay.style.display = "none";
            buttonsContainer.style.display = "grid";
            backButton.style.display = "none";
        }

        document.getElementById("personal-statement-btn").addEventListener("click", () => showSection("personal-statement"));
        document.getElementById("blog-btn").addEventListener("click", () => showSection("blog"));
        document.getElementById("other-things-btn").addEventListener("click", () => showSection("other-things"));
        backButton.addEventListener("click", goBack);
    }
};

// About Page Content
const contentData = {
    "personal-statement": 
        `<h3>PERSONAL STATEMENT</h3>
        <div id="statement">
            <p>Hello All.<p>
            <p> My name is Tenneh Kanneh and I’m driven by opportunities to witness the tangible impact of my work. 
                I find satisfaction in observing both the quantitative and qualitative results of my work, 
                whether it’s seeing how users interact with my creations, or analyzing the statistical improvements 
                my efforts have achieved.
            </p>
            <p> As a child of refugees, it was common for me to help my parents with household tasks, 
                including navigating the internet as more companies went digital. Naturally, being the youngest in the family 
                it was assumed I would understand the technology. However, many websites and apps were not user-friendly 
                or functioning as expected, which made any hiccup seem like my fault in my parents' eyes. 
                This left me frustrated and determined to improve digital experiences.
            </p>
            <p> I was finally able to pursue my passion by earning an Associate's degree. 
                Currently, I am pursuing a Bachelor's degree in Computer Science and a certificate in UX Design. 
                This combination allows me to develop a comprehensive skill set that encompasses both the technical 
                and user-centric aspects of software development, demonstrating my commitment to creating better digital 
                experiences and pursuing the passions that drive me.
            </p>
            <p> Looking ahead, I am excited about the opportunity to further my career in software development 
                and full-stack development. I am eager to bring my enthusiasm, innovative mindset, 
                and dedication to creating user-friendly digital experiences to new challenges and opportunities. 
                Although I may not have extensive professional experience yet, my academic background and passion for continuous 
                learning have prepared me to contribute effectively. 
            </p>
            <p> Thank you for visiting my portfolio. I hope you enjoy exploring my work! </p>
        </div>`
    ,

    "blog": 
        `<h3>BLOG</h3>
        <img src="/assets/construction.gif" alt="Files Under Construction" 
        style="width:500px; height:500px; display: block; align-content: center;">`
    ,

    "other-things": 
        `<h3>OTHER THINGS</h3>
        <img src="/assets/construction.gif" alt="Files Under Construction" 
        style="width:500px; height:500px; display: block; align-content: center;">`
};
