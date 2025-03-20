const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the public directory
app.use(express.static(path.resolve(__dirname, "public")));

// Catch all routes and return index.html for client-side routing
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 12345;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));