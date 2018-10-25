# MeetMeHalfway
Group Project #1

MeetMeHalfway takes the midpoint of two addresses and returns a list of restaurants and cafes that are in between the two addresses. 

## How is it set up?
This application works by inputting one address and will make a call to Google Maps API where coordinates will be returned and saved into Firebase. The addresses input are then saved and appended to the page. From here, the user can choose two of the saved addresses and a midpoint is calculated using Turf.js. Finally, a call is made to Yelp's Businesses API and returns a list of links to businesses within a 800-meter radius of the midpoint. 

## To get started: 

1. Add two locations that you would like to meet between. 

2. Choose a place to meet! 



