const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const url =
  "https://www.microcenter.com/product/632086/samsung-870-evo-2tb-ssd-3-bit-mlc-v-nand-sata-iii-6gb-s-25-internal-solid-state-drive";

app.get("/", function (req, res) {
  res.json("This is my scraper boi");
});

app.get("/results", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const descriptions = [];
      $(".spec-body", html)
        .find("div")
        .each(function (i) {
          descriptions[i] = $(this).text();
        });
      const obj = {};
      for (let i = 0; i < descriptions.length; i += 2) {
        obj[descriptions[i]] = descriptions[i + 1];
      }

      res.json(obj);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
