import React from 'react';
import { useHistory } from 'react-router-dom';


// form for rating feelings
function Feelings() {
  const history = useHistory();
  const routeToUnderstanding = () => {
    // alert("woo! feelings!!");
    history.push('/understanding');
  }
  
  return (
    <div>

      <h2>How are you feeling today?</h2>
      <p>(Where 5 = Great! and 0 = Lost)</p>
      <label>Feeling?</label>
      <input type="number" min={0} max={5} />
      <button className='button' onClick={ routeToUnderstanding }>NEXT</button>
    
    </div>
  );
}

export default Feelings;