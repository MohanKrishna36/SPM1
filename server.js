const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // To parse JSON bodies

// Route for the index page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for the share page
app.get("/share", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "share.html"));
});

// Route for the view page
app.get("/view", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "view.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
  const dataPath = path.join(__dirname, "data", "experiences.json");

  // Read the existing data
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading data" });
    }

    const experiences = JSON.parse(data || "[]");
    experiences.push(req.body);

    // Save the updated data
    fs.writeFile(dataPath, JSON.stringify(experiences, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error saving data" });
      }

      res.status(200).json({ message: "Data submitted successfully" });
    });
  });
});

// Route to get the experiences
app.get("/getExperiences", (req, res) => {
  const dataPath = path.join(__dirname, "data", "experiences.json");

  // Read the data from the JSON file
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading data" });
    }

    const experiences = JSON.parse(data || "[]");
    res.json(experiences);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
