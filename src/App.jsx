// import Notes from "./Components/Notes.jsx;"

import Notes from "C:/Users/Hp/Desktop/reminders-app/src/Components/Notes.jsx";
import { reminders } from "./data.js";


function createReminders(reminder){
  return <Notes 
    key={reminder.id}
    value={reminder.id}
    title={reminder.heading}
    txt={reminder.detail}
  />
}
function App(){
  return <div className="main">
    {reminders.map(createReminders)}
    {/* Instead of all this hardwork we can Map data to Components  */}
    {/* using Javascript Map() function We use functional programming here */}
    {/* <Notes title={array[0].heading} txt={array[0].detail} />
    <Notes title={array[1].heading} txt={array[1].detail} />
    <Notes title={array[2].heading} txt={array[2].detail} /> */}
  </div>
}

export default App;

//dev tools are really important when it comes to debugging just a gentle reminder for developer