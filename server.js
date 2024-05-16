const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});