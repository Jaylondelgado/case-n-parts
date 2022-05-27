const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const url =
  "https://www.microcenter.com/category/4294966996,4294818892/amd-motherboards";

app.get("/", function (req, res) {
  res.json("This is my scraper boi");
});

app.get("/results", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const descriptions = [];
      $(".product_wrapper", html).each(function () {
        const title = $(this).text();
        const url = $(this).find("a").attr("href");
        descriptions.push({
          title,
          url,
        });
      });
      res.json(descriptions);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

async function getStuff() {
  try {
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);
    const descriptions = [];
  } catch (error) {
    console.error(error);
  }
}

// npm run start in terminal to begin scraper
