# launch html files via server : http://localhost/Questions test app/app.html
# Branches:
# master - initial setup for application
# version2 - full logic and functionality
#version3 - module optimization , + styling CSS

#version3: when styling the page with css: problem encountered - cannot attach external css file/ only embedded CSS styles are working (why ?????!!!!) :) - now sorted - actually it was the Chrome browser cache delay, so it was still loading older version of file which was updated - tried with mozilla - it all works with external CSS ! :)

# version3: next step - divide the main controller : the part which is checking the answers will become a second controller applied to partials.

# CONTROLLERS: 
# main-controller.js "mainCtrl" : getting model data from server JSON via $http.get, assign these data to scope - so we have data of all tests questions and answers, then apply these scope data to the view - html elements - main and partials.

# check-answers.js   "checkAnswersCtrl" : 1) checking if the given answers are correct
# 2) adding the score, scope score variable shall be dispayed at the end to give the final results to the guest.

#version4 : make the app all screen responsive- bootstrap and css media query mainly to operate on this version.