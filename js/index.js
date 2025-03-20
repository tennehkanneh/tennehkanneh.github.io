const navigateTo = url => {
    history.pushState(null, null, "#" + url); // Hash-Based Routing
    router();
};

console.log("Loading Index JavaScript");

const router = async () => {
    const hash = location.hash.slice(1) || "/"; //Get hash, or default to "/"

    const routes = [
        { path: "/", view: "/views/about.html" },
        { path: "/timeline", view: "/views/timeline.html" },
        { path: "/projects", view: "/views/projects.html" },
        { path: "/contact-me", view: "/views/contact.html" },
    ];

    let match = routes.find(route => location.pathname === route.path) || routes[0];

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
            document.getElementById("content-area").innerHTML = "<br><br><<br><p>Error loading page.</p>";
        });
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.getAttribute("href"));
        }
    });

    router();
});
