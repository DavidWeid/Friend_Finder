# Friend_Finder
A Node and Express Servers Application

View this app on [heroku](https://glacial-spire-13088.herokuapp.com/)!

### Overview

Friend Finder is a compatibility-based application, similar to many matching apps or personality apps. This site will take in a user's responses to a survey and then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. User's get started simply by clicking "Begin" on the front page, and then fill out the survey along with their name and a photo-url.

The survey consists of 10 questions and each question requires an assessment of personal agreement on a scale of 1 (Strongly Disagree) to 5 (Strongly Agree). After submitting the survey, the user gets their best match (name and photo).

### How it works

Friend Finder has a server.js file that tells Node to create a server using express. This file then routes the server to two routing files - apiRoutes and htmlRoutes.

#### Routes

The HTML Routes handles GET requests from the user's client. Friend finder has two GET routes - one for the home page, and one for the survey page. Each responds to the user by sending an appropriate HTML file. Non-matching URL's default to the home page.

The API Routes handle both a GET and POST request from the user. A GET request returns to the user the JSON-formatted friendsData (an array with all user-profile objects). This would be the friend-finder pool. This data contains each user's name, photo-url, and scores. This route is "/api/friends" and is easily accessed through a link on the app's page.

A POST request sends the user's completed survey to the API. The user's scores are then compared to all users' scores in the friendsData array, the lowest difference in scores per user comparison is found, and this is determined as a match to the new user. This match's profile is then sent back to the user's client as a JSON object. The match is then displayed to the user (name and photo). The new user is also added to the total pool of users.

- - -

### Compatibility Logic

Here is an example of a user's profile, as stored in friendsData:

```json
{
  "name":"Deku",
  "photo":"https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/5c/Izuku_Midoriya_school_headshot.png",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

We determine the user's most compatible friend by looking at each user's "scores" (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`). We then compare the difference between the new user's scores versus the "scores" from other users, question by question, pushing each difference into the `difArray`. We add up the absolute differences to calculate the `sum`. Each difference `sum` is then pushed to the `comparisonArray`. The lowest value to taken from here, and the match is found from the `friendsArray`.

     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * difArray: `[2, 1, 2]`
       * comparisonArray: `[5]`
       
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 3: `[1, 4, 2, 1, 5, 1, 2, 5, 4, 1]`
       * difArray: `[4, 3, 2, 3]`
       * comparisonArray: `[5, 12]`
       
       * Best match: User 1 (via index 0 in comparisonArray = index 0 in friendsData array)

- - -

### Contact

If you have any questions, concerns, or comments, please reach me at

david.weid.2@gmail.com
