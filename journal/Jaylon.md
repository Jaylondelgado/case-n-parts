## May 27, 2022
* Creating the Docker-compose.yml file and installing requirements to be ready for next week.

We worked on creating the webscraper and had to debug in order to get it to pull and show the exact data we need. We went on Excalidraw and drew out the data models and got a good idea on what needed to be scaled back.

## May 29, 2022
* Front end additions

I helped setup the skeleton for the front end with Jason. Got the links working for the navbar.

## May 31, 2022
* Carousel and Style components

Worked with Jason front end to find a style component carousel to use on our projects home page. After finding npm things really started rolling. Theres an infinite scroll so users can constantly look at whichever picture they want.


## June 1, 2022
* Project Scaling and refactoring

The team started off the day with a meeting to gather everyones thoughts and progress thus far. After talking with everyone, we decided to scale the project down a bit and upscale as we move along. We refactored in order to have all pc parts connect to the case that we are "selling".


## June 2, 2022
* Data to front end

Working with everyone, I was able to pull the data for the mobo, gpu, cpu, and ram to the front end. We can now see a list of each part in our database on the front end.


## June 3, 2022
* Data to front end

After team troubleshooting/debugging I continued my work from yesterday, making sure everything worked correctly and pulled the information we deemed necessary.The backend for sql was a challenge but we've managed to finally post a build which is huge.


## June 6, 2022 

* Authentication and More fullstack coding

Today started off with a meeting with Curtis and he quickly filled us in on how the authentication works. After replacing his code with code that works with our models and queries, we got it fully working and you can now create multiple users, login, signout, and the password is hashed out. After doing that, with the help of the team we were able to create and list builds in Insomnia. I then created a file to fetch the builds in our data to the front end, which is currently fully functioning.

## June 7, 2022

* Working on FastAPI

Today started off with Jarett catching me up with his code on the back end. I then worked on implementing the PUT request for the builds which was not an easy thing to implement but i got some of it done. There was a lot of debugging and trial and error. I ended the day being able to update everything except the case parts of the build. I kept getting an error saying syntax error near case.


## June 8, 2022 

* Working on FastAPI

I just started off and was able to finish the PUT request. The error I was gettign was becaue case needed qotes around it, once i implemented that it went smoothly. The team then took some time to brainstorm what we should put in the footer of our website. After lunch i decided to work on our request to List all of the builds. Before fixing it, it was showing all details of the build and each part, the team and I decided it would be best to only show necessary information. Doing so, caused me to have to create a new model in parts.py for each part in order to reference to that model and show only important information. Now, its the end of the day and I am realizing I am going to have to update my buildfetch on the front end since we are now presenting different data.

## June 9, 2022 

*Create a build

The day started off early with the team and I trying to troubleshoot why the modals weren't displaying hte correct data. after about 2 hours of documentation, changing names, and more documentation, we were able to fix the id for each modal in order to display to correct data.