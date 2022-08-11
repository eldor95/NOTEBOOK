const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const homeRoutes = require("./routes/home");
const notebooksRoutes = require("./routes/notebooks");
const addRouter = require("./routes/add");

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use("/", homeRoutes);
app.use("/notebooks", notebooksRoutes);
app.use("/add", addRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server has been started 3000 ...");
});
