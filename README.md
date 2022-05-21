# CalendarPP
Calender Plus Plus

## Installation
Open terminal or CMD on the root directory and type in : 
>npm install
Then cd into the client directory and run npm install again.

## Usage
To start the backend go into the root folder and type :
>npm start
To start the front end, cd into the client folder and type:
>npm start

## Configuration
Change .envexample(in the root file and in client/) into .env and you should be good as far as configuration should go.

## Demo stuff
By default the backend is listening on :6969.
>To demo the backend, use PostMan or the Chrome Console to send a GET Request with a header including an 'api_key'
```json
  {'api_key':"apikey"}
```
>by default the api_key is gaysex, which you can change in the .env file.
#### Entering no or the wrong API Key:
```json
{
    "message": "get lost"
}
```
#### Entering the right API Key:
```json
{
    "userName": "MarquessPusey69420",
    "events": 25,
    "reminders": [
        "reminderObject1",
        "reminderObject2",
        "reminderObject3"
    ],
    "lastactive": 1653109031720,
    "someBullShit": "we need to discuss what this is"
}
```
