# teamProfileGenerator

OVERVIEW:

The team generator is a command line application that takes user input to gather information about various memebers of a team, and generates an HTML file displaying the results.

For a video displaying how the program works, as well as example output, find the video below.

Video Link Here: https://drive.google.com/file/d/138dxASSY7iwuRJm_bvjkOAU17FL05yns/view?usp=sharing

DEPENDANCIES:

-Inquirer.js
-Jest

DETAILS:

- when a user starts the prgram they are prompted to enter information about a manager.
- next the user is prompted to add other members of the team and are presented with Engineer, Intern, and None options.
- selecting Engineer will initiate prompts to enter information related to an Engineer. Some promps are unique to an Engineer.
- selecting Intern will initiate prompts to enter information related to an Intern. Some prompts are unique to an Intern.
- when finished adding team members, selecting None begins the generation of an HTML file. Opening this file in a browser shows data entered via prompt now appears in cards on a webpage, with working links.

- running an "npm run test" initiates a series of tests related to each availible class of Employee, to validate each property and method is working properly.
- all tests should return PASSED
