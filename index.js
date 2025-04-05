const http = require('http'); // imports the http module to create the server

const hostname = '127.0.0.1'; // defines the hostnameusually local server
const port = 3000; // defines the port number for the server

const server = http.createServer((req, res) => { // creates the server that listens to requests
  res.statusCode = 200; // sets the HTTP status code to 200 
  res.setHeader('Content-Type', 'text/html'); // sets the content type to HTML

  // this is layout function that takes a title and content to build the HTML page
  const layout = (title, content) => `
    <html>
  <head>
    <meta charset="UTF-8">
    <style>
      body {
        background-color: rgb(93, 91, 168); 
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding: 40px;
        color: #333;
        max-width: 900px;
        margin: 0 auto;
      }

      h1 {
        color: #4a90e2;
      }

      p, ul {
        font-size: 1.1rem;
        line-height: 1.6;
      }

      nav {
        background-color: #e9f3ff;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        margin-bottom: 30px;
      }

      nav a {
        margin-right: 15px;
        text-decoration: none;
        color: #4a90e2;
        font-weight: bold;
        padding: 6px 10px;
        border-radius: 4px;
        transition: background-color 0.3s;
      }

      nav a:hover {
        background-color: #e6f0ff;
      }
    </style>
    <title>${title}</title>
  </head>
  <body>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/goals">Goals</a>
      <a href="/motherhood">Motherhood</a>
      <a href="/single">Single</a>
      <a href="/growth">Growth</a>
      <a href="/wins">Wins</a>
      <a href="/burnout">Burnout</a>
      <a href="/coffee">Coffee</a>
      <a href="/snacks">Snacks</a>
      <a href="/energy">Energy</a>
      <a href="/laundryloop">Laundry Loop</a>
      <a href="/progress">Progress</a>
    </nav>
    ${content}
  </body>
</html>

  `;

  // routing different URLs to different content
  if (req.url === '/') { // if the route is the home page
    res.end(layout('Home', '<h1>Success!</h1><p>This server is running, and so am I... from bugs.</p>'));
  } else if (req.url === '/about') { // about page
    res.end(layout('About', '<h1>About Me</h1><p>Currently navigating JavaScript, Node, and mild caffeine addiction. Its fine. Im fine.</p>'));
  } else if (req.url === '/goals') { // goals page
    res.end(layout('Goals', `
      <h1>Tech Goals</h1>
      <ul>
        <li>Build apps that don't crash instantly</li>
        <li>Understand async without spiraling</li>
        <li>Write clean code that future me won't roast</li>
      </ul>
    `));
  } else if (req.url === '/debugging') { // debugging page
    res.end(layout('Debugging', '<h1>Debugging Thoughts</h1><p>Step 1: Panic. Step 2: Google. Step 3: Blame the compiler. Step 4: Realize I missed a semicolon.</p>'));
  } else if (req.url === '/coffee') { // coffee page
    res.end(layout('Coffee Status', '<h1>Coffee Status</h1><p>Currently running on 60% caffeine, 30% ambition, and 10% mild existential dread.</p>'));
  } else if (req.url === '/snacks') { // snacks page
    res.end(layout('Snack Drawer', '<h1>Snack Drawer</h1><p>Currently contains: crumbs, one stale granola bar, and the hope that food delivery shows up before the next bug does.</p>'));
  } else if (req.url === '/burnout') { // burnout page
    res.end(layout('Burnout', '<h1>Burnout Mode</h1><p>Running on low battery. Please send sleep, hydration, and a break from screen time. Or just let me nap in JSON format.</p>'));
  } else if (req.url === '/single') { // single page
    res.end(layout('Single & Coding', '<h1>Single & Coding</h1><p>Relationship status: committed to debugging. I may not be dating, but this server and I have a strong connection — on port 3000.</p>'));
  } else if (req.url === '/wins') { // wins page
    res.end(layout('Recent Wins', '<h1>Recent Wins</h1><p>Figured out how to run a Node server. Didnt cry this time. Actually kind of proud of this.</p>'));
  } else if (req.url === '/growth') { // growth page
    res.end(layout('Growth Zone', '<h1>Growth Zone</h1><p>Every error is a lesson, every fix is a flex. I may be new, but Im not standing still.</p>'));
  } else if (req.url === '/energy') { // energy page
    res.end(layout('Energy Check', '<h1>Energy Check</h1><p>Current vibe: focused, slightly chaotic, but fully committed to leveling up.</p>'));
  } else if (req.url === '/motherhood') { // motherhood page
    res.end(layout('Motherhood & Code', '<h1>Motherhood & Code</h1><p>Balancing console.logs and snack time. Building full-stack apps while also building LEGO towers. Tired? Yes. Giving up? Never.</p>'));
  } else if (req.url === '/laundryloop') { // laundry loop page
    res.end(layout('Laundry Loop', '<h1>Laundry Loop</h1><p>Code compiles, laundry piles. Somehow both are always in progress and never truly done.</p>'));
  } else if (req.url === '/progress') { // progress page
    res.end(layout('Progress Tracker', '<h1>Progress Tracker</h1><p>Every small step matters. Today its one route, tomorrow its the whole API.</p>'));
  } else { // if none of the routes match, show a 404 page
    res.statusCode = 404;
    res.end(layout('404', '<h1>404: Page Not Found</h1><p>This page doesn\'t exist... kind of like my free time and emotional stability during bootcamp.</p>'));
  }
});

// start the server and listen on port 3000
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
