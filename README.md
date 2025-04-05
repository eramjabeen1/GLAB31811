# GLAB31811 - NodeJS Installation and Basics

this is a simple node.js server that serves multiple pages with dynamic content based on the route. each page has a basic layout, and the server handles 404 errors for undefined routes. 

## project structure

- **server**: the main server code. this is where i’m handling everything with node.js and the http module to deal with routes and serve up html.
- **routes**: every route (like `/about`, `/goals`, `/motherhood`) has its own page, and i tried to keep them all functional and funny, like a real dev.
- **layout**: the layout function is basically my html template. it handles wrapping everything up neatly with the title and content injection.
- **css**: styling is basic, but it gets the job done. nav bar, hover effects, rounded corners – you know, nothing too fancy, but functional will make it fancy at another time

## setup

1. clone this repository (or copy-paste if you're that person).

2. make sure you have node.js installed. if not, go grab it from [nodejs.org](https://nodejs.org/) — no judgment if you didn’t know about node.js until today.

3. open your terminal and head to the project directory.

4. run the following to kickstart the server:

   ```bash
   node index.js

5. open a web browser and go to http://localhost:3000 to see it all come to life. yes, the internet is working now, and so is your server.

available routes
/ (home): my go-to page with a message that says “hey, I made this” and makes sure you know the server is alive and well.

/about: about me (if you’re into that). a little bit about my coding journey, caffeine addiction, and why this page exists.

/goals: my tech goals. here’s where i lay out the things i want to achieve. spoiler: they include not crashing the app.

/motherhood: a deep dive into the world of motherhood while coding. if you can juggle code and kids, you can conquer anything.

/single: a page for all the single coders out there — because you can totally debug code and stay single.

/growth: tracking my growth in coding, both personal and professional. not just talking about code here, but emotional growth too (spoiler: it’s a work in progress).

/wins: where i brag a little bit. figured out how to run a node server without crying. this is a win.

/burnout: because we all know what it’s like. burnout is real, but so is getting back into the groove. tips inside (probably just caffeine).

/coffee: running on caffeine and ambition. i'm not sure if i’m coding or just surviving the day at this point.

/snacks: what fuels the coding. spoiler: it’s usually snacks and sometimes food delivery.

/energy: checking my energy levels because let’s face it, coding is exhausting. i’m probably running on 60% caffeine.

/laundryloop: balancing coding and laundry. both never seem to be done at the same time, ever.

/progress: progress tracker, because i need to see every little step (even the ones that took three hours to debug).

nav bar
so i added a nav bar (because who doesn’t want one, right?). it’s simple but effective: links to all the major routes on the site. the nav bar shows up on every page so you can easily click around without needing to type in URLs. it’s a small feature, but i wanted to make this feel like a real site, and a nav bar is just one of those things that makes it feel more polished.

404 page
if you wander off to a route that doesn’t exist, you’ll be met with a 404 error page that reminds you that my time is as limited as yours, especially during bootcamp.

usage
this project is perfect if you’re just getting into node.js and need something to test your knowledge. plus, it’s fun to show off (or laugh at) when you’re learning. use it to learn, experiment, and maybe even break it a few times (that’s where the real fun happens).