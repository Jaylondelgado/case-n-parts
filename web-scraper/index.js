<<<<<<< HEAD
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
=======
const { program } = require("commander");

const { scrapeGpus } = require("./src/scrapers");
const { scrapeCpus } = require("./src/scrapers");

const PartTypes = require("./src/PartTypes");

// program.option('-p, --part <part>');

// const options = program.opts();

// console.log(program.args);
// console.log(options);

const scrapers = {
  [PartTypes.GPUs]: scrapeGpus,
  [PartTypes.CPUs]: scrapeCpus,
};

program
  .command("scrape")
  .description(
    `Scrapes the Microcenter website for various parts. Valid types are: ${Object.values(
      PartTypes
    )}`
  )
  .argument("<part>", "The part type to scrape.")
  .action(async part => {
    const scraper = scrapers[part];

    if (!scraper) {
      console.log(`Unknown part: ${part}`);
      console.log(
        `Please send in a known type from among: ${Object.values(PartTypes)}`
      );
      return;
    }

    await scraper();
  });

program.parse();
>>>>>>> deac092b92cea3fe9e79d75d1af38d080ed3fe77
