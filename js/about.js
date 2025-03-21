// Select elements
const buttonsContainer = document.querySelector(".buttons-container");
const contentDisplay = document.getElementById("content-display");
const backButton = document.getElementById("back-btn");

// Function to show content and hide buttons
function updateContent(section) {
    contentDisplay.innerHTML = contentData[section];  // Load content
    buttonsContainer.classList.add("hidden");  // Hide buttons
    contentDisplay.style.display = "block";    // Show content
    backButton.style.display = "block";   // Show back button
}

// Function to go back to buttons
function goBack() {
    contentDisplay.style.display = "none";  // Hide content
    backButton.style.display = "none";   // Hide back button 
    buttonsContainer.classList.remove("hidden");   // Unhide buttons

}

// Add event listeners to buttons
document.getElementById("personal-statement").addEventListener("click", () => updateContent("personal-statement"));
document.getElementById("blog").addEventListener("click", () => updateContent("blog"));
document.getElementById("other-things").addEventListener("click", () => updateContent("other-things"));
backButton.addEventListener("click", goBack);


console.log("About page script loaded");

// Content for each section
const contentData = {
    "personal-statement": `
        <h3>Personal Statement</h3>
        <div>
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
        </div>`,

    "blog": `
        <h3>Blog</h3>
        <p>Welcome to my blog! Here, I share my thoughts on technology, software development, and personal growth.</p>
    `,

    "other-things": `
        <h3>Other Things</h3>
        <p>Here are some fun facts and side projects I'm working on!</p>
    `
};
