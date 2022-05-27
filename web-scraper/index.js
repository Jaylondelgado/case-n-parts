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
        .each(function (i, e) {
          const head = $(this).text();
          descriptions[i] = $(this).text();
          // console.log("THIS!", this);
          // const body = $(this).next().text(".spec-head");
          // const url = $(this).find("a").attr("href");
          // descriptions.push({
          //   head,
          // body,
          // url,
          // });
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

// async function getStuff() {
//   try {
//     const html = await axios.get(url);
//     const $ = cheerio.load(html.data);
//     const descriptions = [];
//   } catch (error) {
//     console.error(error);
//   }
// }
