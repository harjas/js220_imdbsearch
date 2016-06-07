# js220_imdbsearch
In this assignment you will be building upon the work you did last week and creating an Angular factory to make a call to the IMDB Top 250 API (in this case, it's a JSON but it's the same idea). For those who could not complete the routing, it has already been added for you. 

There are comments inside the `list.controller.js`, `imdb.service.js`, and `list.html` files to help you work on your application. We're working on only one of three pages that need to be implemented for the entire project. 

## Getting Started
1. Fork (not clone) this repository to your Github account
2. Clone the repository from your account
3. Run `npm install` to install all dependencies

## Assignment - List Page
1. Create a factory that makes a call to the imdb json file (inside the data folder)
2. Create a controller for list.html that makes a call to the factory and loads the data in the scope
3. Implement search functionality inside your list.html that allows searchability across the 250 titles. Add buttons that would sort the search results in ascending or descending by title and/or rank
4. Keep the user experience in mind! Only present data that you think is relevant and in a manner that is cohesive and doesnt disrupt the user experience. This is a very big part of front-end development! The JavaScript can only assist you in getting the data to the View but a lot more depends on how the experiences that data. 

## Assignment - Details Page
1. Add dynamic routes to the details page - update app.js
2. Use `$routeParams` to get the movie based on click from the list page
3. Add "Next" and "Back" buttons to navigate through movie details. For example, if you're on movie rank 3, clicking on "Next" should take you to movie rank 4. Clicking "back" should take you to rank 2. Look out for edge cases! 
4. Add a way to navigate back to the list page (a navbar or a button maybe?) - Ask me how to make the navbar persist on all pages but only code it once.

I will add a gulpfile to this project soon to help you with development. 

## Submission
Once you're done coding, commit all your code to your github account and create a pull request. The pull request will be for my repo which will allow me to look at all the changes/updates you made to the project. I can leave comments on your code too. Hopefully this submission process works. If it's too cumbersome and/or things don't work out, we can look into something else. 

Good luck! 
