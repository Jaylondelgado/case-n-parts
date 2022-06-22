## May 27th, 2022

Today I worked on:

- Scaling down the project a bit to be more in scope for the time we have.
- Getting the project running on Docker.

Me and my fellow team members talked about the project and the scale of what we were making.
We decided to scale back some of the features we had, so that we could make it in the
alloted time.

We also worked on setting up Docker for the project together so we could all start pairing
and working on different parts of the project.

We decided that 2 of us would start on the skeleton of the front end, and 2 of us would start
bringing the data into the back end.

Today, through many errors, I solidified some of the knowledge that I have of a Dockerfile.
Specifically, the context part of the file.

## May 29th, 2022

Refactored the web scraper to get rid of the use of Express, it wasn't necessary.

Discovered the Commander package, which lets you make your own command line utilities and commands.

## June 1st, 2022

Met with the team talked about scoping our project down some more. Just so that we can get out an MVP in the time alloted. The motherboard slots were a point of contention, so after talking, we decided to simplify the model and make everything connected to the build itself.

## June 2nd, 2022

Worked a lot on refactoring the sql schema for our new use cases. Cleaned up a lot of the schema, also added some more fields where it felt like some parts were missing important information.

Got a greater understanding of normalizing tables in a relational database. Being able to pull stuff out into it's own table and then reference it is becoming a little more comfortable.

Also discussed a little with the team on what front-end React library we wanted to use to help us with front-end design.

## June 3rd, 2022

It was mainly a debugging day, helping a team member work through some FastAPI bugs with the RestAPI calls for creating a build.

We decided for each part, we needed a bit more data, so added a brand name for most parts and a chipset name for the cpu in the schema so they were more easily identifiable on the front-end.

We were able to start making api requests to the back-end and get drop-downs of the data showing on the front-end.

I'm starting to get a little bit more familiar with FastAPI. Still feels pretty foreign, but I'm getting a lot of practice writing out SQL statements, which I'm getting a much better understanding of.

## June 6th, 2022

Integrated authentication with the application. It was a major learning opportunity. With an instructor's help, we were able to get it working.
I was able to learn about how authentication works with FastAPI

## June 7th, 2022

Me and Jaylon have switched roles a little bit now. He wanted to work a bit on the backend and I wanted to work on the frontend a bit. So today I decided I was going to get all the pieces for the homepage in place. Decided that due to time constraints and not knowing CSS as well as we would need to, to do everything from scratch, we're going to use more Bootstrap components so that we can more easily make a site design that is mobile friend and scales well.

I laid out the homepage to display a top 3 builds and a carousel of our cases. Still haven't added the data to the page yet, but the layout is there.

Learned a bit more about bootstrap today. Implementing their carousel took a bit more time than I thought it would. Though looking at old documentation didn't help. Once I changed to the right version, I was able to implement it easly.

## June 8th, 2022

I spent most of the day helping my team members debug. Helped on the back-end with errors where we weren't getting the right data. Turns out, it was just a minor change to the select statement.

I also helped on the front-end. Jason had some problems with grid, and looking through the documentation for bootstrap and working together, we were able to get the layout working somewhat. Still not how we want it, but still, it's working.

I also did a bit of image editing work, to get a few different images for the case that we could switch between when a user selected a color. I was very happy with the progress on that. Using state in functional components to help with that was a learning experience. While I have knowledge with React Hooks, I'm still learning, and that helped solidify that knowledge even more.

## June 9th, 2022

Today was a major learning point for bootstrap. Figuring out how everything works together. Figuring out how to lay everyhing out was a struggle. But we got a basic layout working with cards for our list views, along with some basic buttons and tables to list our data for create builds.

Getting the onClick to work for a table so that we could return the right data and not just the data in the td tag was a bit of a struggle, but we learned that in the onClick, if you just pass in the current table row that you're looping over, you can get all of that data back on an onClick event. That was very handy to learn.

## June 10th, 2022

We were having issues where the cookies of the site were staying even when you closed down the browser. With help, we were able to solve that issue and have the cookie for the user not expire and only go away when you closed the brower. That helped solve the issue of a cookie expiring if you went away from your keyboard for a time and would get automatically logged out. That was the major issue that was solved today.

We also got the layout of the view builds and my build pages working. It's not quite mobile friendly yet, but on a desktop, it displays fine.

We're learning a bit more about how to use bootstrap to do mobile friendly designs. Learning that they have different break points for different sizes of screens.

## June 13th, 2022

Worked on getting post requests working from the front-end. I made state for holding the values that would make up the post request. I used a `useEffect` to trigger updating that state once the user made a choice on a part.

I was able to get some practice with the spread operator in javascript to help set the values on the build state. Took a little bit of help from my teammates to get it working.

On a post request, we also got it tied to the user, which was very cool. With Jarett's help, he told us what to change on the link of the fetch request to get it tied to the user. We had to retrive the token that was currently being used for the user that was logged in, and then set it to use those creditentials. Everytime we have authentication questions or back-end questions, Jarett is always able to help us find a solution. Really great teammate and I've been learning a lot from him.

We also decided we wanted to change the ratings to be a like system instead of just a star rating system. So one user gets one like per build.

## June 14th, 2022

Worked to add in a dynamic picture url for the object you will submit as JSON when you change case colors on the front end. Was harder than originally thought. We were just going to add in a `useEffect` that ran once a user selected a color, but we kept getting `undefined` and couldn't figure out why. I realized we could instead move the code that we had into the `handleColorChange` function that we had. Once we did that, we just did some mapping and filtering over the picture urls we had stored in the database, and since each picture url had the name of the color somewhere in it's link, I just used the built in JavaScript `.includes` function to see if it had the name of the color that was selected. Once it did, I did a filter over it to remove the `undefined` values, then set the `casePicture` state to that value.

Also debugged a `useEffect` for our `setBuild`. It was running constantly, which is not what we want. Turns out we put `build` in the dependencies of the `useEffect`, and that was causing it to run over and over. Once we removed that, everything worked fine.

## June 15th, 2022

Started working on the detail build page. Had a bit of a struggle on how to dynamically get the build id into the url path. But after reading some React Router documentation, I learned that I could just add `:id` to the `Route` path and that would work.

After that, I had another issue, where I needed the id that I was using in the url so that I could make a fetch request to the back-end for that build. I went back to the React Router Dom documentation, and learned about the `useParams` hook, that returns an object of key/value pairs of the dynamic params from the current URL that were matched by the `<Route path>`.

## June 17th, 2022

Worked some more on the detail page. Went through a couple of layouts. Started out by outputting the data for the build into a table that would display on the page, but whenever we'd scale it down, the table would break because you can only scale a table down so far, and so the design was not responsive friendly. Finally settled on a design where we'd lay out the different parts as cards on the screen that would have the details of each part, then when we scaled down, we'd reorder them so that they looked good on a mobile screen.

I had an aha moment today when I realzied the bootstrap grid system is set up to be a max of 12 columns. Once I realized that, all the `col-sm-4` stuff made sense. It's just dividing up the different portions of the grid. So a 4 means there's 8 columns left over. Made laying stuff out a lot easier.

## June 21st, 2022

It was a busy weekend, so I worked a bit here and there. Forgot to journal some days, so here's a summary.

On Saturday, I went full on, on the detail page for a build. I went through about 4 different layouts, because I couldn't get the tables in bootstrap working in a good way when I scaled down, that looked decent. Kept sending screenshots to my team to make sure they liked the design. Eventually settled on a design with a bunch of different cards for each part.

I learned a bit more about inner grids, how to make that work with bootstrap. You just have to put another row inside of the column, and then you can start building it.

Sunday was all about starting the update build page. I had trouble getting the data to auto populate with what was being brought in by the build request. I ended up doing some reformatting, where I made an object that had all the build stuff it needed, and then in the `PUT` request, making another object that I could send that had the right keys matching up. This was because when I was fetching the data from the back-end, each part was coming back as an object. I needed the properties of those objects for use elsewhere in the JSX, so I decided to make two objects for each purpose. That was my entire Sunday, or at least the time I devoted to it.

Monday was further implementation on the update build page. I had the objects working now. So I just made the update button redirect me to the detail of the build I was updating. I used the react router dom hook, `useNavigate` which returns a function that lets you navigate programmatically. This let me set up a redirect once the form was successfully submitted.

Today, Tuesday June 21st, I worked on implementing the count for the gpu and ram on both the create and update build pages. I learned about `Array` and `Array.from` in JavaScript today. `Array` lets you create a new array, which I used to create an array that had the length of the amount of slots a motherboard had for that part.
I also then divided those by the amount of slots the selected GPU would take. This gave me the maximum number of that part they could select.

I then used `Array.from()` to create a new array from what I had just made with the `Array` function.

After that, I mapped over the array I had, outputting buttons that I set to numbers that showed how many cards each button was adding.

This took up a lot of my time today, due to having to figure out the math I needed to do and learning about those `Array` functions.
