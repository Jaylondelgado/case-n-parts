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
