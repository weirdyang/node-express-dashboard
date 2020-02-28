# Adding the Websocket-based log viewer window

## Add a panel
TASK 1:
In `views/index.ejs` inside the existing `div` with class `container` below the title header, add another `div` element with classes of `panel` and `panel-default`. The `panel` and `panel-default` classes along with all other CSS classes used in this project are [Bootstrap classes](https://www.w3schools.com/bootstrap/default.asp)

## Add a panel header
TASK 2: 
In `views/index.ejs` inside the panel `div` created above, add another `div` with a class of `panel-heading`. For the `div` content add the text "Log Viewer". 

## Add the log window
TASK 3: 
In `views/index.ejs` inside the `panel` `div` and after the `panel-heading` `div`, add a `div` with class `panel-body` and an `id` of `log-window`. For the `div` content add the text "No logs to show".

## Create the log viewer javascript file
TASK 4:
At the root of the project create a directory called `public`. Inside that directory create a directory called `javascripts`. Inside the `public/javascripts` directory create a file called `log-viewer.js`

## Add the javascript file as a script on index.ejs
TASK 5:
In `views/index.ejs` 

