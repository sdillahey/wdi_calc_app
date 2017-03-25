# Building an App
## WDI Calculator

### General Outline to Build an App

1. Discuss/determine app's functionality from a user perspective (user stories
2. Determine basic UI design - "wireframing"
3. Discuss and identify the app's "state" that needs to be held in variables
4. Psuedocode overall program logic
5. Set up the project: create folders and files, add boilerplate, init a repo & create a remote
6. Code! Start with a UI markup and some CSS (optional). Write JS to add behavior. More UI, more code. 
7. Commit _working_ code each milestone




### Pseudocode

#### Variables
input - the display  
op - holds the operator  
result = null  
firstNum = null  

#### Programming Logic

1. Initialize the state and update display (render & re-render)
2. Add event listener(s)
3. Handle user's clicks

- if 'AC' is clicked -> re-init
- if 'c' is clicked -> set input to ""
- if digit is clicked -> append digit text
- if '.' is clicked -> append '.' if there isn't one already
-  if operator is clicked -> save the op function to op
-  if = is clicked, execute the sequence


### Other Tools/Notes
Ternary Operator: Excellent for replacing cases when there are many if/else statements  
syntax: ```` ___ ? ___ : ___ ;````  
Example: ````score > 100? doWinner() : keepPlaying();````
  
Chrome's Debugger in Developer Tools

Digital Color Reader: selects and copies exact color