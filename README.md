# 43rd Street Records
### A Record Store website for Project 2 at General Assembly
###### Link to deployed site (Heroku): https://quiet-forest-01124.herokuapp.com/
###### Link to GitHub: https://github.com/Chetv17/recordstore

## Project 2 Details

For this Express / MongoDB project I decided to make a website for a record store. Albums contain a lot of data that an online retailer might want to display for potential customers. Data such as album art, track listings, musicians/instruments, record labels, release years and so on... I figured this material would make for an interesting challenge.

###### Process

*7 REST-ful Routes*

I started this project by first focusing on building my initial 7 REST-ful routes. This required building all the associated js / ejs pages, and initializing all the drivers in the package.json file. Since I knew I wanted to use a controllers file (one of the stretch goals) I first practiced building that in the Fruits lab, and then built it into my initial design. I also built in partials pages into my design.

*Schema and Seed Database*

Once the first pages and routes were all set up, I then built my album info Schema. I knew eventually I would need to spend some time building a large seed data file to make the record store seem real, but to begin I created just one album (Abbey Road) to practice seeding the Mongo cloud database.

Once I managed to get the database connected, and the album data displaying on my index page, I then built my seed file full of a bunch of albums. I wanted to be able to display the albums by genre on different pages, simulating a real store, so i made sure to have a good collection of records.

*Search*

My next challenge was building a search bar. I was able to get it so it can search the database by album title. If I change the key from "name" to "artist" on "search.js line 13" the search bar will return albums by artist name. I wasn't able to get it to search by any field -- and i moved on to building my SignUp/Login/Logout/Password/Auth pages. (I did return to this search problem on the final day, but ultimately failed to figure it out. I did clean up the path and give it its own controller file however.)

*SignUp/Login*

This function took me forever to set up, but I was eventually able to work through it. I wanted to make it realistic, so the create and edit pages were only available to a theoretical shop owner or employee. I left the "Register" page on the site to show off the work I did, but in real life I think there would only be a login for authorized employees to update the record store stock.

For both Login and Search I used youtube videos to help me work through the process. I cited those videos in the code. I also used youtube to help me find Bootstrap design tips. I spent my final few days refining the design of the website.

*Multiple Models*

I finished up by working on the multiple models stretch goal. I was able to follow the markdown and set up the 'authors' and 'articles' sections. I was able to get authors posted to the database, but my code still has bugs. I can get only one author loaded at a time, and the "add an article" page isn't functional. I will have to go back and see where the problem is -- I will probably have to re-arrange the routes in the two controller pages.
