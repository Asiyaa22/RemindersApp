import react from "react";

function Notes(props){
  return <div className="notes">
    <h3>{props.title}</h3>
    <p>{props.txt}</p>
  </div>
}

export default Notes;