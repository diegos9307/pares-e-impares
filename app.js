const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let template = "";
  for (let i = 1; i <= 50; i++) {
    template += `<p>${i} Soy ${i % 2 === 0 ? "Par" : "Impar"}<p>`;
  }
  res.status(200).send(template);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
