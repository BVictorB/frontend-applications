# Frontend applications
This is the last course of the three courses (functional programming, frontend data and frontend applications) for this project. In this course we started working with frontend frameworks (in my case React). I continued working on the data visualization but made everything work properly with states and everything in React. Working with React was new for me, but it did not take long to understand it. It made me very productive, and it was a lot easier to achieve the same results as before, but with less code. Read the [wiki](https://github.com/BVictorB/frontend-applications/wiki) for more information about how I used different features that React offers.
***
## Debriefing
The newspaper 'De Volkskrant' wants to get interesting insights on connections in the RDW datasets. It is our job to find interesting information in the datasets, and make a data visualization about that information/subject. De Volkskrant can that see if they can use the information shown to write an interesting article.
They gave us the option to use the datasets from the RDW, but we can also look for other interesting datasets as long as it has to do with 'the car in the city'.  
Click [here](https://github.com/BVictorB/functional-programming/wiki/Research-datasets) for some information on some RDW datasets.

![De Volkskrant](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Volkskrant.svg/1200px-Volkskrant.svg.png)  
_(https://nl.wikipedia.org/wiki/Bestand:Volkskrant.svg)_
***
***
## Concept
My idea for this project is to retrieve data from the [RDW datasets](https://opendata.rdw.nl/browse) and from the [datasets of the city of Amsterdam](https://data.amsterdam.nl/) to make an interactive map. I want to plot out different parking areas on the map, with the different prices that are being used. If I can get the data of the history of these parking prices, I want to be able to scroll through time and see how the prices have changed. I also want to plot all the parking garages in Amsterdam on the map, and see when they opened and compare this to the changes in parking prices. And if I have the data for it, I would also like to compare the prices of the parking garages to the prices of parking on the street (also going back in history)

Data Amsterdam did not have the data that I needed to accomplish the concept I had in mind. So I created a map where you can compare parking garages with each other and with parking areas in Amsterdam. 
Click [here](https://github.com/BVictorB/frontend-applications/wiki/Final-result) to see the final product with some information or [here](https://bvictorb-garage.netlify.app/) for the live version.
***
### Research question(s)
I have created a few research questions to support my research. There is a main research question that I find most important in my assignment, I will mostly focus on this one. But I will also try to implement answering assets/features for the other research questions.
### **_Is there a connection between the increasing parking prices and the opening of new parking garages in Amsterdam?_**
- _**Is it cheaper to park in a parking garage or on the street (for each district)?**_
- _**Is the parking garage accessible for disabled people?**_
- _**Are there any benefits in the parking garages that are more expensive? (location, electric charging, accessibility)**_
- _**Is it free to park at night in the parking garages compared to on the street?**_

If you want to read more about my concept, research questions and the datasets that I will need, click [here](https://github.com/BVictorB/functional-programming/wiki/RDW-Concept)

![Car parking gif](https://media1.tenor.com/images/ab7c163110442028965e67232a0ebf60/tenor.gif?itemid=17599579)  
_(https://tenor.com/view/meeting-bad-parking-car-break-glass-fail-gif-17599579)_
***
## Installing
- Clone this repo
```
git clone https://github.com/BVictorB/frontend-applications.git .
```
- Install all NPM packages
```
npm i
```
- Execute this command to start the local server, the project will automatically open in your browser (or just go to http://localhost:3000/)
```
npm start
```
![CLI gif](https://media1.tenor.com/images/356bac3dd24014fd740d196138f3d0f8/tenor.gif?itemid=10933901)  
_(https://tenor.com/view/command-line-site-not-ready-message-comment-gif-10933901)_
***
## Sources
- [MDN](https://developer.mozilla.org/)
- [D3](https://github.com/d3/d3/wiki)
- [React](https://reactjs.org/docs/getting-started.html)
- [Data Visualization Course 2018 (by Curran Kelleher)](https://curran.github.io/dataviz-course-2018/)
- [Data Visualization Course 2020 (by Curran Kelleher)](https://datavis.tech/datavis-2020/)
