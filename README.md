# Hackathon-Fall-2016-Sentiment-Engine

<h3>Doodlekit Use Case</h3>
Use a cloud based machine learning tool such as IBM Watson or Wolfram Language to analyze sentiment across public information such as Twitter or a public database.  Create an application that uses this in a novel and useful way.
 
 
<h3>Application Overview</h3>
This application fetches real-time feeds using Meetup's RSVPs with appbase.io which is a hosted data streams API.On the frontend, we use jQuery to create the feed UI and query appbase.io in real-time with different keyword filters. Based on the data fetched from Meetup Sentiment Analysis is done using IBM Bluemix Alchemy API for the comments done for events.

<b>Softwares/Tools Used:</b> Webstorm, Node JS, Javascript, JQuery, appbase.io

<b>API's Used:</b> MeetUp API, Alchemy Sentiment API

<h3>About the Application</h3>

Initially below screen is visible to user where they have two option Get Location of Events and Get all Fun Events

<img src="https://github.com/cmoulika009/Hackathon-Fall-2016-Sentiment-Engine/blob/master/Documentation/Screenshots/Welcome.jpg">

The MeetUp API is invoked and fetched all the RSVP i.e most happening recent events in city. This data is stored in appbase.io, so that the real-time data is live streamed. This data is displayed in front-ent as shown below.

<img src="https://github.com/cmoulika009/Hackathon-Fall-2016-Sentiment-Engine/blob/master/Documentation/Screenshots/Meetup%20Events.jpg">

The fetched event data is also filterd based on topics such as Social,OutDoors etc. as shown below

<img src="https://github.com/cmoulika009/Hackathon-Fall-2016-Sentiment-Engine/blob/master/Documentation/Screenshots/Filter%20Based%20on%20Topics.jpg">

Also sentiment analysis is done on comments of the events and its respective analysis such as Positive,Negative, Neutral is displayed as shown below.

<img src="https://github.com/cmoulika009/Hackathon-Fall-2016-Sentiment-Engine/blob/master/Documentation/Screenshots/Sentiment.jpg">

Also the live streaming events are displayed on Google Maps as shown below

<img src="https://github.com/cmoulika009/Hackathon-Fall-2016-Sentiment-Engine/blob/master/Documentation/Screenshots/LocateMaps.jpg">

<b>Demo URL:</b> https://www.youtube.com/watch?v=qwG1SFimuyo
											
<h3>References</h3>

https://www.meetup.com/meetup_api/

http://opensource.appbase.io/


