const navigateTo = url => {
    history.pushState(null, null, "#" + url); // No leading slash
    router();
};

console.log("Loading Index JavaScript");

const router = async () => {
    const hash = location.hash.slice(1) || "about"; // Default to "about" instead of "/"

    // includes path name that will be in url, view and javascript paths
    const routes = [
        { path: "about", view: "/view/about.html", script: "/js/about.js" }, 
        { path: "timeline", view: "/view/timeline.html", script: "/js/timeline.js" },
        { path: "projects", view: "/view/projects.html", script: "/js/projects.js" },
        { path: "contact-me", view: "/view/contact.html", script: "/js/contact.js" },
    ];

    let match = routes.find(route => hash === route.path) || routes[0];

    // Fetch the content and update `#content-area`
    fetch(match.view)
        .then(response => {
            if (!response.ok) throw new Error("404 PAGE NOT FOUND");
            return response.text();
        })
        .then(html => {
            document.getElementById("content-area").innerHTML = html;

            if (match.script) {
                loadScript(match.script)
                    .then(() => console.log(`${match.script} loaded successfully`))
                    .catch(() => console.error(`Failed to load ${match.script}`));
            }
        })
        .catch(error => {
            console.error("Error loading content:", error);
            document.getElementById("content-area").innerHTML = "<p>Error loading page.</p>";
        });
};

// Function to dynamically load a script
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
            resolve(); // Don't load again if it's already loaded
            return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}


// Ensure router updates when URL hash changes or on first load
window.addEventListener("hashchange", router);
window.addEventListener("load", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.getAttribute("href").substring(1)); // Remove "#" from href
        }
    });
});
