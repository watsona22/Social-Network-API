This social network web application allows users to share their thoughts, react to friends’ thoughts, and create a friend list. Social Network API utilizes Express.js routing, MongoDB database, and Mongo ODM to get, update, and delete documents. The dynamic components of our website are supported by JavaScript.

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
This challenge utilized the node environment to create a program using dynamic Javascript. I first encountered issues when trying to seed the database. For whatever reason, the data and seed files would not populate data. I then decided to create records in insomnia instead. After that, I encountered issues with the controller types - user and thought - the nuances of their respective references made the call logic a bit tricky. For instance, when trying to add or remove friends or reaction, I had to point to specific attributes and pay attention to the attribute that joined them in order to return the desired value. I found Insomnia tremendously helpful in testing the endpoints after each code edit. Naming convention continues to be an important particular to consider when building the logic.
```
Reformatting code, implementing clear naming convention, and notating often are skills that I work on continously - I hope to make them a natural part of the build process.

Usage
The server.js file can be used to understand the dynamic code that supports the application. Here is a link to the walkthrough, for your reference: https://drive.google.com/file/d/1vidrKbck0GYKjHzAcftckSxNs8cFA8IX/view

Credits
The project was completed with help from the course materials and tutor, Erik Hirsch.

License
MIT License Copyright (c) [2023] [Amber Watson]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.
