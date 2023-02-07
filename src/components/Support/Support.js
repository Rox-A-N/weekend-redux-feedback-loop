// form for support rating  // change wording
import React from 'react';
import { useHistory } from 'react-router-dom';


// form for rating feelings
function Support() {
  const history = useHistory();
  const routeToComments = () => {
    // alert("woo! feelings!!");
    history.push('/comments');
  }
  
  return (
    <div>

      <h2>How well are you being supported!</h2>
      <p>(Where 5 = Totally supported! and 0 = Not at all)</p>
      <label htmlFor="support">Support?</label>
      <input type="number" min={0} max={5}/>
      <button className='button' onClick={ routeToComments }>NEXT</button>
    
    </div>
  );
}

export default Support;