Twitter
Twitter is a Simple Backend Task, made with nodejs, express, mongoDB and mongoose. 

Description 
In this task, twitter developer account needs to be created. After creation of the account- consumer key, consumer secret key, access token key, access token secret key will be generated. That will be required to access the data from the twitter. 
If we give name on this URL - '/users/:name'. If the name is present in the database, it will fetch the tweets from the our own database. If the name is not present in our database, then it will fetch from the twitter site.  

Dependencies
express: "^4.17.1" // npm install express
mongoose: "^5.8.11" // npm install mongoose
twitter: "^1.7.1" // npm install twitter
nodemon // npm install nodemon

Available Scripts
In the project directory, you can run:

nodemon index.js
Runs the app in the development mode.
Open http://localhost:port to view it in the browser.

The page will reload if you make edits.