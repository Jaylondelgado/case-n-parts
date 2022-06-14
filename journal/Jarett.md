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

