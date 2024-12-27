function addNotes() {
    console.log("banao miya kya sonchre!.....sonch ne ka kya come on code it");

}

function Button(){
   return <button className="add" onClick={() => {
    addNotes()
   }}>+</button>;
}

export default Button;