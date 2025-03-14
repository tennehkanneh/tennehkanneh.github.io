function loadPage(page, event = null) {
    if (event) {
        event.preventDefault();
    }

    fetch(`/public/views/${page}.html`)
        .then(response => {
            if (!response.ok) throw new Error("404 PAGE NOT FOUND Page");
            return response.text();
        })
        .then(html => {
            document.getElementById("content-area").innerHTML = html;
    
        })
        .catch(error => {
            console.error("Error loading content:", error);
            document.getElementById("content-area").innerHTML = "<p>Error loading page.</p>";
        });
}

window.addEventListener("DOMContentLoaded", () => loadPage('about'));

// Handle back/forward navigation
window.addEventListener("popstate", function (event) {
    if (event.state && event.state.page) {
        const cachedPage = sessionStorage.getItem(event.state.page);
        if (cachedPage) {
            document.getElementById("content-area").innerHTML = cachedPage;
        } else {
            loadPage(event.state.page);
        }
    }
});
