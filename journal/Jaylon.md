## May 27, 2022

- Creating the Docker-compose.yml file and installing requirements to be ready for next week.

We worked on creating the webscraper and had to debug in order to get it to pull and show the exact data we need. We went on Excalidraw and drew out the data models and got a good idea on what needed to be scaled back.

## May 29, 2022

- Front end additions

I helped setup the skeleton for the front end with Jason. Got the links working for the navbar.

## May 31, 2022

- Carousel and Style components

Worked with Jason front end to find a style component carousel to use on our projects home page. After finding npm things really started rolling. Theres an infinite scroll so users can constantly look at whichever picture they want.

## June 1, 2022

- Project Scaling and refactoring

The team started off the day with a meeting to gather everyones thoughts and progress thus far. After talking with everyone, we decided to scale the project down a bit and upscale as we move along. We refactored in order to have all pc parts connect to the case that we are "selling".

## June 2, 2022

- Data to front end

Working with everyone, I was able to pull the data for the mobo, gpu, cpu, and ram to the front end. We can now see a list of each part in our database on the front end.

## June 3, 2022

- Data to front end

After team troubleshooting/debugging I continued my work from yesterday, making sure everything worked correctly and pulled the information we deemed necessary.The backend for sql was a challenge but we've managed to finally post a build which is huge.

## June 6, 2022

- Authentication and More fullstack coding

Today started off with a meeting with Curtis and he quickly filled us in on how the authentication works. After replacing his code with code that works with our models and queries, we got it fully working and you can now create multiple users, login, signout, and the password is hashed out. After doing that, with the help of the team we were able to create and list builds in Insomnia. I then created a file to fetch the builds in our data to the front end, which is currently fully functioning.

## June 7, 2022

- Working on FastAPI

Today started off with Jarett catching me up with his code on the back end. I then worked on implementing the PUT request for the builds which was not an easy thing to implement but i got some of it done. There was a lot of debugging and trial and error. I ended the day being able to update everything except the case parts of the build. I kept getting an error saying syntax error near case.

## June 8, 2022

- Working on FastAPI

I just started off and was able to finish the PUT request. The error I was getting was becaue case needed qotes around it, once i implemented that it went smoothly. The team then took some time to brainstorm what we should put in the footer of our website. After lunch i decided to work on our request to List all of the builds. Before fixing it, it was showing all details of the build and each part, the team and I decided it would be best to only show necessary information. Doing so, caused me to have to create a new model in parts.py for each part in order to reference to that model and show only important information. Now, its the end of the day and I am realizing I am going to have to update my buildfetch on the front end since we are now presenting different data.

## June 9, 2022

- Create a build

The day started off early with the team and I trying to troubleshoot why the modals weren't displaying hte correct data. after about 2 hours of documentation, changing names, and more documentation, we were able to fix the id for each modal in order to display to correct data.

## June 10, 2022

- Working on frontend pages

Today started off with the team and I fixing the layout for our ViewBuilds webpage. They taught me a lot of CSS. I got to watch and help as Jason was working on the card and the effects that happen to it when you hover or click on things.

## June 13, 2022 - June 17, 2022

- Excused abscense from class Friday June 17, 2022

This week I wasn't able to work too much on the project as my focus was towards stufying for the practice exam and learning algorithms. Was able to help debug certain days after class and helped find a react-router-dom useParam to pull the id from the build and populate the detail page with that.

## June 21, 2022

- Began writing unit tests

Today was spent going over the trivia game testable and trying to implement the tests into my own code. After some help with authentication and my team setting everyhting up, I was able to get a unit test to successfully run. After that I began working on testing for the list of all builds. There were some complications so I reached out for a Help Ticket. Unfortunately the problem was not resolved. I stayed on a while after messing with this, using print statements but unforunately I wasn't able to make much progress. I will gather the team tomorrw and knowing them, we will knock it out. I also read through the CI and CD from learn in order to stay up to date and help Jason if he required it. I still don't fully understand everything but with more practice I will get more fluent in it.

## June 22, 2022

- Working on Unit tests

I started the day off working on getting the test for the list of our builds to pass. I learned that the return statement for my get_all_builds function inside of my fake database needed to replicate the same format and data that would show up in the real database. Once implementing that, we saw the green "Test Passed". I also got to work with the team on tryign to implement the likes on our builds and the logistics behind that like limiting one user to one like per build, and making sure our builds keep count of those likes. The whole day was spent on trying to complete the unit tests for our CRUD requests. I learned that requests.get is DEFINITELY not what we want to do when testing FastAPI, we want to do client.get, it's my understanding that the requests.get was making an actual request into the real database, so when I did my requests.delete, it actually deleted the build id 1. I ended up getting off at around 9 pm but wiht the help of Jasno and Jarett, we were able to get 5 passing unit tests again. We are saving the rest for tomorrow.


## June 23, 2022

- Continuation of Unit Tests

I decided to get on early today and get to work on the unit tests. While working with Chad, we were able to get the delete request test funcioning properly. This one was pretty easy, all I had to do was change the json we were returning and make it the same as the json in the FastAPI docs. After that the team and I went into debugging mode trying to get the application to deploy. We were having issues in the CI yaml file which Curtis later came to help with. Fortunately, we were able to fix some errors with the help of Curtis' expertise however we continued to get different errors after he left. We decided to leave it for tomorrow after going down another deep rabbit hole.

## June 24, 2022

-Project submission/deployment

Today was based 100% on getting the project deployed. We troubleshooted for about 4 hours, and even with the help of Mitch and JEff we unfortunately did not get dar. We did try to test small things here and there in the CI yaml file however we were forced to wait for more Curtis knowledge.