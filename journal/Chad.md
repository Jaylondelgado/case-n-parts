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
