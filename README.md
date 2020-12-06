# Ombori React Code Test

## Built with
**Front End:** React v. 17.0.1 | Typescript v. 4.1.2 | eslint v. 6.6.0
**Back End:** N/A
**Testing framework:** N/A  
**Deployed at:** N/A

## The code 
This app is part of the Ombori's tech-test.

## Getting started
### Dependencies  
* React
* Typescript
* eslint
* redux
* Ionic/React

### Setup   
To test this application, fork the repo to your own GitHub account and clone it to your local workspace. </br>
Install all of the dependencies:    
```
$ npm install
```  

Start the React application and run it on your local host:
```
$ ionic serve
```

## Updates/Improvements   
The App fufill the 3 requirements asked further down in this Readme file, however, due to limited time some functionalities can be improved for a higher level deliver. here is a list of improvements that can be made in a relatively short amount of time.

- The "pulse loading" appears in the top left of the page. Solution=> Css style to that particular div
- The redux structure is complete setup but becasue of lack of time there is no actions being dispatched.
- The userList tab has two button that have not yet been implemented in terms of functionalities







___

What the test app should do:

* Display a custom loading component for 3 seconds
* Fetch user data from https://reqres.in/
* Display those users in a scrollable view that lazy loads more users when you've reached the bottom of the list, if there are no more users to load it should indicate that there are no more users.
* Be responsive, look great and work well on different devices, especially various mobile screens

We've prepared some screenshots in the design folder as well as a video of what the loading component should look like.

___

Those are the requirements. If you wish to show off more of your skillset, feel free to expand upon the app, perhaps integrating a state management library like Redux to handle the fetching of data. Using TypeScript will be a big ➕. If you're really into functional programming, feel free to use something like Ramda. It's really up to you!

We put no strict requirements on how you choose to solve any of the points in this task. We only ask that you be able to motivate your choices.

![You got this!](https://media.giphy.com/media/ClcWrARkrq1GM/giphy.gif)
