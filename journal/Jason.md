## 5/27/2022

\* Successfully grabbing data with web scraper

Took some time learning a few packages (Axios, Cheerio, Express) as we were unable to source an API to pull product data from. Accomplished creating a web scraper using those tools to parse data from a specific web site gathering information for computer parts. Worked together with team to refine the scope of our project, scaling down some ideas for now until we get the main parts of the model dialed in. Drafted a design for our models of entities, value objects, and bounded contexts.

## 5/29/2022

\* Front end additions

I installed react-browser-dom to route links for the navigation bar. The skeleton for the navigation was set up in the Nav.js and App.js. For the nav list, we wanted to try implementing style-components onto the bar as opposed to using bootstrap so I spent some time looking up the methods. It is very functional and could be argued that it is easier to manipulate by simply nesting what you want styled between html tags of variable name your style is exporting from the js file.

## 5/31/2022

\* Carousel on the main page

worked on the front page with Jaylon, finding a style-component carousel to showcase the cases for Case N Parts on the front page. It took some time converting an older package we found on npm, but once we sorted that out the images can be seamlessly transitioned and can also allow for how many images you want to scroll or be shown at one time. It also has an infinite scroll so users can constantly flip through the same portions.

## 6/1/2022

\* Model Refactoring, footer implementation

After meeting with the team, it became apparent that the difficulty and scope of our project was greater than we anticipated. Going over our models, the motherboard slots proved to be a bit of a conundrum where that table would need to be connected to a specific pc part that had its own table, creating a tangled web of foreign keys. We've simplified this idea and created a new model, where everything connects to the case.

On the front end, a footer was added with all the nav links as well as social media links.

## 6/2/2022

\* Working on getting data to the front end

Switched from front end to working on some backend portions of the project to get more comfortable using FastAPIs. Thanks to my teammates I was able to reference their initial work to get some pages down (PSU and HDD). After that we made a breakthrough in pulling our first bits of data, fetching a table of hard drive descriptions to the front end.

## 6/3/2022

\* Troubleshooting the backend

Tidied up the front end to have drop down forms for all the pc parts. Spent time trying to figure out how to implement the data onto the front end with images and how they will be respond to portions of the page when clicked on. Likely lots of if statements.

The backend for sql was a challenge but we've managed to finally post a build which is huge.

## 6/6/2022

\* User authentication and more backend implementation

Had a meeting with Curtis going over the authentication portion of our user login and understanding it's functionality. We worked as a team to get that into our SQL database to actually house that data so the user will be in the system. After some trial and error the problem was sorted and we began shifting out focus to the front end, gathering all of our data into a single page for the create build page which is the most important portion of this application.

## 6/7/2022

\* Add case image table

After some discussion with the team, we decided we needed another table for solely for the computer case images that will be referenced to the builds when a user creates one. This way, we can map and populate their build onto their "View Builds" page. Once that was added, we found some bugs trying to post as we did some other additions where we included brand name column to identify parts.

## 6/8/2022

\* Working on create builds page

Got the grid more or less in the position we want the parts to be displayed and the central image. Tinkering with bootstrap was tricky but so far the layout is close to what I've envisioned. The drop downs for the color and size of the case have some alignment issues but are populating the data so thats a plus. I hit a wall this week working on the project, but my team picked me up and we were able to get some things moving today.
