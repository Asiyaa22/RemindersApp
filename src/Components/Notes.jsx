import PropTypes from "prop-types";

function Notes(props){
  return <div className="notes">
    <p>{props.value}</p>
    <h3>{props.title}</h3>
    <p>{props.txt}</p>
  </div>
}

Notes.propTypes = {
  // value: PropTypes.int.isRequired,
  title: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  value: PropTypes.any
};

export default Notes;