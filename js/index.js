const navigateTo = url => {
    history.pushState(null, null, "#" + url); // No leading slash
    router();
};

console.log("Loading Index JavaScript");

const router = async () => {
    const hash = location.hash.slice(1) || "about"; // Default to "about" instead of "/"

    const routes = [
        { path: "about", view: "/view/about.html" }, 
        { path: "timeline", view: "/view/timeline.html" },
        { path: "projects", view: "/view/projects.html" },
        { path: "contact-me", view: "/view/contact.html" },
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
        })
        .catch(error => {
            console.error("Error loading content:", error);
            document.getElementById("content-area").innerHTML = "<p>Error loading page.</p>";
        });
};

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
