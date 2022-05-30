const { scrapeGpus } = require("./gpus");
const { scrapeCpus } = require("./cpus");
const { scrapeRam } = require("./ram");

module.exports = {
  scrapeGpus,
  scrapeCpus,
  scrapeRam,
};
