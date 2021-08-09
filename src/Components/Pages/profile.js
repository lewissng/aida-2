import React, { useState } from 'react';
import { techStack } from '../Utilities/techStack';
import './profile.scss';

const Profile = () => {

  const [checkedState, setCheckedState] = useState(
    new Array(techStack.length).fill(false)
  );

  const [selected, setSelected] = useState([]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const displaySelected = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if ( (sum === " ") && (currentState === true) ) {
          return sum + techStack[index];
        } else if (currentState === true) {
          return sum + ", " + techStack[index];
        }
        return sum;
      }, " ");

    setSelected(displaySelected);
  }

  return (
    <div className="App">
      <h3>What tech stack would you like Lewis to have?</h3>
      <ul className='ul'>
        {techStack.map((tech, index) => {
          return (
            <li key={index} className='li'>
              <input
                type="checkbox"
                id={index}
                name={tech}
                value={tech}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <label htmlFor={index}>{tech}</label>
            </li>
          );
        })}
      </ul>
      <h3>You have chosen: {selected}</h3>
    </div>
  );
}

export default Profile;