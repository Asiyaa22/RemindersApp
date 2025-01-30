// import Notes from "./Components/Notes.jsx;"

import Notes from "../src/Components/Notes.jsx";
import { reminders } from "./data.js";
import Button from "./Components/Button.jsx";


// function createReminders(reminder){
//   return <Notes 
//     key={reminder.id}
//     value={reminder.id}
//     title={reminder.heading}
//     txt={reminder.detail}
//   />
// }

//Arrow Functions in react

var create = (reminder) => <Notes 
key={reminder.id}
value={reminder.id}
title={reminder.heading}
txt={reminder.detail}
/>;

// woww I am loving Arrow Functions
function App(){
  return <div className="main">
    {reminders.map(create)}
    {/* {reminders.map(createReminders)} */}
    {/* Instead of all this hardwork we can Map data to Components  */}
    {/* using Javascript Map() function We use functional programming here */}
    {/* <Notes title={array[0].heading} txt={array[0].detail} />
    <Notes title={array[1].heading} txt={array[1].detail} />
    <Notes title={array[2].heading} txt={array[2].detail} /> */}
    <Button />
  </div>
}

export default App;

//dev tools are really important when it comes to debugging just a gentle reminder for developer