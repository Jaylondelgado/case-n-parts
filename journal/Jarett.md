## May 27, 2022


The team workd on creating the Docker-compose.yml file and installing requirements.

We also worked on refactoring the web scraber to be able to scrape the data we needed for our app.
Scaled the project on excalidraw and modeled for more clarity.

## June 3rd, 2022

We were able to get data into our tables, so I worked on CRUD for all computer parts.

Worked with team to get list of all computer parts. We decided that for our list, we were missing a few fields that we would like to add.
Started working on creating a build.

## June 6th, 2022

Worked on more CRUD operations with the team. We were able to INSERT a build using a transaction.
My teammates and I were also able to get an api for an entire builds list. We were able to incorporate authentication on a build api

## June 7th, 2022
Added a pictureURL linked to build. Refactored INSERT, GET requests for build to have a image linked to a build.
Working on updating a build for incomplete builds. Private field for published builds.

## June 8th, 2022

I decided to work on the front-end today. Worked on getting a list of all builds. Made a skeleton listing all builds on a bootstrap card. Looked into getting a list of builds tied to the user that is currently logged in. Unfortunately 
we were getting an error when trying to pull a builds list linked to the current logged in user

## June 9th, 2022

Debugged the issue for a promise and found out that the fetch was pulling a nonexistent enviroment variable. Debugged the error and was able to pull a list of builds linked to current user. Collaborated with team to work on Create builds page to get a post working on the front-end. We are still working to implement this feature.


## June 10th, 2022

I worked with my team to fix some bugs. When restarting the server the default status is logged in, however we discovered that his was caused by cookie issues. We commented out a line of code to check the JWT to ensure that a user is logged in. This was the fix to the issue and navigation around the app was working.


## June 13th, 2022

Worked with the team to get going on our create build page. Referenced an old project to get a feel of react Hooks. The team was able to handle onClicks to change state of each part that was selected in order to add value to our JSON body. Eventually a instance of a build was able to be created.

## June 14th, 2022

My team worked on the front-end while we had a few features missing, I worked on getting a rating table on the back to attempt a like feature for each build. Worked on Create a rating query that adds a like to each build.

## June 15th, 2022

Continued working on "likes" feature for out build. Worked on Update a rating query that would change a status to false if a user "unliked" a build. Attempted to add count of "likes" to a build however getting a query to include likes was not coming along too well. Had a couple modeling issues but getting a count was incomplete

## June 16th, 2022

I resumed working on getting a likes count on a list build endpoint. after playing around with query tool in PGAdmin, I was able to query a count of likes for each build. Query for Count of likes now works. Added skeleton for like feature on react front-end on list of builds for each build. Count was working, but attempted to add a like on the front-end but came up short.

## June 21, 2022

Resumed working on  like feature for builds. My tam and I had an issue of adding instances of likes to a build to increase its like count and dynamically change to a downvote if they have already voted. Likewise if they downvoted, an upvote button should appear to allot a user to update their rating instance to a boolean of true which would increase count of likes on a build.

## June 22, 2022

My teammate ran into a bug that required an endpoint for ratings tied to the current user. Today I was able to get a endpoint for a ratings tied to a user, so that the like button can dynamically change based off user input. I also jumped in to help my other teammate that was working on test driven devlopment to ensure our CRUD and api endpoints were working as should. We were able to check if create build, get builds, and update build were working as expected.

## June 23, 2022

Started the day off helping my teammates ensure that the tests were working properly in order to move on to CI/CD. Worked with my teammate to filter out the build list in order to only render builds that are publicized by its owner. We were getting a bug in which all builds were being mapped instead we filtered out the fetch requests to onl have public builds and then proceeded to map. Worked on the front-end of top three builds. Was able to map and get the top three builds on their respective cards to ensure easy usage.