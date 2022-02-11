# Educational App

*An educational app (M-Apps) aimed at primary school aged children to have fun and learn about countries of the world. First group CodeClan project - the group was made up of Stewart MacLeman, Peter Sullivan and Shaun Kennedy. Node.js/Express backend with a MongoDB database, Vue used for the frontend. Leaflet for Vue used for interactive map feature.*

![Home Screenshot](/screenshots/home.png)

## Features

* Child firendly navigation with single call to action per page

* Lovable mascot (Ollie) to help make it as child frinedly as possible

* Database of quiz questions for 10 different countries for users to choose from

* Choice of difficulty level - easy, meadium, hard

* Map zooms in on country as quiz progresses to teach user about geographical locations

* Management Information available for teachers to see how challneging the quiz has been for their students


## Screenshots

#### Enter Name
![Enter Name](/screenshots/enter_name.png)

#### Choose Country
![Choose Country](/screenshots/choose_country.png)

#### Choose Difficulty
![Choose Difficulty](/screenshots/choose_difficulty.png)

#### Question
![Question](/screenshots/question.png)

#### Question With Zoom On Map
![Question With Zoom On Map](/screenshots/question_2.png)

#### End of Quiz
![End of Quiz](/screenshots/end_of_quiz.png)

#### Management Information
![End of Quiz](/screenshots/mi.png)



### Installation

Here's how you can get M-Apps up and running on your local machine. From the root folder you will need to set up both the client and the server.

#### Server

Move into the server folder

```
cd server
```

Install the dependancies

```
npm install
```

Run seed file for creating the db and seeding the quiz data

```
npm run seeds
```

Run the development server script

```
npm run server:dev
```

#### Client

Move into the client folder from the root folder

```
cd client
```

Install the dependancies

```
npm install
```

Run the front end Vue server

```
npm run serve
```

Once completed go to http://localhost:8080 in your browser to view the app.