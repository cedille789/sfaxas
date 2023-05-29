const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");

const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
nunjucks.configure("views", { express: app });

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

const user = null; //{ id: "Cedille", color: "skyblue" };

app.get("/", (req, res) => {
  res.render("index", { user });
});

app.get("/register", (req, res) => {
  res.render("register", { user });
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
