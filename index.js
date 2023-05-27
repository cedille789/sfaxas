const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const user = { id: "", color: "skyblue" };

app.get("/", (req, res) => {
  res.render("index", { user });
});

app.get("/signup", (req, res) => {
  res.render("signup", { user });
});

app.get("/login", (req, res) => {
  res.render("login", { user });
});

app.use((req, res, next) => {
  res.status(404).render("404", { user });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
