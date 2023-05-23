const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { user: { id: "Cedille", color: "skyblue" } });
});

app.use((req, res, next) => {
  res.status(404).render("404", { user: { id: "Cedille", color: "skyblue" } });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
