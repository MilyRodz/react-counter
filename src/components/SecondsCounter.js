import React, { Fragment } from 'react';
import { FaRegClock } from 'react-icons/fa';


const SecondsCounter = ({seconds}) => {

    // Separar en digitos 
    const six = Math.floor(seconds/100000);
    const five = Math.floor(seconds/10000);
    const four = Math.floor(seconds/1000);
    const three = Math.floor(seconds/100);
    const two = Math.floor(seconds/10);
    const one = Math.floor(seconds/1);

  return (
    <Fragment>
      <div className="row justify-content-center counterbg">
            <div id="icon" className="col-sm-1 one"><FaRegClock /></div>        
            <div id="background" className="col-sm-1 one">{six %10}</div>
            <div id="background" className="col-sm-1 two">{five %10}</div>
            <div id="background" className="col-sm-1 three">{four %10}</div>
            <div id="background" className="col-sm-1 four">{three %10}</div>
            <div id="background" className="col-sm-1 five">{two %10}</div>
            <div id="background" className="col-sm-1 six">{one %10}</div>
          
      </div>   
    </Fragment>
  );
}

export default SecondsCounter;