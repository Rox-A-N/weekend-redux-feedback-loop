import React from 'react';
import { useHistory } from 'react-router-dom';


// form for rating understanding
function Understanding() {
  const history = useHistory();
  const routeToSupport = () => {
    // alert("woo! feelings!!");
    history.push('/support');
  }
  
  return (
    <div>

      <h2>How well are you understanding the content?</h2>
      <p>(Where 5 = Perfect Understanding! and 0 = Lost)</p>
      <form>
        <label htmlFor="feeling">Understanding?</label>
        <input type="number" min={0} max={5}/>
        <button className='button' onClick={ routeToSupport }>NEXT</button>
      </form>
    
    </div>
  );
}

export default Understanding;