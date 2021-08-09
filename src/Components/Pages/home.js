import React, { useEffect } from 'react';
import useWelcome from '../../CustomHooks/useWelcome';

const About = () => {

const welcome = useWelcome;

useEffect(() => {
  welcome();
})

  return (
    <div>
      <h1>About Lewis</h1>
    </div>
  );
}

export default About;