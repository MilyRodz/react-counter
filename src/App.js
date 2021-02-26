import React, { Fragment, useState, useEffect } from 'react';
import SecondsCounter from './components/SecondsCounter';


function App() {

  // Contador

  const [seconds, setSeconds] = useState(0);
    
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <Fragment>

        <SecondsCounter seconds={seconds}/>

    </Fragment>
  );
}

export default App;