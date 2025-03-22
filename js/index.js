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
            `<h3>Personal Statement</h3>
            <div id="statement">
                <p> Lorem ipsum odor amet, consectetuer adipiscing elit. 
                    Urna quam phasellus tristique quisque suscipit congue tortor ut. 
                    Adipiscing vulputate nibh elit class vestibulum platea neque ac ornare. 
                    Pulvinar sagittis rhoncus posuere aliquam pharetra porta sagittis. 
                    Placerat hac taciti sit orci fermentum porta velit sem? 
                    Est pulvinar elit nisi nulla blandit cubilia sapien vehicula? 
                    Ultricies venenatis hac accumsan nisi enim mus. 
                    Mollis tempor sodales ullamcorper suscipit placerat accumsan adipiscing nisl conubia. 
                    Tortor dictum turpis lacinia; convallis laoreet torquent non at.
                </p>
                <p> Elementum finibus orci facilisi felis urna senectus. Et netus dictumst et lacus tempor. 
                    Fermentum ac praesent massa diam massa libero; eros varius. 
                    Pharetra metus adipiscing class massa consectetur massa donec sem consequat. 
                    Turpis arcu ipsum torquent potenti eget sit dis duis consequat. 
                    Nisi ligula magna lacinia vitae vulputate vel ligula mollis. Aliquam netus porta feugiat tellus velit luctus. 
                    Conubia felis inceptos curabitur ante interdum, ultricies potenti eros. 
                    Lorem egestas diam venenatis; neque platea fermentum. Taciti interdum nostra mus; id dictumst rhoncus porttitor.
                </p>
                <p> Tempor ridiculus facilisis cras potenti lobortis. Mollis euismod maecenas dapibus; est tortor curae nisl. 
                    Congue enim proin tellus mattis donec ex. Primis magna parturient ultricies velit praesent egestas senectus. 
                    Turpis taciti taciti turpis arcu malesuada turpis facilisi. 
                    Taciti consectetur felis tempor hendrerit; sodales lacinia vestibulum ipsum gravida. 
                    Suspendisse porta nam condimentum ante urna pulvinar conubia.</p>
                <p> Aplatea rutrum suscipit volutpat ad ornare justo. Facilisis amet nullam tortor arcu potenti morbi pulvinar? 
                    Maximus bibendum natoque, facilisi purus dui fringilla platea nisl himenaeos. 
                    Morbi odio facilisi taciti adipiscing semper rutrum iaculis rutrum. 
                    Interdum nibh donec convallis orci condimentum; elementum aenean nam. 
                    Posuere tempus lacinia gravida placerat adipiscing lacinia vulputate ut. 
                    Vehicula ante donec etiam consequat metus himenaeos dignissim vel praesent. Pretium sapien a leo nullam eros.
                </p>
                <p> Quisque ridiculus justo tellus proin ligula risus massa. 
                    Risus amet nec sed iaculis maximus erat. 
                    Fusce nunc nulla mollis non suscipit vestibulum cras eget augue? Nostra torquent imperdiet natoque aliquam primis dui. 
                    Maximus quisque ante ex iaculis enim lorem. Vo
                </p>
            </div>`
    ,

    "blog": `<h3>Blog</h3><p>Thoughts on technology...</p>`,
    "other-things": `<h3>Other Things</h3><p>Side projects and interests...</p>`
};
