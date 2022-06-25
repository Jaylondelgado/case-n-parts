## 5/27/2022

\* **Successfully grabbing data with web scraper**

Took some time learning a few packages (Axios, Cheerio, Express) as we were unable to source an API to pull product data from. Accomplished creating a web scraper using those tools to parse data from a specific web site gathering information for computer parts. Worked together with team to refine the scope of our project, scaling down some ideas for now until we get the main parts of the model dialed in. Drafted a design for our models of entities, value objects, and bounded contexts.

---

## 5/29/2022

\* **Front end additions**

I installed react-browser-dom to route links for the navigation bar. The skeleton for the navigation was set up in the Nav.js and App.js. For the nav list, we wanted to try implementing style-components onto the bar as opposed to using bootstrap so I spent some time looking up the methods. It is very functional and could be argued that it is easier to manipulate by simply nesting what you want styled between html tags of variable name your style is exporting from the js file.

---

## 5/31/2022

\* **Carousel on the main page**

worked on the front page with Jaylon, finding a style-component carousel to showcase the cases for Case N Parts on the front page. It took some time converting an older package we found on npm, but once we sorted that out the images can be seamlessly transitioned and can also allow for how many images you want to scroll or be shown at one time. It also has an infinite scroll so users can constantly flip through the same portions.

---

## 6/1/2022

\* **Model Refactoring, footer implementation**

After meeting with the team, it became apparent that the difficulty and scope of our project was greater than we anticipated. Going over our models, the motherboard slots proved to be a bit of a conundrum where that table would need to be connected to a specific pc part that had its own table, creating a tangled web of foreign keys. We've simplified this idea and created a new model, where everything connects to the case.

On the front end, a footer was added with all the nav links as well as social media links.

---

## 6/2/2022

\* **Working on getting data to the front end**

Switched from front end to working on some backend portions of the project to get more comfortable using FastAPIs. Thanks to my teammates I was able to reference their initial work to get some pages down (PSU and HDD). After that we made a breakthrough in pulling our first bits of data, fetching a table of hard drive descriptions to the front end.

---

## 6/3/2022

\* **Troubleshooting the backend**

Tidied up the front end to have drop down forms for all the pc parts. Spent time trying to figure out how to implement the data onto the front end with images and how they will be respond to portions of the page when clicked on. Likely lots of if statements.

The backend for sql was a challenge but we've managed to finally post a build which is huge.

---

## 6/6/2022

\* **User authentication and more backend implementation**

Had a meeting with Curtis going over the authentication portion of our user login and understanding it's functionality. We worked as a team to get that into our SQL database to actually house that data so the user will be in the system. After some trial and error the problem was sorted and we began shifting out focus to the front end, gathering all of our data into a single page for the create build page which is the most important portion of this application.

---

## 6/7/2022

\* **Add case image table**

After some discussion with the team, we decided we needed another table for solely for the computer case images that will be referenced to the builds when a user creates one. This way, we can map and populate their build onto their "View Builds" page. Once that was added, we found some bugs trying to post as we did some other additions where we included brand name column to identify parts.

---

## 6/8/2022

\* **Working on create builds page**

Got the grid more or less in the position we want the parts to be displayed and the central image. Tinkering with bootstrap was tricky but so far the layout is close to what I've envisioned. The drop downs for the color and size of the case have some alignment issues but are populating the data so thats a plus. I hit a wall this week working on the project, but my team picked me up and we were able to get some things moving today.

---

## 6/9/2022

\* **Create Build troubleshoot**

The front end has been a tricky trying to understand padding, margins, and where to place them when using bootstrap. We worked as a team trying to get things onto the page within a card, reading further into documentation and learning how to override bootstrap locally. After several hours of experimenting we landed on something good. Afterwards we tackled an onClick of a modal row to send back data to the state as well as another onClick from the menu to change colors when the user wants to clicks another option.

---

## 6/10/2022

\* **Buggy logged in issue and more front end grid mishaps**

It turns out MacOS does fully close the application until you force quit out of it. This was causing cookie issues where you stayed logged in even if there was not a user in the system. Working with Curtis, we commented out a single line of code and checked the JWT to confirm the login issue. Once that was sorted, that automatically fixed another login issue we were having. It's all tied to the JWT! After that we continued messing with the front end, working on footer placement and tidying up some loose ends in the Nav bar.

---

## 6/13/2022

\* **Posting our first pc build to the front**

After class we got together to work out finally getting our pc build to post. We referenced some old projects to get an idea of how to implement our post using hooks through creating states and useEffects. After modeling our empty dictionary through the fastAPI output, and lots of console logs, we push our first pc build to the database. Bootstrap was tweaked with to have an onClick where it closes when you click a row item.
We also decided that we would forgo the ratings system and use a likes system instead since getting average ratings would be a tedious task where we would manually create multiple builds and ratings to see a result.

---

## 6/14/2022

\* **Removing hard code from CreateBuild JSON post**

Some items were, and still are, missing dynamically from the JSON builds post method which included the name of the build, the total counts for specific pc parts, the case image and size. I created a hook to put the name form into the grid and got that working. Afterwards I pair coded with chad to get the picture url to post into the JSON body. It was a lot more difficult than we anticipated, with Chad running console logs everywhere and hacking a method that finally pulled a string comparison into the JSON body. We also ran into a bug where our fetches were infinitely fetching data and sorted that out. Turns it it was recursively calling itself in the useEffect.

---

## 6/15/2022

\* **Reformatting create build page**

The UI went through another round of remodeling where the parts buttons were shifted to be below the forms. We were able to adjust the buttons to be the same widths as the forms. A split button was added to the pc parts that have an adjustable amount based on the slots of the motherboard. The functionality has not been implemented yet but another design issue we are deciding on is if there will be a count option versus a single pc component. Troubleshooted with the team and found and found a react-router-dom `useParam` to pull the the `id` from the build to populate a detail page.

##6/17/2022

\* **Added trash can to my builds, handle changes for create page**

A delete button was added to the user's my builds page where each build card now has a trash can that can clicked on to remove their build entirely. Jarett created the delete route and I plan to hook that up into the front soon. I forgot that I had installed the font-awesome package several weeks ago and was able to pull a cool icon from there. On the create page, I added a css `d-none` function for when a build is created, the create button will disappear and an alert take its place telling you it's successful and give you two new buttons with an option to create another build or view the my builds page. I was able to reset the state of each form but am still working on getting the actual image to reset as well. If you clicked on a different color and created a build, and wanted to make another build, the form wil reset but the picture will not.

Learned a bit more of the fastAPI by debugging the rating system. After pulling down from the main, our builds were not populating. Troubleshooted the problem with the team, solving the issue fairly fast.

---

## 6/20/2022

\* Pagination, restructured columns in list builds, working trashcan!"

After a lengthy search, I found a package that readily paginates for you in react. I saw other options to manually create that functionality but with a quick install and perusing the documentation, it was easily implemented. Currently it is only in the `ListBuilds` page, but that will be added to the `myBuilds` page soon. I was finally able to get the columns to line up correctly as well, only mapping three per row before starting a new one. I pair programmed with Chad earlier, dealing with the same bug `422 unprocessable entity` on the `UpdateBuild` page while I had that issue on the `CreateBuild` page. We spent an hour trying to find the issue and Jarett hopped on, with a fresh pair of eyes pinpointed the issue shortly after where a key was mistyped and some other keys needed to be added to the json body.

Once that was sorted, I wanted to more or less have CRUD operational on our front end, attaching the `delete` method to our trash can icon in the `myBuilds` page. After some promise handling and authorization issues, the button works!

---

## 6/21/2022

\* Understanding CI/CD, troubleshooting everything

We are in a good spot where every member has a task they are working on. I split up with Jaylon to work on getting our application working with continuous integration (CI) while he worked on a unit test. I went back to review CI on Learn from a few weeks and for the most part it makes sense but at the same time as I delve further into the integration it gets more confusing. I'm trying to understand the `$CI_COMMIT_TAG` and if I need to create a tag or initially or it will automatically take the first tag that gets committed and pushed to the repo. I will spend more time tomorrow sorting that out.

The other portion of my day was spent troubleshooting everyone elses code. Once Jaylon got the unit test set up, as a team we were able to get it to pass, utilizing the convenience of FastAPIs docs and test JSON bodies. Also helped Chad and another classmate troubleshoot more bootstrap issues. Was able to debug Jarett's public/private button where the button did not change.

## 6/22/2022

\* More unit testing and accidentally deleting data

Continued troubleshooting with the team front end bugs followed by pair programming with Jaylon to get unit tests working for our build. After getting the inital post to work, things started breaking. We received some guidance and started using `import requests` which later turned out to be a really bad idea versus the documented `client.get/put/delete` option. `requests.get` make an http call directly to the database as opposed to a fake database, so it manipulates the actual raw data which is terrible. We kept making tests and they were passing until they weren't. We ended up deleting everything from the database with our pytest function when it ran, which lead to many things failing. Curtis came in and saw our error and had us remove `requests` and guided us through some formatting issues. We started back from ground zero and worked out way to 4 passing tests by 9pm with the help of Jarett.

I black formatted the entire api file as well as made some minor refactoring of a few files.

## 6/23/2022

\* error handling, quick unit testing, CI/CD understanding

The application has little to no error handling so we wanted to get at least a 404 page when going to the wrong link. I set up a redirect with a function component that renders a simple "Build not found" line. I learned that routing a path with just an asterisk means any page that is not defined otherwise. I then added error handling in the back on for a `detailBuilds` where if the id does not exist, it will give a 404. Ran into some errors before asking the team for debugging help which was a quick fix. Only had to delete `list` from the return in our model.

Curtis later came in to walk us through the CI yaml file with extensive guidance to implement the necessary variables and keys to get it integrated. We got all 4 check marks in the `Test` and `Build` stages but kept erroring in the deployment. We found some bugs where the `ghi/build` should have actually been `ghi/case-n-parts/build` and another item should have been nested between curly braces, followed by a missing api call. But alas, our deployment on heroku had hit a wall where the site currently returns an empty page with a sad `{"detail":"Not Found"}`. Tomorrow it will be fixed!

## 6/24/2022

\* Deployment to Heroku nightmares

We continued this morning with deployment woes. Curtis came in and adjusted some parts of our code to work with `pages` in gitlab. Once that was deployed, we went back to debug some further issues. After again trying a slew of things, none of our tables were populating. We first tried making a user but an error occurred where the tables did not exist. After several hours of troubleshooting, I entered the heroku postgres CLI and manually added our tables to great success. I was then able to create a user and enter the authenticated portion of the application. This lead to another issue where some tables did not populate data. Curtis came in and guided us to note that the back end routes must match the front end. We could either have backslashes or no backslashes where both front and back end needs to match up. We opted for removing the frontend trailing backslash and the whole website works seamlessly. `https://n-f-c.gitlab.io/great-value/` is live and fully operating! Done and done working with a fantastic group of folks.
