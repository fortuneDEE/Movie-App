const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/favorites", (req, res) => {
res.sendFile(__dirname + "/public/favorites.html");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
