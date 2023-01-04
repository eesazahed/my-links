const app = require("express")();

const port = process.env.PORT || 5000;

const links = {
  "eesa": "https://eesa.zahed.ca",
}

app.get("/", (req, res) => res.send("My Links"));

app.get("/:link", (req, res) => {
  if(links[req.params.link]) {
    res.redirect(links[req.params.link]);
  } else {
    res.status(404).send("Route does not exist");
  }
});

app.listen(port, () =>
  console.log(`Running on port ${port}.\n\nhttp://localhost:${port}`)
);

module.exports = app;