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
