import './darkMode.scss';

const DarkMode = (props) => {


  return (
    <button onClick={props.onClick}>
      {props.mode}
    </button>
  );
}

export default DarkMode;